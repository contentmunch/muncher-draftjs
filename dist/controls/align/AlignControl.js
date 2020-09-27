"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlignControl;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../ui/button/Button"));

var _AlignCenterIcon = _interopRequireDefault(require("../../icons/AlignCenterIcon"));

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _draftJs = require("draft-js");

var _AlignRightIcon = _interopRequireDefault(require("../../icons/AlignRightIcon"));

var _AlignJustifyIcon = _interopRequireDefault(require("../../icons/AlignJustifyIcon"));

var _AlignLeftIcon = _interopRequireDefault(require("../../icons/AlignLeftIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ALIGN_TYPES = [{
  label: 'Align Left',
  style: 'ALIGN_LEFT',
  icon: /*#__PURE__*/_react.default.createElement(_AlignLeftIcon.default, null),
  className: 'text-align--left'
}, {
  label: 'Align Center',
  style: 'ALIGN_CENTER',
  icon: /*#__PURE__*/_react.default.createElement(_AlignCenterIcon.default, null),
  className: 'text-align--center'
}, {
  label: 'Align Right',
  style: 'ALIGN_RIGHT',
  icon: /*#__PURE__*/_react.default.createElement(_AlignRightIcon.default, null),
  className: 'text-align--right'
}, {
  label: 'Align Justify',
  style: 'ALIGN_JUSTIFY',
  icon: /*#__PURE__*/_react.default.createElement(_AlignJustifyIcon.default, null),
  className: 'text-align--justify'
}];

function AlignControl(props) {
  var _props = _objectSpread({}, props),
      editorState = _props.editorState,
      setEditorState = _props.setEditorState;

  var blockAlignment = (0, _DraftUtilities.getBlockAlignment)(editorState);

  var _onMouseDown = function onMouseDown(e, alignType) {
    e.preventDefault();
    var selection = editorState.getSelection();
    var content = editorState.getCurrentContent();
    var blockKey = selection.getStartKey();
    var block = content.getBlockForKey(blockKey);
    var blockData = block.getData();
    var newBlockData;

    if (blockData.get('textAlign') === alignType.style) {
      newBlockData = blockData.remove('textAlign');
    } else {
      newBlockData = blockData.set('textAlign', alignType.style);
    }

    var newBlock = block.set('data', newBlockData);
    var newContent = content.merge({
      blockMap: content.getBlockMap().set(blockKey, newBlock)
    });

    var newState = _draftJs.EditorState.push(editorState, newContent, 'change-block-data');

    setEditorState(newState);
  };

  return ALIGN_TYPES.map(function (alignType) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: alignType.style,
      title: alignType.label,
      active: alignType.style === blockAlignment,
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, alignType);
      }
    }, alignType.icon);
  });
}

AlignControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};