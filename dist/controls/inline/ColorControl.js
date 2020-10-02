"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColorControl;

var _react = _interopRequireWildcard(require("react"));

require("./assets/ColorControl.scss");

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _muncherUi = require("@contentmunch/muncher-ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ColorControl(_ref) {
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
}

ColorControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};