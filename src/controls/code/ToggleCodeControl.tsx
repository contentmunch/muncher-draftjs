import React, {useContext} from "react";

import {Button, Icon} from "@contentmunch/muncher-ui";
import {MuncherContext} from "../../context/MuncherContext";

export const ToggleCodeControl: React.FC = () => {
    const {isCodeView, setIsCodeView} = useContext(MuncherContext);
    return (
        <Button title={isCodeView ? "Editor View" : "Html View"} onMouseDown={() => {
            setIsCodeView(!isCodeView);
        }} size="small">
            <Icon name={isCodeView ? 'edit' : 'code'}/>
        </Button>
    );
}
