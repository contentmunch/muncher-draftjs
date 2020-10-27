"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InlineControl = function InlineControl(_ref) {
  var editorState = _ref.editorState,
      setEditorState = _ref.setEditorState;
  var currentStyle = editorState.getCurrentInlineStyle();

  var _onMouseDown = function onMouseDown(e, style) {
    e.preventDefault();
    setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, style));
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, INLINE_TYPES.map(function (inlineType) {
    return /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
      key: inlineType.style,
      title: inlineType.label,
      active: currentStyle.has(inlineType.style),
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, inlineType.style);
      },
      size: "small"
    }, inlineType.icon);
  }));
};

exports.InlineControl = InlineControl;
var INLINE_TYPES = [{
  label: 'Bold',
  style: 'BOLD',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, "B")
}, {
  label: 'Italic',
  style: 'ITALIC',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("em", null, "I"))
}, {
  label: 'Underline',
  style: 'UNDERLINE',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("u", null, "U"))
}, {
  label: 'Monospace',
  style: 'CODE',
  icon: /*#__PURE__*/_react.default.createElement("strong", null, '{', " ", '}')
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9pbmxpbmUvSW5saW5lQ29udHJvbC50c3giXSwibmFtZXMiOlsiSW5saW5lQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJjdXJyZW50U3R5bGUiLCJnZXRDdXJyZW50SW5saW5lU3R5bGUiLCJvbk1vdXNlRG93biIsImUiLCJzdHlsZSIsInByZXZlbnREZWZhdWx0IiwiUmljaFV0aWxzIiwidG9nZ2xlSW5saW5lU3R5bGUiLCJJTkxJTkVfVFlQRVMiLCJtYXAiLCJpbmxpbmVUeXBlIiwibGFiZWwiLCJoYXMiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBSU8sSUFBTUEsYUFBeUMsR0FBRyxTQUE1Q0EsYUFBNEMsT0FBbUM7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjtBQUN4RixNQUFNQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0cscUJBQVosRUFBckI7O0FBQ0EsTUFBTUMsWUFBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUF5Q0MsS0FBekMsRUFBMkQ7QUFDM0VELElBQUFBLENBQUMsQ0FBQ0UsY0FBRjtBQUNBTixJQUFBQSxjQUFjLENBQUNPLG1CQUFVQyxpQkFBVixDQUE0QlQsV0FBNUIsRUFBeUNNLEtBQXpDLENBQUQsQ0FBZDtBQUNILEdBSEQ7O0FBSUEsc0JBQ0ksNkJBQUMsZUFBRCxRQUVRSSxZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQUMsVUFBVTtBQUFBLHdCQUN2Qiw2QkFBQyxpQkFBRDtBQUNJLE1BQUEsR0FBRyxFQUFFQSxVQUFVLENBQUNOLEtBRHBCO0FBRUksTUFBQSxLQUFLLEVBQUVNLFVBQVUsQ0FBQ0MsS0FGdEI7QUFHSSxNQUFBLE1BQU0sRUFBRVgsWUFBWSxDQUFDWSxHQUFiLENBQWlCRixVQUFVLENBQUNOLEtBQTVCLENBSFo7QUFJSSxNQUFBLFdBQVcsRUFBRSxxQkFBQ0QsQ0FBRDtBQUFBLGVBQTJDRCxZQUFXLENBQUNDLENBQUQsRUFBSU8sVUFBVSxDQUFDTixLQUFmLENBQXREO0FBQUEsT0FKakI7QUFLSSxNQUFBLElBQUksRUFBQztBQUxULE9BT0tNLFVBQVUsQ0FBQ0csSUFQaEIsQ0FEdUI7QUFBQSxHQUEzQixDQUZSLENBREo7QUFpQkgsQ0F2Qk07OztBQXdCUCxJQUFNTCxZQUFZLEdBQUcsQ0FDakI7QUFBQ0csRUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JQLEVBQUFBLEtBQUssRUFBRSxNQUF2QjtBQUErQlMsRUFBQUEsSUFBSSxlQUFFO0FBQXJDLENBRGlCLEVBRWpCO0FBQUNGLEVBQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCUCxFQUFBQSxLQUFLLEVBQUUsUUFBekI7QUFBbUNTLEVBQUFBLElBQUksZUFBRSwwREFBUSw2Q0FBUjtBQUF6QyxDQUZpQixFQUdqQjtBQUFDRixFQUFBQSxLQUFLLEVBQUUsV0FBUjtBQUFxQlAsRUFBQUEsS0FBSyxFQUFFLFdBQTVCO0FBQXlDUyxFQUFBQSxJQUFJLGVBQUUsMERBQVEsNENBQVI7QUFBL0MsQ0FIaUIsRUFJakI7QUFBQ0YsRUFBQUEsS0FBSyxFQUFFLFdBQVI7QUFBcUJQLEVBQUFBLEtBQUssRUFBRSxNQUE1QjtBQUFvQ1MsRUFBQUEsSUFBSSxlQUFFLDZDQUFTLEdBQVQsT0FBZSxHQUFmO0FBQTFDLENBSmlCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSaWNoVXRpbHN9IGZyb20gXCJkcmFmdC1qc1wiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJAY29udGVudG11bmNoL211bmNoZXItdWlcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGVQcm9wc30gZnJvbSBcIi4uLy4uL011bmNoZXJcIjtcblxuXG5leHBvcnQgY29uc3QgSW5saW5lQ29udHJvbDogUmVhY3QuRkM8RWRpdG9yU3RhdGVQcm9wcz4gPSAoe2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZX0pID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50SW5saW5lU3R5bGUoKTtcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Piwgc3R5bGU6IHN0cmluZykgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgc3R5bGUpKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBJTkxJTkVfVFlQRVMubWFwKGlubGluZVR5cGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmxpbmVUeXBlLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2lubGluZVR5cGUubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2N1cnJlbnRTdHlsZS5oYXMoaW5saW5lVHlwZS5zdHlsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGU6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IG9uTW91c2VEb3duKGUsIGlubGluZVR5cGUuc3R5bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lubGluZVR5cGUuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5jb25zdCBJTkxJTkVfVFlQRVMgPSBbXG4gICAge2xhYmVsOiAnQm9sZCcsIHN0eWxlOiAnQk9MRCcsIGljb246IDxzdHJvbmc+Qjwvc3Ryb25nPn0sXG4gICAge2xhYmVsOiAnSXRhbGljJywgc3R5bGU6ICdJVEFMSUMnLCBpY29uOiA8c3Ryb25nPjxlbT5JPC9lbT48L3N0cm9uZz59LFxuICAgIHtsYWJlbDogJ1VuZGVybGluZScsIHN0eWxlOiAnVU5ERVJMSU5FJywgaWNvbjogPHN0cm9uZz48dT5VPC91Pjwvc3Ryb25nPn0sXG4gICAge2xhYmVsOiAnTW9ub3NwYWNlJywgc3R5bGU6ICdDT0RFJywgaWNvbjogPHN0cm9uZz57J3snfSB7J30nfTwvc3Ryb25nPn0sXG5dOyJdfQ==