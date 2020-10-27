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
export declare const CodeView: React.FC<CodeViewProps>;
export interface CodeViewProps {
    html: string;
    setHtml: (html: string) => void;
}
