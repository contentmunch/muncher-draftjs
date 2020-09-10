import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import LinkIcon from "../../icons/LinkIcon";
import '../../ui/button/assets/DropdownButton.scss';
import DropdownButton from "../../ui/button/DropdownButton";
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import ImageIcon from "../../icons/ImageIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";

export default function YoutubeControl(props) {
    const {editorState, setEditorState} = {...props};
    const [showContent, setShowContent] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const selectionState = editorState.getSelection();

    const showLinkPrompt = () => {

        setShowContent(true);
    };
    const hideLinkPrompt = () => {
        setShowContent(false);
        setUrlValue('');
    };
    const confirmLink = () => {

        hideLinkPrompt();
    };


    return (
        <div className="muncher__dropdown">
            <DropdownButton title="Add or Edit Image" onClick={showLinkPrompt} onClose={hideLinkPrompt} showContent={showContent}
                            setShowContent={setShowContent}
                            icon={<YoutubeIcon/>}>
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
