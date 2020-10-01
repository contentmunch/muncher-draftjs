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
import JSONTree from "react-json-tree";
import PropTypes from "prop-types";

export default function StructureView({editorState}) {
    const theme = {
        scheme: 'monokai', author: 'wimer hazenberg (http://www.monokai.nl)', base00: '#000000',
        base01: '#383830', base02: '#49483e', base03: '#75715e', base04: '#a59f85',
        base05: '#f8f8f2', base06: '#f5f4f1', base07: '#f9f8f5', base08: '#f92672',
        base09: '#fd971f', base0A: '#f4bf75', base0B: '#a6e22e', base0C: '#a1efe4',
        base0D: '#66d9ef', base0E: '#ae81ff', base0F: '#cc6633'
    };
    const shouldExpandNode = (keyName, data, level) => {
        return ['blockMap', 'root'].some(
            defaultVisibleNode => keyName[0] === defaultVisibleNode,
        );
    };
    return (
        <JSONTree
            shouldExpandNode={shouldExpandNode}
            theme={theme}
            data={editorState.getCurrentContent()}
        />
    );
}
StructureView.propTypes = {
    editorState: PropTypes.object.isRequired
};