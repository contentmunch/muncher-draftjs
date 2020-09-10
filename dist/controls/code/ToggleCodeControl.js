"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToggleCodeControl;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _EditIcon = _interopRequireDefault(require("../../icons/EditIcon"));

var _CodeIcon = _interopRequireDefault(require("../../icons/CodeIcon"));

var _draftJs = require("draft-js");

var _HtmlUtilities = require("../../utilities/html/HtmlUtilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ToggleCodeControl(props) {
  var _props = _objectSpread({}, props),
      codeView = _props.codeView,
      setCodeView = _props.setCodeView,
      html = _props.html,
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var toggleCodeView = function toggleCodeView() {
    if (codeView) {
      setEditorState(_draftJs.EditorState.push(editorState, (0, _HtmlUtilities.convertHtmlToContent)(html), 'change-block-data'));
    }

    setCodeView(!codeView);
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    title: codeView ? "Editor View" : "Html View",
    onClick: toggleCodeView
  }, codeView ? /*#__PURE__*/_react.default.createElement(_EditIcon.default, null) : /*#__PURE__*/_react.default.createElement(_CodeIcon.default, null));
}