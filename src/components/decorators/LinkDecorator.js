import React from "react";

export default function LinkDecorator() {
    return {
        strategy: findLinkEntities,
        component: Link,
    };
}

const findLinkEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
        );
    }, callback);
};

const Link = props => {
    const {url} = props.contentState.getEntity(props.entityKey).getData();
    const linkClicked=()=>{
        console.log("link clicked")
    };
    return (
        <a href={url} onClick={linkClicked}>
            {props.children}
        </a>
    );
};
