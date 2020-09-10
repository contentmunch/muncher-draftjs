"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StructureView;

var _react = _interopRequireDefault(require("react"));

require("codemirror/lib/codemirror.css");

require("codemirror/mode/htmlembedded/htmlembedded");

require("codemirror/addon/hint/show-hint");

require("codemirror/addon/hint/html-hint");

require("codemirror/addon/hint/show-hint.css");

require("codemirror/addon/edit/closebrackets");

require("codemirror/addon/edit/closetag");

require("codemirror/addon/fold/foldcode");

require("codemirror/addon/fold/foldgutter");

require("codemirror/addon/fold/brace-fold");

require("codemirror/addon/fold/comment-fold");

require("codemirror/addon/fold/foldgutter.css");

var _reactJsonTree = _interopRequireDefault(require("react-json-tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StructureView(props) {
  var editorState = props.editorState;
  var theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#000000',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
  };

  var shouldExpandNode = function shouldExpandNode(keyName, data, level) {
    return ['blockMap', 'root'].some(function (defaultVisibleNode) {
      return keyName[0] === defaultVisibleNode;
    });
  };

  return /*#__PURE__*/_react.default.createElement(_reactJsonTree.default, {
    shouldExpandNode: shouldExpandNode,
    theme: theme,
    data: editorState.getCurrentContent()
  });
}