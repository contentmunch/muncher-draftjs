"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AlignControl = function AlignControl(_ref) {
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

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, ALIGN_TYPES.map(function (alignType) {
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: alignType.style,
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, alignType);
      },
      size: "small",
      title: alignType.label,
      active: alignType.style === blockAlignment
    }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      iconString: alignType.iconName
    }));
  }));
};

exports.AlignControl = AlignControl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9hbGlnbi9BbGlnbkNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIkFsaWduQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJibG9ja0FsaWdubWVudCIsIm9uTW91c2VEb3duIiwiZSIsImFsaWduVHlwZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiY29udGVudCIsImdldEN1cnJlbnRDb250ZW50IiwiYmxvY2tLZXkiLCJnZXRTdGFydEtleSIsImJsb2NrIiwiZ2V0QmxvY2tGb3JLZXkiLCJibG9ja0RhdGEiLCJnZXREYXRhIiwibmV3QmxvY2tEYXRhIiwiZ2V0Iiwic3R5bGUiLCJyZW1vdmUiLCJzZXQiLCJuZXdCbG9jayIsIm5ld0NvbnRlbnQiLCJtZXJnZSIsImJsb2NrTWFwIiwiZ2V0QmxvY2tNYXAiLCJuZXdTdGF0ZSIsIkVkaXRvclN0YXRlIiwicHVzaCIsIkFMSUdOX1RZUEVTIiwibWFwIiwibGFiZWwiLCJpY29uTmFtZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLFlBQXdDLEdBQUcsU0FBM0NBLFlBQTJDLE9BQW1DO0FBQUEsTUFBakNDLFdBQWlDLFFBQWpDQSxXQUFpQztBQUFBLE1BQXBCQyxjQUFvQixRQUFwQkEsY0FBb0I7QUFDdkYsTUFBTUMsY0FBYyxHQUFHLHVDQUFrQkYsV0FBbEIsQ0FBdkI7O0FBRUEsTUFBTUcsWUFBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFTQyxTQUFULEVBQTRCO0FBQzVDRCxJQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQSxRQUFNQyxTQUFTLEdBQUdQLFdBQVcsQ0FBQ1EsWUFBWixFQUFsQjtBQUNBLFFBQU1DLE9BQU8sR0FBR1QsV0FBVyxDQUFDVSxpQkFBWixFQUFoQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0osU0FBUyxDQUFDSyxXQUFWLEVBQWpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSixPQUFPLENBQUNLLGNBQVIsQ0FBdUJILFFBQXZCLENBQWQ7QUFDQSxRQUFNSSxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixFQUFsQjtBQUVBLFFBQUlDLFlBQUo7O0FBQ0EsUUFBSUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsV0FBZCxNQUErQmIsU0FBUyxDQUFDYyxLQUE3QyxFQUFvRDtBQUNoREYsTUFBQUEsWUFBWSxHQUFHRixTQUFTLENBQUNLLE1BQVYsQ0FBaUIsV0FBakIsQ0FBZjtBQUNILEtBRkQsTUFFTztBQUNISCxNQUFBQSxZQUFZLEdBQUdGLFNBQVMsQ0FBQ00sR0FBVixDQUFjLFdBQWQsRUFBMkJoQixTQUFTLENBQUNjLEtBQXJDLENBQWY7QUFDSDs7QUFFRCxRQUFNRyxRQUFhLEdBQUdULEtBQUssQ0FBQ1EsR0FBTixDQUFVLE1BQVYsRUFBa0JKLFlBQWxCLENBQXRCO0FBRUEsUUFBTU0sVUFBZSxHQUFHZCxPQUFPLENBQUNlLEtBQVIsQ0FBYztBQUNsQ0MsTUFBQUEsUUFBUSxFQUFFaEIsT0FBTyxDQUFDaUIsV0FBUixHQUFzQkwsR0FBdEIsQ0FBMEJWLFFBQTFCLEVBQW9DVyxRQUFwQztBQUR3QixLQUFkLENBQXhCOztBQUdBLFFBQU1LLFFBQVEsR0FBR0MscUJBQVlDLElBQVosQ0FDYjdCLFdBRGEsRUFFYnVCLFVBRmEsRUFHYixtQkFIYSxDQUFqQjs7QUFLQXRCLElBQUFBLGNBQWMsQ0FBQzBCLFFBQUQsQ0FBZDtBQUNILEdBMUJEOztBQTJCQSxzQkFDSSw2QkFBQyxlQUFELFFBQ0lHLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFBMUIsU0FBUztBQUFBLHdCQUNyQiw2QkFBQyxpQkFBRDtBQUNJLE1BQUEsR0FBRyxFQUFFQSxTQUFTLENBQUNjLEtBRG5CO0FBRUksTUFBQSxXQUFXLEVBQUUscUJBQUNmLENBQUQ7QUFBQSxlQUFPRCxZQUFXLENBQUNDLENBQUQsRUFBSUMsU0FBSixDQUFsQjtBQUFBLE9BRmpCO0FBR0ksTUFBQSxJQUFJLEVBQUMsT0FIVDtBQUlJLE1BQUEsS0FBSyxFQUFFQSxTQUFTLENBQUMyQixLQUpyQjtBQUtJLE1BQUEsTUFBTSxFQUFFM0IsU0FBUyxDQUFDYyxLQUFWLEtBQW9CakI7QUFMaEMsb0JBT0ksNkJBQUMsZUFBRDtBQUFNLE1BQUEsVUFBVSxFQUFFRyxTQUFTLENBQUM0QjtBQUE1QixNQVBKLENBRHFCO0FBQUEsR0FBekIsQ0FESixDQURKO0FBZ0JILENBOUNNOzs7QUFnRFAsSUFBTUgsV0FBVyxHQUFHLENBQ2hCO0FBQUNFLEVBQUFBLEtBQUssRUFBRSxZQUFSO0FBQXNCYixFQUFBQSxLQUFLLEVBQUUsWUFBN0I7QUFBMkNjLEVBQUFBLFFBQVEsRUFBRSxZQUFyRDtBQUFtRUMsRUFBQUEsU0FBUyxFQUFFO0FBQTlFLENBRGdCLEVBRWhCO0FBQUNGLEVBQUFBLEtBQUssRUFBRSxjQUFSO0FBQXdCYixFQUFBQSxLQUFLLEVBQUUsY0FBL0I7QUFBK0NjLEVBQUFBLFFBQVEsRUFBRSxjQUF6RDtBQUF5RUMsRUFBQUEsU0FBUyxFQUFFO0FBQXBGLENBRmdCLEVBR2hCO0FBQUNGLEVBQUFBLEtBQUssRUFBRSxhQUFSO0FBQXVCYixFQUFBQSxLQUFLLEVBQUUsYUFBOUI7QUFBNkNjLEVBQUFBLFFBQVEsRUFBRSxhQUF2RDtBQUFzRUMsRUFBQUEsU0FBUyxFQUFFO0FBQWpGLENBSGdCLEVBSWhCO0FBQUNGLEVBQUFBLEtBQUssRUFBRSxlQUFSO0FBQXlCYixFQUFBQSxLQUFLLEVBQUUsZUFBaEM7QUFBaURjLEVBQUFBLFFBQVEsRUFBRSxlQUEzRDtBQUE0RUMsRUFBQUEsU0FBUyxFQUFFO0FBQXZGLENBSmdCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZVByb3BzfSBmcm9tIFwiLi4vLi4vTXVuY2hlclwiO1xuaW1wb3J0IHtnZXRCbG9ja0FsaWdubWVudH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kcmFmdC9EcmFmdFV0aWxpdGllc1wiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZX0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQge0J1dHRvbiwgSWNvbn0gZnJvbSBcIkBjb250ZW50bXVuY2gvbXVuY2hlci11aVwiO1xuXG5leHBvcnQgY29uc3QgQWxpZ25Db250cm9sOiBSZWFjdC5GQzxFZGl0b3JTdGF0ZVByb3BzPiA9ICh7ZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlfSkgPT4ge1xuICAgIGNvbnN0IGJsb2NrQWxpZ25tZW50ID0gZ2V0QmxvY2tBbGlnbm1lbnQoZWRpdG9yU3RhdGUpO1xuXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZTogYW55LCBhbGlnblR5cGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvclN0YXRlLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKTtcbiAgICAgICAgY29uc3QgYmxvY2tLZXkgPSBzZWxlY3Rpb24uZ2V0U3RhcnRLZXkoKTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBjb250ZW50LmdldEJsb2NrRm9yS2V5KGJsb2NrS2V5KTtcbiAgICAgICAgY29uc3QgYmxvY2tEYXRhID0gYmxvY2suZ2V0RGF0YSgpO1xuXG4gICAgICAgIGxldCBuZXdCbG9ja0RhdGE7XG4gICAgICAgIGlmIChibG9ja0RhdGEuZ2V0KCd0ZXh0QWxpZ24nKSA9PT0gYWxpZ25UeXBlLnN0eWxlKSB7XG4gICAgICAgICAgICBuZXdCbG9ja0RhdGEgPSBibG9ja0RhdGEucmVtb3ZlKCd0ZXh0QWxpZ24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0Jsb2NrRGF0YSA9IGJsb2NrRGF0YS5zZXQoJ3RleHRBbGlnbicsIGFsaWduVHlwZS5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdCbG9jazogYW55ID0gYmxvY2suc2V0KCdkYXRhJywgbmV3QmxvY2tEYXRhKTtcblxuICAgICAgICBjb25zdCBuZXdDb250ZW50OiBhbnkgPSBjb250ZW50Lm1lcmdlKHtcbiAgICAgICAgICAgIGJsb2NrTWFwOiBjb250ZW50LmdldEJsb2NrTWFwKCkuc2V0KGJsb2NrS2V5LCBuZXdCbG9jayksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IEVkaXRvclN0YXRlLnB1c2goXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZSxcbiAgICAgICAgICAgIG5ld0NvbnRlbnQsXG4gICAgICAgICAgICAnY2hhbmdlLWJsb2NrLWRhdGEnXG4gICAgICAgICk7XG4gICAgICAgIHNldEVkaXRvclN0YXRlKG5ld1N0YXRlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD57XG4gICAgICAgICAgICBBTElHTl9UWVBFUy5tYXAoYWxpZ25UeXBlID0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2FsaWduVHlwZS5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBvbk1vdXNlRG93bihlLCBhbGlnblR5cGUpfVxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YWxpZ25UeXBlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FsaWduVHlwZS5zdHlsZSA9PT0gYmxvY2tBbGlnbm1lbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uU3RyaW5nPXthbGlnblR5cGUuaWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59O1xuXG5jb25zdCBBTElHTl9UWVBFUyA9IFtcbiAgICB7bGFiZWw6ICdBbGlnbiBMZWZ0Jywgc3R5bGU6ICdBTElHTl9MRUZUJywgaWNvbk5hbWU6ICdhbGlnbi1sZWZ0JywgY2xhc3NOYW1lOiAndGV4dC1hbGlnbi0tbGVmdCd9LFxuICAgIHtsYWJlbDogJ0FsaWduIENlbnRlcicsIHN0eWxlOiAnQUxJR05fQ0VOVEVSJywgaWNvbk5hbWU6ICdhbGlnbi1jZW50ZXInLCBjbGFzc05hbWU6ICd0ZXh0LWFsaWduLS1jZW50ZXInfSxcbiAgICB7bGFiZWw6ICdBbGlnbiBSaWdodCcsIHN0eWxlOiAnQUxJR05fUklHSFQnLCBpY29uTmFtZTogJ2FsaWduLXJpZ2h0JywgY2xhc3NOYW1lOiAndGV4dC1hbGlnbi0tcmlnaHQnfSxcbiAgICB7bGFiZWw6ICdBbGlnbiBKdXN0aWZ5Jywgc3R5bGU6ICdBTElHTl9KVVNUSUZZJywgaWNvbk5hbWU6ICdhbGlnbi1qdXN0aWZ5JywgY2xhc3NOYW1lOiAndGV4dC1hbGlnbi0tanVzdGlmeSd9XG5dOyJdfQ==