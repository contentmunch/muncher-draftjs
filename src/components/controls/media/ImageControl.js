import React, {useState} from "react";
import {AtomicBlockUtils, EditorState} from 'draft-js';
import '../../ui/button/assets/DropdownButton.scss';
import DropdownButton from "../../ui/button/DropdownButton";
import ImageIcon from "../../icons/ImageIcon";

export default function ImageControl(props) {
    const {editorState, setEditorState} = {...props};
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
        <div className="muncher__dropdown">
            <DropdownButton title="Add or Edit Image" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                            showContent={showContent}
                            setShowContent={setShowContent}
                            icon={<ImageIcon/>}>
                <input
                    onChange={event => setUrlValue(event.target.value)}
                    type="text"
                    value={urlValue}
                />
                <button onMouseDown={confirmLink}>Confirm</button>
            </DropdownButton>
        </div>
    );
}
