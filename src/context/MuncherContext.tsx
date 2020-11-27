import React from "react";
import {EditorState} from "draft-js";

export const MuncherContext = React.createContext({

    codeView: false,
    setIsCodeView: (codeView: boolean) => {},
    editorState:{},
    handleEditorChange:(editorState:EditorState)=>{},
    focusEditor:()=>{}
});