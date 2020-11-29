import React, {useState} from "react";
import "./assets/ImageRenderer.scss";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {ContentBlock} from "draft-js";
import {Image} from "../components/image/ImageInput";

export const ImageRenderer: React.FC<ImageRendererProps> = (
    {
        src, alt, block, setImageBlockToEdit
    }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="muncher-image-renderer"
             onMouseEnter={() => setShowMenu(true)}
             onMouseLeave={() => {
                 setShowMenu(false);
             }}
        >
            {showMenu ?
                <Button variant="transparent" onMouseDown={() => {
                    setImageBlockToEdit({src, alt, block})
                }}>
                    <Icon name="edit" size="small"/>
                </Button>
                : ""
            }


            <img src={src} alt={alt}/>
        </div>
    )
};

export interface ImageRendererProps extends ImageBlock {
    setImageBlockToEdit: (block: ImageBlock) => void;
}

export interface ImageBlock extends Image {
    block: ContentBlock;
}