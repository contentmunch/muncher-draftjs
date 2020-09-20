"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IframeDecorator;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IframeDecorator() {
  return {
    strategy: findIframeEntities,
    component: Iframe
  };
}

var findIframeEntities = function findIframeEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'IFRAME';
  }, callback);
};

var Iframe = function Iframe(props) {
  var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
      src = _props$contentState$g.src;

  var iframeClicked = function iframeClicked() {
    console.log("iframe clicked");
  };

  return /*#__PURE__*/_react.default.createElement("iframe", {
    onClick: iframeClicked,
    allowFullScreen: true,
    frameBorder: 0,
    width: 300,
    height: 200,
    src: src,
    controls: true
  });
};