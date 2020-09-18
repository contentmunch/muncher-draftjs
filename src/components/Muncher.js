import React, {useEffect, useRef, useState} from "react";
import {CompositeDecorator, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import CodeView from "./view/code/CodeView";
import {beautifyHtml, convertContentToHtml, convertHtmlToContent} from "./utilities/html/HtmlUtilities";
import LinkDecorator from "./decorators/LinkDecorator";
import StructureView from "./view/code/StructureView";
import MuncherToolBar from "./toolbar/MuncherToolbar";
import {colorStyleMap} from "./utilities/draft/DraftUtilities";
import Editor, {composeDecorators} from "draft-js-plugins-editor";
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';

import createFocusPlugin from 'draft-js-focus-plugin';

import createResizeablePlugin from 'draft-js-resizeable-plugin';

import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const {AlignmentTool} = alignmentPlugin;

const composeDecorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
    blockDndPlugin.decorator,
    LinkDecorator
);
const imagePlugin = createImagePlugin({composeDecorator});

const plugins = [
    blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
    imagePlugin
];
export default function Muncher() {

    const intialHtml = "<h1 class=\"text-align--center\">This is heading</h1>\n" +
        "<p class=\"text-align--center\">This is <a href=\"http://localhost:3000/what\">paragraph</a></p>\n" +
        "<blockquote class=\"text-align--center\">this is it</blockquote>\n" +
        "<ol type=\"a\">\n" +
        "  <li class=\"text-align--center\">This is first</li>\n" +
        "</ol>\n" +
        "<img src='http://www.renaissancerentals.com/blog/wp-content/uploads/2020/03/Sarah-Baker-290x300.jpg'/>";
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
                                plugins={plugins}
                            />
                            <AlignmentTool/>
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

