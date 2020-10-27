import React, {Fragment} from "react";
import {RichUtils} from "draft-js";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";


export const ListControl: React.FC<EditorStateProps> = ({editorState, setEditorState}) => {
    const onClick = (style: any) => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    };
    return (
        <Fragment>
            {
                LIST_TYPES.map(listType =>
                    <Button
                        key={listType.style} title={listType.label}
                        onMouseDown={() => onClick(listType.style)}
                        size="small" active={listType.style === getBlockType(editorState)}
                    >
                        <Icon iconString={listType.iconName}/>
                    </Button>
                )}
        </Fragment>
    );
};
const LIST_TYPES = [
    {label: 'Ordered List', style: 'ordered-list-item', iconName: 'ordered-list'},
    {label: 'Unordered List', style: 'unordered-list-item', iconName: 'unordered-list'},
];