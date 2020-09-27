import React from "react";
import Button from "../../ui/button/Button";
import RedoIcon from "../../icons/RedoIcon";
import {EditorState} from "draft-js";
import PropTypes from "prop-types";

export default function RedoControl(props) {
    const {editorState, setEditorState} = {...props};
    const onClick = () => {
        setEditorState(EditorState.redo(editorState));
    }
    return (
        <Button title="Redo" onClick={onClick} disabled={editorState.getRedoStack().size === 0}>
            <RedoIcon/>
        </Button>
    );
}
RedoControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};
