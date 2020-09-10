import React from "react";
import Button from "../../ui/button/Button";
import AlignRightIcon from "../../icons/AlignRightIcon";

export default function AlignRightControl(props) {
    const {editorState, setEditorState} = {...props};
    return (
        <Button title="Alight Right">
            <AlignRightIcon/>
        </Button>
    );
}
