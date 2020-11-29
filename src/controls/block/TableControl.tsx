import React from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {RichUtils} from "draft-js";
import {EditorStatePropsWithFocus} from "../../Muncher";


export const TableControl: React.FC<EditorStatePropsWithFocus> = ({handleEditorStateChange, focusEditor, editorState}) => {

    const handleMouseDown = () => {
        handleEditorStateChange(RichUtils.toggleBlockType(editorState, "col"));
        focusEditor();

    };
    return (

        <Button
            size="small"
            title="table"
            onMouseDown={handleMouseDown}>
            <Icon name="table"/>
        </Button>
    );
};