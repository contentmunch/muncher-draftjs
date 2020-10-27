import React from "react";
import { EditorState } from "draft-js";
export declare const MuncherToolBar: React.FC<MuncherToolbarProps>;
export interface MuncherToolbarProps {
    codeView: boolean;
    setCodeView: (codeView: boolean) => void;
    html?: string;
    editorState: EditorState;
    onChange: (e: any) => void;
    showStructure: boolean;
    setShowStructure: (showStructure: boolean) => void;
    focusEditor: () => void;
    saveHandler?: () => void;
    deleteHandler?: () => void;
}
