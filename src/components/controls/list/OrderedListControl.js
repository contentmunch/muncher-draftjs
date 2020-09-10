import React from "react";
import Button from "../../ui/button/Button";
import OrderedListIcon from "../../icons/OrderedListIcon";
import {RichUtils} from "draft-js";
import {getBlockType} from "../../utilities/draft/DraftUtilities";

export default function OrderedListControl(props) {
    const {editorState, setEditorState} = {...props};
    const style = "ordered-list-item";
    const onClick = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    };

    return (
        <Button title="Ordered List" active={style === getBlockType(editorState)} onClick={onClick}>
            <OrderedListIcon/>
        </Button>
    );
}
