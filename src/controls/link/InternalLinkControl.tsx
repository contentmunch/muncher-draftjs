import React, {useState} from "react";
import {EditorState, Modifier, RichUtils, SelectionState} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import './assets/LinkControl.scss';
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";
import {EditorStatePropsWithFocus} from "../../Muncher";

export const InternalLinkControl: React.FC<EditorStatePropsWithFocus> = ({editorState, handleEditorStateChange, focusEditor}) => {
    const [showContent, setShowContent] = useState(false);
    const [docid, setDocid] = useState('');
    const [text, setText] = useState('');
    const selectionState = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const showLinkPrompt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        let docid = '';
        if (isControlActive()) {
            docid = selectionEntity?.getData().docid;
        }
        setDocid(docid);
        setShowContent(true);
    };
    const hideLinkPrompt = () => {
        setShowContent(false);
        setDocid('');
        setText('');
    };
    const confirmLink = (e: React.MouseEvent) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();

        if (text !== "") {
            const contentStateWithText = Modifier.insertText(contentState, editorState.getSelection(), text)

            handleEditorStateChange(EditorState.set(editorState, {currentContent: contentStateWithText}));
            const contentStateWithEntity = contentStateWithText.createEntity(
                'LINK',
                'IMMUTABLE',
                {docid: docid, useTitle:true},
            );

            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            // create new selection with the inserted text
            const selection = editorState.getSelection();
            const anchorOffset = selection.getAnchorOffset();
            const newSelection = new SelectionState({
                anchorKey: selection.getAnchorKey(),
                anchorOffset,
                focusKey: selection.getAnchorKey(),
                focusOffset: anchorOffset + text.length,
            });
            // and aply link entity to the inserted text
            const newContentWithLink = Modifier.applyEntity(
                contentStateWithEntity,
                newSelection,
                entityKey,
            );
            // create new state with link text
            const withLinkText = EditorState.push(
                editorState,
                newContentWithLink,
                'insert-characters',
            );
            // now lets add cursor right after the inserted link
            const withProperCursor = EditorState.forceSelection(
                withLinkText,
                contentStateWithEntity.getSelectionAfter(),
            );
            handleEditorStateChange(withProperCursor);
        } else {
            const contentStateWithEntity = contentState.createEntity(
                'LINK',
                'MUTABLE',
                {docid: docid},
            );

            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

            const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity});

            handleEditorStateChange(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));

        }

        focusEditor();
        hideLinkPrompt();
    };
    const isSelectionLink = () => {
        return !selectionState.isCollapsed() && selectionEntity !== null && selectionEntity.getType() === 'LINK'
    }
    const isControlActive = () => {
        return isSelectionLink() && selectionEntity?.getData().docid;
    }
    return (
        <DropdownButton title="Add or edit internal link" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                        showContent={showContent} setShowContent={setShowContent}
                        active={isControlActive() || showContent}
                        disabled={isSelectionLink() && !selectionEntity?.getData().docid}
                        element={<Icon name="link"/>} size="small">

            <div className="muncher-drop-link--content">
                <Input
                    name="docid"
                    type="text"
                    onChange={event => setDocid(event.target.value)}
                    value={docid}
                    placeholder="type the docid"
                />
                {
                    selectionState.isCollapsed() ?
                        <Input
                            name="text"
                            type="text"
                            onChange={event => setText(event.target.value)}
                            value={text}
                            placeholder="type the text"
                        /> : ""
                }
                <Button onMouseDown={confirmLink}>APPLY</Button>
            </div>
        </DropdownButton>
    );
}
