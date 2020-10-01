"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlignControl;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALIGN_TYPES = [{
  label: 'Align Left',
  style: 'ALIGN_LEFT',
  iconName: 'align-left',
  className: 'text-align--left'
}, {
  label: 'Align Center',
  style: 'ALIGN_CENTER',
  iconName: 'align-center',
  className: 'text-align--center'
}, {
  label: 'Align Right',
  style: 'ALIGN_RIGHT',
  iconName: 'align-right',
  className: 'text-align--right'
}, {
  label: 'Align Justify',
  style: 'ALIGN_JUSTIFY',
  iconName: 'align-justify',
  className: 'text-align--justify'
}];

function AlignControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;
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
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: alignType.style,
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, alignType);
      },
      size: "small",
      title: alignType.label,
      active: alignType.style === blockAlignment
    }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: alignType.iconName
    }));
  });
}

AlignControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};