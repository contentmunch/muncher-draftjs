import React, {Fragment} from "react";
import {EditorStateProps} from "../../Muncher";
import {getBlockAlignment} from "../../utilities/draft/DraftUtilities";
import {EditorState} from "draft-js";
import {Button, Icon} from "@contentmunch/muncher-ui";

export const AlignControl: React.FC<EditorStateProps> = ({editorState, setEditorState}) => {
    const blockAlignment = getBlockAlignment(editorState);

    const onMouseDown = (e: any, alignType: any) => {
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

        const newBlock: any = block.set('data', newBlockData);

        const newContent: any = content.merge({
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
        <Fragment>{
            ALIGN_TYPES.map(alignType =>
                <Button
                    key={alignType.style}
                    onMouseDown={(e) => onMouseDown(e, alignType)}
                    size="small"
                    title={alignType.label}
                    active={alignType.style === blockAlignment}
                >
                    <Icon iconString={alignType.iconName}/>
                </Button>
            )
        }
        </Fragment>
    );
};

const ALIGN_TYPES = [
    {label: 'Align Left', style: 'ALIGN_LEFT', iconName: 'align-left', className: 'text-align--left'},
    {label: 'Align Center', style: 'ALIGN_CENTER', iconName: 'align-center', className: 'text-align--center'},
    {label: 'Align Right', style: 'ALIGN_RIGHT', iconName: 'align-right', className: 'text-align--right'},
    {label: 'Align Justify', style: 'ALIGN_JUSTIFY', iconName: 'align-justify', className: 'text-align--justify'}
];