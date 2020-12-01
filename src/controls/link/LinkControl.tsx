import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import './assets/LinkControl.scss';
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";
import {EditorStatePropsWithFocus} from "../../Muncher";

export const LinkControl: React.FC<EditorStatePropsWithFocus> = ({editorState, handleEditorStateChange, focusEditor}) => {
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const selectionState = editorState.getSelection();
    const selectionEntity = entityFromSelection(editorState);
    const showLinkPrompt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        let url = '';
        if (isControlActive()) {
            url = selectionEntity?.getData().url;
        }
        setUrlValue(url);
        setShowContent(true);
    };
    const hideLinkPrompt = () => {
        setShowContent(false);
        setUrlValue('');
    };
    const confirmLink = (e: React.MouseEvent) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'LINK',
            'MUTABLE',
            {url: urlValue},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithEntity});

        handleEditorStateChange(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));
        focusEditor();
        hideLinkPrompt();
    };
    const isSelectionLink = () => {
        return !selectionState.isCollapsed() && selectionEntity !== null && selectionEntity.getType() === 'LINK'
    }
    const isControlActive = () => {
        return isSelectionLink() && !selectionEntity?.getData().docid;
    }

    return (
        <DropdownButton title="Add or edit a link" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                        showContent={showContent} setShowContent={setShowContent}
                        disabled={selectionState.isCollapsed()} active={isControlActive() || showContent}
                        element={<Icon name="external-link"/>} size="small">

            <div className="muncher-drop-link--content">
                <Input
                    name="query"
                    type="url"
                    onChange={event => setUrlValue(event.target.value)}
                    value={urlValue}
                    placeholder="type the url"
                />
                <Button onMouseDown={confirmLink}>APPLY</Button>
            </div>
        </DropdownButton>
    );
}
