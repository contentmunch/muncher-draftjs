"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnlinkControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _UnlinkIcon = _interopRequireDefault(require("../../icons/UnlinkIcon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UnlinkControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var selection = editorState.getSelection();
  var selectionEntity = (0, _DraftUtilities.entityFromSelection)(editorState);

  var removeLink = function removeLink(e) {
    e.preventDefault();
    console.log(selectionEntity);
    setEditorState(_draftJs.RichUtils.toggleLink(editorState, selection, null));
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    title: "Remove a link",
    onClick: removeLink,
    disabled: selectionEntity === null || !selectionEntity.type === 'LINK'
  }, /*#__PURE__*/_react.default.createElement(_UnlinkIcon.default, null));
}

UnlinkControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};