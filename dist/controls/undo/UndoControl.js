"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UndoControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _UndoIcon = _interopRequireDefault(require("../../icons/UndoIcon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UndoControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var onClick = function onClick() {
    setEditorState(_draftJs.EditorState.undo(editorState));
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    title: "Undo",
    onClick: onClick,
    disabled: editorState.getUndoStack().size === 0
  }, /*#__PURE__*/_react.default.createElement(_UndoIcon.default, null));
}

UndoControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};