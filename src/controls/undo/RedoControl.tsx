import React from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorState} from "draft-js";
import {EditorStateProps} from "../../Muncher";

export const RedoControl: React.FC<EditorStateProps> = ({handleEditorStateChange, editorState}) => {
    return (
        <Button title="Redo"
                size="small"
                disabled={editorState.getRedoStack().size === 0}
                onMouseDown={() => {
                    handleEditorStateChange(EditorState.redo(editorState));
                }}>
            <Icon name="redo"/>
        </Button>
    );
}
