import React from "react";
import {convertFromHTML, convertToHTML} from "draft-convert";
import {html_beautify} from "js-beautify";
import {COLORS} from "../draft/DraftUtilities";

export const convertHtmlToContent = (currentHtml) => {
    return convertFromHTML({
        htmlToStyle: (nodeName, node, currentStyle) => {

            if (nodeName === 'span' && node.style.color) {

                return currentStyle.add(node.style.color.toUpperCase());
            }
                return currentStyle;

        },
        htmlToEntity: (nodeName, node, createEntity) => {
            if (nodeName === 'a') {
                return createEntity(
                    'LINK',
                    'MUTABLE',
                    {url: node.href}
                )
            }
        },
        htmlToBlock: (nodeName, node) => {
            if (nodeName === 'blockquote') {
                return {
                    type: 'blockquote',
                    data: {}
                };
            }
        }
    })(currentHtml);
};
export const convertContentToHtml = (currentEditorState) => {
    return convertToHTML({
        styleToHTML: (style) => {
            const styleType = COLORS.find((color) => color.style === style);
            if (styleType !== undefined) {
                return <span style={{color: styleType.style}}/>;
            }


        },
        blockToHTML: (block) => {
            //console.log("yoyo: " + block.data.textAlign);
            if (block.type === 'code-block') {
                return <pre/>;
            }
            if (block.type === 'unstyled' && block.data.textAlign) {

                return <p style={{textAlign: "center"}}/>;
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a href={entity.data.url}>{originalText}</a>;
            }
            return originalText;
        }
    })(currentEditorState.getCurrentContent());
};

export const beautifyHtml = (currentHtml) => {
    return html_beautify(currentHtml, {indent_size: 2});
};