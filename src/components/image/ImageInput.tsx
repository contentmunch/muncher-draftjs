import React, {useState} from "react";
import {Button, Icon, Input} from "@contentmunch/muncher-ui";
import "./assets/ImageInput.scss";

export const ImageInput: React.FC<ImageInputProps> = ({caption, alt, src, handleImageUpdate}) => {

    const [inputSrc, setInputSrc] = useState(src ? src : "");
    const [inputSrcError, setInputSrcError] = useState("");
    const [inputAlt, setInputAlt] = useState(alt ? alt : "");
    const [inputAltError, setInputAltError] = useState("");
    const [inputCaption, setInputCaption] = useState(caption ? caption : "");
    const [inputCaptionError, setInputCaptionError] = useState("");
    const handleSave = (e: React.MouseEvent) => {
        if (inputSrc !== "" && inputAlt !== "" && inputCaption !== "") {
            handleImageUpdate({src: inputSrc, alt: inputAlt, caption: inputCaption}, e);
            setInputSrcError("");
            setInputAltError("");
            setInputCaptionError("");
        } else {
            if (inputSrc === "") {
                setInputSrcError("Please provide src");
            }
            if (inputAlt === "") {
                setInputAltError("Please provide alt");
            }
            if (inputCaption === "") {
                setInputCaptionError("Please provide caption");
            }
        }
    };

    return (
        <div className="muncher-image-input">
            <Input
                name="src"
                label="src"
                type="url"
                placeholder="src"
                required={true}
                onChange={event => setInputSrc(event.target.value)}
                value={inputSrc}
                error={inputSrcError}

            />
            <Input
                name="alt"
                label="alt"
                placeholder="alt"
                required={true}
                onChange={event => setInputAlt(event.target.value)}
                value={inputAlt}
                error={inputAltError}
            />
            <Input
                name="caption"
                label="caption"
                placeholder="caption"
                required={true}
                onChange={event => setInputCaption(event.target.value)}
                value={inputCaption}
                error={inputCaptionError}
            />
            <Button onMouseDown={handleSave} size="small"><Icon name="save" size="small"/> &nbsp; Save</Button>
        </div>
    );
};

export interface Image {
    src?: string;
    alt?: string;
    caption?: string;
}

export interface ImageInputProps extends Image {
    handleImageUpdate: (image: Image, e: React.MouseEvent) => void;
}