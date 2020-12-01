import React from "react";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {EditorState, Modifier} from "draft-js";
import {EditorStatePropsWithFocus} from "../../Muncher";
import {convertHtmlToContent} from "../../utilities/html/HtmlUtilities";


export const FragmentControl: React.FC<EditorStatePropsWithFocus> = ({handleEditorStateChange, focusEditor, editorState}) => {
    const html = "<h1>Lorem Ipsum</h1>\n" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ultrices blandit. " +
        "Maecenas vulputate diam risus, vel pellentesque nibh consequat ac. Morbi iaculis pharetra ultrices. " +
        "Donec eros risus, tincidunt quis sodales eget, luctus eget diam. Mauris rhoncus felis facilisis lectus blandit congue. " +
        "Vestibulum est tortor, ultricies in est eu, posuere efficitur diam. Nunc at vulputate metus, id eleifend risus. " +
        "Aenean consequat convallis nisl, ut elementum tellus dapibus vitae.</p>";
    const blockMap = convertHtmlToContent(html,"akui").getBlockMap()
    const handleMouseDown = () => {
        const contentState = Modifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(),
            blockMap);

        handleEditorStateChange(
            EditorState.set(editorState, {
                currentContent: contentState,
            })
        );
        focusEditor();

    };
    return (

        <Button
            size="small"
            title="Insert Fragment"
            onMouseDown={handleMouseDown}>
            <Icon name="copy"/>
        </Button>
    );
};