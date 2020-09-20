"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlockRenderer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: true
    };
  }

  return null;
}

var Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement("img", {
    src: props.src
  });
};

var Iframe = function Iframe(props) {
  return /*#__PURE__*/_react.default.createElement("iframe", {
    allowFullScreen: true,
    frameBorder: 0,
    width: 300,
    height: 200,
    src: props.src,
    controls: true
  });
};

var Media = function Media(props) {
  var entity = props.contentState.getEntity(props.block.getEntityAt(0));

  var _entity$getData = entity.getData(),
      src = _entity$getData.src;

  var type = entity.getType();

  if (type === 'image') {
    return /*#__PURE__*/_react.default.createElement(Image, {
      src: src
    });
  } else if (type === 'IFRAME') {
    return /*#__PURE__*/_react.default.createElement(Iframe, {
      src: src
    });
  }
};