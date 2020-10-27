import React from "react";
import 'codemirror/lib/codemirror.css';
import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";
import { EditorState } from "draft-js";
export declare const StructureView: React.FC<StructureViewProps>;
export interface StructureViewProps {
    editorState: EditorState;
}
