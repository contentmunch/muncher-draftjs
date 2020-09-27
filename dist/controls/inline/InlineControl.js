"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InlineControl;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _draftJs = require("draft-js");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INLINE_TYPES = [{
  label: 'Bold',
  style: 'BOLD',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, "B")
}, {
  label: 'Italic',
  style: 'ITALIC',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("em", null, "I"))
}, {
  label: 'Underline',
  style: 'UNDERLINE',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("u", null, "U"))
}, {
  label: 'Monospace',
  style: 'CODE',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, '{', " ", '}')
}];

function InlineControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var currentStyle = editorState.getCurrentInlineStyle();

  var _onMouseDown = function onMouseDown(e, style) {
    e.preventDefault();
    setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, style));
  };

  return INLINE_TYPES.map(function (inlineType) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: inlineType.style,
      title: inlineType.label,
      active: currentStyle.has(inlineType.style),
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, inlineType.style);
      }
    }, inlineType.icon);
  });
}

InlineControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};