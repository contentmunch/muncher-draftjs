"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListControl;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIST_TYPES = [{
  label: 'Ordered List',
  style: 'ordered-list-item',
  iconName: 'ordered-list'
}, {
  label: 'Unordered List',
  style: 'unordered-list-item',
  iconName: 'unordered-list'
}];

function ListControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick(style) {
    setEditorState(_draftJs.RichUtils.toggleBlockType(editorState, style));
  };

  return LIST_TYPES.map(function (listType) {
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: listType.style,
      title: listType.label,
      onMouseDown: function onMouseDown() {
        return onClick(listType.style);
      },
      size: "small",
      active: listType.style === (0, _DraftUtilities.getBlockType)(editorState)
    }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: listType.iconName
    }));
  });
}

ListControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};