"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlignCenterControl;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _AlignCenterIcon = _interopRequireDefault(require("../../icons/AlignCenterIcon"));

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _draftJs = require("draft-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AlignCenterControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var blockAlignment = (0, _DraftUtilities.getBlockAlignment)(editorState);
  var style = 'ALIGN_CENTER'; // {label: 'Align Left', style: 'ALIGN_LEFT'},
  // {label: 'Align Center', style: 'ALIGN_CENTER'},
  // {label: 'Align Right', style: 'ALIGN_RIGHT'},
  // {label: 'Align Justify', style: 'ALIGN_JUSTIFY'},

  var onClick = function onClick() {
    var selection = editorState.getSelection();
    var content = editorState.getCurrentContent();
    var blockKey = selection.getStartKey();
    var block = content.getBlockForKey(blockKey);
    var blockData = block.getData();
    var newBlockData;

    if (blockData.get('textAlign') === style) {
      newBlockData = blockData.remove('textAlign');
    } else {
      newBlockData = blockData.set('textAlign', style);
    }

    var newBlock = block.set('data', newBlockData);
    var newContent = content.merge({
      blockMap: content.getBlockMap().set(blockKey, newBlock)
    });

    var newState = _draftJs.EditorState.push(editorState, newContent, 'change-block-data');

    setEditorState(newState);
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    title: "Alight Center",
    active: style === blockAlignment,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_AlignCenterIcon.default, null));
}