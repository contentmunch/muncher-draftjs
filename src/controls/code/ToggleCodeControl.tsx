import React from "react";

import {Button, Icon} from "@contentmunch/muncher-ui";

export const ToggleCodeControl: React.FC<ToggleCodeControlProps> = (
    {
        isCodeView, setIsCodeView
    }) => {
    return (
        <Button title={isCodeView ? "Editor View" : "Html View"} onMouseDown={() => {
            setIsCodeView(!isCodeView);
        }} size="small">
            <Icon name={isCodeView ? 'edit' : 'code'}/>
        </Button>
    );
}

export interface ToggleCodeControlProps {
    isCodeView: boolean;
    setIsCodeView: (codeView: boolean) => void;
}