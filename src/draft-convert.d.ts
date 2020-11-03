declare module 'draft-convert' {
    import {ContentState, DraftInlineStyleType,} from 'draft-js';

    import {ReactNode} from 'react';

    interface ConvertToHTMLConfig {
        // Inline styles:
        styleToHTML?: <T extends DraftInlineStyleType>(style: T) => Tag | void;

        // Block styles:
        blockToHTML?: (block: any) => Tag;

        // Entity styling:
        entityToHTML?: (
            entity: any,
            originalText: string
        ) => Tag;
    }

    interface ConvertFromHTMLConfig {
        // Inline styles:
        htmlToStyle?: (nodeName: string, node: HTMLElement, currentStyle: any) => DraftInlineStyleType;

        // Block styles:
        htmlToBlock?: (
            nodeName: string,
            node: HTMLElement,
            lastList: any
        ) => DraftBlockType | { type: DraftBlockType; data: object } | false;

        // Entity styling:
        htmlToEntity?: (
            nodeName: string,
            node: HTMLElement,
            createEntity: (type: string, mutability: string, data: object) => EntityKey,
            getEntity: (key: EntityKey) => Entity,
            mergeEntityData: (key: string, data: object) => void,
            replaceEntityData: (key: string, data: object) => void
        ) => void;

        textToEntity?: (
            text: string,
            createEntity: (type: string, mutability: string, data: object) => EntityKey,
            getEntity: (key: EntityKey) => Entity,
            mergeEntityData: (key: string, data: object) => void,
            replaceEntityData: (key: string, data: object) => void
        ) => Array<{ entity: EntityKey; offset: number; length: number; result?: string }>;

    }

    type ContentStateConverter = (contentState: ContentState) => string;
    type htmlConverter = (html: string) => ContentState;
    type Tag =
        | ReactNode
        | { start: string; end: string; empty?: string }
        | { element: ReactNode; empty?: ReactNode };

    function convertToHTML(config: ConvertToHTMLConfig): ContentStateConverter;

    function convertFromHTML(config: ConvertFromHTMLConfig): htmlConverter;
}