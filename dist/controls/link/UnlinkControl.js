"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnlinkControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _muncherUi = require("@contentmunch/muncher-ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnlinkControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;
  var selection = editorState.getSelection();
  var selectionEntity = (0, _DraftUtilities.entityFromSelection)(editorState);

  var removeLink = function removeLink(e) {
    e.preventDefault();
    console.log(selectionEntity);
    setEditorState(_draftJs.RichUtils.toggleLink(editorState, selection, null));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: "Remove a link",
    onMouseDown: removeLink,
    size: "small",
    disabled: selectionEntity === null || !selectionEntity.type === 'LINK'
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "unlink"
  }));
}

UnlinkControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};