import React from "react";
import {RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";

export const UnlinkControl: React.FC<EditorStateProps> = ({editorState, setEditorState}) => {
    const selection = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const removeLink = (e: React.MouseEvent) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleLink(editorState, selection, null));
    };
    return (
        <Button title="Remove a link" onMouseDown={removeLink} size="small"
                disabled={selectionEntity === null || selectionEntity.getType() !== 'LINK'}>
            <Icon name="unlink"/>
        </Button>
    );
}