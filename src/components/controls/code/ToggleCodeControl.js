import React from "react";
import {EditorState} from "draft-js";
import {convertHtmlToContent} from "../../utilities/html/HtmlUtilities";
import PropTypes from "prop-types";
import {Button, Icon} from "@contentmunch/muncher-ui";

export default function ToggleCodeControl({codeView, setCodeView, html, editorState, setEditorState}) {
    const toggleCodeView = () => {
        if (codeView) {
            setEditorState(EditorState.push(editorState, convertHtmlToContent(html), 'change-block-data'));
        }
        setCodeView(!codeView);
    };
    return (
        <Button title={codeView ? "Editor View" : "Html View"} onMouseDown={toggleCodeView} size="small">
            <Icon name={codeView ? 'edit' : 'code'}/>
        </Button>
    );
}
ToggleCodeControl.propTypes = {
    codeView: PropTypes.bool.isRequired,
    setCodeView: PropTypes.func.isRequired,
    html: PropTypes.string,
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired,

};