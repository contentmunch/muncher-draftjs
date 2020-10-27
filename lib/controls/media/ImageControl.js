"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

require("./assets/MediaControl.scss");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ImageControl = function ImageControl(_ref) {
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
};

exports.ImageControl = ImageControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9tZWRpYS9JbWFnZUNvbnRyb2wudHN4Il0sIm5hbWVzIjpbIkltYWdlQ29udHJvbCIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwidXJsVmFsdWUiLCJzZXRVcmxWYWx1ZSIsInNob3dMaW5rUHJvbXB0IiwiaGlkZUxpbmtQcm9tcHQiLCJjb25maXJtTGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnRTdGF0ZSIsImdldEN1cnJlbnRDb250ZW50IiwiY29udGVudFN0YXRlV2l0aEVudGl0eSIsImNyZWF0ZUVudGl0eSIsInNyYyIsImVudGl0eUtleSIsImdldExhc3RDcmVhdGVkRW50aXR5S2V5IiwibmV3RWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsInNldCIsImN1cnJlbnRDb250ZW50IiwiQXRvbWljQmxvY2tVdGlscyIsImluc2VydEF0b21pY0Jsb2NrIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLElBQU1BLFlBQXdDLEdBQUcsU0FBM0NBLFlBQTJDLE9BRzlDO0FBQUEsTUFERkMsV0FDRSxRQURGQSxXQUNFO0FBQUEsTUFEV0MsY0FDWCxRQURXQSxjQUNYOztBQUFBLGtCQUNnQyxxQkFBUyxLQUFULENBRGhDO0FBQUE7QUFBQSxNQUNDQyxXQUREO0FBQUEsTUFDY0MsY0FEZDs7QUFBQSxtQkFFMEIscUJBQVMsRUFBVCxDQUYxQjtBQUFBO0FBQUEsTUFFQ0MsUUFGRDtBQUFBLE1BRVdDLFdBRlg7O0FBSU4sTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCSCxJQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsR0FGRDs7QUFHQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJKLElBQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBSUEsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUF5QjtBQUN6Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsWUFBWSxHQUFHWCxXQUFXLENBQUNZLGlCQUFaLEVBQXJCO0FBQ0EsUUFBTUMsc0JBQXNCLEdBQUdGLFlBQVksQ0FBQ0csWUFBYixDQUMzQixPQUQyQixFQUUzQixXQUYyQixFQUczQjtBQUFDQyxNQUFBQSxHQUFHLEVBQUVYO0FBQU4sS0FIMkIsQ0FBL0I7QUFLQSxRQUFNWSxTQUFTLEdBQUdILHNCQUFzQixDQUFDSSx1QkFBdkIsRUFBbEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyxxQkFBWUMsR0FBWixDQUFnQnBCLFdBQWhCLEVBQTZCO0FBQ2hEcUIsTUFBQUEsY0FBYyxFQUFFUjtBQURnQyxLQUE3QixDQUF2QixDQVR5QyxDQWF6QztBQUNBOzs7QUFDQVosSUFBQUEsY0FBYyxDQUNWcUIsMEJBQWlCQyxpQkFBakIsQ0FBbUNMLGNBQW5DLEVBQW1ERixTQUFuRCxFQUE4RCxHQUE5RCxDQURVLENBQWQ7QUFHSCxHQWxCRDs7QUFvQkEsc0JBQ0ksNkJBQUMseUJBQUQ7QUFBZ0IsSUFBQSxLQUFLLEVBQUMsbUJBQXRCO0FBQTBDLElBQUEsT0FBTyxFQUFFVixjQUFuRDtBQUFtRSxJQUFBLE9BQU8sRUFBRUMsY0FBNUU7QUFDZ0IsSUFBQSxXQUFXLEVBQUVMLFdBRDdCO0FBQzBDLElBQUEsY0FBYyxFQUFFQyxjQUQxRDtBQUMwRSxJQUFBLE1BQU0sRUFBRUQsV0FEbEY7QUFFZ0IsSUFBQSxPQUFPLGVBQUUsNkJBQUMsZUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFDO0FBQVgsTUFGekI7QUFFK0MsSUFBQSxJQUFJLEVBQUM7QUFGcEQsa0JBSUk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNJLDZCQUFDLGdCQUFEO0FBQ0ksSUFBQSxJQUFJLEVBQUMsT0FEVDtBQUVJLElBQUEsSUFBSSxFQUFDLEtBRlQ7QUFHSSxJQUFBLFFBQVEsRUFBRSxrQkFBQXNCLEtBQUs7QUFBQSxhQUFJbkIsV0FBVyxDQUFDbUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZjtBQUFBLEtBSG5CO0FBSUksSUFBQSxLQUFLLEVBQUV0QixRQUpYO0FBS0ksSUFBQSxXQUFXLEVBQUM7QUFMaEIsSUFESixlQVFJLDZCQUFDLGlCQUFEO0FBQVEsSUFBQSxXQUFXLEVBQUVJO0FBQXJCLGVBUkosQ0FKSixDQURKO0FBaUJILENBbkRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdG9taWNCbG9ja1V0aWxzLCBFZGl0b3JTdGF0ZX0gZnJvbSAnZHJhZnQtanMnO1xuaW1wb3J0ICcuL2Fzc2V0cy9NZWRpYUNvbnRyb2wuc2NzcydcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93bkJ1dHRvbiwgSWNvbiwgSW5wdXR9IGZyb20gXCJAY29udGVudG11bmNoL211bmNoZXItdWlcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGVQcm9wc30gZnJvbSBcIi4uLy4uL011bmNoZXJcIjtcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udHJvbDogUmVhY3QuRkM8RWRpdG9yU3RhdGVQcm9wcz4gPSAoXG4gICAge1xuICAgICAgICBlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dDb250ZW50LCBzZXRTaG93Q29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VybFZhbHVlLCBzZXRVcmxWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBzaG93TGlua1Byb21wdCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBoaWRlTGlua1Byb21wdCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICBzZXRVcmxWYWx1ZSgnJyk7XG4gICAgfTtcbiAgICBjb25zdCBjb25maXJtTGluayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY29udGVudFN0YXRlID0gZWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKTtcbiAgICAgICAgY29uc3QgY29udGVudFN0YXRlV2l0aEVudGl0eSA9IGNvbnRlbnRTdGF0ZS5jcmVhdGVFbnRpdHkoXG4gICAgICAgICAgICAnaW1hZ2UnLFxuICAgICAgICAgICAgJ0lNTVVUQUJMRScsXG4gICAgICAgICAgICB7c3JjOiB1cmxWYWx1ZX0sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVudGl0eUtleSA9IGNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkuZ2V0TGFzdENyZWF0ZWRFbnRpdHlLZXkoKTtcbiAgICAgICAgY29uc3QgbmV3RWRpdG9yU3RhdGUgPSBFZGl0b3JTdGF0ZS5zZXQoZWRpdG9yU3RhdGUsIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZW50OiBjb250ZW50U3RhdGVXaXRoRW50aXR5LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGUgdGhpcmQgcGFyYW1ldGVyIGhlcmUgaXMgYSBzcGFjZSBzdHJpbmcsIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgLy8gSWYgeW91IHNldCBhbiBlbXB0eSBzdHJpbmcsIHlvdSB3aWxsIGdldCBhbiBlcnJvcjogVW5rbm93biBEcmFmdEVudGl0eSBrZXk6IG51bGxcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoXG4gICAgICAgICAgICBBdG9taWNCbG9ja1V0aWxzLmluc2VydEF0b21pY0Jsb2NrKG5ld0VkaXRvclN0YXRlLCBlbnRpdHlLZXksICcgJyksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiB0aXRsZT1cIkFkZCBvciBFZGl0IEltYWdlXCIgb25DbGljaz17c2hvd0xpbmtQcm9tcHR9IG9uQ2xvc2U9e2hpZGVMaW5rUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQ9e3Nob3dDb250ZW50fSBzZXRTaG93Q29udGVudD17c2V0U2hvd0NvbnRlbnR9IGFjdGl2ZT17c2hvd0NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXs8SWNvbiBuYW1lPVwiaW1hZ2VcIi8+fSBzaXplPVwic21hbGxcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdW5jaGVyLWRyb3AtbWVkaWEtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRVcmxWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXJsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwidHlwZSB0aGUgdXJsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25Nb3VzZURvd249e2NvbmZpcm1MaW5rfT5Db25maXJtPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICApO1xufSJdfQ==