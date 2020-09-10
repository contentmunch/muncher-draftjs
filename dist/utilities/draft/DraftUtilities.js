"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorStyleMap = exports.COLORS = exports.getBlockAlignment = exports.getBlockType = exports.getBlock = exports.entityFromSelection = void 0;

var entityFromSelection = function entityFromSelection(editorState) {
  var selectionState = editorState.getSelection();

  if (!selectionState.isCollapsed()) {
    var anchorKey = selectionState.getAnchorKey();
    var currentContent = editorState.getCurrentContent();
    var currentContentBlock = currentContent.getBlockForKey(anchorKey);
    var start = selectionState.getStartOffset();
    var entityId = currentContentBlock.getEntityAt(start);

    if (entityId !== null) {
      return currentContent.getEntity(entityId);
    }
  }

  return null;
};

exports.entityFromSelection = entityFromSelection;

var getBlock = function getBlock(editorState) {
  var selection = editorState.getSelection();
  return editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
};

exports.getBlock = getBlock;

var getBlockType = function getBlockType(editorState) {
  return getBlock(editorState).getType();
};

exports.getBlockType = getBlockType;

var getBlockAlignment = function getBlockAlignment(editorState) {
  return getBlock(editorState).getData().get('textAlign');
};

exports.getBlockAlignment = getBlockAlignment;
var COLORS = [{
  label: 'Red',
  style: 'red'
}, {
  label: 'Orange',
  style: 'orange'
}, {
  label: 'Yellow',
  style: 'yellow'
}, {
  label: 'Green',
  style: 'green'
}, {
  label: 'Blue',
  style: 'blue'
}, {
  label: 'Indigo',
  style: 'indigo'
}, {
  label: 'Violet',
  style: 'violet'
}, {
  label: 'Black',
  style: 'black'
}, {
  label: 'Brown',
  style: 'brown'
}];
exports.COLORS = COLORS;
var colorStyleMap = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)'
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)'
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)'
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)'
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)'
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)'
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)'
  },
  black: {
    color: 'rgba(19, 41, 75, 1.0)'
  },
  brown: {
    color: 'rgba(168, 42, 42, 1.0)'
  }
};
exports.colorStyleMap = colorStyleMap;