import React from "react";
import {convertFromHTML, convertToHTML} from "draft-convert";
import {html_beautify} from "js-beautify";
import {COLORS} from "../draft/DraftUtilities";
import {ContentBlock, ContentState} from "draft-js";

export const convertHtmlToContent = (currentHtml: string, docid?: string): ContentState => {
    const contentState: ContentState = convertFromHTML({
        htmlToStyle: (nodeName, node, currentStyle) => {

            if (nodeName === 'span' && node.className.includes("color-")) {

                return currentStyle.add(node.className.substring(6));
            }
            return currentStyle;

        },
        htmlToEntity: (nodeName, node, createEntity) => {
            if (nodeName === 'a') {

                return createEntity(
                    'LINK',
                    node.getAttribute('data-useTitle') ? 'IMMUTABLE' : 'MUTABLE',
                    {
                        url: node.getAttribute('href'),
                        docid: node.getAttribute('data-docid'),
                        useTitle: node.getAttribute('data-useTitle')
                    }
                )
            }
            if (nodeName === 'img') {
                return createEntity('IMAGE',
                    'IMMUTABLE',
                    {
                        src: node.getAttribute('src'),
                        alt: node.getAttribute('alt'),
                    })
            }
            if (nodeName === 'iframe') {
                return createEntity('IFRAME',
                    'IMMUTABLE',
                    {src: node.getAttribute('src')})
            }

        },
        htmlToBlock: (nodeName, node, lastList) => {
            if ('pre' === nodeName) {
                return {
                    type: 'code-block',
                    data: textAlignData(node.className)
                };
            }

            if ('h1' === nodeName) {
                return {
                    type: 'header-one',
                    data: {docid: docid ? docid : node.getAttribute('data-docid'), ...textAlignData(node.className)}
                };
            }
            if ('h2' === nodeName) {
                return {
                    type: 'header-two',
                    data: textAlignData(node.className)
                };
            }
            if ('h3' === nodeName) {
                return {
                    type: 'header-three',
                    data: textAlignData(node.className)
                };
            }
            if ('h4' === nodeName) {
                return {
                    type: 'header-four',
                    data: textAlignData(node.className)
                };
            }
            if ('h5' === nodeName) {
                return {
                    type: 'header-five',
                    data: textAlignData(node.className)
                };
            }
            if ('h6' === nodeName) {
                return {
                    type: 'header-six',
                    data: textAlignData(node.className)
                };
            }
            if ('blockquote' === nodeName) {
                return {
                    type: 'blockquote',
                    data: textAlignData(node.className)
                };
            }
            if ('p' === nodeName) {

                if (node.className.includes('col')) {
                    return {
                        type: 'col',
                        data: textAlignData(node.className)
                    }
                } else {
                    return {
                        type: 'unstyled',
                        data: {docid: docid ? docid : node.getAttribute('data-docid'), ...textAlignData(node.className)}
                    };
                }

            }
            if ('li' === nodeName) {
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
            }
            if ('figure' === nodeName) {
                return {
                    type: 'atomic',
                    data: textAlignData(node.className)
                };
            }
            if ('div' === nodeName) {
                return {
                    type: 'div',
                    data: textAlignData(node.className)
                };

            }
        }

    })(currentHtml);

    if (contentState.getLastBlock().getType() === "atomic") {

        const blankLine = new ContentBlock({
            text: '',
            type: 'unstyled',
        });

        const newBlockArray = contentState
            .getBlockMap()
            .set(blankLine.getKey(), blankLine)
            .toArray();
        return ContentState.createFromBlockArray(newBlockArray);
    }
    return contentState;
};

const textAlignClass = (block: any) => {
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
const textAlignData = (className: string) => {
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

export const convertContentToHtml = (currentEditorState: any) => {
    const ORDERED_LIST_TYPES = ['1', 'a', 'i'];
    return convertToHTML({
        styleToHTML: (style) => {
            const styleType = COLORS.find((color) => color.style === style);
            if (styleType !== undefined) {
                return <span className={"color-" + styleType.style}/>;
            }
        },
        blockToHTML: (block) => {
            switch (block.type) {
                case 'code-block':
                    return <pre className={textAlignClass(block)}/>;
                case 'header-one':
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    return <h1 className={textAlignClass(block)} data-docid={block.data.docid}/>;
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
                        nest: (depth: number) => {
                            const type: any = ORDERED_LIST_TYPES[depth % 3];
                            return <ol type={type}/>;
                        },
                    };
                case 'unstyled':
                    return <p className={textAlignClass(block)} data-docid={block.data.docid}/>
                case 'col':
                    return {
                        element: <p className="col"/>,
                        nest: <section className="row"/>,
                    };
                default:
                    return <div className={textAlignClass(block)}/>
            }
        },
        entityToHTML: (entity, originalText) => {
            if (entity.type === 'LINK') {
                return <a href={entity.data.url || entity.data.docid} data-docid={entity.data.docid}
                          data-useTitle={entity.data.useTitle}>{originalText}</a>;
            }
            if (entity.type === 'IMAGE') {
                return `<img src="${entity.data.src}" alt="${entity.data.alt}" />`;
            }
            if (entity.type === 'IFRAME') {
                return `<iframe allowFullScreen width="300" height="200" src="${entity.data.src}" />`;
            }
            return originalText;
        }
    })(currentEditorState.getCurrentContent());
};

export const beautifyHtml = (currentHtml: any) => {
    return html_beautify(currentHtml, {indent_size: 2});
};

