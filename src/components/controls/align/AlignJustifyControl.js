import React from "react";
import Button from "../../ui/button/Button";
import AlignJustifyIcon from "../../icons/AlignJustifyIcon";

export default function AlignJustifyControl(props) {
    const {editorState, setEditorState} = {...props};
    return (
        <Button title="Alight Justify">
            <AlignJustifyIcon/>
        </Button>
    );
}
