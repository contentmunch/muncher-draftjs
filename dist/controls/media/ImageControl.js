"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageControl;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./assets/MediaControl.scss");

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ImageControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      urlValue = _useState4[0],
      setUrlValue = _useState4[1];

  var showLinkPrompt = function showLinkPrompt() {
    setShowContent(true);
  };

  var hideLinkPrompt = function hideLinkPrompt() {
    setShowContent(false);
    setUrlValue('');
  };

  var confirmLink = function confirmLink(e) {
    e.preventDefault();
    var contentState = editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {
      src: urlValue
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    var newEditorState = _draftJs.EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    }); // The third parameter here is a space string, not an empty string
    // If you set an empty string, you will get an error: Unknown DraftEntity key: null


    setEditorState(_draftJs.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.DropdownButton, {
    title: "Add or Edit Image",
    onClick: showLinkPrompt,
    onClose: hideLinkPrompt,
    showContent: showContent,
    setShowContent: setShowContent,
    active: showContent,
    element: /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: "image"
    }),
    size: "small"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-drop-media--content"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Input, {
    name: "query",
    type: "url",
    onChange: function onChange(event) {
      return setUrlValue(event.target.value);
    },
    value: urlValue,
    placeHolder: "type the url"
  }), /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: confirmLink
  }, "Confirm")));
}

ImageControl.propTypes = {
  editorState: _propTypes.default.object.isRequired,
  setEditorState: _propTypes.default.func.isRequired
};