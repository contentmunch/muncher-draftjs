import React, {useEffect, useRef, useState} from "react";
import {CompositeDecorator, Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './Muncher.scss';
import CodeView from "./view/code/CodeView";
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities";
import LinkDecorator from "./decorators/LinkDecorator";
import StructureView from "./view/code/StructureView";
import MuncherToolBar from "./toolbar/MuncherToolbar";
import {colorStyleMap} from "./utilities/draft/DraftUtilities";

export default function Muncher() {

    const intialHtml = "<h1>This is heading</h1>\n<p>This is <a href=\"what\">paragraph</a></p>";
    const decorator = new CompositeDecorator([LinkDecorator()]);

    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertHtmlToContent(intialHtml), decorator));

    const [showStructure, setShowStructure] = useState(false);
    const [codeView, setCodeView] = useState(false);
    const [html, setHtml] = useState("");

    const onChange = (currentEditorState) => {

        setEditorState(currentEditorState);
        setHtml(beautifyHtml(convertContentToHtml(currentEditorState)));

    };

    const editor = useRef(null);

    const focusEditor = () => {
        //wait for focus, causes stack overflow, otherwise.
        setTimeout(() => {
            editor.current.focus();
        }, 100);


    };
    useEffect(() => {
        focusEditor();
    }, []);


    const getBlockStyle = (block) => {
        switch (block.getType()) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            default:
                return block.getType();
        }
    };
    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return true;
        }
        return false;
    };
    const mapKeyToEditorCommand = (e) => {
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
            <div className="muncher__main">
                <MuncherToolBar
                    editorState={editorState} onChange={onChange}
                    codeView={codeView} setCodeView={setCodeView} html={html}
                    showStructure={showStructure} setShowStructure={setShowStructure}
                    focusEditor={focusEditor}
                />
                {
                    codeView ?
                        <div className="muncher__code">
                            <CodeView html={html} setHtml={setHtml}/>
                        </div>
                        :
                        <div className="muncher__editor" onClick={focusEditor}>
                            <Editor
                                ref={editor}
                                editorState={editorState}
                                onChange={onChange}
                                blockStyleFn={getBlockStyle}
                                handleKeyCommand={handleKeyCommand}
                                keyBindingFn={mapKeyToEditorCommand}
                                customStyleMap={colorStyleMap}
                                spellCheck={true}
                                placeholder="Tell a story..."
                            />
                        </div>
                }

            </div>
            {showStructure ?
                <div className="muncher__structure">
                    <StructureView editorState={editorState}/>
                </div>
                : ""}
        </div>
    );
}

