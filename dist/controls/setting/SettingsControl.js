"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SettingsControl;

var _react = _interopRequireWildcard(require("react"));

require("./SettingsControl.scss");

var _muncherUi = require("@contentmunch/muncher-ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SettingsControl(_ref) {
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
}

SettingsControl.propTypes = {
  showStructure: _propTypes.default.bool.isRequired,
  setShowStructure: _propTypes.default.func.isRequired,
  saveHandler: _propTypes.default.func,
  deleteHandler: _propTypes.default.func
};