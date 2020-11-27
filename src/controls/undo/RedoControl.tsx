import React, {useContext} from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorState} from "draft-js";
import {MuncherContext} from "../../context/MuncherContext";

export const RedoControl: React.FC = () => {
    const {handleEditorStateChange, editorState} = useContext(MuncherContext);
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
