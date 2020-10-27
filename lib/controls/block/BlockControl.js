"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _muncherUi = require("@contentmunch/muncher-ui");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

require("./BlockControl.scss");

var _draftJs = require("draft-js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BlockControl = function BlockControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  var emptyBlockLabel = /*#__PURE__*/_react.default.createElement("strong", null, "...");

  var currentBlockLabel = function currentBlockLabel() {
    var currentBlockType = (0, _DraftUtilities.getBlockType)(editorState);
    var blockType = BLOCK_TYPES.find(function (_ref2) {
      var style = _ref2.style;
      return style === currentBlockType;
    });
    return blockType === undefined ? emptyBlockLabel : blockType.label;
  };

  var onClick = function onClick(style) {
    setEditorState(_draftJs.RichUtils.toggleBlockType(editorState, style));
    setShowContent(false);
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.DropdownButton, {
    element: /*#__PURE__*/_react.default.createElement("span", null, currentBlockLabel(), " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "muncher--small"
    }, "\u25BC")),
    showContent: showContent,
    setShowContent: setShowContent,
    active: currentBlockLabel() !== emptyBlockLabel,
    size: "small"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "block__content"
  }, BLOCK_TYPES.map(function (blockType) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "block__content--item",
      key: blockType.label,
      onMouseDown: function onMouseDown() {
        return onClick(blockType.style);
      }
    }, blockType.label);
  })));
};

exports.BlockControl = BlockControl;
var BLOCK_TYPES = [{
  label: 'Paragraph',
  style: 'unstyled'
}, {
  label: 'Heading 1',
  style: 'header-one'
}, {
  label: 'Heading 2',
  style: 'header-two'
}, {
  label: 'Heading 3',
  style: 'header-three'
}, {
  label: 'Heading 4',
  style: 'header-four'
}, {
  label: 'Heading 5',
  style: 'header-five'
}, {
  label: 'Heading 6',
  style: 'header-six'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}, {
  label: 'Code Block',
  style: 'code-block'
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9ibG9jay9CbG9ja0NvbnRyb2wudHN4Il0sIm5hbWVzIjpbIkJsb2NrQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwiZW1wdHlCbG9ja0xhYmVsIiwiY3VycmVudEJsb2NrTGFiZWwiLCJjdXJyZW50QmxvY2tUeXBlIiwiYmxvY2tUeXBlIiwiQkxPQ0tfVFlQRVMiLCJmaW5kIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJsYWJlbCIsIm9uQ2xpY2siLCJSaWNoVXRpbHMiLCJ0b2dnbGVCbG9ja1R5cGUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxJQUFNQSxZQUF3QyxHQUFHLFNBQTNDQSxZQUEyQyxPQUFtQztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9COztBQUFBLGtCQUNqRCxxQkFBUyxLQUFULENBRGlEO0FBQUE7QUFBQSxNQUNoRkMsV0FEZ0Y7QUFBQSxNQUNuRUMsY0FEbUU7O0FBR3ZGLE1BQU1DLGVBQWUsZ0JBQUcsbURBQXhCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixRQUFNQyxnQkFBZ0IsR0FBRyxrQ0FBYU4sV0FBYixDQUF6QjtBQUNBLFFBQU1PLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxJQUFaLENBQWlCO0FBQUEsVUFBRUMsS0FBRixTQUFFQSxLQUFGO0FBQUEsYUFBYUEsS0FBSyxLQUFLSixnQkFBdkI7QUFBQSxLQUFqQixDQUFsQjtBQUNBLFdBQU9DLFNBQVMsS0FBS0ksU0FBZCxHQUEwQlAsZUFBMUIsR0FBNENHLFNBQVMsQ0FBQ0ssS0FBN0Q7QUFDSCxHQUpEOztBQUtBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNILEtBQUQsRUFBZ0I7QUFDNUJULElBQUFBLGNBQWMsQ0FBQ2EsbUJBQVVDLGVBQVYsQ0FBMEJmLFdBQTFCLEVBQXVDVSxLQUF2QyxDQUFELENBQWQ7QUFDQVAsSUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNILEdBSEQ7O0FBSUEsc0JBQ0ksNkJBQUMseUJBQUQ7QUFDSSxJQUFBLE9BQU8sZUFBRSwyQ0FBT0UsaUJBQWlCLEVBQXhCLG9CQUE0QjtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLGdCQUE1QixDQURiO0FBRUksSUFBQSxXQUFXLEVBQUVILFdBRmpCO0FBR0ksSUFBQSxjQUFjLEVBQUVDLGNBSHBCO0FBSUksSUFBQSxNQUFNLEVBQUVFLGlCQUFpQixPQUFPRCxlQUpwQztBQUtJLElBQUEsSUFBSSxFQUFDO0FBTFQsa0JBT0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0tJLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQixVQUFBVCxTQUFTO0FBQUEsd0JBQ3RCO0FBQUssTUFBQSxTQUFTLEVBQUMsc0JBQWY7QUFBc0MsTUFBQSxHQUFHLEVBQUVBLFNBQVMsQ0FBQ0ssS0FBckQ7QUFDSyxNQUFBLFdBQVcsRUFBRTtBQUFBLGVBQU1DLE9BQU8sQ0FBQ04sU0FBUyxDQUFDRyxLQUFYLENBQWI7QUFBQTtBQURsQixPQUNtREgsU0FBUyxDQUFDSyxLQUQ3RCxDQURzQjtBQUFBLEdBQXpCLENBREwsQ0FQSixDQURKO0FBZ0JILENBN0JNOzs7QUE4QlAsSUFBTUosV0FBVyxHQUFHLENBQ2hCO0FBQUNJLEVBQUFBLEtBQUssRUFBRSxXQUFSO0FBQXFCRixFQUFBQSxLQUFLLEVBQUU7QUFBNUIsQ0FEZ0IsRUFFaEI7QUFBQ0UsRUFBQUEsS0FBSyxFQUFFLFdBQVI7QUFBcUJGLEVBQUFBLEtBQUssRUFBRTtBQUE1QixDQUZnQixFQUdoQjtBQUFDRSxFQUFBQSxLQUFLLEVBQUUsV0FBUjtBQUFxQkYsRUFBQUEsS0FBSyxFQUFFO0FBQTVCLENBSGdCLEVBSWhCO0FBQUNFLEVBQUFBLEtBQUssRUFBRSxXQUFSO0FBQXFCRixFQUFBQSxLQUFLLEVBQUU7QUFBNUIsQ0FKZ0IsRUFLaEI7QUFBQ0UsRUFBQUEsS0FBSyxFQUFFLFdBQVI7QUFBcUJGLEVBQUFBLEtBQUssRUFBRTtBQUE1QixDQUxnQixFQU1oQjtBQUFDRSxFQUFBQSxLQUFLLEVBQUUsV0FBUjtBQUFxQkYsRUFBQUEsS0FBSyxFQUFFO0FBQTVCLENBTmdCLEVBT2hCO0FBQUNFLEVBQUFBLEtBQUssRUFBRSxXQUFSO0FBQXFCRixFQUFBQSxLQUFLLEVBQUU7QUFBNUIsQ0FQZ0IsRUFRaEI7QUFBQ0UsRUFBQUEsS0FBSyxFQUFFLFlBQVI7QUFBc0JGLEVBQUFBLEtBQUssRUFBRTtBQUE3QixDQVJnQixFQVNoQjtBQUFDRSxFQUFBQSxLQUFLLEVBQUUsWUFBUjtBQUFzQkYsRUFBQUEsS0FBSyxFQUFFO0FBQTdCLENBVGdCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbn0gZnJvbSBcIkBjb250ZW50bXVuY2gvbXVuY2hlci11aVwiO1xuaW1wb3J0IHtnZXRCbG9ja1R5cGV9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZHJhZnQvRHJhZnRVdGlsaXRpZXNcIjtcbmltcG9ydCAnLi9CbG9ja0NvbnRyb2wuc2Nzcyc7XG5pbXBvcnQge1JpY2hVdGlsc30gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQge0VkaXRvclN0YXRlUHJvcHN9IGZyb20gXCIuLi8uLi9NdW5jaGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEJsb2NrQ29udHJvbDogUmVhY3QuRkM8RWRpdG9yU3RhdGVQcm9wcz4gPSAoe2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZX0pID0+IHtcbiAgICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGVtcHR5QmxvY2tMYWJlbCA9IDxzdHJvbmc+Li4uPC9zdHJvbmc+O1xuICAgIGNvbnN0IGN1cnJlbnRCbG9ja0xhYmVsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50QmxvY2tUeXBlID0gZ2V0QmxvY2tUeXBlKGVkaXRvclN0YXRlKTtcbiAgICAgICAgY29uc3QgYmxvY2tUeXBlID0gQkxPQ0tfVFlQRVMuZmluZCgoe3N0eWxlfSkgPT4gc3R5bGUgPT09IGN1cnJlbnRCbG9ja1R5cGUpO1xuICAgICAgICByZXR1cm4gYmxvY2tUeXBlID09PSB1bmRlZmluZWQgPyBlbXB0eUJsb2NrTGFiZWwgOiBibG9ja1R5cGUubGFiZWw7XG4gICAgfTtcbiAgICBjb25zdCBvbkNsaWNrID0gKHN0eWxlOiBhbnkpID0+IHtcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoUmljaFV0aWxzLnRvZ2dsZUJsb2NrVHlwZShlZGl0b3JTdGF0ZSwgc3R5bGUpKTtcbiAgICAgICAgc2V0U2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICBlbGVtZW50PXs8c3Bhbj57Y3VycmVudEJsb2NrTGFiZWwoKX0gPHNwYW4gY2xhc3NOYW1lPVwibXVuY2hlci0tc21hbGxcIj4mIzk2NjA7PC9zcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICBzaG93Q29udGVudD17c2hvd0NvbnRlbnR9XG4gICAgICAgICAgICBzZXRTaG93Q29udGVudD17c2V0U2hvd0NvbnRlbnR9XG4gICAgICAgICAgICBhY3RpdmU9e2N1cnJlbnRCbG9ja0xhYmVsKCkgIT09IGVtcHR5QmxvY2tMYWJlbH1cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge0JMT0NLX1RZUEVTLm1hcChibG9ja1R5cGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja19fY29udGVudC0taXRlbVwiIGtleT17YmxvY2tUeXBlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBvbkNsaWNrKGJsb2NrVHlwZS5zdHlsZSl9PntibG9ja1R5cGUubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICk7XG59XG5jb25zdCBCTE9DS19UWVBFUyA9IFtcbiAgICB7bGFiZWw6ICdQYXJhZ3JhcGgnLCBzdHlsZTogJ3Vuc3R5bGVkJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyAxJywgc3R5bGU6ICdoZWFkZXItb25lJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyAyJywgc3R5bGU6ICdoZWFkZXItdHdvJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyAzJywgc3R5bGU6ICdoZWFkZXItdGhyZWUnfSxcbiAgICB7bGFiZWw6ICdIZWFkaW5nIDQnLCBzdHlsZTogJ2hlYWRlci1mb3VyJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyA1Jywgc3R5bGU6ICdoZWFkZXItZml2ZSd9LFxuICAgIHtsYWJlbDogJ0hlYWRpbmcgNicsIHN0eWxlOiAnaGVhZGVyLXNpeCd9LFxuICAgIHtsYWJlbDogJ0Jsb2NrcXVvdGUnLCBzdHlsZTogJ2Jsb2NrcXVvdGUnfSxcbiAgICB7bGFiZWw6ICdDb2RlIEJsb2NrJywgc3R5bGU6ICdjb2RlLWJsb2NrJ30sXG5dOyJdfQ==