import React from "react";

const BlockRenderer = (block: any): any => {

    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: true,
        };
    }
    return null;
}

const Image: React.FC<ImageProps> = ({src}) => {
    return <img src={src}/>;
};

export interface ImageProps {
    src: string
}

const Iframe: React.FC<ImageProps> = ({src}) => {
    return <iframe allowFullScreen frameBorder={0} width={300} height={200} src={src}/>
};

export interface MediaProps {
    contentState: any;
    block: any;
}

const Media: React.FC<MediaProps> = ({contentState, block}) => {
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {src} = entity.getData();
    const type = entity.getType();
    if (type === 'image') {
        return <Image src={src}/>;
    } else {
        return <Iframe src={src}/>;
    }

};

export default BlockRenderer;