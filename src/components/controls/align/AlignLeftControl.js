import React from "react";
import {EditorState} from "draft-js";
import Button from "../../ui/button/Button";
import AlignLeftIcon from "../../icons/AlignLeftIcon";
import {getBlockAlignment} from "../../utilities/draft/DraftUtilities";

export default function AlignLeftControl(props) {
    const {editorState, setEditorState} = {...props};
    const blockAlignment = getBlockAlignment(editorState);
    const style = 'left';
    // {label: 'Align Left', style: 'ALIGN_LEFT'},
    // {label: 'Align Center', style: 'ALIGN_CENTER'},
    // {label: 'Align Right', style: 'ALIGN_RIGHT'},
    // {label: 'Align Justify', style: 'ALIGN_JUSTIFY'},
    const onClick=()=>{
        const selection = editorState.getSelection();

        const content = editorState.getCurrentContent();
        const blockKey = selection.getStartKey();
        const block = content.getBlockForKey(blockKey);
        const blockData = block.getData();
        let newBlockData;
        if (blockData.get('textAlign') === style) {
            newBlockData = blockData.remove('textAlign');
        } else {
            newBlockData = blockData.set('textAlign', style);
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
        <Button title="Alight Left" active={style === blockAlignment} onClick={onClick}>
            <AlignLeftIcon/>
        </Button>
    );
}
