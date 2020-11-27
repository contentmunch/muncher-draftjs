import React, {useState} from "react";
import {Button, Icon, Input} from "@contentmunch/muncher-ui";
import "./assets/ImageInput.scss";

export const ImageInput: React.FC<ImageInputProps> = ({alt, src, handleImageUpdate}) => {

    const [inputSrc, setInputSrc] = useState(src ? src : "");
    const [inputSrcError, setInputSrcError] = useState("");
    const [inputAlt, setInputAlt] = useState(alt ? alt : "");
    const [inputAltError, setInputAltError] = useState("");

    const handleSave = (e: React.MouseEvent) => {
        if (inputSrc !== "" && inputAlt !== "") {
            handleImageUpdate({src: inputSrc, alt: inputAlt}, e);
            setInputSrcError("");
            setInputAltError("");
        } else {
            if (inputSrc === "") {
                setInputSrcError("Please provide src");
            }
            if (inputAlt === "") {
                setInputAltError("Please provide alt");
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

            <Button onMouseDown={handleSave} size="small"><Icon name="save" size="small"/> &nbsp; Update</Button>
        </div>
    );
};

export interface Image {
    src?: string;
    alt?: string;
}

export interface ImageInputProps extends Image {
    handleImageUpdate: (image: Image, e: React.MouseEvent) => void;
}