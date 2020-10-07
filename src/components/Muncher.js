import React, {useEffect, useRef, useState} from "react";
import {CompositeDecorator, Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import CodeView from "./view/code/CodeView";
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities";
import LinkDecorator from "./decorators/LinkDecorator";
import StructureView from "./view/code/StructureView";
import MuncherToolBar from "./toolbar/MuncherToolbar";
import {colorStyleMap} from "./utilities/draft/DraftUtilities";
import BlockRenderer from "./utilities/BlockRenderer";
import IframeDecorator from "./decorators/IframeDecorator";
import PropTypes from "prop-types";

export default function Muncher({content, html, setHtml, handleSave}) {

    const decorator = new CompositeDecorator([LinkDecorator(), IframeDecorator()]);

    const [editorState, setEditorState] = useState(content ? EditorState.createWithContent(convertHtmlToContent(content), decorator) : EditorState.createEmpty(decorator));

    const [showStructure, setShowStructure] = useState(false);
    const [codeView, setCodeView] = useState(false);


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
            <div className="muncher-main">
                <MuncherToolBar
                    editorState={editorState} onChange={onChange}
                    codeView={codeView} setCodeView={setCodeView} html={html}
                    showStructure={showStructure} setShowStructure={setShowStructure}
                    focusEditor={focusEditor}
                    save={handleSave}
                />
                {
                    codeView ?
                        <div className="muncher-code">
                            <CodeView html={html} setHtml={setHtml}/>
                        </div>
                        :
                        <div className="muncher-editor" onClick={focusEditor}>
                            <Editor
                                ref={editor}
                                editorState={editorState}
                                onChange={onChange}
                                blockStyleFn={getBlockStyle}
                                blockRendererFn={BlockRenderer}
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
                <div className="muncher-structure">
                    <StructureView editorState={editorState}/>
                </div>
                : ""}
        </div>
    );
}
Muncher.propTypes = {
    content: PropTypes.string,
    html: PropTypes.string,
    setHtml: PropTypes.func,
    handleSave: PropTypes.func
};