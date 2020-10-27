"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Muncher = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

require("draft-js/dist/Draft.css");

require("./assets/Muncher.scss");

var _CodeView = require("./view/code/CodeView");

var _HtmlUtilities = require("./utilities/html/HtmlUtilities.js");

var _LinkDecorator = _interopRequireDefault(require("./decorators/LinkDecorator"));

var _StructureView = require("./view/code/StructureView");

var _MuncherToolbar = require("./toolbar/MuncherToolbar");

var _DraftUtilities = require("./utilities/draft/DraftUtilities");

var _BlockRenderer = _interopRequireDefault(require("./utilities/BlockRenderer"));

var _IframeDecorator = _interopRequireDefault(require("./decorators/IframeDecorator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Muncher = function Muncher(_ref) {
  var content = _ref.content,
      html = _ref.html,
      setHtml = _ref.setHtml,
      saveHandler = _ref.saveHandler,
      deleteHandler = _ref.deleteHandler;
  var decorator = new _draftJs.CompositeDecorator([(0, _LinkDecorator.default)(), (0, _IframeDecorator.default)()]);

  var _useState = (0, _react.useState)(content ? _draftJs.EditorState.createWithContent((0, _HtmlUtilities.convertHtmlToContent)(content), decorator) : _draftJs.EditorState.createEmpty(decorator)),
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

  var onChange = function onChange(currentEditorState) {
    setEditorState(currentEditorState);

    if (setHtml) {
      setHtml((0, _HtmlUtilities.beautifyHtml)((0, _HtmlUtilities.convertContentToHtml)(currentEditorState)));
    }
  };

  var editor = (0, _react.useRef)(null);

  var focusEditor = function focusEditor() {
    //wait for focus, causes stack overflow, otherwise.
    setTimeout(function () {
      if (editor.current) {
        var _editor$current;

        editor === null || editor === void 0 ? void 0 : (_editor$current = editor.current) === null || _editor$current === void 0 ? void 0 : _editor$current.focus();
      }
    }, 100);
  };

  (0, _react.useEffect)(function () {
    focusEditor();
  }, []);

  var getBlockStyle = function getBlockStyle(block) {
    switch (block.getData().get('textAlign')) {
      case 'ALIGN_LEFT':
        return 'text-align--left';

      case 'ALIGN_CENTER':
        return 'text-align--center';

      case 'ALIGN_RIGHT':
        return 'text-align--right';

      case 'ALIGN_JUSTIFY':
        return 'text-align--justify';

      default:
        switch (block.getType()) {
          case 'blockquote':
            return 'RichEditor-blockquote';

          default:
            return block.getType();
        }

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
    className: "muncher-main"
  }, /*#__PURE__*/_react.default.createElement(_MuncherToolbar.MuncherToolBar, {
    editorState: editorState,
    onChange: onChange,
    codeView: codeView,
    setCodeView: setCodeView,
    html: html,
    showStructure: showStructure,
    setShowStructure: setShowStructure,
    focusEditor: focusEditor,
    saveHandler: saveHandler,
    deleteHandler: deleteHandler
  }), codeView ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-code"
  }, /*#__PURE__*/_react.default.createElement(_CodeView.CodeView, {
    html: html,
    setHtml: setHtml
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-editor",
    onClick: focusEditor
  }, /*#__PURE__*/_react.default.createElement(_draftJs.Editor, {
    editorState: editorState,
    onChange: onChange,
    ref: editor,
    blockStyleFn: getBlockStyle,
    blockRendererFn: _BlockRenderer.default,
    customStyleMap: _DraftUtilities.colorStyleMap,
    spellCheck: true,
    placeholder: "Tell a story...",
    handleKeyCommand: handleKeyCommand,
    keyBindingFn: mapKeyToEditorCommand
  }))), showStructure ? /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-structure"
  }, /*#__PURE__*/_react.default.createElement(_StructureView.StructureView, {
    editorState: editorState
  })) : "");
};

exports.Muncher = Muncher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NdW5jaGVyLnRzeCJdLCJuYW1lcyI6WyJNdW5jaGVyIiwiY29udGVudCIsImh0bWwiLCJzZXRIdG1sIiwic2F2ZUhhbmRsZXIiLCJkZWxldGVIYW5kbGVyIiwiZGVjb3JhdG9yIiwiQ29tcG9zaXRlRGVjb3JhdG9yIiwiRWRpdG9yU3RhdGUiLCJjcmVhdGVXaXRoQ29udGVudCIsImNyZWF0ZUVtcHR5IiwiZWRpdG9yU3RhdGUiLCJzZXRFZGl0b3JTdGF0ZSIsInNob3dTdHJ1Y3R1cmUiLCJzZXRTaG93U3RydWN0dXJlIiwiY29kZVZpZXciLCJzZXRDb2RlVmlldyIsIm9uQ2hhbmdlIiwiY3VycmVudEVkaXRvclN0YXRlIiwiZWRpdG9yIiwiZm9jdXNFZGl0b3IiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImZvY3VzIiwiZ2V0QmxvY2tTdHlsZSIsImJsb2NrIiwiZ2V0RGF0YSIsImdldCIsImdldFR5cGUiLCJoYW5kbGVLZXlDb21tYW5kIiwiY29tbWFuZCIsIm5ld1N0YXRlIiwiUmljaFV0aWxzIiwibWFwS2V5VG9FZGl0b3JDb21tYW5kIiwiZSIsImtleUNvZGUiLCJuZXdFZGl0b3JTdGF0ZSIsIm9uVGFiIiwiQmxvY2tSZW5kZXJlciIsImNvbG9yU3R5bGVNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE9BQStCLEdBQUcsU0FBbENBLE9BQWtDLE9BSXJDO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFGT0MsSUFFUCxRQUZPQSxJQUVQO0FBQUEsTUFGYUMsT0FFYixRQUZhQSxPQUViO0FBQUEsTUFERkMsV0FDRSxRQURGQSxXQUNFO0FBQUEsTUFEV0MsYUFDWCxRQURXQSxhQUNYO0FBRU4sTUFBTUMsU0FBUyxHQUFHLElBQUlDLDJCQUFKLENB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QkFBRDtBQUFlLElBQUEsV0FBVyxFQUFFRjtBQUE1QixJQURKLENBRFUsR0FJUixFQXJDVixDQURKO0FBeUNILENBN0hNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcmFmdCwge0NvbXBvc2l0ZURlY29yYXRvciwgRWRpdG9yLCBFZGl0b3JTdGF0ZSwgZ2V0RGVmYXVsdEtleUJpbmRpbmcsIFJpY2hVdGlsc30gZnJvbSAnZHJhZnQtanMnO1xuaW1wb3J0ICdkcmFmdC1qcy9kaXN0L0RyYWZ0LmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL011bmNoZXIuc2Nzcyc7XG5pbXBvcnQge0NvZGVWaWV3LCBDb2RlVmlld1Byb3BzfSBmcm9tIFwiLi92aWV3L2NvZGUvQ29kZVZpZXdcIjtcbmltcG9ydCB7YmVhdXRpZnlIdG1sLCBjb252ZXJ0Q29udGVudFRvSHRtbCwgY29udmVydEh0bWxUb0NvbnRlbnR9IGZyb20gXCIuL3V0aWxpdGllcy9odG1sL0h0bWxVdGlsaXRpZXMuanNcIjtcbmltcG9ydCBMaW5rRGVjb3JhdG9yIGZyb20gXCIuL2RlY29yYXRvcnMvTGlua0RlY29yYXRvclwiO1xuaW1wb3J0IHtTdHJ1Y3R1cmVWaWV3fSBmcm9tIFwiLi92aWV3L2NvZGUvU3RydWN0dXJlVmlld1wiO1xuaW1wb3J0IHtNdW5jaGVyVG9vbEJhcn0gZnJvbSBcIi4vdG9vbGJhci9NdW5jaGVyVG9vbGJhclwiO1xuaW1wb3J0IHtjb2xvclN0eWxlTWFwfSBmcm9tIFwiLi91dGlsaXRpZXMvZHJhZnQvRHJhZnRVdGlsaXRpZXNcIjtcbmltcG9ydCBCbG9ja1JlbmRlcmVyIGZyb20gXCIuL3V0aWxpdGllcy9CbG9ja1JlbmRlcmVyXCI7XG5pbXBvcnQgSWZyYW1lRGVjb3JhdG9yIGZyb20gXCIuL2RlY29yYXRvcnMvSWZyYW1lRGVjb3JhdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBNdW5jaGVyOiBSZWFjdC5GQzxNdW5jaGVyUHJvcHM+ID0gKFxuICAgIHtcbiAgICAgICAgY29udGVudCwgaHRtbCwgc2V0SHRtbCxcbiAgICAgICAgc2F2ZUhhbmRsZXIsIGRlbGV0ZUhhbmRsZXJcbiAgICB9KSA9PiB7XG5cbiAgICBjb25zdCBkZWNvcmF0b3IgPSBuZXcgQ29tcG9zaXRlRGVjb3JhdG9yKFtMaW5rRGVjb3JhdG9yKCksIElmcmFtZURlY29yYXRvcigpXSk7XG5cbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKGNvbnRlbnQgPyBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb252ZXJ0SHRtbFRvQ29udGVudChjb250ZW50KSwgZGVjb3JhdG9yKSA6IEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KGRlY29yYXRvcikpO1xuXG4gICAgY29uc3QgW3Nob3dTdHJ1Y3R1cmUsIHNldFNob3dTdHJ1Y3R1cmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjb2RlVmlldywgc2V0Q29kZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChjdXJyZW50RWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlKSA9PiB7XG5cbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoY3VycmVudEVkaXRvclN0YXRlKTtcbiAgICAgICAgaWYgKHNldEh0bWwpIHtcbiAgICAgICAgICAgIHNldEh0bWwoYmVhdXRpZnlIdG1sKGNvbnZlcnRDb250ZW50VG9IdG1sKGN1cnJlbnRFZGl0b3JTdGF0ZSkpKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXRvciA9IHVzZVJlZjxFZGl0b3I+KG51bGwpO1xuXG4gICAgY29uc3QgZm9jdXNFZGl0b3IgPSAoKSA9PiB7XG4gICAgICAgIC8vd2FpdCBmb3IgZm9jdXMsIGNhdXNlcyBzdGFjayBvdmVyZmxvdywgb3RoZXJ3aXNlLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlZGl0b3IuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGVkaXRvcj8uY3VycmVudD8uZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb2N1c0VkaXRvcigpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgZ2V0QmxvY2tTdHlsZSA9IChibG9jazogRHJhZnQuQ29udGVudEJsb2NrKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYmxvY2suZ2V0RGF0YSgpLmdldCgndGV4dEFsaWduJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FMSUdOX0xFRlQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndGV4dC1hbGlnbi0tbGVmdCc7XG5cbiAgICAgICAgICAgIGNhc2UgJ0FMSUdOX0NFTlRFUic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZXh0LWFsaWduLS1jZW50ZXInO1xuXG4gICAgICAgICAgICBjYXNlICdBTElHTl9SSUdIVCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZXh0LWFsaWduLS1yaWdodCc7XG5cbiAgICAgICAgICAgIGNhc2UgJ0FMSUdOX0pVU1RJRlknOlxuICAgICAgICAgICAgICAgIHJldHVybiAndGV4dC1hbGlnbi0tanVzdGlmeSc7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChibG9jay5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmxvY2txdW90ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JpY2hFZGl0b3ItYmxvY2txdW90ZSc7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2suZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVLZXlDb21tYW5kOiBhbnkgPSAoY29tbWFuZDogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBSaWNoVXRpbHMuaGFuZGxlS2V5Q29tbWFuZChlZGl0b3JTdGF0ZSwgY29tbWFuZCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UobmV3U3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgY29uc3QgbWFwS2V5VG9FZGl0b3JDb21tYW5kOiBhbnkgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkgLyogVEFCICovKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdFZGl0b3JTdGF0ZSA9IFJpY2hVdGlscy5vblRhYihlLCBlZGl0b3JTdGF0ZSwgNCwgLyogbWF4RGVwdGggKi8pO1xuICAgICAgICAgICAgaWYgKG5ld0VkaXRvclN0YXRlICE9PSBlZGl0b3JTdGF0ZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0VkaXRvclN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdEtleUJpbmRpbmcoZSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdW5jaGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItbWFpblwiPlxuICAgICAgICAgICAgICAgIDxNdW5jaGVyVG9vbEJhclxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY29kZVZpZXc9e2NvZGVWaWV3fSBzZXRDb2RlVmlldz17c2V0Q29kZVZpZXd9IGh0bWw9e2h0bWx9XG4gICAgICAgICAgICAgICAgICAgIHNob3dTdHJ1Y3R1cmU9e3Nob3dTdHJ1Y3R1cmV9IHNldFNob3dTdHJ1Y3R1cmU9e3NldFNob3dTdHJ1Y3R1cmV9XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzRWRpdG9yPXtmb2N1c0VkaXRvcn1cbiAgICAgICAgICAgICAgICAgICAgc2F2ZUhhbmRsZXI9e3NhdmVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVIYW5kbGVyPXtkZWxldGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb2RlVmlldyA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItY29kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2RlVmlldyBodG1sPXtodG1sfSBzZXRIdG1sPXtzZXRIdG1sfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVuY2hlci1lZGl0b3JcIiBvbkNsaWNrPXtmb2N1c0VkaXRvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU3R5bGVGbj17Z2V0QmxvY2tTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tSZW5kZXJlckZuPXtCbG9ja1JlbmRlcmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21TdHlsZU1hcD17Y29sb3JTdHlsZU1hcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxDaGVjaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxsIGEgc3RvcnkuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVLZXlDb21tYW5kPXtoYW5kbGVLZXlDb21tYW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlCaW5kaW5nRm49e21hcEtleVRvRWRpdG9yQ29tbWFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dTdHJ1Y3R1cmUgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVuY2hlci1zdHJ1Y3R1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0cnVjdHVyZVZpZXcgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bmNoZXJQcm9wcyB7XG4gICAgY29udGVudD86IHN0cmluZztcbiAgICBzYXZlSGFuZGxlcj86ICgpID0+IHZvaWQ7XG4gICAgZGVsZXRlSGFuZGxlcj86ICgpID0+IHZvaWQ7XG4gICAgaHRtbDogc3RyaW5nO1xuICAgIHNldEh0bWw6IChodG1sOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yU3RhdGVQcm9wcyB7XG4gICAgZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlO1xuICAgIHNldEVkaXRvclN0YXRlOiAoZWRpdG9yc3RhdGU6IEVkaXRvclN0YXRlKSA9PiB2b2lkO1xufSJdfQ==