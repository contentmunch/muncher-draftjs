import React from "react";
import Draft from "draft-js";


const LinkDecorator = (): Draft.DraftDecorator => {
    return {
        strategy: findLinkEntities,
        component: Link,
    };
}

const findLinkEntities = (contentBlock: Draft.ContentBlock, callback: (start: number, end: number) => void, contentState: Draft.ContentState) => {
    contentBlock.findEntityRanges((character: { getEntity: () => any; }) => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
        );
    }, callback);
};

const Link: React.FC<LinkProps> = ({contentState, entityKey, children}) => {
    const {url} = contentState.getEntity(entityKey).getData();
    const linkClicked = () => {
        //console.log("link clicked")
    };
    return (
        <a href={url} onClick={linkClicked}>
            {children}
        </a>
    );
};

export interface LinkProps {
    contentState: any;
    entityKey: any;
    children: any;
}

export default LinkDecorator;