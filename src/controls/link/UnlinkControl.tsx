import React, {useContext} from "react";
import {RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {MuncherContext} from "../../context/MuncherContext";

export const UnlinkControl: React.FC = () => {
    const {editorState, handleEditorStateChange, focusEditor} = useContext(MuncherContext);
    const selection = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const removeLink = (e: React.MouseEvent) => {
        e.preventDefault();
        handleEditorStateChange(RichUtils.toggleLink(editorState, selection, null));
        focusEditor();
    };
    return (
        <Button title="Remove a link" onMouseDown={removeLink} size="small"
                disabled={selectionEntity === null || selectionEntity.getType() !== 'LINK'}>
            <Icon name="unlink"/>
        </Button>
    );
}