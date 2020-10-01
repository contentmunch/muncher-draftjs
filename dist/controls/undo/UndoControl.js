"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UndoControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UndoControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick() {
    setEditorState(_draftJs.EditorState.undo(editorState));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: "Undo",
    size: "small",
    onClick: onClick,
    disabled: editorState.getUndoStack().size === 0
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "undo"
  }));
}

UndoControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};