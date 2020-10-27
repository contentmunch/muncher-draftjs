"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorControl = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./assets/ColorControl.scss");

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColorControl = function ColorControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  var currentStyle = editorState.getCurrentInlineStyle();

  var colorSpan = function colorSpan(color) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: color.label,
      title: color.label,
      className: "color__content--item " + color.style
    });
  };

  var emptyStyleDiv = colorSpan({
    label: 'Black',
    style: 'black'
  });

  var currentStyleDiv = function currentStyleDiv() {
    var styleType = _DraftUtilities.COLORS.find(function (_ref2) {
      var style = _ref2.style;
      return currentStyle.has(style);
    });

    return styleType === undefined ? emptyStyleDiv : colorSpan(styleType);
  };

  var colorPicked = function colorPicked(e, style) {
    e.preventDefault();
    var selection = editorState.getSelection(); // Let's just allow one color at a time. Turn off all active colors.

    var nextContentState = Object.keys(_DraftUtilities.colorStyleMap).reduce(function (contentState, color) {
      return _draftJs.Modifier.removeInlineStyle(contentState, selection, color);
    }, editorState.getCurrentContent());

    var nextEditorState = _draftJs.EditorState.push(editorState, nextContentState, 'change-inline-style'); // Unset style override for current color.


    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(function (state, color) {
        return _draftJs.RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    } // If the color is being toggled on, apply it.


    if (!currentStyle.has(style)) {
      nextEditorState = _draftJs.RichUtils.toggleInlineStyle(nextEditorState, style);
    }

    setEditorState(nextEditorState);
    setShowContent(false);
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.DropdownButton, {
    title: "Font color",
    element: /*#__PURE__*/_react.default.createElement("span", {
      className: "color__btn"
    }, currentStyleDiv(), " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "muncher--small"
    }, "\u25BC")),
    showContent: showContent,
    setShowContent: setShowContent,
    active: showContent || currentStyleDiv() !== emptyStyleDiv,
    size: "small"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "color__content"
  }, _DraftUtilities.COLORS.map(function (color) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: color.label,
      title: color.label,
      onMouseDown: function onMouseDown(e) {
        return colorPicked(e, color.style);
      },
      className: "color__content--item " + color.style
    });
  })));
};

exports.ColorControl = ColorControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9pbmxpbmUvQ29sb3JDb250cm9sLnRzeCJdLCJuYW1lcyI6WyJDb2xvckNvbnRyb2wiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwic2hvd0NvbnRlbnQiLCJzZXRTaG93Q29udGVudCIsImN1cnJlbnRTdHlsZSIsImdldEN1cnJlbnRJbmxpbmVTdHlsZSIsImNvbG9yU3BhbiIsImNvbG9yIiwibGFiZWwiLCJzdHlsZSIsImVtcHR5U3R5bGVEaXYiLCJjdXJyZW50U3R5bGVEaXYiLCJzdHlsZVR5cGUiLCJDT0xPUlMiLCJmaW5kIiwiaGFzIiwidW5kZWZpbmVkIiwiY29sb3JQaWNrZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJuZXh0Q29udGVudFN0YXRlIiwiT2JqZWN0Iiwia2V5cyIsImNvbG9yU3R5bGVNYXAiLCJyZWR1Y2UiLCJjb250ZW50U3RhdGUiLCJNb2RpZmllciIsInJlbW92ZUlubGluZVN0eWxlIiwiZ2V0Q3VycmVudENvbnRlbnQiLCJuZXh0RWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsInB1c2giLCJpc0NvbGxhcHNlZCIsInN0YXRlIiwiUmljaFV0aWxzIiwidG9nZ2xlSW5saW5lU3R5bGUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxJQUFNQSxZQUF3QyxHQUFHLFNBQTNDQSxZQUEyQyxPQUFtQztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9COztBQUFBLGtCQUNqRCxxQkFBUyxLQUFULENBRGlEO0FBQUE7QUFBQSxNQUNoRkMsV0FEZ0Y7QUFBQSxNQUNuRUMsY0FEbUU7O0FBRXZGLE1BQU1DLFlBQVksR0FBR0osV0FBVyxDQUFDSyxxQkFBWixFQUFyQjs7QUFFQSxNQUFN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QUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxLQUFqQjtBQUF3QixNQUFBLEtBQUssRUFBRUQsS0FBSyxDQUFDQyxLQUFyQztBQUNNLE1BQUEsV0FBVyxFQUFFLHFCQUFDVSxDQUFEO0FBQUEsZUFBT0QsV0FBVyxDQUFDQyxDQUFELEVBQUlYLEtBQUssQ0FBQ0UsS0FBVixDQUFsQjtBQUFBLE9BRG5CO0FBRU0sTUFBQSxTQUFTLEVBQUUsMEJBQTBCRixLQUFLLENBQUNFO0FBRmpELE1BRGE7QUFBQSxHQUFoQixDQURMLENBUkosQ0FESjtBQWtCSCxDQWhFTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi9hc3NldHMvQ29sb3JDb250cm9sLnNjc3MnO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZSwgTW9kaWZpZXIsIFJpY2hVdGlsc30gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQge0NPTE9SUywgY29sb3JTdHlsZU1hcH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kcmFmdC9EcmFmdFV0aWxpdGllc1wiO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbn0gZnJvbSBcIkBjb250ZW50bXVuY2gvbXVuY2hlci11aVwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZVByb3BzfSBmcm9tIFwiLi4vLi4vTXVuY2hlclwiO1xuXG5leHBvcnQgY29uc3QgQ29sb3JDb250cm9sOiBSZWFjdC5GQzxFZGl0b3JTdGF0ZVByb3BzPiA9ICh7ZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlfSkgPT4ge1xuICAgIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IGVkaXRvclN0YXRlLmdldEN1cnJlbnRJbmxpbmVTdHlsZSgpO1xuXG4gICAgY29uc3QgY29sb3JTcGFuID0gKGNvbG9yOiBhbnkpID0+IDxzcGFuIGtleT17Y29sb3IubGFiZWx9IHRpdGxlPXtjb2xvci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNvbG9yX19jb250ZW50LS1pdGVtIFwiICsgY29sb3Iuc3R5bGV9Lz47XG4gICAgY29uc3QgZW1wdHlTdHlsZURpdiA9IGNvbG9yU3Bhbih7bGFiZWw6ICdCbGFjaycsIHN0eWxlOiAnYmxhY2snfSk7XG4gICAgY29uc3QgY3VycmVudFN0eWxlRGl2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZVR5cGUgPSBDT0xPUlMuZmluZCgoe3N0eWxlfSkgPT4gY3VycmVudFN0eWxlLmhhcyhzdHlsZSkpO1xuICAgICAgICByZXR1cm4gc3R5bGVUeXBlID09PSB1bmRlZmluZWQgPyBlbXB0eVN0eWxlRGl2IDogY29sb3JTcGFuKHN0eWxlVHlwZSk7XG4gICAgfTtcbiAgICBjb25zdCBjb2xvclBpY2tlZCA9IChlOiBhbnksIHN0eWxlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3JTdGF0ZS5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgICAvLyBMZXQncyBqdXN0IGFsbG93IG9uZSBjb2xvciBhdCBhIHRpbWUuIFR1cm4gb2ZmIGFsbCBhY3RpdmUgY29sb3JzLlxuICAgICAgICBjb25zdCBuZXh0Q29udGVudFN0YXRlID0gT2JqZWN0LmtleXMoY29sb3JTdHlsZU1hcClcbiAgICAgICAgICAgIC5yZWR1Y2UoKGNvbnRlbnRTdGF0ZSwgY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTW9kaWZpZXIucmVtb3ZlSW5saW5lU3R5bGUoY29udGVudFN0YXRlLCBzZWxlY3Rpb24sIGNvbG9yKVxuICAgICAgICAgICAgfSwgZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSk7XG5cbiAgICAgICAgbGV0IG5leHRFZGl0b3JTdGF0ZSA9IEVkaXRvclN0YXRlLnB1c2goXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZSxcbiAgICAgICAgICAgIG5leHRDb250ZW50U3RhdGUsXG4gICAgICAgICAgICAnY2hhbmdlLWlubGluZS1zdHlsZSdcbiAgICAgICAgKTtcblxuXG4gICAgICAgIC8vIFVuc2V0IHN0eWxlIG92ZXJyaWRlIGZvciBjdXJyZW50IGNvbG9yLlxuICAgICAgICBpZiAoc2VsZWN0aW9uLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgICAgIG5leHRFZGl0b3JTdGF0ZSA9IGN1cnJlbnRTdHlsZS5yZWR1Y2UoKHN0YXRlOiBhbnksIGNvbG9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHN0YXRlLCBjb2xvcik7XG4gICAgICAgICAgICB9LCBuZXh0RWRpdG9yU3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGNvbG9yIGlzIGJlaW5nIHRvZ2dsZWQgb24sIGFwcGx5IGl0LlxuICAgICAgICBpZiAoIWN1cnJlbnRTdHlsZS5oYXMoc3R5bGUpKSB7XG4gICAgICAgICAgICBuZXh0RWRpdG9yU3RhdGUgPSBSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoXG4gICAgICAgICAgICAgICAgbmV4dEVkaXRvclN0YXRlLFxuICAgICAgICAgICAgICAgIHN0eWxlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHNldEVkaXRvclN0YXRlKG5leHRFZGl0b3JTdGF0ZSk7XG4gICAgICAgIHNldFNob3dDb250ZW50KGZhbHNlKTtcblxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICB0aXRsZT1cIkZvbnQgY29sb3JcIlxuICAgICAgICAgICAgZWxlbWVudD17PHNwYW4gY2xhc3NOYW1lPVwiY29sb3JfX2J0blwiPntjdXJyZW50U3R5bGVEaXYoKX0gPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdW5jaGVyLS1zbWFsbFwiPiYjOTY2MDs8L3NwYW4+PC9zcGFuPn1cbiAgICAgICAgICAgIHNob3dDb250ZW50PXtzaG93Q29udGVudH1cbiAgICAgICAgICAgIHNldFNob3dDb250ZW50PXtzZXRTaG93Q29udGVudH1cbiAgICAgICAgICAgIGFjdGl2ZT17c2hvd0NvbnRlbnQgfHwgY3VycmVudFN0eWxlRGl2KCkgIT09IGVtcHR5U3R5bGVEaXZ9XG4gICAgICAgICAgICBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7Q09MT1JTLm1hcChjb2xvciA9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2NvbG9yLmxhYmVsfSB0aXRsZT17Y29sb3IubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gY29sb3JQaWNrZWQoZSwgY29sb3Iuc3R5bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29sb3JfX2NvbnRlbnQtLWl0ZW0gXCIgKyBjb2xvci5zdHlsZX0vPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICApO1xufSJdfQ==