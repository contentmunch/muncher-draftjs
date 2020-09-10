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
        return currentStyle.add(node.style.color.toUpperCase());
      }

      return currentStyle;
    },
    htmlToEntity: function htmlToEntity(nodeName, node, createEntity) {
      if (nodeName === 'a') {
        return createEntity('LINK', 'MUTABLE', {
          url: node.href
        });
      }
    },
    htmlToBlock: function htmlToBlock(nodeName, node) {
      if (nodeName === 'blockquote') {
        return {
          type: 'blockquote',
          data: {}
        };
      }
    }
  })(currentHtml);
};

exports.convertHtmlToContent = convertHtmlToContent;

var convertContentToHtml = function convertContentToHtml(currentEditorState) {
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
      //console.log("yoyo: " + block.data.textAlign);
      if (block.type === 'code-block') {
        return /*#__PURE__*/_react.default.createElement("pre", null);
      }

      if (block.type === 'unstyled' && block.data.textAlign) {
        return /*#__PURE__*/_react.default.createElement("p", {
          style: {
            textAlign: "center"
          }
        });
      }
    },
    entityToHTML: function entityToHTML(entity, originalText) {
      if (entity.type === 'LINK') {
        return /*#__PURE__*/_react.default.createElement("a", {
          href: entity.data.url
        }, originalText);
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