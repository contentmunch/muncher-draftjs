import React from "react";
import Button from "../../ui/button/Button";
import {RichUtils} from "draft-js";

export default function ItalicControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "ITALIC";
    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };
    return (
        <Button title="Italic" active={currentStyle.has(style)} onMouseDown={onMouseDown}>
            <strong><em>I</em></strong>
        </Button>
    );
}
