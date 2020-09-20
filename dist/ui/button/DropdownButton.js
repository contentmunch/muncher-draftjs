"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownButton;

var _react = _interopRequireWildcard(require("react"));

require("./assets/DropdownButton.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DropdownButton(props) {
  var _props = _objectSpread({}, props),
      onClick = _props.onClick,
      disabled = _props.disabled,
      title = _props.title,
      active = _props.active,
      icon = _props.icon,
      drop = _props.drop,
      onClose = _props.onClose,
      showContent = _props.showContent,
      setShowContent = _props.setShowContent;

  var ref = (0, _react.useRef)(null);

  var buttonOnClick = function buttonOnClick(e) {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }

    setShowContent(true);
  };

  var onContentClose = (0, _react.useCallback)(function () {
    setShowContent(false);

    if (onClose) {
      onClose();
    }
  }, [onClose, setShowContent]);
  var escFunction = (0, _react.useCallback)(function (event) {
    if (event.keyCode === 27) {
      onContentClose();
    }
  }, [onContentClose]);
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref && ref !== null) {
        var cur = ref.current;

        if (cur && !cur.contains(event.target)) {
          onContentClose();
        }
      }
    };

    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, onContentClose]);

  var dropdownClass = function dropdownClass() {
    switch (drop) {
      case "left":
        return "muncher__dropdown--content drop-left";

      default:
        return "muncher__dropdown--content";
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "muncher__dropdown",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onMouseDown: buttonOnClick,
    title: title,
    disabled: !!disabled,
    active: active
  }, icon), showContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: dropdownClass()
  }, props.children) : "");
}