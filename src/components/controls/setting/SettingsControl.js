import React, {useState} from "react";
import './SettingsControl.scss';
import {Button, DropdownButton, Icon} from "@contentmunch/muncher-ui";
import PropTypes from "prop-types";

export default function SettingsControl({showStructure, setShowStructure, save}) {
    const [showContent, setShowContent] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const toggleStructure = () => {
        setShowStructure(!showStructure);
    };

    const saveClickHandler = () => {
        if (save) {
            save();
        }
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 3000);

    }
    return (
        <DropdownButton title="Settings" showContent={showContent} setShowContent={setShowContent}
                        drop="left" size="small" element={<Icon name="settings"/>} active={showContent}>
            <div className="muncher-settings--content">
                <div className="settings-content--item">
                    <Button
                        onMouseDown={toggleStructure}
                        size="small"
                        variant="secondary"
                    > Data &nbsp;
                        {showStructure ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                    </Button>

                </div>
                <div className="settings-content--item">
                    <Button
                        onMouseDown={saveClickHandler}
                        size="small"
                        disabled={isSaving}
                        variant="secondary"
                    > Save &nbsp;<Icon name="save"/>
                    </Button>
                </div>
            </div>
        </DropdownButton>
    );
}
SettingsControl.propTypes = {
    showStructure: PropTypes.bool.isRequired,
    setShowStructure: PropTypes.func.isRequired

};
