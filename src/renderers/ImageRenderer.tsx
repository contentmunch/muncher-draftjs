import React, {useState} from "react";
import "./assets/ImageRenderer.scss";
import {DropdownButton, Icon} from "@contentmunch/muncher-ui";
import {Image, ImageInput} from "../components/image/ImageInput";
import {ContentState} from "draft-js";

export const ImageRenderer: React.FC<ImageRendererProps> = (
    {
        src, alt, entityKey, contentState,
        setEditorReadOnly, updateImage
    }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleShowContent = (value: boolean) => {
        setEditorReadOnly(value);
        setShowContent(value);
    };
    const handleImageUpdate = (image: Image) => {
        const newContentState = contentState.mergeEntityData(
            entityKey,
            {...image}
        );
        setShowContent(false);
        setEditorReadOnly(false);
        updateImage(newContentState);
    }
    return (
        <div className="muncher-image-renderer"
             onMouseEnter={() => setShowMenu(true)}
             onMouseLeave={() => {
                 setShowMenu(false);
             }}
        >
            {showMenu ?
                <DropdownButton title="Add or Edit Image"
                                variant="transparent"
                                showContent={showContent}
                                setShowContent={handleShowContent}
                                active={showContent}
                                element={<Icon name="more"/>}
                                drop="left" size="small">
                    <div className="muncher-drop-media--content">
                        <ImageInput handleImageUpdate={handleImageUpdate} src={src} alt={alt}/>
                    </div>
                </DropdownButton>
                : ""
            }


            <img src={src} alt={alt}/>
        </div>
    )
};

export interface ImageRendererProps extends Image {
    entityKey: string;
    contentState: ContentState;
    updateImage: (newContentState: ContentState) => void;
    setEditorReadOnly: (editorReadOnly: boolean) => void;
}
