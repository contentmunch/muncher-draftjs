import React, {useState} from "react";
import DropdownButton from "../../ui/button/DropdownButton";
import SettingsIcon from "../../icons/SettingsIcon";
import ToggleLeftIcon from "../../icons/ToggleLeftIcon";
import './SettingsControl.scss';
import ToggleRightIcon from "../../icons/ToggleRightIcon";

export default function SettingsControl(props) {
    const {showStructure, setShowStructure} = {...props};
    const [showContent, setShowContent] = useState(false);
    const toggleStructure = () => {
        setShowStructure(!showStructure);
    };
    return (
        <DropdownButton title="Settings"
                        showContent={showContent}
                        setShowContent={setShowContent}
                        drop="left"
                        icon={<SettingsIcon/>}>

            <div className="settings__content">
                <div className="settings__content--item">Show Structure &nbsp;
                    <span className="settings__content--toggle" onClick={toggleStructure}>
                        {showStructure ? <ToggleRightIcon/> : <ToggleLeftIcon/>}
                    </span>
                </div>


            </div>

        </DropdownButton>

    );
}
