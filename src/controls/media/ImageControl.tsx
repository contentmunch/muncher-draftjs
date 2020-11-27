import React, {useState} from "react";
import {AtomicBlockUtils, EditorState} from 'draft-js';
import './assets/MediaControl.scss'
import {DropdownButton, Icon} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";
import {Image, ImageInput} from "../../components/image/ImageInput";
import {getBlock} from "../../utilities/draft/DraftUtilities";

export const ImageControl: React.FC<EditorStateProps> = (
    {
        editorState, setEditorState
    }) => {
    const [showContent, setShowContent] = useState(false);

    const handleImageUpdate = (image: Image, e: React.MouseEvent) => {
        e.preventDefault();
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'IMAGE',
            'IMMUTABLE',
            {...image},
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
        <DropdownButton title="Add or Edit Image"
                        showContent={showContent || "atomic" === getBlock(editorState).getType()}
                        setShowContent={setShowContent}
                        active={showContent}
                        element={<Icon name="image"/>}
                        drop="middle" size="small">
            <div className="muncher-drop-media--content">
                <ImageInput handleImageUpdate={handleImageUpdate}/>
            </div>
        </DropdownButton>
    );
}