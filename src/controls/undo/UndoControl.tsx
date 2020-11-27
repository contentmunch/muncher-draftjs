import React, {useContext} from "react";
import {EditorState} from 'draft-js';
import {Button, Icon} from "@contentmunch/muncher-ui";
import {MuncherContext} from "../../context/MuncherContext";

export const UndoControl: React.FC = () => {
    const {handleEditorStateChange, editorState} = useContext(MuncherContext);

    return (
        <Button
            title="Undo"
            size="small"
            disabled={editorState.getUndoStack().size === 0}
            onMouseDown={() => {
                handleEditorStateChange(EditorState.undo(editorState));
            }}>
            <Icon name="undo"/>
        </Button>
    );
}