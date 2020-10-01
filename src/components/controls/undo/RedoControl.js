import React from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorState} from "draft-js";
import PropTypes from "prop-types";

export default function RedoControl({editorState, setEditorState}) {
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
RedoControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};
