import React from "react";
import Button from "../../ui/button/Button";
import RedoIcon from "../../icons/RedoIcon";
import SmileIcon from "../../icons/SmileIcon";

export default function SmileControl(props) {
    const {editorState, setEditorState} = {...props};
    return (
        <Button title="Smiley">
            <SmileIcon/>
        </Button>
    );
}
