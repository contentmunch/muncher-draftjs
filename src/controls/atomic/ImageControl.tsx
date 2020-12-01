import React, {useState} from "react";
import {AtomicBlockUtils, EditorState} from 'draft-js';
import './assets/MediaControl.scss'
import {DropdownButton, Icon} from "@contentmunch/muncher-ui";
import {Image, ImageInput} from "../../components/image/ImageInput";
import {EditorStateProps} from "../../Muncher";

export const ImageControl: React.FC<EditorStateProps> = ({editorState, handleEditorStateChange}) => {

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
        handleEditorStateChange(
            AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '),
        );
        handleShowContent(false);

    };

    const handleShowContent = (show: boolean) => {
        setShowContent(show);
    };

    return (
        <DropdownButton title="Add or Edit Image"
                        showContent={showContent}
                        setShowContent={handleShowContent}
                        active={showContent}
                        element={<Icon name="image"/>}
                        drop="middle" size="small">
            <div className="muncher-drop-media--content">
                <ImageInput handleImageUpdate={handleImageUpdate}/>
            </div>
        </DropdownButton>
    );
}
