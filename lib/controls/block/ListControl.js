"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListControl = function ListControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;

  var onClick = function onClick(style) {
    setEditorState(_draftJs.RichUtils.toggleBlockType(editorState, style));
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, LIST_TYPES.map(function (listType) {
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: listType.style,
      title: listType.label,
      onMouseDown: function onMouseDown() {
        return onClick(listType.style);
      },
      size: "small",
      active: listType.style === (0, _DraftUtilities.getBlockType)(editorState)
    }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      iconString: listType.iconName
    }));
  }));
};

exports.ListControl = ListControl;
var LIST_TYPES = [{
  label: 'Ordered List',
  style: 'ordered-list-item',
  iconName: 'ordered-list'
}, {
  label: 'Unordered List',
  style: 'unordered-list-item',
  iconName: 'unordered-list'
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9ibG9jay9MaXN0Q29udHJvbC50c3giXSwibmFtZXMiOlsiTGlzdENvbnRyb2wiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwib25DbGljayIsInN0eWxlIiwiUmljaFV0aWxzIiwidG9nZ2xlQmxvY2tUeXBlIiwiTElTVF9UWVBFUyIsIm1hcCIsImxpc3RUeXBlIiwibGFiZWwiLCJpY29uTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUlPLElBQU1BLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLE9BQW1DO0FBQUEsTUFBakNDLFdBQWlDLFFBQWpDQSxXQUFpQztBQUFBLE1BQXBCQyxjQUFvQixRQUFwQkEsY0FBb0I7O0FBQ3RGLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBZ0I7QUFDNUJGLElBQUFBLGNBQWMsQ0FBQ0csbUJBQVVDLGVBQVYsQ0FBMEJMLFdBQTFCLEVBQXVDRyxLQUF2QyxDQUFELENBQWQ7QUFDSCxHQUZEOztBQUdBLHNCQUNJLDZCQUFDLGVBQUQsUUFFUUcsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQUMsUUFBUTtBQUFBLHdCQUNuQiw2QkFBQyxpQkFBRDtBQUNJLE1BQUEsR0FBRyxFQUFFQSxRQUFRLENBQUNMLEtBRGxCO0FBQ3lCLE1BQUEsS0FBSyxFQUFFSyxRQUFRLENBQUNDLEtBRHpDO0FBRUksTUFBQSxXQUFXLEVBQUU7QUFBQSxlQUFNUCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0wsS0FBVixDQUFiO0FBQUEsT0FGakI7QUFHSSxNQUFBLElBQUksRUFBQyxPQUhUO0FBR2lCLE1BQUEsTUFBTSxFQUFFSyxRQUFRLENBQUNMLEtBQVQsS0FBbUIsa0NBQWFILFdBQWI7QUFINUMsb0JBS0ksNkJBQUMsZUFBRDtBQUFNLE1BQUEsVUFBVSxFQUFFUSxRQUFRLENBQUNFO0FBQTNCLE1BTEosQ0FEbUI7QUFBQSxHQUF2QixDQUZSLENBREo7QUFjSCxDQWxCTTs7O0FBbUJQLElBQU1KLFVBQVUsR0FBRyxDQUNmO0FBQUNHLEVBQUFBLEtBQUssRUFBRSxjQUFSO0FBQXdCTixFQUFBQSxLQUFLLEVBQUUsbUJBQS9CO0FBQW9ETyxFQUFBQSxRQUFRLEVBQUU7QUFBOUQsQ0FEZSxFQUVmO0FBQUNELEVBQUFBLEtBQUssRUFBRSxnQkFBUjtBQUEwQk4sRUFBQUEsS0FBSyxFQUFFLHFCQUFqQztBQUF3RE8sRUFBQUEsUUFBUSxFQUFFO0FBQWxFLENBRmUsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JpY2hVdGlsc30gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQge2dldEJsb2NrVHlwZX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kcmFmdC9EcmFmdFV0aWxpdGllc1wiO1xuaW1wb3J0IHtCdXR0b24sIEljb259IGZyb20gXCJAY29udGVudG11bmNoL211bmNoZXItdWlcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGVQcm9wc30gZnJvbSBcIi4uLy4uL011bmNoZXJcIjtcblxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRyb2w6IFJlYWN0LkZDPEVkaXRvclN0YXRlUHJvcHM+ID0gKHtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGV9KSA9PiB7XG4gICAgY29uc3Qgb25DbGljayA9IChzdHlsZTogYW55KSA9PiB7XG4gICAgICAgIHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVCbG9ja1R5cGUoZWRpdG9yU3RhdGUsIHN0eWxlKSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgTElTVF9UWVBFUy5tYXAobGlzdFR5cGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaXN0VHlwZS5zdHlsZX0gdGl0bGU9e2xpc3RUeXBlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IG9uQ2xpY2sobGlzdFR5cGUuc3R5bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCIgYWN0aXZlPXtsaXN0VHlwZS5zdHlsZSA9PT0gZ2V0QmxvY2tUeXBlKGVkaXRvclN0YXRlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvblN0cmluZz17bGlzdFR5cGUuaWNvbk5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufTtcbmNvbnN0IExJU1RfVFlQRVMgPSBbXG4gICAge2xhYmVsOiAnT3JkZXJlZCBMaXN0Jywgc3R5bGU6ICdvcmRlcmVkLWxpc3QtaXRlbScsIGljb25OYW1lOiAnb3JkZXJlZC1saXN0J30sXG4gICAge2xhYmVsOiAnVW5vcmRlcmVkIExpc3QnLCBzdHlsZTogJ3Vub3JkZXJlZC1saXN0LWl0ZW0nLCBpY29uTmFtZTogJ3Vub3JkZXJlZC1saXN0J30sXG5dOyJdfQ==