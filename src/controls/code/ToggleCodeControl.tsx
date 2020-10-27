import React from "react";
import {EditorState} from "draft-js";
import {convertHtmlToContent} from "../../utilities/html/HtmlUtilities.js";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorStateProps} from "../../Muncher";

export const ToggleCodeControl: React.FC<ToggleCodeControlProps> = (
    {
        isCodeView, setIsCodeView,
        html, editorState, setEditorState
    }) => {
    const toggleCodeView = () => {
        if (isCodeView) {
            setEditorState(EditorState.push(editorState, convertHtmlToContent(html), 'change-block-data'));
        }
        if (setIsCodeView) {
            setIsCodeView(!isCodeView);
        }
    };
    return (
        <Button title={isCodeView ? "Editor View" : "Html View"} onMouseDown={toggleCodeView} size="small">
            <Icon name={isCodeView ? 'edit' : 'code'}/>
        </Button>
    );
}

export interface ToggleCodeControlProps extends EditorStateProps {
    isCodeView?: boolean;
    setIsCodeView?: (codeView: boolean) => void;
    html?: string;
}