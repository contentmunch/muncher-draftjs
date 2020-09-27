import React from "react";
import Button from "../../ui/button/Button";
import {RichUtils} from "draft-js";
import PropTypes from "prop-types";

const INLINE_TYPES = [
    {label: 'Bold', style: 'BOLD', icon: <strong>B</strong>},
    {label: 'Italic', style: 'ITALIC', icon: <strong><em>I</em></strong>},
    {label: 'Underline', style: 'UNDERLINE', icon: <strong><u>U</u></strong>},
    {label: 'Monospace', style: 'CODE', icon: <strong>{'{'} {'}'}</strong>},
];
export default function InlineControl(props) {
    const {editorState, setEditorState} = {...props};
    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e, style) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };
    return (
        INLINE_TYPES.map(inlineType =>
            <Button key={inlineType.style} title={inlineType.label}
                    active={currentStyle.has(inlineType.style)}
                    onMouseDown={(e) => onMouseDown(e, inlineType.style)}>
                {inlineType.icon}
            </Button>
        )
    );
}
InlineControl.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired
};