import React, {useEffect, useRef, useState} from "react";
import Draft, {CompositeDecorator, ContentBlock, Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import {CodeView} from "./view/code/CodeView";
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities";
import LinkDecorator from "./decorators/LinkDecorator";
import {StructureView} from "./view/code/StructureView";
import {MuncherToolBar} from "./toolbar/MuncherToolbar";
import {colorStyleMap, getPlainText} from "./utilities/draft/DraftUtilities";
import {SettingsControl} from "./controls/setting/SettingsControl";
import {Icon} from "@contentmunch/muncher-ui";
import {MediaRenderer} from "./renderers/MediaRenderer";
import {ImageBlock, MuncherContext} from "./context/MuncherContext";

export const Muncher: React.FC<MuncherProps> = (
    {
        content, changeHandler,
        readOnly
    }) => {
    const [html, setHtml] = useState("");
    const [showStructure, setShowStructure] = useState(false);
    const [stripPastedStyles, setStripPastedStyles] = useState(false);
    const [spellCheck, setSpellCheck] = useState(true);
    const [characterCount, setCharacterCount] = useState(0);
    const [codeView, setCodeView] = useState(false);
    const [imageBlockToEdit, setImageBlockToEdit] = useState({} as ImageBlock);
    const editor = useRef<Editor>(null);

    const decorator = new CompositeDecorator([LinkDecorator()]);
    const [editorState, setEditorState] = useState(content ?
        EditorState.createWithContent(convertHtmlToContent(content), decorator) :
        EditorState.createEmpty(decorator));

    const setIsCodeView = (isCodeView: boolean) => {
        setCodeView(isCodeView);
        if (!isCodeView) {
            handleEditorStateChange(EditorState.push(editorState, convertHtmlToContent(html),
                'change-block-data'));
        }
    }

    const handleEditorStateChange = (currentEditorState: EditorState) => {
        const currentContent = getPlainText(currentEditorState);
        setCharacterCount(currentContent.length);
        const currentHtml = beautifyHtml(convertContentToHtml(currentEditorState));
        if (changeHandler && currentHtml !== html) changeHandler(currentHtml);
        setHtml(currentHtml);
        setEditorState(currentEditorState);
    };

    const focusEditor = () => {
        //wait for focus, causes stack overflow, otherwise.
        setTimeout(() => {
            editor?.current?.focus();
        }, 100);

    };
    useEffect(() => {

        setHtml(beautifyHtml(convertContentToHtml(editorState)));
        setCharacterCount(editorState.getCurrentContent().getPlainText('\u0001').length);
    }, [editorState]);

    const getBlockStyle = (block: Draft.ContentBlock) => {
        switch (block.getData().get('textAlign')) {
            case 'ALIGN_LEFT':
                return 'text-align--left';
            case 'ALIGN_CENTER':
                return 'text-align--center';
            case 'ALIGN_RIGHT':
                return 'text-align--right';
            case 'ALIGN_JUSTIFY':
                return 'text-align--justify';
            default:
                switch (block.getType()) {
                    case 'blockquote':
                        return 'RichEditor-blockquote';
                    default:
                        return block.getType();
                }
        }
    };
    const getBlockRenderer = (block: ContentBlock) => {
        if (block.getType() === 'atomic') {
            return {
                component: MediaRenderer,
                editable: false,
            };
        }
    };

    const handleKeyCommand: any = (command: any, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleEditorStateChange(newState);
            return true;
        }
        return false;
    };
    const mapKeyToEditorCommand: any = (e: any) => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4, /* maxDepth */);
            if (newEditorState !== editorState) {
                handleEditorStateChange(newEditorState);
            }
            return false;
        }
        return getDefaultKeyBinding(e);
    };
    return (
        <MuncherContext.Provider value={{
            isCodeView: codeView, setIsCodeView, editorState,
            handleEditorStateChange, focusEditor, imageBlockToEdit, setImageBlockToEdit
        }}>
            <div className="muncher">
                <div className="muncher-main">
                    <MuncherToolBar>
                        <SettingsControl showStructure={showStructure} setShowStructure={setShowStructure}
                                         stripPastedStyles={stripPastedStyles}
                                         setStripPastedStyles={setStripPastedStyles}
                                         spellCheck={spellCheck} setSpellCheck={setSpellCheck}
                        />

                    </MuncherToolBar>
                    {
                        codeView ?
                            <div className="muncher-code">
                                <CodeView html={html} setHtml={setHtml} readOnly={readOnly}/>
                            </div>
                            :
                            <div className="muncher-editor" onClick={() => {
                                if (Object.keys(imageBlockToEdit).length === 0) focusEditor();
                            }}>
                                <Editor
                                    editorState={editorState} onChange={handleEditorStateChange}
                                    ref={editor}
                                    blockStyleFn={getBlockStyle}
                                    blockRendererFn={getBlockRenderer}
                                    customStyleMap={colorStyleMap}
                                    spellCheck={spellCheck}
                                    stripPastedStyles={stripPastedStyles}
                                    readOnly={readOnly}
                                    placeholder="Tell a story..."
                                    handleKeyCommand={handleKeyCommand}
                                    keyBindingFn={mapKeyToEditorCommand}
                                />
                            </div>
                    }

                    <div className="muncher-footer">
                        <div className="left"><Icon name="muncher" weight={1}/> Muncher Editor</div>
                        <div className="right">Characters: {characterCount}</div>
                    </div>
                </div>

                {showStructure ?
                    <div className="muncher-structure">
                        <StructureView editorState={editorState}/>
                    </div>
                    : ""}
            </div>
        </MuncherContext.Provider>
    );
}

export interface MuncherProps {
    content?: string;
    changeHandler?: (content: string) => void;
    readOnly?: boolean;
}

export interface EditorStateProps {
    editorState: EditorState;
    setEditorState: (editorstate: EditorState) => void;
}