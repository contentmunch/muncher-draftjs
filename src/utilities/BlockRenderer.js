import React from "react";

export default function BlockRenderer(block) {

    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: true,
        };
    }

    return null;
}


const Image = props => {
    return <img src={props.src} />;
};

const Iframe = props => {
    return <iframe allowFullScreen frameBorder={0} width={300} height={200} src={props.src} controls />
};

const Media = props => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const {src} = entity.getData();
    const type = entity.getType();
   if (type === 'image') {
        return <Image src={src}/>;
    } else if (type === 'IFRAME') {
        return <Iframe src={src}/>;
    }
};