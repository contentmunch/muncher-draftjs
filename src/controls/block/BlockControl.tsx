import React, {useState} from "react";
import {DropdownButton} from "@contentmunch/muncher-ui";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import './BlockControl.scss';
import {DraftBlockType, RichUtils} from "draft-js";
import {EditorStateProps} from "../../Muncher";


export const BlockControl: React.FC<EditorStateProps> = ({editorState, setEditorState}) => {
    const [showContent, setShowContent] = useState(false);

    const emptyBlockLabel = <strong>...</strong>;
    const currentBlockLabel = () => {
        const currentBlockType = getBlockType(editorState);
        const blockType = BLOCK_TYPES.find(({style}) => style === currentBlockType);
        return blockType === undefined ? emptyBlockLabel : blockType.label;
    };
    const onClick = (style: DraftBlockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
        setShowContent(false);
    };
    return (
        <DropdownButton
            element={<span>{currentBlockLabel()} <span className="muncher--small">&#9660;</span></span>}
            showContent={showContent}
            setShowContent={setShowContent}
            active={currentBlockLabel() !== emptyBlockLabel}
            size="small">

            <div className="block__content">
                {BLOCK_TYPES.map(blockType =>
                    <div className="block__content--item" key={blockType.label}
                         onMouseDown={() => onClick(blockType.style)}>{blockType.label}</div>
                )}
            </div>
        </DropdownButton>
    );
}
export const BLOCK_TYPES = [
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