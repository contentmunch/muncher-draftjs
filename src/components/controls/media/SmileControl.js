import React from "react";
import {EditorState, Modifier} from 'draft-js';
import Button from "../../ui/button/Button";
import SmileIcon from "../../icons/SmileIcon";


export default function SmileControl(props) {
    const {editorState, setEditorState} = {...props};
    const onSmileyClick = (e) => {
        e.preventDefault();
        let contentState = editorState.getCurrentContent();
        let selection = editorState.getSelection();
        contentState = contentState.createEntity('SMILEY', 'IMMUTABLE', {smiley: 'smile'});
        let entityKey = contentState.getLastCreatedEntityKey();
        let newContentState = Modifier.insertText(contentState, selection, ' ', null, entityKey);
        setEditorState(EditorState.push(editorState, newContentState, 'apply-entity'));
    };
    return (
        <Button title="Smiley" onMouseDown={onSmileyClick}>
            <SmileIcon/>
        </Button>
    );
}
