"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkDecorator;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkDecorator() {
  return {
    strategy: findLinkEntities,
    component: Link
  };
}

var findLinkEntities = function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

var Link = function Link(props) {
  var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
      url = _props$contentState$g.url;

  var linkClicked = function linkClicked() {
    console.log("link clicked");
  };

  return /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    onClick: linkClicked
  }, props.children);
};