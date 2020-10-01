import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import './assets/LinkControl.scss';
import PropTypes from "prop-types";
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";

export default function LinkControl({editorState, setEditorState}) {
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const selectionState = editorState.getSelection();

    const showLinkPrompt = (e) => {
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
    const confirmLink = (e) => {
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
                        disabled={selectionState.isCollapsed()}
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
LinkControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};