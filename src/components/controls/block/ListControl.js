import React from "react";
import {RichUtils} from "draft-js";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import PropTypes from "prop-types";
import {Button, Icon} from "@contentmunch/muncher-ui";

const LIST_TYPES = [
    {label: 'Ordered List', style: 'ordered-list-item', iconName: 'ordered-list'},
    {label: 'Unordered List', style: 'unordered-list-item', iconName: 'unordered-list'},
];
export default function ListControl({editorState, setEditorState}) {
    const onClick = (style) => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    };
    return (
        LIST_TYPES.map(listType =>
            <Button
                key={listType.style} title={listType.label}
                onMouseDown={() => onClick(listType.style)}
                size="small" active={listType.style === getBlockType(editorState)}
            >
                <Icon name={listType.iconName}/>
            </Button>
        )
    );
}
ListControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};
