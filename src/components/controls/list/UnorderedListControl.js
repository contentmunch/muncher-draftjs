import React from "react";
import Button from "../../ui/button/Button";
import UnorderedListIcon from "../../icons/UnorderedListIcon";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import {RichUtils} from "draft-js";

export default function UnorderedListControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "unordered-list-item";
    const onClick = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    };

    return (
        <Button title="Unordered List" active={style === getBlockType(editorState)} onClick={onClick}>
            <UnorderedListIcon/>
        </Button>
    );
}
