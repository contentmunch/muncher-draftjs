import React from "react";
import {EditorState} from 'draft-js';
import {Button, Icon} from "@contentmunch/muncher-ui";
import PropTypes from "prop-types";

export default function UndoControl({editorState, setEditorState}) {
    const onClick = () => {
        setEditorState(EditorState.undo(editorState));
    }
    return (
        <Button title="Undo" size="small" onClick={onClick} disabled={editorState.getUndoStack().size === 0}>
            <Icon name="undo"/>
        </Button>
    );
}
UndoControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};