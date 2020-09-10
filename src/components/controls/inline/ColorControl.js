import React, {useState} from "react";
import DropdownButton from "../../ui/button/DropdownButton";
import './ColorControl.scss';
import {EditorState, Modifier, RichUtils} from "draft-js";
import {COLORS, colorStyleMap} from "../../utilities/draft/DraftUtilities";

export default function ColorControl(props) {
    const {editorState, setEditorState} = {...props};
    const [showContent, setShowContent] = useState(false);
    const currentStyle = editorState.getCurrentInlineStyle();

    const colorSpan = (color) => <span key={color.label} title={color.label}
                                       className={"color__content--item " + color.style}/>;
    const emptyStyleDiv = colorSpan({label: 'Black', style: 'blue'});
    const currentStyleDiv = () => {
        const styleType = COLORS.find(({style}) => currentStyle.has(style));
        return styleType === undefined ? emptyStyleDiv : colorSpan(styleType);
    };
    const colorPicked = (style) => {
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );


        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(style)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                style
            );
        }
        setEditorState(nextEditorState);
        setShowContent(false);
    };
    return (
        <DropdownButton title="Font color"
                        showContent={showContent}
                        active={currentStyleDiv() !== emptyStyleDiv}
                        setShowContent={setShowContent}
                        icon={<span className="color__btn">{currentStyleDiv()} <span
                            className="muncher--small">&#9660;</span></span>}>
            <div className="color__content">
                {COLORS.map(color =>
                    <div key={color.label} title={color.label}
                         onClick={() => colorPicked(color.style)}
                         className={"color__content--item " + color.style}/>
                )}
            </div>
        </DropdownButton>

    );
}
