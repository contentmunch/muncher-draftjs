import React from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorState} from "draft-js";
import {EditorStateProps} from "../../Muncher";

export const RedoControl: React.FC<EditorStateProps> = (
    {editorState, setEditorState}) => {
    const onClick = () => {
        setEditorState(EditorState.redo(editorState));
    }
    return (
        <Button title="Redo" size="small" onMouseDown={onClick}
                disabled={editorState.getRedoStack().size === 0}>
            <Icon name="redo"/>
        </Button>
    );
}
