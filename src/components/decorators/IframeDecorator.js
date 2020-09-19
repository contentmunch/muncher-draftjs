import React from "react";

export default function IframeDecorator() {
    return {
        strategy: findIframeEntities,
        component: Iframe,
    };
}

const findIframeEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'IFRAME'
        );
    }, callback);
};

const Iframe = props => {
    const {src} = props.contentState.getEntity(props.entityKey).getData();
    const iframeClicked=()=>{
        console.log("iframe clicked");
    };
    return (
        <iframe onClick={iframeClicked} allowFullScreen frameBorder={0} width={300} height={200} src={src} controls />

    );
};
