import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import './assets/LinkControl.scss';
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";

export const LinkControl: React.FC<EditorStateProps> = ({editorState, setEditorState}) => {
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const selectionState = editorState.getSelection();

    const showLinkPrompt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const selectionEntity = entityFromSelection(editorState);
        let url = '';
        if (selectionEntity !== null && selectionEntity.type === 'LINK') {
            url = selectionEntity.getData().url;
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

        setEditorState(RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));
        hideLinkPrompt();
    };


    return (
        <DropdownButton title="Add or edit a link" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                        showContent={showContent} setShowContent={setShowContent}
                        disabled={selectionState.isCollapsed()} active={showContent}
                        element={<Icon name="link"/>} size="small">

            <div className="muncher-drop-link--content">
                <Input
                    name="query"
                    type="url"
                    onChange={event => setUrlValue(event.target.value)}
                    value={urlValue}
                    placeHolder="type the url"
                />
                <Button onMouseDown={confirmLink}>APPLY</Button>
            </div>
        </DropdownButton>
    );
}