import React from "react";
import Button from "../../ui/button/Button";
import EditIcon from "../../icons/EditIcon";
import CodeIcon from "../../icons/CodeIcon";
import {EditorState} from "draft-js";
import {convertHtmlToContent} from "../../utilities/html/HtmlUtilities";
import PropTypes from "prop-types";

export default function ToggleCodeControl(props) {
    const {codeView, setCodeView, html, editorState, setEditorState} = {...props};
    const toggleCodeView = () => {
        if (codeView) {
            setEditorState(EditorState.push(editorState, convertHtmlToContent(html), 'change-block-data'));
        }
        setCodeView(!codeView);
    };
    return (
        <Button title={codeView ? "Editor View" : "Html View"} onClick={toggleCodeView}>
            {codeView ? <EditIcon/> : <CodeIcon/>}
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