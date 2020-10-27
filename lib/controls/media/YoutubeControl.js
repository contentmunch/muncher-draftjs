"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _draftJs = require("draft-js");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var YoutubeControl = function YoutubeControl(_ref) {
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
    var contentStateWithEntity = contentState.createEntity('IFRAME', 'IMMUTABLE', {
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
    title: "Add or Edit Video",
    onClick: showLinkPrompt,
    onClose: hideLinkPrompt,
    showContent: showContent,
    setShowContent: setShowContent,
    element: /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: "youtube"
    }),
    size: "small",
    active: showContent
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

exports.YoutubeControl = YoutubeControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9tZWRpYS9Zb3V0dWJlQ29udHJvbC50c3giXSwibmFtZXMiOlsiWW91dHViZUNvbnRyb2wiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwic2hvd0NvbnRlbnQiLCJzZXRTaG93Q29udGVudCIsInVybFZhbHVlIiwic2V0VXJsVmFsdWUiLCJzaG93TGlua1Byb21wdCIsImhpZGVMaW5rUHJvbXB0IiwiY29uZmlybUxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50U3RhdGUiLCJnZXRDdXJyZW50Q29udGVudCIsImNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkiLCJjcmVhdGVFbnRpdHkiLCJzcmMiLCJlbnRpdHlLZXkiLCJnZXRMYXN0Q3JlYXRlZEVudGl0eUtleSIsIm5ld0VkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJzZXQiLCJjdXJyZW50Q29udGVudCIsIkF0b21pY0Jsb2NrVXRpbHMiLCJpbnNlcnRBdG9taWNCbG9jayIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxJQUFNQSxjQUEwQyxHQUFHLFNBQTdDQSxjQUE2QyxPQUdoRDtBQUFBLE1BREZDLFdBQ0UsUUFERkEsV0FDRTtBQUFBLE1BRFdDLGNBQ1gsUUFEV0EsY0FDWDs7QUFBQSxrQkFDZ0MscUJBQVMsS0FBVCxDQURoQztBQUFBO0FBQUEsTUFDQ0MsV0FERDtBQUFBLE1BQ2NDLGNBRGQ7O0FBQUEsbUJBRTBCLHFCQUFTLEVBQVQsQ0FGMUI7QUFBQTtBQUFBLE1BRUNDLFFBRkQ7QUFBQSxNQUVXQyxXQUZYOztBQUlOLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkgsSUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBRkQ7O0FBR0EsTUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCSixJQUFBQSxjQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDSCxHQUhEOztBQUlBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBeUI7QUFDekNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLFlBQVksR0FBR1gsV0FBVyxDQUFDWSxpQkFBWixFQUFyQjtBQUNBLFFBQU1DLHNCQUFzQixHQUFHRixZQUFZLENBQUNHLFlBQWIsQ0FDM0IsUUFEMkIsRUFFM0IsV0FGMkIsRUFHM0I7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFWDtBQUFOLEtBSDJCLENBQS9CO0FBS0EsUUFBTVksU0FBUyxHQUFHSCxzQkFBc0IsQ0FBQ0ksdUJBQXZCLEVBQWxCOztBQUNBLFFBQU1DLGNBQWMsR0FBR0MscUJBQVlDLEdBQVosQ0FBZ0JwQixXQUFoQixFQUE2QjtBQUNoRHFCLE1BQUFBLGNBQWMsRUFBRVI7QUFEZ0MsS0FBN0IsQ0FBdkIsQ0FUeUMsQ0FhekM7QUFDQTs7O0FBQ0FaLElBQUFBLGNBQWMsQ0FDVnFCLDBCQUFpQkMsaUJBQWpCLENBQW1DTCxjQUFuQyxFQUFtREYsU0FBbkQsRUFBOEQsR0FBOUQsQ0FEVSxDQUFkO0FBR0gsR0FsQkQ7O0FBb0JBLHNCQUNJLDZCQUFDLHlCQUFEO0FBQWdCLElBQUEsS0FBSyxFQUFDLG1CQUF0QjtBQUEwQyxJQUFBLE9BQU8sRUFBRVYsY0FBbkQ7QUFBbUUsSUFBQSxPQUFPLEVBQUVDLGNBQTVFO0FBQ2dCLElBQUEsV0FBVyxFQUFFTCxXQUQ3QjtBQUMwQyxJQUFBLGNBQWMsRUFBRUMsY0FEMUQ7QUFFZ0IsSUFBQSxPQUFPLGVBQUUsNkJBQUMsZUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFDO0FBQVgsTUFGekI7QUFFaUQsSUFBQSxJQUFJLEVBQUMsT0FGdEQ7QUFFOEQsSUFBQSxNQUFNLEVBQUVEO0FBRnRFLGtCQUlJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSSw2QkFBQyxnQkFBRDtBQUNJLElBQUEsSUFBSSxFQUFDLE9BRFQ7QUFFSSxJQUFBLElBQUksRUFBQyxLQUZUO0FBR0ksSUFBQSxRQUFRLEVBQUUsa0JBQUFzQixLQUFLO0FBQUEsYUFBSW5CLFdBQVcsQ0FBQ21CLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWY7QUFBQSxLQUhuQjtBQUlJLElBQUEsS0FBSyxFQUFFdEIsUUFKWDtBQUtJLElBQUEsV0FBVyxFQUFDO0FBTGhCLElBREosZUFRSSw2QkFBQyxpQkFBRDtBQUFRLElBQUEsV0FBVyxFQUFFSTtBQUFyQixlQVJKLENBSkosQ0FESjtBQWlCSCxDQW5ETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXRvbWljQmxvY2tVdGlscywgRWRpdG9yU3RhdGV9IGZyb20gJ2RyYWZ0LWpzJztcbmltcG9ydCB7QnV0dG9uLCBEcm9wZG93bkJ1dHRvbiwgSWNvbiwgSW5wdXR9IGZyb20gXCJAY29udGVudG11bmNoL211bmNoZXItdWlcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGVQcm9wc30gZnJvbSBcIi4uLy4uL011bmNoZXJcIjtcblxuZXhwb3J0IGNvbnN0IFlvdXR1YmVDb250cm9sOiBSZWFjdC5GQzxFZGl0b3JTdGF0ZVByb3BzPiA9IChcbiAgICB7XG4gICAgICAgIGVkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZVxuICAgIH0pID0+IHtcbiAgICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXJsVmFsdWUsIHNldFVybFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IHNob3dMaW5rUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhpZGVMaW5rUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIHNldFVybFZhbHVlKCcnKTtcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpcm1MaW5rID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjb250ZW50U3RhdGUgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50U3RhdGVXaXRoRW50aXR5ID0gY29udGVudFN0YXRlLmNyZWF0ZUVudGl0eShcbiAgICAgICAgICAgICdJRlJBTUUnLFxuICAgICAgICAgICAgJ0lNTVVUQUJMRScsXG4gICAgICAgICAgICB7c3JjOiB1cmxWYWx1ZX0sXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVudGl0eUtleSA9IGNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkuZ2V0TGFzdENyZWF0ZWRFbnRpdHlLZXkoKTtcbiAgICAgICAgY29uc3QgbmV3RWRpdG9yU3RhdGUgPSBFZGl0b3JTdGF0ZS5zZXQoZWRpdG9yU3RhdGUsIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZW50OiBjb250ZW50U3RhdGVXaXRoRW50aXR5LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGUgdGhpcmQgcGFyYW1ldGVyIGhlcmUgaXMgYSBzcGFjZSBzdHJpbmcsIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgLy8gSWYgeW91IHNldCBhbiBlbXB0eSBzdHJpbmcsIHlvdSB3aWxsIGdldCBhbiBlcnJvcjogVW5rbm93biBEcmFmdEVudGl0eSBrZXk6IG51bGxcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUoXG4gICAgICAgICAgICBBdG9taWNCbG9ja1V0aWxzLmluc2VydEF0b21pY0Jsb2NrKG5ld0VkaXRvclN0YXRlLCBlbnRpdHlLZXksICcgJyksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiB0aXRsZT1cIkFkZCBvciBFZGl0IFZpZGVvXCIgb25DbGljaz17c2hvd0xpbmtQcm9tcHR9IG9uQ2xvc2U9e2hpZGVMaW5rUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQ9e3Nob3dDb250ZW50fSBzZXRTaG93Q29udGVudD17c2V0U2hvd0NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXs8SWNvbiBuYW1lPVwieW91dHViZVwiLz59IHNpemU9XCJzbWFsbFwiIGFjdGl2ZT17c2hvd0NvbnRlbnR9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItZHJvcC1tZWRpYS0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFVybFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1cmxWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VIb2xkZXI9XCJ0eXBlIHRoZSB1cmxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbk1vdXNlRG93bj17Y29uZmlybUxpbmt9PkNvbmZpcm08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICk7XG59Il19