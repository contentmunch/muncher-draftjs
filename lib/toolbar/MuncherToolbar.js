"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuncherToolBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _LinkControl = require("../controls/link/LinkControl");

var _UnlinkControl = require("../controls/link/UnlinkControl");

var _ToggleCodeControl = require("../controls/code/ToggleCodeControl");

var _UndoControl = require("../controls/undo/UndoControl");

var _RedoControl = require("../controls/undo/RedoControl");

var _BlockControl = require("../controls/block/BlockControl");

var _InlineControl = require("../controls/inline/InlineControl");

var _ColorControl = require("../controls/inline/ColorControl");

var _ImageControl = require("../controls/media/ImageControl");

var _YoutubeControl = require("../controls/media/YoutubeControl");

var _AlignControl = require("../controls/align/AlignControl");

var _ListControl = require("../controls/block/ListControl");

var _SettingsControl = require("../controls/setting/SettingsControl");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MuncherToolBar = function MuncherToolBar(_ref) {
  var codeView = _ref.codeView,
      setCodeView = _ref.setCodeView,
      html = _ref.html,
      editorState = _ref.editorState,
      onChange = _ref.onChange,
      showStructure = _ref.showStructure,
      setShowStructure = _ref.setShowStructure,
      focusEditor = _ref.focusEditor,
      saveHandler = _ref.saveHandler,
      deleteHandler = _ref.deleteHandler;

  var onChangeAndFocus = function onChangeAndFocus(currentEditorState) {
    onChange(currentEditorState);
    focusEditor();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-toolbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-toolbar--left"
  }, /*#__PURE__*/_react.default.createElement(_ToggleCodeControl.ToggleCodeControl, {
    isCodeView: codeView,
    setIsCodeView: setCodeView,
    html: html,
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_UndoControl.UndoControl, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement(_RedoControl.RedoControl, {
    editorState: editorState,
    setEditorState: onChange
  }), !codeView ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_ListControl.ListControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_BlockControl.BlockControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_InlineControl.InlineControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_ColorControl.ColorControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_LinkControl.LinkControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_UnlinkControl.UnlinkControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement(_ImageControl.ImageControl, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement(_YoutubeControl.YoutubeControl, {
    editorState: editorState,
    setEditorState: onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|"), /*#__PURE__*/_react.default.createElement(_AlignControl.AlignControl, {
    editorState: editorState,
    setEditorState: onChangeAndFocus
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "muncher-separator"
  }, "|")) : ''), /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-toolbar--right"
  }, /*#__PURE__*/_react.default.createElement(_SettingsControl.SettingsControl, {
    showStructure: showStructure,
    setShowStructure: setShowStructure,
    saveHandler: saveHandler,
    deleteHandler: deleteHandler
  })));
};

exports.MuncherToolBar = MuncherToolBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29sYmFyL011bmNoZXJUb29sYmFyLnRzeCJdLCJuYW1lcyI6WyJNdW5jaGVyVG9vbEJhciIsImNvZGVWaWV3Iiwic2V0Q29kZVZpZXciLCJodG1sIiwiZWRpdG9yU3RhdGUiLCJvbkNoYW5nZSIsInNob3dTdHJ1Y3R1cmUiLCJzZXRTaG93U3RydWN0dXJlIiwiZm9jdXNFZGl0b3IiLCJzYXZlSGFuZGxlciIsImRlbGV0ZUhhbmRsZXIiLCJvbkNoYW5nZUFuZEZvY3VzIiwiY3VycmVudEVkaXRvclN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBR08sSUFBTUEsY0FBNkMsR0FBRyxTQUFoREEsY0FBZ0QsT0FJbkQ7QUFBQSxNQUZGQyxRQUVFLFFBRkZBLFFBRUU7QUFBQSxNQUZRQyxXQUVSLFFBRlFBLFdBRVI7QUFBQSxNQUZxQkMsSUFFckIsUUFGcUJBLElBRXJCO0FBQUEsTUFGMkJDLFdBRTNCLFFBRjJCQSxXQUUzQjtBQUFBLE1BRndDQyxRQUV4QyxRQUZ3Q0EsUUFFeEM7QUFBQSxNQURGQyxhQUNFLFFBREZBLGFBQ0U7QUFBQSxNQURhQyxnQkFDYixRQURhQSxnQkFDYjtBQUFBLE1BRCtCQyxXQUMvQixRQUQrQkEsV0FDL0I7QUFBQSxNQUQ0Q0MsV0FDNUMsUUFENENBLFdBQzVDO0FBQUEsTUFEeURDLGFBQ3pELFFBRHlEQSxhQUN6RDs7QUFDTixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLGtCQUFELEVBQTZCO0FBQ2xEUCxJQUFBQSxRQUFRLENBQUNPLGtCQUFELENBQVI7QUFDQUosSUFBQUEsV0FBVztBQUNkLEdBSEQ7O0FBSUEsc0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSSw2QkFBQyxvQ0FBRDtBQUFtQixJQUFBLFVBQVUsRUFBRVAsUUFBL0I7QUFBeUMsSUFBQSxhQUFhLEVBQUVDLFdBQXhEO0FBQXFFLElBQUEsSUFBSSxFQUFFQyxJQUEzRTtBQUNtQixJQUFBLFdBQVcsRUFBRUMsV0FEaEM7QUFDNkMsSUFBQSxjQUFjLEVBQUVDO0FBRDdELElBREosZUFHSTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLFNBSEosZUFJSSw2QkFBQyx3QkFBRDtBQUFhLElBQUEsV0FBVyxFQUFFRCxXQUExQjtBQUF1QyxJQUFBLGNBQWMsRUFBRUM7QUFBdkQsSUFKSixlQUtJLDZCQUFDLHdCQUFEO0FBQWEsSUFBQSxXQUFXLEVBQUVELFdBQTFCO0FBQXVDLElBQUEsY0FBYyxFQUFFQztBQUF2RCxJQUxKLEVBTUssQ0FBQ0osUUFBRCxnQkFBWSw2QkFBQyxlQUFELHFCQUNUO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsU0FEUyxlQUVULDZCQUFDLHdCQUFEO0FBQWEsSUFBQSxXQUFXLEVBQUVHLFdBQTFCO0FBQXVDLElBQUEsY0FBYyxFQUFFTztBQUF2RCxJQUZTLGVBR1QsNkJBQUMsMEJBQUQ7QUFBYyxJQUFBLFdBQVcsRUFBRVAsV0FBM0I7QUFBd0MsSUFBQSxjQUFjLEVBQUVPO0FBQXhELElBSFMsZUFJVDtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLFNBSlMsZUFLVCw2QkFBQyw0QkFBRDtBQUFlLElBQUEsV0FBVyxFQUFFUCxXQUE1QjtBQUF5QyxJQUFBLGNBQWMsRUFBRU87QUFBekQsSUFMUyxlQU1ULDZCQUFDLDBCQUFEO0FBQWMsSUFBQSxXQUFXLEVBQUVQLFdBQTNCO0FBQXdDLElBQUEsY0FBYyxFQUFFTztBQUF4RCxJQU5TLGVBT1Q7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixTQVBTLGVBUVQsNkJBQUMsd0JBQUQ7QUFBYSxJQUFBLFdBQVcsRUFBRVAsV0FBMUI7QUFBdUMsSUFBQSxjQUFjLEVBQUVPO0FBQXZELElBUlMsZUFTVCw2QkFBQyw0QkFBRDtBQUFlLElBQUEsV0FBVyxFQUFFUCxXQUE1QjtBQUF5QyxJQUFBLGNBQWMsRUFBRU87QUFBekQsSUFUUyxlQVVULDZCQUFDLDBCQUFEO0FBQWMsSUFBQSxXQUFXLEVBQUVQLFdBQTNCO0FBQXdDLElBQUEsY0FBYyxFQUFFQztBQUF4RCxJQVZTLGVBV1QsNkJBQUMsOEJBQUQ7QUFBZ0IsSUFBQSxXQUFXLEVBQUVELFdBQTdCO0FBQTBDLElBQUEsY0FBYyxFQUFFQztBQUExRCxJQVhTLGVBWVQ7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixTQVpTLGVBYVQsNkJBQUMsMEJBQUQ7QUFBYyxJQUFBLFdBQVcsRUFBRUQsV0FBM0I7QUFBd0MsSUFBQSxjQUFjLEVBQUVPO0FBQXhELElBYlMsZUFjVDtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLFNBZFMsQ0FBWixHQWVhLEVBckJsQixDQURKLGVBeUJJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSSw2QkFBQyxnQ0FBRDtBQUFpQixJQUFBLGFBQWEsRUFBRUwsYUFBaEM7QUFDaUIsSUFBQSxnQkFBZ0IsRUFBRUMsZ0JBRG5DO0FBRWlCLElBQUEsV0FBVyxFQUFFRSxXQUY5QjtBQUdpQixJQUFBLGFBQWEsRUFBRUM7QUFIaEMsSUFESixDQXpCSixDQURKO0FBbUNILENBNUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL2xpbmsvTGlua0NvbnRyb2xcIjtcbmltcG9ydCB7VW5saW5rQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL2xpbmsvVW5saW5rQ29udHJvbFwiO1xuaW1wb3J0IHtUb2dnbGVDb2RlQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL2NvZGUvVG9nZ2xlQ29kZUNvbnRyb2xcIjtcbmltcG9ydCB7VW5kb0NvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy91bmRvL1VuZG9Db250cm9sXCI7XG5pbXBvcnQge1JlZG9Db250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvdW5kby9SZWRvQ29udHJvbFwiO1xuaW1wb3J0IHtCbG9ja0NvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9ibG9jay9CbG9ja0NvbnRyb2xcIjtcbmltcG9ydCB7SW5saW5lQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL2lubGluZS9JbmxpbmVDb250cm9sXCI7XG5pbXBvcnQge0NvbG9yQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL2lubGluZS9Db2xvckNvbnRyb2xcIjtcbmltcG9ydCB7SW1hZ2VDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvbWVkaWEvSW1hZ2VDb250cm9sXCI7XG5pbXBvcnQge1lvdXR1YmVDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvbWVkaWEvWW91dHViZUNvbnRyb2xcIjtcbmltcG9ydCB7QWxpZ25Db250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvYWxpZ24vQWxpZ25Db250cm9sXCI7XG5pbXBvcnQge0xpc3RDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvYmxvY2svTGlzdENvbnRyb2xcIjtcbmltcG9ydCB7U2V0dGluZ3NDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2V0dGluZy9TZXR0aW5nc0NvbnRyb2xcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGV9IGZyb20gXCJkcmFmdC1qc1wiO1xuXG5leHBvcnQgY29uc3QgTXVuY2hlclRvb2xCYXI6IFJlYWN0LkZDPE11bmNoZXJUb29sYmFyUHJvcHM+ID0gKFxuICAgIHtcbiAgICAgICAgY29kZVZpZXcsIHNldENvZGVWaWV3LCBodG1sLCBlZGl0b3JTdGF0ZSwgb25DaGFuZ2UsXG4gICAgICAgIHNob3dTdHJ1Y3R1cmUsIHNldFNob3dTdHJ1Y3R1cmUsIGZvY3VzRWRpdG9yLCBzYXZlSGFuZGxlciwgZGVsZXRlSGFuZGxlclxuICAgIH0pID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZUFuZEZvY3VzID0gKGN1cnJlbnRFZGl0b3JTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRFZGl0b3JTdGF0ZSk7XG4gICAgICAgIGZvY3VzRWRpdG9yKCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVuY2hlci10b29sYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItdG9vbGJhci0tbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVDb2RlQ29udHJvbCBpc0NvZGVWaWV3PXtjb2RlVmlld30gc2V0SXNDb2RlVmlldz17c2V0Q29kZVZpZXd9IGh0bWw9e2h0bWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX0gc2V0RWRpdG9yU3RhdGU9e29uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXVuY2hlci1zZXBhcmF0b3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxVbmRvQ29udHJvbCBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IHNldEVkaXRvclN0YXRlPXtvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxSZWRvQ29udHJvbCBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IHNldEVkaXRvclN0YXRlPXtvbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIHshY29kZVZpZXcgPyA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm11bmNoZXItc2VwYXJhdG9yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RDb250cm9sIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX0gc2V0RWRpdG9yU3RhdGU9e29uQ2hhbmdlQW5kRm9jdXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbCBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IHNldEVkaXRvclN0YXRlPXtvbkNoYW5nZUFuZEZvY3VzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm11bmNoZXItc2VwYXJhdG9yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPElubGluZUNvbnRyb2wgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfSBzZXRFZGl0b3JTdGF0ZT17b25DaGFuZ2VBbmRGb2N1c30vPlxuICAgICAgICAgICAgICAgICAgICA8Q29sb3JDb250cm9sIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX0gc2V0RWRpdG9yU3RhdGU9e29uQ2hhbmdlQW5kRm9jdXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXVuY2hlci1zZXBhcmF0b3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRyb2wgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfSBzZXRFZGl0b3JTdGF0ZT17b25DaGFuZ2VBbmRGb2N1c30vPlxuICAgICAgICAgICAgICAgICAgICA8VW5saW5rQ29udHJvbCBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IHNldEVkaXRvclN0YXRlPXtvbkNoYW5nZUFuZEZvY3VzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUNvbnRyb2wgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfSBzZXRFZGl0b3JTdGF0ZT17b25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFlvdXR1YmVDb250cm9sIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX0gc2V0RWRpdG9yU3RhdGU9e29uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm11bmNoZXItc2VwYXJhdG9yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEFsaWduQ29udHJvbCBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9IHNldEVkaXRvclN0YXRlPXtvbkNoYW5nZUFuZEZvY3VzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm11bmNoZXItc2VwYXJhdG9yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PiA6ICcnfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVuY2hlci10b29sYmFyLS1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc0NvbnRyb2wgc2hvd1N0cnVjdHVyZT17c2hvd1N0cnVjdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dTdHJ1Y3R1cmU9e3NldFNob3dTdHJ1Y3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlSGFuZGxlcj17c2F2ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVIYW5kbGVyPXtkZWxldGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdW5jaGVyVG9vbGJhclByb3BzIHtcbiAgICBjb2RlVmlldzogYm9vbGVhbjtcbiAgICBzZXRDb2RlVmlldzogKGNvZGVWaWV3OiBib29sZWFuKSA9PiB2b2lkO1xuICAgIGh0bWw/OiBzdHJpbmc7XG4gICAgZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlO1xuICAgIG9uQ2hhbmdlOiAoZTogYW55KSA9PiB2b2lkO1xuICAgIHNob3dTdHJ1Y3R1cmU6IGJvb2xlYW47XG4gICAgc2V0U2hvd1N0cnVjdHVyZTogKHNob3dTdHJ1Y3R1cmU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgZm9jdXNFZGl0b3I6ICgpID0+IHZvaWQ7XG4gICAgc2F2ZUhhbmRsZXI/OiAoKSA9PiB2b2lkO1xuICAgIGRlbGV0ZUhhbmRsZXI/OiAoKSA9PiB2b2lkO1xufSJdfQ==