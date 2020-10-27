import React from "react";
import Draft from "draft-js";
import {LinkProps} from "./LinkDecorator";

const IframeDecorator = (): Draft.DraftDecorator => {
    return {
        strategy: findIframeEntities,
        component: Iframe,
    };
}

const findIframeEntities = (contentBlock: Draft.ContentBlock, callback: (start: number, end: number) => void, contentState: Draft.ContentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'IFRAME'
        );
    }, callback);
};

const Iframe: React.FC<LinkProps> = ({contentState, entityKey, children}) => {
    const {src} = contentState.getEntity(entityKey).getData();
    const iframeClicked = () => {
        console.log("iframe clicked");
    };
    return (
        <iframe onClick={iframeClicked} allowFullScreen frameBorder={0} width={300} height={200} src={src}/>

    );
};
export default IframeDecorator;