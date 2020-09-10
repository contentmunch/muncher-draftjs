"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StrikethroughIcon;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StrikethroughIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 4H9A3 3 0 0 0 6.17 8"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 12a4 4 0 0 1 0 8H6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }));
}