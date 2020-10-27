"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedoControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _muncherUi = require("@contentmunch/muncher-ui");

var _draftJs = require("draft-js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedoControl = function RedoControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick() {
    setEditorState(_draftJs.EditorState.redo(editorState));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: "Redo",
    size: "small",
    onMouseDown: onClick,
    disabled: editorState.getRedoStack().size === 0
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "redo"
  }));
};

exports.RedoControl = RedoControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy91bmRvL1JlZG9Db250cm9sLnRzeCJdLCJuYW1lcyI6WyJSZWRvQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJvbkNsaWNrIiwiRWRpdG9yU3RhdGUiLCJyZWRvIiwiZ2V0UmVkb1N0YWNrIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBR08sSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsT0FDakI7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjs7QUFDbEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkQsSUFBQUEsY0FBYyxDQUFDRSxxQkFBWUMsSUFBWixDQUFpQkosV0FBakIsQ0FBRCxDQUFkO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSSw2QkFBQyxpQkFBRDtBQUFRLElBQUEsS0FBSyxFQUFDLE1BQWQ7QUFBcUIsSUFBQSxJQUFJLEVBQUMsT0FBMUI7QUFBa0MsSUFBQSxXQUFXLEVBQUVFLE9BQS9DO0FBQ1EsSUFBQSxRQUFRLEVBQUVGLFdBQVcsQ0FBQ0ssWUFBWixHQUEyQkMsSUFBM0IsS0FBb0M7QUFEdEQsa0JBRUksNkJBQUMsZUFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFGSixDQURKO0FBTUgsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnV0dG9uLCBJY29ufSBmcm9tIFwiQGNvbnRlbnRtdW5jaC9tdW5jaGVyLXVpXCI7XG5pbXBvcnQge0VkaXRvclN0YXRlfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGVQcm9wc30gZnJvbSBcIi4uLy4uL011bmNoZXJcIjtcblxuZXhwb3J0IGNvbnN0IFJlZG9Db250cm9sOiBSZWFjdC5GQzxFZGl0b3JTdGF0ZVByb3BzPiA9IChcbiAgICB7ZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEVkaXRvclN0YXRlKEVkaXRvclN0YXRlLnJlZG8oZWRpdG9yU3RhdGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiB0aXRsZT1cIlJlZG9cIiBzaXplPVwic21hbGxcIiBvbk1vdXNlRG93bj17b25DbGlja31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZWRpdG9yU3RhdGUuZ2V0UmVkb1N0YWNrKCkuc2l6ZSA9PT0gMH0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicmVkb1wiLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKTtcbn1cbiJdfQ==