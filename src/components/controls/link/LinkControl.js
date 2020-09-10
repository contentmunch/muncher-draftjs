import React, {useState} from "react";
import {EditorState, RichUtils} from 'draft-js';
import LinkIcon from "../../icons/LinkIcon";
import '../../ui/button/assets/DropdownButton.scss';
import DropdownButton from "../../ui/button/DropdownButton";
import {entityFromSelection} from "../../utilities/draft/DraftUtilities";
import './LinkControl.scss';
import Button from "../../ui/button/Button";

export default function LinkControl(props) {
    const {editorState, setEditorState} = {...props};
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
        <div className="muncher__dropdown">
            <DropdownButton title="Add or edit a link" onClick={showLinkPrompt} onClose={hideLinkPrompt}
                            showContent={showContent}
                            setShowContent={setShowContent}
                            disabled={selectionState.isCollapsed()} icon={<LinkIcon/>}>
                <div className="link__content">
                    <input
                        onChange={event => setUrlValue(event.target.value)}
                        type="text"
                        value={urlValue}
                        placeholder="type the url"
                    />
                    <Button onClick={confirmLink}>APPLY</Button>
                </div>

            </DropdownButton>
        </div>
    );
}
