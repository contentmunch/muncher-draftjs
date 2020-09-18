import React, {useEffect, useRef, useState} from "react";
import {Editor, EditorState, getDefaultKeyBinding, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
import BoldControl from "./controls/inline/BoldControl";

export default function MuncherTest() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editor = useRef(null);

    const focusEditor = () => {
        editor.current.focus();
    };
    useEffect(() => {
        focusEditor();
    }, []);

    const toggleInlineStyle = (inlineStyle) => {
        setEditorState(
            RichUtils.toggleInlineStyle(editorState, inlineStyle)
        );
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return true;
        }
        return false;
    };
    const mapKeyToEditorCommand = (e) => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4, /* maxDepth */);
            if (newEditorState !== editorState) {
                setEditorState(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    };

    const onChange = editorState => setEditorState(editorState);


    return (
        <div className="RichEditor-root">

            <BoldControl
                editorState={editorState}
                setEditorState={setEditorState}
            />

            <div className="RichEditor-editor" onClick={focusEditor}>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={onChange}

                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={mapKeyToEditorCommand}
                    spellCheck={true}
                    placeholder="Tell a story..."
                />
            </div>

        </div>
    );
}

