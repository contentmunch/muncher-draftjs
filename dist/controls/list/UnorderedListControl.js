"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnorderedListControl;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _UnorderedListIcon = _interopRequireDefault(require("../../icons/UnorderedListIcon"));

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _draftJs = require("draft-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UnorderedListControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var style = "unordered-list-item";

  var onClick = function onClick() {
    setEditorState(_draftJs.RichUtils.toggleBlockType(editorState, style));
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    title: "Unordered List",
    active: style === (0, _DraftUtilities.getBlockType)(editorState),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_UnorderedListIcon.default, null));
}