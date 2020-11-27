import React from "react";
import {ContentBlock, EditorState} from "draft-js";
import {Image} from "../components/image/ImageInput";

export const MuncherContext = React.createContext({

    isCodeView: false,
    setIsCodeView: (codeView: boolean) => {
    },
    editorState: {} as EditorState,
    handleEditorStateChange: (editorState: EditorState) => {
    },
    focusEditor: () => {
    },
    imageBlockToEdit: {} as ImageBlock,
    setImageBlockToEdit: (imageBlock: ImageBlock) => {
    }
});

export interface ImageBlock extends Image {
    block: ContentBlock;
}