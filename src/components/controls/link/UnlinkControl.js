import React from "react";
import {RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import {Button, Icon} from "@contentmunch/muncher-ui";
import PropTypes from "prop-types";

export default function UnlinkControl({editorState, setEditorState}) {
    const selection = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const removeLink = (e) => {
        e.preventDefault();
        console.log(selectionEntity);
        setEditorState(RichUtils.toggleLink(editorState, selection, null));
    };
    return (
        <Button title="Remove a link" onMouseDown={removeLink} size="small"
                disabled={selectionEntity === null || !selectionEntity.type === 'LINK'}>
            <Icon name="unlink"/>
        </Button>
    );
}
UnlinkControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};