import React, {useState} from "react";
import DropdownButton from "../../ui/button/DropdownButton";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import './BlockControl.scss';
import {RichUtils} from "draft-js";

export default function BlockControl(props) {
    const {editorState, setEditorState} = {...props};
    const [showContent, setShowContent] = useState(false);
    const BLOCK_TYPES = [
        {label: 'Paragraph', style: 'unstyled'},
        {label: 'Heading 1', style: 'header-one'},
        {label: 'Heading 2', style: 'header-two'},
        {label: 'Heading 3', style: 'header-three'},
        {label: 'Heading 4', style: 'header-four'},
        {label: 'Heading 5', style: 'header-five'},
        {label: 'Heading 6', style: 'header-six'},
        {label: 'Blockquote', style: 'blockquote'},
        {label: 'Code Block', style: 'code-block'},
    ];
    const emptyBlockLabel = <strong>...</strong>;
    const currentBlockLabel = () => {
        const currentBlockType = getBlockType(editorState);
        const blockType = BLOCK_TYPES.find(({style}) => style === currentBlockType);
        return blockType === undefined ? emptyBlockLabel : blockType.label;
    };
    const onClick = (style) => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
        setShowContent(false);
    };
    return (
        <DropdownButton
            showContent={showContent}
            setShowContent={setShowContent}
            active={currentBlockLabel() !== emptyBlockLabel}
            icon={<span>{currentBlockLabel()} <span className="muncher--small">&#9660;</span></span>}
        >
            <div className="block__content">
                {BLOCK_TYPES.map(blockType =>
                    <div className="block__content--item" key={blockType.label}
                         onClick={() => onClick(blockType.style)}>{blockType.label}</div>
                )}
            </div>
        </DropdownButton>

    );
}
