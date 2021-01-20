import React, {useRef, useState} from "react";
import Draft, {CompositeDecorator, Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities";
import LinkDecorator from "./decorators/LinkDecorator";
import {getPlainText} from "./utilities/draft/DraftUtilities";
import {MuncherSimpleToolbar} from "./toolbar/MuncherSimpleToolbar";

export const MuncherSimple: React.FC<EditorProps> = (
    {
        content, changeHandler
    }) => {
    const editor = useRef<Editor>(null);

    const decorator = new CompositeDecorator([LinkDecorator()]);
    const [editorState, setEditorState] = useState(content ?
        EditorState.createWithContent(convertHtmlToContent(content), decorator) :
        EditorState.createEmpty(decorator));

    const handleEditorStateChange = (currentEditorState: EditorState) => {
        setEditorState(currentEditorState);
        if (changeHandler) {
            changeHandler(beautifyHtml(convertContentToHtml(currentEditorState)));
        }
    };

    const focusEditor = () => {
        //wait for focus, causes stack overflow, otherwise.
        setTimeout(() => {
            editor?.current?.focus();
        }, 100);

    };
    const getBlockStyle = (block: Draft.ContentBlock) => {

        switch (block.getType()) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            default:
                return block.getType();
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
        <div className="muncher">
            <div className="muncher-main">
                <MuncherSimpleToolbar editorState={editorState}
                                      handleEditorStateChange={handleEditorStateChange}
                                      focusEditor={focusEditor}/>
                {
                    <div className="muncher-editor" onClick={focusEditor}>
                        <Editor
                            editorState={editorState} onChange={handleEditorStateChange}
                            ref={editor}
                            blockStyleFn={getBlockStyle}
                            spellCheck={true}
                            placeholder="Tell a story..."
                            handleKeyCommand={handleKeyCommand}
                            keyBindingFn={mapKeyToEditorCommand}
                        />
                    </div>
                }

                <div className="muncher-footer">
                    <div
                        className="left"></div>
                    <div className="right">{"Characters: " + getPlainText(editorState).length}</div>
                </div>
            </div>
        </div>
    );
}

export interface EditorProps {
    content?: string;
    changeHandler?: (content: string) => void;
}

export interface EditorStateProps {
    editorState: EditorState;
    handleEditorStateChange: (editorstate: EditorState) => void;
}

export interface EditorStatePropsWithFocus extends EditorStateProps {
    focusEditor: () => void;
}