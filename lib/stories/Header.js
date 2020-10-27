"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

require("./header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      onCreateAccount = _ref.onCreateAccount;
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
    fill: "#FFF"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
    fill: "#555AB9"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
    fill: "#91BAF8"
  }))), /*#__PURE__*/_react.default.createElement("h1", null, "Acme")), /*#__PURE__*/_react.default.createElement("div", null, user ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: "small",
    onClick: onLogout,
    label: "Log out"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: "small",
    onClick: onLogin,
    label: "Log in"
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    primary: true,
    size: "small",
    onClick: onCreateAccount,
    label: "Sign up"
  })))));
};

exports.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlciIsIm9uTG9naW4iLCJvbkxvZ291dCIsIm9uQ3JlYXRlQWNjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7O0FBU08sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0M7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxPQUFULFFBQVNBLE9BQVQ7QUFBQSxNQUFrQkMsUUFBbEIsUUFBa0JBLFFBQWxCO0FBQUEsTUFBNEJDLGVBQTVCLFFBQTRCQSxlQUE1QjtBQUFBLHNCQUMzQywwREFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsdURBQ0U7QUFBSyxJQUFBLEtBQUssRUFBQyxJQUFYO0FBQWdCLElBQUEsTUFBTSxFQUFDLElBQXZCO0FBQTRCLElBQUEsT0FBTyxFQUFDLFdBQXBDO0FBQWdELElBQUEsS0FBSyxFQUFDO0FBQXRELGtCQUNFO0FBQUcsSUFBQSxJQUFJLEVBQUMsTUFBUjtBQUFlLElBQUEsUUFBUSxFQUFDO0FBQXhCLGtCQUNFO0FBQ0UsSUFBQSxDQUFDLEVBQUMsbUZBREo7QUFFRSxJQUFBLElBQUksRUFBQztBQUZQLElBREYsZUFLRTtBQUNFLElBQUEsQ0FBQyxFQUFDLGtFQURKO0FBRUUsSUFBQSxJQUFJLEVBQUM7QUFGUCxJQUxGLGVBU0U7QUFDRSxJQUFBLENBQUMsRUFBQyxnRUFESjtBQUVFLElBQUEsSUFBSSxFQUFDO0FBRlAsSUFURixDQURGLENBREYsZUFpQkUsZ0RBakJGLENBREYsZUFvQkUsMENBQ0dILElBQUksZ0JBQ0gsNkJBQUMsY0FBRDtBQUFRLElBQUEsSUFBSSxFQUFDLE9BQWI7QUFBcUIsSUFBQSxPQUFPLEVBQUVFLFFBQTlCO0FBQXdDLElBQUEsS0FBSyxFQUFDO0FBQTlDLElBREcsZ0JBR0gseUVBQ0UsNkJBQUMsY0FBRDtBQUFRLElBQUEsSUFBSSxFQUFDLE9BQWI7QUFBcUIsSUFBQSxPQUFPLEVBQUVELE9BQTlCO0FBQXVDLElBQUEsS0FBSyxFQUFDO0FBQTdDLElBREYsZUFFRSw2QkFBQyxjQUFEO0FBQVEsSUFBQSxPQUFPLE1BQWY7QUFBZ0IsSUFBQSxJQUFJLEVBQUMsT0FBckI7QUFBNkIsSUFBQSxPQUFPLEVBQUVFLGVBQXRDO0FBQXVELElBQUEsS0FBSyxFQUFDO0FBQTdELElBRkYsQ0FKSixDQXBCRixDQURGLENBRDJDO0FBQUEsQ0FBdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgJy4vaGVhZGVyLmNzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICB1c2VyPzoge307XG4gIG9uTG9naW46ICgpID0+IHZvaWQ7XG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xuICBvbkNyZWF0ZUFjY291bnQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7IHVzZXIsIG9uTG9naW4sIG9uTG9nb3V0LCBvbkNyZWF0ZUFjY291bnQgfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTEwIDBoMTJhMTAgMTAgMCAwMTEwIDEwdjEyYTEwIDEwIDAgMDEtMTAgMTBIMTBBMTAgMTAgMCAwMTAgMjJWMTBBMTAgMTAgMCAwMTEwIDB6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGRkZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNNS4zIDEwLjZsMTAuNCA2djExLjFsLTEwLjQtNnYtMTF6bTExLjQtNi4ybDkuNyA1LjUtOS43IDUuNlY0LjR6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM1NTVBQjlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMjcuMiAxMC42djExLjJsLTEwLjUgNlYxNi41bDEwLjUtNnpNMTUuNyA0LjR2MTFMNiAxMGw5LjctNS41elwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjOTFCQUY4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGgxPkFjbWU8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e29uTG9nb3V0fSBsYWJlbD1cIkxvZyBvdXRcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e29uTG9naW59IGxhYmVsPVwiTG9nIGluXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic21hbGxcIiBvbkNsaWNrPXtvbkNyZWF0ZUFjY291bnR9IGxhYmVsPVwiU2lnbiB1cFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pO1xuIl19