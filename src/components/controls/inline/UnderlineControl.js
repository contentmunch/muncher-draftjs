import React from "react";
import Button from "../../ui/button/Button";
import {RichUtils} from "draft-js";

export default function UnderlineControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "UNDERLINE";
    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };
    return (
        <Button title="Underline" active={currentStyle.has(style)} onMouseDown={onMouseDown}>
            <strong><u>U</u></strong>
        </Button>
    );
}
