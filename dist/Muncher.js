"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Muncher;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

require("draft-js/dist/Draft.css");

require("./Muncher.scss");

var _CodeView = _interopRequireDefault(require("./view/code/CodeView"));

var _HtmlUtilities = require("./utilities/html/HtmlUtilities");

var _LinkDecorator = _interopRequireDefault(require("./decorators/LinkDecorator"));

var _StructureView = _interopRequireDefault(require("./view/code/StructureView"));

var _MuncherToolbar = _interopRequireDefault(require("./toolbar/MuncherToolbar"));

var _DraftUtilities = require("./utilities/draft/DraftUtilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Muncher() {
  var intialHtml = "<h1>This is heading</h1>\n<p>This is <a href=\"what\">paragraph</a></p>";
  var decorator = new _draftJs.CompositeDecorator([(0, _LinkDecorator.default)()]);

  var _useState = (0, _react.useState)(_draftJs.EditorState.createWithContent((0, _HtmlUtilities.convertHtmlToContent)(intialHtml), decorator)),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showStructure = _useState4[0],
      setShowStructure = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      codeView = _useState6[0],
      setCodeView = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      html = _useState8[0],
      setHtml = _useState8[1];

  var onChange = function onChange(currentEditorState) {
    setEditorState(currentEditorState);
    setHtml((0, _HtmlUtilities.beautifyHtml)((0, _HtmlUtilities.convertContentToHtml)(currentEditorState)));
  };

  var editor = (0, _react.useRef)(null);

  var focusEditor = function focusEditor() {
    //wait for focus, causes stack overflow, otherwise.
    setTimeout(function () {
      editor.current.focus();
    }, 100);
  };

  (0, _react.useEffect)(function () {
    focusEditor();
  }, []);

  var getBlockStyle = function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';

      default:
        return block.getType();
    }
  };

  var handleKeyCommand = function handleKeyCommand(command, editorState) {
    var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return true;
    }

    return false;
  };

  var mapKeyToEditorCommand = function mapKeyToEditorCommand(e) {
    if (e.keyCode === 9
    /* TAB */
    ) {
        var newEditorState = _draftJs.RichUtils.onTab(e, editorState, 4
        /* maxDepth */
        );

        if (newEditorState !== editorState) {
          onChange(newEditorState);
        }

        return false;
      }

    return (0, _draftJs.getDefaultKeyBinding)(e);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__main"
  }, /*#__PURE__*/_react.default.createElement(_MuncherToolbar.default, {
    editorState: editorState,
    onChange: onChange,
    codeView: codeView,
    setCodeView: setCodeView,
    html: html,
    showStructure: showStructure,
    setShowStructure: setShowStructure,
    focusEditor: focusEditor
  }), codeView ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__code"
  }, /*#__PURE__*/_react.default.createElement(_CodeView.default, {
    html: html,
    setHtml: setHtml
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__editor",
    onClick: focusEditor
  }, /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
    ref: editor,
    editorState: editorState,
    onChange: onChange,
    blockStyleFn: getBlockStyle,
    handleKeyCommand: handleKeyCommand,
    keyBindingFn: mapKeyToEditorCommand,
    customStyleMap: _DraftUtilities.colorStyleMap,
    spellCheck: true,
    placeholder: "Tell a story..."
  }))), showStructure ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__structure"
  }, /*#__PURE__*/_react.default.createElement(_StructureView.default, {
    editorState: editorState
  })) : "");
}