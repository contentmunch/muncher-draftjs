import React from "react";
import {EditorState} from 'draft-js';
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";

export const UndoControl: React.FC<EditorStateProps> = (
    {editorState, setEditorState}) => {
    const onClick = () => {
        setEditorState(EditorState.undo(editorState));
    }
    return (
        <Button title="Undo" size="small" onClick={onClick} disabled={editorState.getUndoStack().size === 0}>
            <Icon name="undo"/>
        </Button>
    );
}