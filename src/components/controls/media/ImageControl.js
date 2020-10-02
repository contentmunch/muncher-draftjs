import React, {useState} from "react";
import {AtomicBlockUtils, EditorState} from 'draft-js';
import PropTypes from "prop-types";
import './assets/MediaControl.scss'
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";

export default function ImageControl({editorState, setEditorState}) {
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');

    const showLinkPrompt = () => {
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
            'image',
            'IMMUTABLE',
            {src: urlValue},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        });

        // The third parameter here is a space string, not an empty string
        // If you set an empty string, you will get an error: Unknown DraftEntity key: null
        setEditorState(
            AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
        );
    };

    return (
        <DropdownButton title="Add or Edit Image" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                        showContent={showContent} setShowContent={setShowContent} active={showContent}
                        element={<Icon name="image"/>} size="small">

            <div className="muncher-drop-media--content">
                <Input
                    name="query"
                    type="url"
                    onChange={event => setUrlValue(event.target.value)}
                    value={urlValue}
                    placeHolder="type the url"
                />
                <Button onMouseDown={confirmLink}>Confirm</Button>
            </div>
        </DropdownButton>
    );
}
ImageControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};
