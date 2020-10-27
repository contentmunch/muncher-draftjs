"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _DraftUtilities = require("../../utilities/draft/DraftUtilities");

require("./assets/LinkControl.scss");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LinkControl = function LinkControl(_ref) {
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

  var selectionState = editorState.getSelection();

  var showLinkPrompt = function showLinkPrompt(e) {
    e.preventDefault();
    var selectionEntity = (0, _DraftUtilities.entityFromSelection)(editorState);
    var url = '';

    if (selectionEntity !== null && selectionEntity.type === 'LINK') {
      url = selectionEntity.getData().url;
    }

    setUrlValue(url);
    setShowContent(true);
  };

  var hideLinkPrompt = function hideLinkPrompt() {
    setShowContent(false);
    setUrlValue('');
  };

  var confirmLink = function confirmLink(e) {
    e.preventDefault();
    var contentState = editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
      url: urlValue
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    var newEditorState = _draftJs.EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });

    setEditorState(_draftJs.RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));
    hideLinkPrompt();
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.DropdownButton, {
    title: "Add or edit a link",
    onClick: showLinkPrompt,
    onClose: hideLinkPrompt,
    showContent: showContent,
    setShowContent: setShowContent,
    disabled: selectionState.isCollapsed(),
    active: showContent,
    element: /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: "link"
    }),
    size: "small"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-drop-link--content"
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
  }, "APPLY")));
};

exports.LinkControl = LinkControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9saW5rL0xpbmtDb250cm9sLnRzeCJdLCJuYW1lcyI6WyJMaW5rQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwidXJsVmFsdWUiLCJzZXRVcmxWYWx1ZSIsInNlbGVjdGlvblN0YXRlIiwiZ2V0U2VsZWN0aW9uIiwic2hvd0xpbmtQcm9tcHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3Rpb25FbnRpdHkiLCJ1cmwiLCJ0eXBlIiwiZ2V0RGF0YSIsImhpZGVMaW5rUHJvbXB0IiwiY29uZmlybUxpbmsiLCJjb250ZW50U3RhdGUiLCJnZXRDdXJyZW50Q29udGVudCIsImNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkiLCJjcmVhdGVFbnRpdHkiLCJlbnRpdHlLZXkiLCJnZXRMYXN0Q3JlYXRlZEVudGl0eUtleSIsIm5ld0VkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJzZXQiLCJjdXJyZW50Q29udGVudCIsIlJpY2hVdGlscyIsInRvZ2dsZUxpbmsiLCJpc0NvbGxhcHNlZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxPQUFtQztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9COztBQUFBLGtCQUNoRCxxQkFBUyxLQUFULENBRGdEO0FBQUE7QUFBQSxNQUMvRUMsV0FEK0U7QUFBQSxNQUNsRUMsY0FEa0U7O0FBQUEsbUJBRXRELHFCQUFTLEVBQVQsQ0FGc0Q7QUFBQTtBQUFBLE1BRS9FQyxRQUYrRTtBQUFBLE1BRXJFQyxXQUZxRTs7QUFHdEYsTUFBTUMsY0FBYyxHQUFHTixXQUFXLENBQUNPLFlBQVosRUFBdkI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQXdEO0FBQzNFQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxlQUFlLEdBQUcseUNBQW9CWCxXQUFwQixDQUF4QjtBQUNBLFFBQUlZLEdBQUcsR0FBRyxFQUFWOztBQUNBLFFBQUlELGVBQWUsS0FBSyxJQUFwQixJQUE0QkEsZUFBZSxDQUFDRSxJQUFoQixLQUF5QixNQUF6RCxFQUFpRTtBQUM3REQsTUFBQUEsR0FBRyxHQUFHRCxlQUFlLENBQUNHLE9BQWhCLEdBQTBCRixHQUFoQztBQUNIOztBQUNEUCxJQUFBQSxXQUFXLENBQUNPLEdBQUQsQ0FBWDtBQUNBVCxJQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsR0FURDs7QUFVQSxNQUFNWSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJaLElBQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBSUEsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1AsQ0FBRCxFQUF5QjtBQUN6Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTU8sWUFBWSxHQUFHakIsV0FBVyxDQUFDa0IsaUJBQVosRUFBckI7QUFDQSxRQUFNQyxzQkFBc0IsR0FBR0YsWUFBWSxDQUFDRyxZQUFiLENBQzNCLE1BRDJCLEVBRTNCLFNBRjJCLEVBRzNCO0FBQUNSLE1BQUFBLEdBQUcsRUFBRVI7QUFBTixLQUgyQixDQUEvQjtBQUtBLFFBQU1pQixTQUFTLEdBQUdGLHNCQUFzQixDQUFDRyx1QkFBdkIsRUFBbEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyxxQkFBWUMsR0FBWixDQUFnQnpCLFdBQWhCLEVBQTZCO0FBQUMwQixNQUFBQSxjQUFjLEVBQUVQO0FBQWpCLEtBQTdCLENBQXZCOztBQUVBbEIsSUFBQUEsY0FBYyxDQUFDMEIsbUJBQVVDLFVBQVYsQ0FBcUJMLGNBQXJCLEVBQXFDQSxjQUFjLENBQUNoQixZQUFmLEVBQXJDLEVBQW9FYyxTQUFwRSxDQUFELENBQWQ7QUFDQU4sSUFBQUEsY0FBYztBQUNqQixHQWJEOztBQWdCQSxzQkFDSSw2QkFBQyx5QkFBRDtBQUFnQixJQUFBLEtBQUssRUFBQyxvQkFBdEI7QUFBMkMsSUFBQSxPQUFPLEVBQUVQLGNBQXBEO0FBQW9FLElBQUEsT0FBTyxFQUFFTyxjQUE3RTtBQUNnQixJQUFBLFdBQVcsRUFBRWIsV0FEN0I7QUFDMEMsSUFBQSxjQUFjLEVBQUVDLGNBRDFEO0FBRWdCLElBQUEsUUFBUSxFQUFFRyxjQUFjLENBQUN1QixXQUFmLEVBRjFCO0FBRXdELElBQUEsTUFBTSxFQUFFM0IsV0FGaEU7QUFHZ0IsSUFBQSxPQUFPLGVBQUUsNkJBQUMsZUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFDO0FBQVgsTUFIekI7QUFHOEMsSUFBQSxJQUFJLEVBQUM7QUFIbkQsa0JBS0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJLDZCQUFDLGdCQUFEO0FBQ0ksSUFBQSxJQUFJLEVBQUMsT0FEVDtBQUVJLElBQUEsSUFBSSxFQUFDLEtBRlQ7QUFHSSxJQUFBLFFBQVEsRUFBRSxrQkFBQTRCLEtBQUs7QUFBQSxhQUFJekIsV0FBVyxDQUFDeUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBLEtBSG5CO0FBSUksSUFBQSxLQUFLLEVBQUU1QixRQUpYO0FBS0ksSUFBQSxXQUFXLEVBQUM7QUFMaEIsSUFESixlQVFJLDZCQUFDLGlCQUFEO0FBQVEsSUFBQSxXQUFXLEVBQUVZO0FBQXJCLGFBUkosQ0FMSixDQURKO0FBa0JILENBckRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZSwgUmljaFV0aWxzfSBmcm9tICdkcmFmdC1qcyc7XG5pbXBvcnQge2VudGl0eUZyb21TZWxlY3Rpb259IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZHJhZnQvRHJhZnRVdGlsaXRpZXNcIjtcbmltcG9ydCAnLi9hc3NldHMvTGlua0NvbnRyb2wuc2Nzcyc7XG5pbXBvcnQge0J1dHRvbiwgRHJvcGRvd25CdXR0b24sIEljb24sIElucHV0fSBmcm9tIFwiQGNvbnRlbnRtdW5jaC9tdW5jaGVyLXVpXCI7XG5pbXBvcnQge0VkaXRvclN0YXRlUHJvcHN9IGZyb20gXCIuLi8uLi9NdW5jaGVyXCI7XG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udHJvbDogUmVhY3QuRkM8RWRpdG9yU3RhdGVQcm9wcz4gPSAoe2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZX0pID0+IHtcbiAgICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXJsVmFsdWUsIHNldFVybFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBzZWxlY3Rpb25TdGF0ZSA9IGVkaXRvclN0YXRlLmdldFNlbGVjdGlvbigpO1xuXG4gICAgY29uc3Qgc2hvd0xpbmtQcm9tcHQgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25FbnRpdHkgPSBlbnRpdHlGcm9tU2VsZWN0aW9uKGVkaXRvclN0YXRlKTtcbiAgICAgICAgbGV0IHVybCA9ICcnO1xuICAgICAgICBpZiAoc2VsZWN0aW9uRW50aXR5ICE9PSBudWxsICYmIHNlbGVjdGlvbkVudGl0eS50eXBlID09PSAnTElOSycpIHtcbiAgICAgICAgICAgIHVybCA9IHNlbGVjdGlvbkVudGl0eS5nZXREYXRhKCkudXJsO1xuICAgICAgICB9XG4gICAgICAgIHNldFVybFZhbHVlKHVybCk7XG4gICAgICAgIHNldFNob3dDb250ZW50KHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgaGlkZUxpbmtQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgc2V0VXJsVmFsdWUoJycpO1xuICAgIH07XG4gICAgY29uc3QgY29uZmlybUxpbmsgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0ZSA9IGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkgPSBjb250ZW50U3RhdGUuY3JlYXRlRW50aXR5KFxuICAgICAgICAgICAgJ0xJTksnLFxuICAgICAgICAgICAgJ01VVEFCTEUnLFxuICAgICAgICAgICAge3VybDogdXJsVmFsdWV9LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlbnRpdHlLZXkgPSBjb250ZW50U3RhdGVXaXRoRW50aXR5LmdldExhc3RDcmVhdGVkRW50aXR5S2V5KCk7XG4gICAgICAgIGNvbnN0IG5ld0VkaXRvclN0YXRlID0gRWRpdG9yU3RhdGUuc2V0KGVkaXRvclN0YXRlLCB7Y3VycmVudENvbnRlbnQ6IGNvbnRlbnRTdGF0ZVdpdGhFbnRpdHl9KTtcblxuICAgICAgICBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlTGluayhuZXdFZGl0b3JTdGF0ZSwgbmV3RWRpdG9yU3RhdGUuZ2V0U2VsZWN0aW9uKCksIGVudGl0eUtleSkpO1xuICAgICAgICBoaWRlTGlua1Byb21wdCgpO1xuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiB0aXRsZT1cIkFkZCBvciBlZGl0IGEgbGlua1wiIG9uQ2xpY2s9e3Nob3dMaW5rUHJvbXB0fSBvbkNsb3NlPXtoaWRlTGlua1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb250ZW50PXtzaG93Q29udGVudH0gc2V0U2hvd0NvbnRlbnQ9e3NldFNob3dDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGlvblN0YXRlLmlzQ29sbGFwc2VkKCl9IGFjdGl2ZT17c2hvd0NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXs8SWNvbiBuYW1lPVwibGlua1wiLz59IHNpemU9XCJzbWFsbFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItZHJvcC1saW5rLS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VXJsVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VybFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZUhvbGRlcj1cInR5cGUgdGhlIHVybFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uTW91c2VEb3duPXtjb25maXJtTGlua30+QVBQTFk8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICk7XG59XG4iXX0=