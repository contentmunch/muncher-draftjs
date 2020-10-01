"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleCodeControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _HtmlUtilities = require("../../utilities/html/HtmlUtilities");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToggleCodeControl(_ref) {
  var codeView = _ref.codeView,
      setCodeView = _ref.setCodeView,
      html = _ref.html,
      editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var toggleCodeView = function toggleCodeView() {
    if (codeView) {
      setEditorState(_draftJs.EditorState.push(editorState, (0, _HtmlUtilities.convertHtmlToContent)(html), 'change-block-data'));
    }

    setCodeView(!codeView);
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: codeView ? "Editor View" : "Html View",
    onMouseDown: toggleCodeView,
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: codeView ? 'edit' : 'code'
  }));
}

ToggleCodeControl.propTypes = {
  codeView: _propTypes.default.bool.isRequired,
  setCodeView: _propTypes.default.func.isRequired,
  html: _propTypes.default.string,
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};