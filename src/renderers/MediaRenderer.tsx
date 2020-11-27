import React from "react";
import {ContentBlock, ContentState} from "draft-js";
import {ImageRenderer} from "./ImageRenderer";
import {IframeRenderer} from "./IframeRenderer";


export const MediaRenderer: React.FC<MediaRendererProps> = (
    {contentState, block}) => {
    try {
        const entity = contentState.getEntity(block?.getEntityAt(0));
        const {src, alt, title} = entity.getData();

        switch (entity.getType()) {
            case "IMAGE":

                return <ImageRenderer src={src} alt={alt} block={block}

                />;
            default:

                return <IframeRenderer src={src} title={title}/>;
        }

    } catch (e) {
        //console.log(e);
        return <p/>;
    }

};

export interface MediaRendererProps {
    contentState: ContentState;
    block: ContentBlock;
}