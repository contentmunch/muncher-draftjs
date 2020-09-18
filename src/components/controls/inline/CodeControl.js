import React from "react";
import Button from "../../ui/button/Button";
import {RichUtils} from "draft-js";

export default function CodeControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "CODE";
    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    return (
        <Button title="Monospace" active={currentStyle.has(style)} onMouseDown={onMouseDown}>
            <strong>{'{'} {'}'}</strong>
        </Button>
    );
}
