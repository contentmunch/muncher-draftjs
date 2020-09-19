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
            if (nodeName === 'img') {
                return createEntity('image',
                    'IMMUTABLE',
                    {src: node.src})
            }
            if (nodeName === 'iframe') {
                return createEntity('IFRAME',
                    'IMMUTABLE',
                    {src: node.src})
            }

        },
        htmlToBlock: (nodeName, node, lastList) => {
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

const textAlignClass = (block) => {
    if (block.data.textAlign) {
        switch (block.data.textAlign) {
            case 'ALIGN_JUSTIFY':
                return "text-align--justify";
            case 'ALIGN_CENTER':
                return "text-align--center";
            case 'ALIGN_RIGHT':
                return "text-align--right";
            default:
                return "text-align--left"
        }
    }
};
const textAlignData = (className) => {
    switch (className) {
        case 'text-align--left':
            return {textAlign: 'ALIGN_LEFT'};
        case 'text-align--right':
            return {textAlign: 'ALIGN_RIGHT'};
        case 'text-align--center':
            return {textAlign: 'ALIGN_CENTER'};
        case 'text-align--justify':
            return {textAlign: 'ALIGN_JUSTIFY'};
        default:
            return {};
    }
};

export const convertContentToHtml = (currentEditorState) => {
    const ORDERED_LIST_TYPES = ['1', 'a', 'i'];
    return convertToHTML({
        styleToHTML: (style) => {
            const styleType = COLORS.find((color) => color.style === style);
            if (styleType !== undefined) {
                return <span style={{color: styleType.style}}/>;
            }
        },
        blockToHTML: (block) => {
            switch (block.type) {
                case 'code-block':
                    return <pre className={textAlignClass(block)}/>;
                case 'header-one':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h1 className={textAlignClass(block)}/>;
                case 'header-two':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h2 className={textAlignClass(block)}/>;
                case 'header-three':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h3 className={textAlignClass(block)}/>;
                case 'header-four':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h4 className={textAlignClass(block)}/>;
                case 'header-five':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h5 className={textAlignClass(block)}/>;
                case 'header-six':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h6 className={textAlignClass(block)}/>;
                case 'blockquote':
                    return <blockquote className={textAlignClass(block)}/>;
                case 'atomic':
                    return <figure className={textAlignClass(block)}/>;
                case 'unordered-list-item':
                    return {
                        element: <li className={textAlignClass(block)}/>,
                        nest: <ul/>,
                    };
                case 'ordered-list-item':
                    return {
                        element: <li className={textAlignClass(block)}/>,
                        nest: depth => {
                            const type = ORDERED_LIST_TYPES[depth % 3];
                            return <ol type={type}/>;
                        },
                    };
                case 'unstyled':
                    return <p className={textAlignClass(block)}/>
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a href={entity.data.url}>{originalText}</a>;
            }
            if (entity.type === 'image') {
                return `<img src="${entity.data.src}" />`;
            }
            if (entity.type === 'IFRAME') {
                return `<iframe allowFullScreen frameBorder="0" width="300" height="200" src="${entity.data.src}" controls />`;
            }
            return originalText;
        }
    })(currentEditorState.getCurrentContent());
};

export const beautifyHtml = (currentHtml) => {
    return html_beautify(currentHtml, {indent_size: 2});
};