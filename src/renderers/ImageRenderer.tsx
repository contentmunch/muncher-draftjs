import React, {useState} from "react";
import "./assets/ImageRenderer.scss";
import {DropdownButton, Icon} from "@contentmunch/muncher-ui";
import {ContentBlock, ContentState, EditorState} from "draft-js";
import {EditorStateProps} from "../Muncher";
import {Image, ImageInput} from "../components/image/ImageInput";

export const ImageRenderer: React.FC<ImageRendererProps> = (
    {
        src, alt, caption, setEditorState, editorState,
        contentState, block, setEditorReadOnly
    }) => {

    const [showContent, setShowContent] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const handleImageUpdate = (image: Image, e: React.MouseEvent) => {
        setEditorReadOnly(false);
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentState.replaceEntityData(block.getKey(), {...image})
        });
        setEditorState(newEditorState);

    };
    const handleShowContent = (show: boolean) => {
        setShowContent(show);
        if (show) {
            setEditorReadOnly(true);
        } else {
            setEditorReadOnly(false);
        }

    };
    return (
        <div className="muncher-image-renderer"
             onMouseEnter={() => setShowMenu(true)}
             onMouseLeave={() => {
                 setShowMenu(false);
                 setShowContent(false);
             }}
        >
            {showMenu ?
                <DropdownButton showContent={showContent}
                                setShowContent={handleShowContent}
                                variant="transparent"
                                drop="right"
                                element={<Icon name="more" size="small"/>}
                >
                    <ImageInput handleImageUpdate={handleImageUpdate} src={src} alt={alt} caption={caption}/>
                </DropdownButton>
                : ""
            }


            <img src={src} alt={alt}/>
            <figcaption>{caption}</figcaption>
        </div>
    )
};

export interface ImageRendererProps extends Image, EditorStateProps {
    contentState: ContentState;
    block: ContentBlock;
    setEditorReadOnly: (editorReadOnly: boolean) => void;
}