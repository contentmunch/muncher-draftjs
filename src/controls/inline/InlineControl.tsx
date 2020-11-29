import React, {Fragment} from "react";
import {RichUtils} from "draft-js";
import {Button} from "@contentmunch/muncher-ui";
import {EditorStatePropsWithFocus} from "../../Muncher";


export const InlineControl: React.FC<EditorStatePropsWithFocus> = ({editorState, handleEditorStateChange, focusEditor}) => {

    const currentStyle = editorState.getCurrentInlineStyle();
    const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>, style: string) => {
        e.preventDefault();
        handleEditorStateChange(RichUtils.toggleInlineStyle(editorState, style));
        focusEditor();
    };
    return (
        <Fragment>
            {
                INLINE_TYPES.map(inlineType =>
                    <Button
                        key={inlineType.style}
                        title={inlineType.label}
                        active={currentStyle.has(inlineType.style)}
                        onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => onMouseDown(e, inlineType.style)}
                        size="small"
                    >
                        {inlineType.icon}
                    </Button>
                )
            }
        </Fragment>
    );
}
export const INLINE_TYPES = [
    {label: 'Bold', style: 'BOLD', icon: <strong>B</strong>},
    {label: 'Italic', style: 'ITALIC', icon: <strong><em>I</em></strong>},
    {label: 'Underline', style: 'UNDERLINE', icon: <strong><u>U</u></strong>},
    {label: 'Monospace', style: 'CODE', icon: <strong>{'{'} {'}'}</strong>},
];