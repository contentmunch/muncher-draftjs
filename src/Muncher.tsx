import React, {useEffect, useRef, useState} from "react";
import Draft, {CompositeDecorator, Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import {CodeView} from "./view/code/CodeView";
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities.js";
import LinkDecorator from "./decorators/LinkDecorator";
import {StructureView} from "./view/code/StructureView";
import {MuncherToolBar} from "./toolbar/MuncherToolbar";
import {colorStyleMap} from "./utilities/draft/DraftUtilities";
import BlockRenderer from "./utilities/BlockRenderer";
import IframeDecorator from "./decorators/IframeDecorator";

export const Muncher: React.FC<MuncherProps> = (
    {
        content, html, setHtml,
        saveHandler, deleteHandler
    }) => {

    const decorator = new CompositeDecorator([LinkDecorator(), IframeDecorator()]);

    const [editorState, setEditorState] = useState(content ? EditorState.createWithContent(convertHtmlToContent(content), decorator) : EditorState.createEmpty(decorator));

    const [showStructure, setShowStructure] = useState(false);
    const [codeView, setCodeView] = useState(false);


    const onChange = (currentEditorState: EditorState) => {

        setEditorState(currentEditorState);
        if (setHtml) {
            setHtml(beautifyHtml(convertContentToHtml(currentEditorState)));
        }

    };

    const editor = useRef<Editor>(null);

    const focusEditor = () => {
        //wait for focus, causes stack overflow, otherwise.
        setTimeout(() => {
            if (editor.current) {
                editor?.current?.focus()
            }
        }, 100);

    };
    useEffect(() => {
        focusEditor();
    }, []);


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
    const handleKeyCommand: any = (command: any,
                                   editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return true;
        }
        return false;
    };
    const mapKeyToEditorCommand: any = (e: any) => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4, /* maxDepth */);
            if (newEditorState !== editorState) {
                onChange(newEditorState);
            }
            return false;
        }
        return getDefaultKeyBinding(e);
    };


    return (
        <div className="muncher">
            <div className="muncher-main">
                <MuncherToolBar
                    editorState={editorState} onChange={onChange}
                    codeView={codeView} setCodeView={setCodeView} html={html}
                    showStructure={showStructure} setShowStructure={setShowStructure}
                    focusEditor={focusEditor}
                    saveHandler={saveHandler}
                    deleteHandler={deleteHandler}
                />
                {
                    codeView ?
                        <div className="muncher-code">
                            <CodeView html={html} setHtml={setHtml}/>
                        </div>
                        :
                        <div className="muncher-editor" onClick={focusEditor}>
                            <Editor
                                editorState={editorState} onChange={onChange}
                                ref={editor}
                                blockStyleFn={getBlockStyle}
                                blockRendererFn={BlockRenderer}
                                customStyleMap={colorStyleMap}
                                spellCheck={true}
                                placeholder="Tell a story..."
                                handleKeyCommand={handleKeyCommand}
                                keyBindingFn={mapKeyToEditorCommand}
                            />

                        </div>
                }

            </div>
            {showStructure ?
                <div className="muncher-structure">
                    <StructureView editorState={editorState}/>
                </div>
                : ""}
        </div>
    );
}

export interface MuncherProps {
    content?: string;
    saveHandler?: () => void;
    deleteHandler?: () => void;
    html: string;
    setHtml: (html: string) => void;
}

export interface EditorStateProps {
    editorState: EditorState;
    setEditorState: (editorstate: EditorState) => void;
}