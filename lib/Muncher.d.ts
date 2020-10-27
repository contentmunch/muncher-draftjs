import React from "react";
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/Muncher.scss';
export declare const Muncher: React.FC<MuncherProps>;
export interface MuncherProps {
    content?: string;
    saveHandler?: () => void;
    deleteHandler?: () => void;
    html: string;
    setHtml: (html: string) => void;
}
export interface EditorStateProps {
    editorState: EditorState;
    setEditorState: (editorstate: EditorState) => void;
}
