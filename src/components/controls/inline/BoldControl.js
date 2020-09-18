import React from "react";
import Button from "../../ui/button/Button";
import {RichUtils} from "draft-js";

export default function BoldControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "BOLD";
    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    return (
        <Button title="Bold" active={currentStyle.has(style)} onMouseDown={onMouseDown}>
            <strong>B</strong>
        </Button>
    );
}
