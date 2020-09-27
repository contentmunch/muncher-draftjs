import React from "react";
import Button from "../../ui/button/Button";
import OrderedListIcon from "../../icons/OrderedListIcon";
import {RichUtils} from "draft-js";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import UnorderedListIcon from "../../icons/UnorderedListIcon";
import PropTypes from "prop-types";

const LIST_TYPES = [
    {label: 'Ordered List', style: 'ordered-list-item', icon: <OrderedListIcon/>},
    {label: 'Unordered List', style: 'unordered-list-item', icon: <UnorderedListIcon/>},
];
export default function ListControl(props) {

    const {editorState, setEditorState} = {...props};
    const onClick = (style) => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    };
    return (
        LIST_TYPES.map(listType =>
            <Button key={listType.style} title={listType.label}
                    active={listType.style === getBlockType(editorState)}
                    onClick={() => onClick(listType.style)}>
                {listType.icon}
            </Button>
        )
    );
}
ListControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};
