import React from "react";
import Button from "../../ui/button/Button";
import AlignCenterIcon from "../../icons/AlignCenterIcon";
import {getBlockAlignment} from "../../utilities/draft/DraftUtilities";
import {EditorState} from "draft-js";
import AlignRightIcon from "../../icons/AlignRightIcon";
import AlignJustifyIcon from "../../icons/AlignJustifyIcon";
import AlignLeftIcon from "../../icons/AlignLeftIcon";

const ALIGN_TYPES = [
    {label: 'Align Left', style: 'ALIGN_LEFT', icon: <AlignLeftIcon/>, className: 'text-align--left'},
    {label: 'Align Center', style: 'ALIGN_CENTER', icon: <AlignCenterIcon/>, className: 'text-align--center'},
    {label: 'Align Right', style: 'ALIGN_RIGHT', icon: <AlignRightIcon/>, className: 'text-align--right'},
    {label: 'Align Justify', style: 'ALIGN_JUSTIFY', icon: <AlignJustifyIcon/>, className: 'text-align--justify'}
];
export default function AlignControl(props) {
    const {editorState, setEditorState} = {...props};
    const blockAlignment = getBlockAlignment(editorState);

    const onMouseDown = (e, alignType) => {
        e.preventDefault();
        const selection = editorState.getSelection();
        const content = editorState.getCurrentContent();
        const blockKey = selection.getStartKey();
        const block = content.getBlockForKey(blockKey);
        const blockData = block.getData();

        let newBlockData;
        if (blockData.get('textAlign') === alignType.style) {
            newBlockData = blockData.remove('textAlign');
        } else {
            newBlockData = blockData.set('textAlign', alignType.style);
        }

        const newBlock = block.set('data', newBlockData);

        const newContent = content.merge({
            blockMap: content.getBlockMap().set(blockKey, newBlock),
        });
        const newState = EditorState.push(
            editorState,
            newContent,
            'change-block-data'
        );
        setEditorState(newState);
    };
    return (
        ALIGN_TYPES.map(alignType =>
            <Button key={alignType.style} title={alignType.label} active={alignType.style === blockAlignment}
                    onMouseDown={(e) => onMouseDown(e, alignType)}>
                {alignType.icon}
            </Button>
        )
    );
}
