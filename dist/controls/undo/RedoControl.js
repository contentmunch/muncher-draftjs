"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RedoControl;

var _react = _interopRequireDefault(require("react"));

var _muncherUi = require("@contentmunch/muncher-ui");

var _draftJs = require("draft-js");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RedoControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick() {
    setEditorState(_draftJs.EditorState.redo(editorState));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: "Redo",
    size: "small",
    onMouseDown: onClick,
    disabled: editorState.getRedoStack().size === 0
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "redo"
  }));
}

RedoControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};