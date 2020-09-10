import React from "react";
import {EditorState} from 'draft-js';
import Button from "../../ui/button/Button";
import UndoIcon from "../../icons/UndoIcon";

export default function UndoControl(props) {
    const {editorState, setEditorState} = {...props};
    const onClick = () => {
        setEditorState(EditorState.undo(editorState));
    }
    return (
        <Button title="Undo" onClick={onClick} disabled={editorState.getUndoStack().size === 0}>
            <UndoIcon/>
        </Button>
    );
}
