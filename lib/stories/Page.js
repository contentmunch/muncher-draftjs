"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

require("./page.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      onCreateAccount = _ref.onCreateAccount;
  return /*#__PURE__*/_react.default.createElement("article", null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
    user: user,
    onLogin: onLogin,
    onLogout: onLogout,
    onCreateAccount: onCreateAccount
  }), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("h2", null, "Pages in Storybook"), /*#__PURE__*/_react.default.createElement("p", null, "We recommend building UIs with a", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://componentdriven.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "component-driven")), ' ', "process starting with atomic components and ending with pages."), /*#__PURE__*/_react.default.createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"), /*#__PURE__*/_react.default.createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")), /*#__PURE__*/_react.default.createElement("p", null, "Get a guided tutorial on component-driven development at", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.learnstorybook.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn Storybook"), ". Read more in the", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "https://storybook.js.org/docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "docs"), "."), /*#__PURE__*/_react.default.createElement("div", {
    className: "tip-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "tip"
  }, "Tip"), " Adjust the width of the canvas with the", ' ', /*#__PURE__*/_react.default.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
    id: "a",
    fill: "#999"
  }))), "Viewports addon in the toolbar")));
};

exports.Page = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL1BhZ2UudHN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJ1c2VyIiwib25Mb2dpbiIsIm9uTG9nb3V0Iiwib25DcmVhdGVBY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7QUFTTyxJQUFNQSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLE1BQWtCQyxRQUFsQixRQUFrQkEsUUFBbEI7QUFBQSxNQUE0QkMsZUFBNUIsUUFBNEJBLGVBQTVCO0FBQUEsc0JBQ3ZDLDJEQUNFLDZCQUFDLGNBQUQ7QUFBUSxJQUFBLElBQUksRUFBRUgsSUFBZDtBQUFvQixJQUFBLE9BQU8sRUFBRUMsT0FBN0I7QUFBc0MsSUFBQSxRQUFRLEVBQUVDLFFBQWhEO0FBQTBELElBQUEsZUFBZSxFQUFFQztBQUEzRSxJQURGLGVBR0UsMkRBQ0UsOERBREYsZUFFRSw0RUFDbUMsR0FEbkMsZUFFRTtBQUFHLElBQUEsSUFBSSxFQUFDLDZCQUFSO0FBQXNDLElBQUEsTUFBTSxFQUFDLFFBQTdDO0FBQXNELElBQUEsR0FBRyxFQUFDO0FBQTFELGtCQUNFLGdFQURGLENBRkYsRUFJTyxHQUpQLG1FQUZGLGVBU0UsNk9BVEYsZUFjRSxzREFDRSxzS0FERixlQUtFLG9KQUxGLENBZEYsZUF3QkUsb0dBQzJELEdBRDNELGVBRUU7QUFBRyxJQUFBLElBQUksRUFBQyxnQ0FBUjtBQUF5QyxJQUFBLE1BQU0sRUFBQyxRQUFoRDtBQUF5RCxJQUFBLEdBQUcsRUFBQztBQUE3RCx1QkFGRix3QkFLcUIsR0FMckIsZUFNRTtBQUFHLElBQUEsSUFBSSxFQUFDLCtCQUFSO0FBQXdDLElBQUEsTUFBTSxFQUFDLFFBQS9DO0FBQXdELElBQUEsR0FBRyxFQUFDO0FBQTVELFlBTkYsTUF4QkYsZUFtQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsV0FERiw4Q0FDMkUsR0FEM0UsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsSUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsSUFBQSxPQUFPLEVBQUMsV0FBcEM7QUFBZ0QsSUFBQSxLQUFLLEVBQUM7QUFBdEQsa0JBQ0U7QUFBRyxJQUFBLElBQUksRUFBQyxNQUFSO0FBQWUsSUFBQSxRQUFRLEVBQUM7QUFBeEIsa0JBQ0U7QUFDRSxJQUFBLENBQUMsRUFBQyxzT0FESjtBQUVFLElBQUEsRUFBRSxFQUFDLEdBRkw7QUFHRSxJQUFBLElBQUksRUFBQztBQUhQLElBREYsQ0FERixDQUZGLG1DQW5DRixDQUhGLENBRHVDO0FBQUEsQ0FBbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgJy4vcGFnZS5jc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gIHVzZXI/OiB7fTtcbiAgb25Mb2dpbjogKCkgPT4gdm9pZDtcbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XG4gIG9uQ3JlYXRlQWNjb3VudDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBhZ2U6IFJlYWN0LkZDPFBhZ2VQcm9wcz4gPSAoeyB1c2VyLCBvbkxvZ2luLCBvbkxvZ291dCwgb25DcmVhdGVBY2NvdW50IH0pID0+IChcbiAgPGFydGljbGU+XG4gICAgPEhlYWRlciB1c2VyPXt1c2VyfSBvbkxvZ2luPXtvbkxvZ2lufSBvbkxvZ291dD17b25Mb2dvdXR9IG9uQ3JlYXRlQWNjb3VudD17b25DcmVhdGVBY2NvdW50fSAvPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+UGFnZXMgaW4gU3Rvcnlib29rPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBXZSByZWNvbW1lbmQgYnVpbGRpbmcgVUlzIHdpdGggYXsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvbXBvbmVudGRyaXZlbi5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPHN0cm9uZz5jb21wb25lbnQtZHJpdmVuPC9zdHJvbmc+XG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBwcm9jZXNzIHN0YXJ0aW5nIHdpdGggYXRvbWljIGNvbXBvbmVudHMgYW5kIGVuZGluZyB3aXRoIHBhZ2VzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFJlbmRlciBwYWdlcyB3aXRoIG1vY2sgZGF0YS4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGJ1aWxkIGFuZCByZXZpZXcgcGFnZSBzdGF0ZXMgd2l0aG91dFxuICAgICAgICBuZWVkaW5nIHRvIG5hdmlnYXRlIHRvIHRoZW0gaW4geW91ciBhcHAuIEhlcmUgYXJlIHNvbWUgaGFuZHkgcGF0dGVybnMgZm9yIG1hbmFnaW5nIHBhZ2UgZGF0YVxuICAgICAgICBpbiBTdG9yeWJvb2s6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBVc2UgYSBoaWdoZXItbGV2ZWwgY29ubmVjdGVkIGNvbXBvbmVudC4gU3Rvcnlib29rIGhlbHBzIHlvdSBjb21wb3NlIHN1Y2ggZGF0YSBmcm9tIHRoZVxuICAgICAgICAgIFwiYXJnc1wiIG9mIGNoaWxkIGNvbXBvbmVudCBzdG9yaWVzXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBBc3NlbWJsZSBkYXRhIGluIHRoZSBwYWdlIGNvbXBvbmVudCBmcm9tIHlvdXIgc2VydmljZXMuIFlvdSBjYW4gbW9jayB0aGVzZSBzZXJ2aWNlcyBvdXRcbiAgICAgICAgICB1c2luZyBTdG9yeWJvb2suXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIEdldCBhIGd1aWRlZCB0dXRvcmlhbCBvbiBjb21wb25lbnQtZHJpdmVuIGRldmVsb3BtZW50IGF0eycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxlYXJuc3Rvcnlib29rLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBMZWFybiBTdG9yeWJvb2tcbiAgICAgICAgPC9hPlxuICAgICAgICAuIFJlYWQgbW9yZSBpbiB0aGV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3NcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgZG9jc1xuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwLXdyYXBwZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGlwXCI+VGlwPC9zcGFuPiBBZGp1c3QgdGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgd2l0aCB0aGV7JyAnfVxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMS41IDUuMmg0LjhjLjMgMCAuNS4yLjUuNHY1LjFjLS4xLjItLjMuMy0uNC4zSDEuNGEuNS41IDAgMDEtLjUtLjRWNS43YzAtLjMuMi0uNS41LS41em0wLTIuMWg2LjljLjMgMCAuNS4yLjUuNHY3YS41LjUgMCAwMS0xIDBWNEgxLjVhLjUuNSAwIDAxMC0xem0wLTIuMWg5Yy4zIDAgLjUuMi41LjR2OS4xYS41LjUgMCAwMS0xIDBWMkgxLjVhLjUuNSAwIDAxMC0xem00LjMgNS4ySDJWMTBoMy44VjYuMnpcIlxuICAgICAgICAgICAgICBpZD1cImFcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzk5OVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIFZpZXdwb3J0cyBhZGRvbiBpbiB0aGUgdG9vbGJhclxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L2FydGljbGU+XG4pO1xuIl19