import React from "react";
import {RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import Button from "../../ui/button/Button";
import UnlinkIcon from "../../icons/UnlinkIcon";
export default function UnlinkControl(props) {
    const {editorState, setEditorState} = {...props};
    const selection = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const removeLink = (e) => {
        e.preventDefault();
        console.log(selectionEntity);
        setEditorState(RichUtils.toggleLink(editorState, selection, null));
    };
    return (
        <Button title="Remove a link" onClick={removeLink} disabled={selectionEntity === null || !selectionEntity.type === 'LINK'}>
            <UnlinkIcon/>
        </Button>
    );
}
