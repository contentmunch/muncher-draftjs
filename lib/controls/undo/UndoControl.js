"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UndoControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndoControl = function UndoControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick() {
    setEditorState(_draftJs.EditorState.undo(editorState));
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    title: "Undo",
    size: "small",
    onClick: onClick,
    disabled: editorState.getUndoStack().size === 0
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "undo"
  }));
};

exports.UndoControl = UndoControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy91bmRvL1VuZG9Db250cm9sLnRzeCJdLCJuYW1lcyI6WyJVbmRvQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJvbkNsaWNrIiwiRWRpdG9yU3RhdGUiLCJ1bmRvIiwiZ2V0VW5kb1N0YWNrIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBR08sSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsT0FDakI7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjs7QUFDbEMsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkQsSUFBQUEsY0FBYyxDQUFDRSxxQkFBWUMsSUFBWixDQUFpQkosV0FBakIsQ0FBRCxDQUFkO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSSw2QkFBQyxpQkFBRDtBQUFRLElBQUEsS0FBSyxFQUFDLE1BQWQ7QUFBcUIsSUFBQSxJQUFJLEVBQUMsT0FBMUI7QUFBa0MsSUFBQSxPQUFPLEVBQUVFLE9BQTNDO0FBQW9ELElBQUEsUUFBUSxFQUFFRixXQUFXLENBQUNLLFlBQVosR0FBMkJDLElBQTNCLEtBQW9DO0FBQWxHLGtCQUNJLDZCQUFDLGVBQUQ7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLElBREosQ0FESjtBQUtILENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0VkaXRvclN0YXRlfSBmcm9tICdkcmFmdC1qcyc7XG5pbXBvcnQge0J1dHRvbiwgSWNvbn0gZnJvbSBcIkBjb250ZW50bXVuY2gvbXVuY2hlci11aVwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZVByb3BzfSBmcm9tIFwiLi4vLi4vTXVuY2hlclwiO1xuXG5leHBvcnQgY29uc3QgVW5kb0NvbnRyb2w6IFJlYWN0LkZDPEVkaXRvclN0YXRlUHJvcHM+ID0gKFxuICAgIHtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGV9KSA9PiB7XG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoRWRpdG9yU3RhdGUudW5kbyhlZGl0b3JTdGF0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uIHRpdGxlPVwiVW5kb1wiIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e29uQ2xpY2t9IGRpc2FibGVkPXtlZGl0b3JTdGF0ZS5nZXRVbmRvU3RhY2soKS5zaXplID09PSAwfT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1bmRvXCIvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICApO1xufSJdfQ==