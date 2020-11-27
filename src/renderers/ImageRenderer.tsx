import React, {useContext, useState} from "react";
import "./assets/ImageRenderer.scss";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {ImageBlock, MuncherContext} from "../context/MuncherContext";

export const ImageRenderer: React.FC<ImageBlock> = (
    {
        src, alt, caption, block
    }) => {
    const {setImageBlockToEdit} = useContext(MuncherContext);
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
                    setImageBlockToEdit({src, alt, caption, block})
                }}>
                    <Icon name="more" size="small"/>
                </Button>
                : ""
            }


            <img src={src} alt={alt}/>
            <figcaption>{caption}</figcaption>
        </div>
    )
};

