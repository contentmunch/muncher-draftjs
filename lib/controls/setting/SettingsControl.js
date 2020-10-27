"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsControl = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./assets/SettingsControl.scss");

var _muncherUi = require("@contentmunch/muncher-ui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SettingsControl = function SettingsControl(_ref) {
  var showStructure = _ref.showStructure,
      setShowStructure = _ref.setShowStructure,
      saveHandler = _ref.saveHandler,
      deleteHandler = _ref.deleteHandler;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSaving = _useState4[0],
      setIsSaving = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showDeleteModal = _useState6[0],
      setShowDeleteModal = _useState6[1];

  var toggleStructure = function toggleStructure() {
    setShowStructure(!showStructure);
  };

  var saveClickHandler = function saveClickHandler() {
    if (saveHandler) {
      saveHandler();
    }

    setIsSaving(true);
    setTimeout(function () {
      setIsSaving(false);
    }, 3000);
  };

  var closeAll = function closeAll() {
    setShowDeleteModal(false);
    setShowContent(false);
  };

  var deleteCancelHandler = function deleteCancelHandler() {
    closeAll();
  };

  var deleteConfirmHandler = function deleteConfirmHandler() {
    if (deleteHandler) {
      deleteHandler();
    }

    closeAll();
  };

  var deleteClickHandler = function deleteClickHandler() {
    setShowDeleteModal(true);
  };

  return /*#__PURE__*/_react.default.createElement(_muncherUi.DropdownButton, {
    title: "Settings",
    showContent: showContent,
    setShowContent: setShowContent,
    drop: "left",
    size: "small",
    element: /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
      name: "settings"
    }),
    active: showContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher-settings--content"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Modal, {
    show: showDeleteModal,
    setShow: closeAll
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-modal--info"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "alert",
    size: "large"
  }), /*#__PURE__*/_react.default.createElement("h3", null, "Delete article?")), /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-modal--action"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: deleteConfirmHandler,
    size: "small",
    variant: "secondary"
  }, " ", /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "trash",
    weight: 2
  }), "\xA0", /*#__PURE__*/_react.default.createElement("h3", null, "Delete")), /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: deleteCancelHandler,
    size: "small",
    variant: "secondary"
  }, " ", /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "close",
    weight: 2
  }), "\xA0", /*#__PURE__*/_react.default.createElement("h3", null, "Cancel")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "settings-content--item"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: saveClickHandler,
    size: "small",
    disabled: isSaving,
    variant: "secondary"
  }, " ", /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "save"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Save"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "settings-content--item"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: deleteClickHandler,
    size: "small",
    variant: "secondary"
  }, " ", /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "trash"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Delete"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "settings-content--item"
  }, /*#__PURE__*/_react.default.createElement(_muncherUi.Button, {
    onMouseDown: toggleStructure,
    size: "small",
    variant: "secondary"
  }, showStructure ? /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "toggle-right"
  }) : /*#__PURE__*/_react.default.createElement(_muncherUi.Icon, {
    name: "toggle-left"
  }), /*#__PURE__*/_react.default.createElement("span", null, "Data")))));
};

exports.SettingsControl = SettingsControl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9scy9zZXR0aW5nL1NldHRpbmdzQ29udHJvbC50c3giXSwibmFtZXMiOlsiU2V0dGluZ3NDb250cm9sIiwic2hvd1N0cnVjdHVyZSIsInNldFNob3dTdHJ1Y3R1cmUiLCJzYXZlSGFuZGxlciIsImRlbGV0ZUhhbmRsZXIiLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZVN0cnVjdHVyZSIsInNhdmVDbGlja0hhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xvc2VBbGwiLCJkZWxldGVDYW5jZWxIYW5kbGVyIiwiZGVsZXRlQ29uZmlybUhhbmRsZXIiLCJkZWxldGVDbGlja0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxlQUErQyxHQUFHLFNBQWxEQSxlQUFrRCxPQUNPO0FBQUEsTUFBakVDLGFBQWlFLFFBQWpFQSxhQUFpRTtBQUFBLE1BQWxEQyxnQkFBa0QsUUFBbERBLGdCQUFrRDtBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1COztBQUFBLGtCQUM1QixxQkFBUyxLQUFULENBRDRCO0FBQUE7QUFBQSxNQUMzREMsV0FEMkQ7QUFBQSxNQUM5Q0MsY0FEOEM7O0FBQUEsbUJBRWxDLHFCQUFTLEtBQVQsQ0FGa0M7QUFBQTtBQUFBLE1BRTNEQyxRQUYyRDtBQUFBLE1BRWpEQyxXQUZpRDs7QUFBQSxtQkFHcEIscUJBQVMsS0FBVCxDQUhvQjtBQUFBO0FBQUEsTUFHM0RDLGVBSDJEO0FBQUEsTUFHMUNDLGtCQUgwQzs7QUFJbEUsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCVCxJQUFBQSxnQkFBZ0IsQ0FBQyxDQUFDRCxh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LElBQUEsV0FBVyxFQUFFVSxrQkFEakI7QUFFSSxJQUFBLElBQUksRUFBQyxPQUZUO0FBR0ksSUFBQSxPQUFPLEVBQUM7QUFIWix1QkFJRSw2QkFBQyxlQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUM7QUFBWCxJQUpGLGVBSXNCLG9EQUp0QixDQURKLENBOUJKLGVBc0NJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSSw2QkFBQyxpQkFBRDtBQUNJLElBQUEsV0FBVyxFQUFFTixlQURqQjtBQUVJLElBQUEsSUFBSSxFQUFDLE9BRlQ7QUFHSSxJQUFBLE9BQU8sRUFBQztBQUhaLEtBS0tWLGFBQWEsZ0JBQUcsNkJBQUMsZUFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFBSCxnQkFBaUMsNkJBQUMsZUFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFMbkQsZUFNSSxrREFOSixDQURKLENBdENKLENBRkosQ0FESjtBQXVESCxDQXpGTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi9hc3NldHMvU2V0dGluZ3NDb250cm9sLnNjc3MnO1xuaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duQnV0dG9uLCBJY29uLCBNb2RhbH0gZnJvbSBcIkBjb250ZW50bXVuY2gvbXVuY2hlci11aVwiO1xuXG5leHBvcnQgY29uc3QgU2V0dGluZ3NDb250cm9sOiBSZWFjdC5GQzxTZXR0aW5nc0NvbnRyb2xQcm9wcz4gPSAoXG4gICAge3Nob3dTdHJ1Y3R1cmUsIHNldFNob3dTdHJ1Y3R1cmUsIHNhdmVIYW5kbGVyLCBkZWxldGVIYW5kbGVyfSkgPT4ge1xuICAgIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlU3RydWN0dXJlID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93U3RydWN0dXJlKCFzaG93U3RydWN0dXJlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNhdmVIYW5kbGVyKSB7XG4gICAgICAgICAgICBzYXZlSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHNldElzU2F2aW5nKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldElzU2F2aW5nKGZhbHNlKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0RlbGV0ZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgc2V0U2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBkZWxldGVDYW5jZWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjbG9zZUFsbCgpO1xuICAgIH07XG4gICAgY29uc3QgZGVsZXRlQ29uZmlybUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkZWxldGVIYW5kbGVyKSB7XG4gICAgICAgICAgICBkZWxldGVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xvc2VBbGwoKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlbGV0ZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0RlbGV0ZU1vZGFsKHRydWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIHRpdGxlPVwiU2V0dGluZ3NcIiBzaG93Q29udGVudD17c2hvd0NvbnRlbnR9IHNldFNob3dDb250ZW50PXtzZXRTaG93Q29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3A9XCJsZWZ0XCIgc2l6ZT1cInNtYWxsXCIgZWxlbWVudD17PEljb24gbmFtZT1cInNldHRpbmdzXCIvPn0gYWN0aXZlPXtzaG93Q29udGVudH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bmNoZXItc2V0dGluZ3MtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0RlbGV0ZU1vZGFsfSBzZXRTaG93PXtjbG9zZUFsbH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlLW1vZGFsLS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYWxlcnRcIiBzaXplPVwibGFyZ2VcIi8+PGgzPkRlbGV0ZSBhcnRpY2xlPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbGV0ZS1tb2RhbC0tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2RlbGV0ZUNvbmZpcm1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+IDxJY29uIG5hbWU9XCJ0cmFzaFwiIHdlaWdodD17Mn0vPiZuYnNwOzxoMz5EZWxldGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2RlbGV0ZUNhbmNlbEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gPEljb24gbmFtZT1cImNsb3NlXCIgd2VpZ2h0PXsyfS8+Jm5ic3A7PGgzPkNhbmNlbDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtY29udGVudC0taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17c2F2ZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTYXZpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgPiA8SWNvbiBuYW1lPVwic2F2ZVwiLz48c3Bhbj5TYXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWNvbnRlbnQtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2RlbGV0ZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgPiA8SWNvbiBuYW1lPVwidHJhc2hcIi8+PHNwYW4+RGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWNvbnRlbnQtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RvZ2dsZVN0cnVjdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTdHJ1Y3R1cmUgPyA8SWNvbiBuYW1lPVwidG9nZ2xlLXJpZ2h0XCIvPiA6IDxJY29uIG5hbWU9XCJ0b2dnbGUtbGVmdFwiLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXRhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0NvbnRyb2xQcm9wcyB7XG4gICAgc2hvd1N0cnVjdHVyZTogYm9vbGVhbjtcbiAgICBzZXRTaG93U3RydWN0dXJlOiAoc2hvd1N0cnVjdHVyZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBzYXZlSGFuZGxlcj86ICgpID0+IHZvaWQ7XG4gICAgZGVsZXRlSGFuZGxlcj86ICgpID0+IHZvaWQ7XG59XG5cbiJdfQ==