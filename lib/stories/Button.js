"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? false : _ref$primary,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      backgroundColor = _ref.backgroundColor,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["primary", "size", "backgroundColor", "label"]);

  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

exports.Button = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL0J1dHRvbi50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicHJpbWFyeSIsInNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbCIsInByb3BzIiwibW9kZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQU12QztBQUFBLDBCQUxKQyxPQUtJO0FBQUEsTUFMSkEsT0FLSSw2QkFMTSxLQUtOO0FBQUEsdUJBSkpDLElBSUk7QUFBQSxNQUpKQSxJQUlJLDBCQUpHLFFBSUg7QUFBQSxNQUhKQyxlQUdJLFFBSEpBLGVBR0k7QUFBQSxNQUZKQyxLQUVJLFFBRkpBLEtBRUk7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU1DLElBQUksR0FBR0wsT0FBTyxHQUFHLDJCQUFILEdBQWlDLDZCQUFyRDtBQUNBLHNCQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLENBQUMsa0JBQUQsOEJBQTBDQyxJQUExQyxHQUFrREksSUFBbEQsRUFBd0RDLElBQXhELENBQTZELEdBQTdELENBRmI7QUFHRSxJQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxlQUFlLEVBQWZBO0FBQUY7QUFIVCxLQUlNRSxLQUpOLEdBTUdELEtBTkgsQ0FERjtBQVVELENBbEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9idXR0b24uY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyB7XG4gIC8qKlxuICAgKiBJcyB0aGlzIHRoZSBwcmluY2lwYWwgY2FsbCB0byBhY3Rpb24gb24gdGhlIHBhZ2U/XG4gICAqL1xuICBwcmltYXJ5PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoYXQgYmFja2dyb3VuZCBjb2xvciB0byB1c2VcbiAgICovXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEhvdyBsYXJnZSBzaG91bGQgdGhlIGJ1dHRvbiBiZT9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuICAvKipcbiAgICogQnV0dG9uIGNvbnRlbnRzXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwgY2xpY2sgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHtcbiAgcHJpbWFyeSA9IGZhbHNlLFxuICBzaXplID0gJ21lZGl1bScsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgbGFiZWwsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBwcmltYXJ5ID8gJ3N0b3J5Ym9vay1idXR0b24tLXByaW1hcnknIDogJ3N0b3J5Ym9vay1idXR0b24tLXNlY29uZGFyeSc7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1snc3Rvcnlib29rLWJ1dHRvbicsIGBzdG9yeWJvb2stYnV0dG9uLS0ke3NpemV9YCwgbW9kZV0uam9pbignICcpfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdfQ==