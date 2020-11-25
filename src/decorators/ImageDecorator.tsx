import React from "react";
import Draft from "draft-js";
import {LinkProps} from "./LinkDecorator";

const ImageDecorator = (): Draft.DraftDecorator => {
    return {
        strategy: findIframeEntities,
        component: Image,
    };
}

const findIframeEntities = (contentBlock: Draft.ContentBlock, callback: (start: number, end: number) => void, contentState: Draft.ContentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'image'
        );
    }, callback);
};

const Image: React.FC<LinkProps> = ({contentState, entityKey, children}) => {
    const {src} = contentState.getEntity(entityKey).getData();
    const imageClicked = () => {
        console.log("image clicked");
    };
    return (
        <img onClick={imageClicked}  src={src}/>

    );
};
export default ImageDecorator;