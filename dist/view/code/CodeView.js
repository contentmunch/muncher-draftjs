"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CodeView;

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

var _reactCodemirror = require("react-codemirror2");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeView(props) {
  var html = props.html,
      setHtml = props.setHtml;
  return /*#__PURE__*/_react.default.createElement(_reactCodemirror.Controlled, {
    onBeforeChange: function onBeforeChange(editor, data, codeMirrorValue) {
      return setHtml(codeMirrorValue);
    },
    options: {
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
      }
    },
    value: html
  });
}

CodeView.propTypes = {
  html: _propTypes.default.string,
  setHtml: _propTypes.default.func
};