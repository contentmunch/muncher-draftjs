import React, {useState} from "react";
import {AtomicBlockUtils, EditorState} from 'draft-js';
import {Button, DropdownButton, Icon, Input} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";

export const YoutubeControl: React.FC<EditorStateProps> = (
    {
        editorState, setEditorState
    }) => {
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');

    const showLinkPrompt = () => {
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
            'IFRAME',
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
        <DropdownButton title="Add or Edit Video" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                        showContent={showContent} setShowContent={setShowContent}
                        element={<Icon name="youtube"/>} size="small" active={showContent}>

            <div className="muncher-drop-media--content">
                <Input
                    name="query"
                    type="url"
                    onChange={event => setUrlValue(event.target.value)}
                    value={urlValue}
                    placeholder="type the url"
                />
                <Button onMouseDown={confirmLink}>Confirm</Button>
            </div>
        </DropdownButton>
    );
}