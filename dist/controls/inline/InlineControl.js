"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InlineControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function InlineControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;
  var currentStyle = editorState.getCurrentInlineStyle();

  var _onMouseDown = function onMouseDown(e, style) {
    e.preventDefault();
    setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, style));
  };

  return INLINE_TYPES.map(function (inlineType) {
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: inlineType.style,
      title: inlineType.label,
      active: currentStyle.has(inlineType.style),
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, inlineType.style);
      },
      size: "small"
    }, inlineType.icon);
  });
}

InlineControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};