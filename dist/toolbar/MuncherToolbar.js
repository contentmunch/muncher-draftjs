"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MuncherToolBar;

var _react = _interopRequireWildcard(require("react"));

var _LinkControl = _interopRequireDefault(require("../controls/link/LinkControl"));

var _UnlinkControl = _interopRequireDefault(require("../controls/link/UnlinkControl"));

var _ToggleCodeControl = _interopRequireDefault(require("../controls/code/ToggleCodeControl"));

var _UndoControl = _interopRequireDefault(require("../controls/undo/UndoControl"));

var _RedoControl = _interopRequireDefault(require("../controls/undo/RedoControl"));

var _BlockControl = _interopRequireDefault(require("../controls/block/BlockControl"));

var _InlineControl = _interopRequireDefault(require("../controls/inline/InlineControl"));

var _ColorControl = _interopRequireDefault(require("../controls/inline/ColorControl"));

var _ImageControl = _interopRequireDefault(require("../controls/media/ImageControl"));

var _YoutubeControl = _interopRequireDefault(require("../controls/media/YoutubeControl"));

var _AlignControl = _interopRequireDefault(require("../controls/align/AlignControl"));

var _ListControl = _interopRequireDefault(require("../controls/block/ListControl"));

var _SettingsControl = _interopRequireDefault(require("../controls/setting/SettingsControl"));

var _SettingsIcon = _interopRequireDefault(require("../icons/SettingsIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MuncherToolBar(props) {
  var _props = _objectSpread({}, props),
      codeView = _props.codeView,
      setCodeView = _props.setCodeView,
      html = _props.html,
      editorState = _props.editorState,
      onChange = _props.onChange,
      showStructure = _props.showStructure,
      setShowStructure = _props.setShowStructure,
      focusEditor = _props.focusEditor;

  var onChangeAndFocus = function onChangeAndFocus(currentEditorState) {
    onChange(currentEditorState);
    focusEditor();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__toolbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__toolbar--left"
  }, /*#__PURE__*/_react.default.createElement(_ToggleCodeControl.default, {
    codeView: codeView,
    setCodeView: setCodeView,
    html: html,
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_UndoControl.default, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement(_RedoControl.default, {
    editorState: editorState,
    setEditorState: onChange
  }), !codeView ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_ListControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_BlockControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_InlineControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_ColorControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_LinkControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_UnlinkControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_ImageControl.default, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement(_YoutubeControl.default, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_AlignControl.default, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher__separator"
  }, "|")) : ''), /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__toolbar--right"
  }, /*#__PURE__*/_react.default.createElement(_SettingsControl.default, {
    showStructure: showStructure,
    setShowStructure: setShowStructure,
    settingsIcon: /*#__PURE__*/_react.default.createElement(_SettingsIcon.default, null)
  })));
}