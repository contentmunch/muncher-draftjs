import React, {useState} from "react";
import './SettingsControl.scss';
import {DropdownButton, Icon} from "@contentmunch/muncher-ui";
import PropTypes from "prop-types";

export default function SettingsControl({showStructure, setShowStructure}) {
    const [showContent, setShowContent] = useState(false);
    const toggleStructure = () => {
        setShowStructure(!showStructure);
    };
    return (
        <DropdownButton title="Settings" showContent={showContent} setShowContent={setShowContent}
                        drop="left" size="small" element={<Icon name="settings"/>}>
            <div className="muncher-settings--content">
                <div className="settings-content--item">Show Structure &nbsp;
                    <span className="settings-content--toggle" onClick={toggleStructure}>
                        {showStructure ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                    </span>
                </div>
            </div>
        </DropdownButton>
    );
}
SettingsControl.propTypes = {
    showStructure: PropTypes.bool.isRequired,
    setShowStructure: PropTypes.func.isRequired,
    settingsIcon: PropTypes.element.isRequired,
};
