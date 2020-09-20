"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beautifyHtml = exports.convertContentToHtml = exports.convertHtmlToContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _draftConvert = require("draft-convert");

var _jsBeautify = require("js-beautify");

var _DraftUtilities = require("../draft/DraftUtilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertHtmlToContent = function convertHtmlToContent(currentHtml) {
  return (0, _draftConvert.convertFromHTML)({
    htmlToStyle: function htmlToStyle(nodeName, node, currentStyle) {
      if (nodeName === 'span' && node.style.color) {
        return currentStyle.add(node.style.color);
      }

      return currentStyle;
    },
    htmlToEntity: function htmlToEntity(nodeName, node, createEntity) {
      if (nodeName === 'a') {
        return createEntity('LINK', 'MUTABLE', {
          url: node.href
        });
      }

      if (nodeName === 'img') {
        return createEntity('image', 'IMMUTABLE', {
          src: node.src
        });
      }

      if (nodeName === 'iframe') {
        return createEntity('IFRAME', 'IMMUTABLE', {
          src: node.src
        });
      }
    },
    htmlToBlock: function htmlToBlock(nodeName, node, lastList) {
      switch (nodeName) {
        case 'pre':
          return {
            type: 'code-block',
            data: textAlignData(node.className)
          };

        case 'h1':
          return {
            type: 'header-one',
            data: textAlignData(node.className)
          };

        case 'h2':
          return {
            type: 'header-two',
            data: textAlignData(node.className)
          };

        case 'h3':
          return {
            type: 'header-three',
            data: textAlignData(node.className)
          };

        case 'h4':
          return {
            type: 'header-four',
            data: textAlignData(node.className)
          };

        case 'h5':
          return {
            type: 'header-five',
            data: textAlignData(node.className)
          };

        case 'h6':
          return {
            type: 'header-six',
            data: textAlignData(node.className)
          };

        case 'blockquote':
          return {
            type: 'blockquote',
            data: textAlignData(node.className)
          };

        case 'p':
          return {
            type: 'unstyled',
            data: textAlignData(node.className)
          };

        case 'li':
          if (lastList === 'ol') {
            return {
              type: 'ordered-list-item',
              data: textAlignData(node.className)
            };
          }

          return {
            type: 'unordered-list-item',
            data: textAlignData(node.className)
          };

        case 'figure':
          return {
            type: 'atomic',
            data: textAlignData(node.className)
          };
      }
    }
  })(currentHtml);
};

exports.convertHtmlToContent = convertHtmlToContent;

var textAlignClass = function textAlignClass(block) {
  if (block.data.textAlign) {
    switch (block.data.textAlign) {
      case 'ALIGN_JUSTIFY':
        return "text-align--justify";

      case 'ALIGN_CENTER':
        return "text-align--center";

      case 'ALIGN_RIGHT':
        return "text-align--right";

      default:
        return "text-align--left";
    }
  }
};

var textAlignData = function textAlignData(className) {
  switch (className) {
    case 'text-align--left':
      return {
        textAlign: 'ALIGN_LEFT'
      };

    case 'text-align--right':
      return {
        textAlign: 'ALIGN_RIGHT'
      };

    case 'text-align--center':
      return {
        textAlign: 'ALIGN_CENTER'
      };

    case 'text-align--justify':
      return {
        textAlign: 'ALIGN_JUSTIFY'
      };

    default:
      return {};
  }
};

var convertContentToHtml = function convertContentToHtml(currentEditorState) {
  var ORDERED_LIST_TYPES = ['1', 'a', 'i'];
  return (0, _draftConvert.convertToHTML)({
    styleToHTML: function styleToHTML(style) {
      var styleType = _DraftUtilities.COLORS.find(function (color) {
        return color.style === style;
      });

      if (styleType !== undefined) {
        return /*#__PURE__*/_react.default.createElement("span", {
          style: {
            color: styleType.style
          }
        });
      }
    },
    blockToHTML: function blockToHTML(block) {
      switch (block.type) {
        case 'code-block':
          return /*#__PURE__*/_react.default.createElement("pre", {
            className: textAlignClass(block)
          });

        case 'header-one':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h1", {
            className: textAlignClass(block)
          });

        case 'header-two':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h2", {
            className: textAlignClass(block)
          });

        case 'header-three':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h3", {
            className: textAlignClass(block)
          });

        case 'header-four':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h4", {
            className: textAlignClass(block)
          });

        case 'header-five':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h5", {
            className: textAlignClass(block)
          });

        case 'header-six':
          // eslint-disable-next-line jsx-a11y/heading-has-content
          return /*#__PURE__*/_react.default.createElement("h6", {
            className: textAlignClass(block)
          });

        case 'blockquote':
          return /*#__PURE__*/_react.default.createElement("blockquote", {
            className: textAlignClass(block)
          });

        case 'atomic':
          return /*#__PURE__*/_react.default.createElement("figure", {
            className: textAlignClass(block)
          });

        case 'unordered-list-item':
          return {
            element: /*#__PURE__*/_react.default.createElement("li", {
              className: textAlignClass(block)
            }),
            nest: /*#__PURE__*/_react.default.createElement("ul", null)
          };

        case 'ordered-list-item':
          return {
            element: /*#__PURE__*/_react.default.createElement("li", {
              className: textAlignClass(block)
            }),
            nest: function nest(depth) {
              var type = ORDERED_LIST_TYPES[depth % 3];
              return /*#__PURE__*/_react.default.createElement("ol", {
                type: type
              });
            }
          };

        case 'unstyled':
          return /*#__PURE__*/_react.default.createElement("p", {
            className: textAlignClass(block)
          });
      }
    },
    entityToHTML: function entityToHTML(entity, originalText) {
      if (entity.type === 'LINK') {
        return /*#__PURE__*/_react.default.createElement("a", {
          href: entity.data.url
        }, originalText);
      }

      if (entity.type === 'image') {
        return "<img src=\"".concat(entity.data.src, "\" />");
      }

      if (entity.type === 'IFRAME') {
        return "<iframe allowFullScreen frameBorder=\"0\" width=\"300\" height=\"200\" src=\"".concat(entity.data.src, "\" controls />");
      }

      return originalText;
    }
  })(currentEditorState.getCurrentContent());
};

exports.convertContentToHtml = convertContentToHtml;

var beautifyHtml = function beautifyHtml(currentHtml) {
  return (0, _jsBeautify.html_beautify)(currentHtml, {
    indent_size: 2
  });
};

exports.beautifyHtml = beautifyHtml;