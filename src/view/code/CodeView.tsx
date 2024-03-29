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
import {Controlled as CodeMirror} from "react-codemirror2-react-17";

export const CodeView: React.FC<CodeViewProps> = ({html, setHtml, readOnly}) => {
    return (
        <CodeMirror
            onBeforeChange={(editor, data, codeMirrorValue) =>
                setHtml(codeMirrorValue)
            }

            options={{
                mode: "htmlembedded",
                lineWrapping: true,
                smartIndent: true,
                lineNumbers: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                autoCloseTags: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                extraKeys: {
                    "Ctrl-Space": "autocomplete"
                },
                readOnly: readOnly ? readOnly : false

            }}
            value={html}

        />

    );
}

export interface CodeViewProps {
    html: string;
    setHtml: (html: string) => void;
    readOnly?: boolean;
}