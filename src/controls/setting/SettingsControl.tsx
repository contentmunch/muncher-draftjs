import React, {useState} from "react";
import './assets/SettingsControl.scss';
import {Button, DropdownButton, Icon} from "@contentmunch/muncher-ui";

export const SettingsControl: React.FC<SettingsControlProps> = (
    {
        showStructure, setShowStructure,
        stripPastedStyles, setStripPastedStyles,
        spellCheck, setSpellCheck,showCharacterCount,setShowCharacterCount
    }) => {
    const [showContent, setShowContent] = useState(false);

    return (
        <DropdownButton title="Settings" showContent={showContent} setShowContent={setShowContent}
                        drop="left" size="small" element={<Icon name="settings"/>} active={showContent}>

            <div className="muncher-settings--content">
                <div className="settings-content--item">
                    <Button size="small" variant="secondary"
                            onMouseDown={() => setShowStructure(!showStructure)}>
                        {showStructure ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                        <span className={showStructure ? "on" : "off"}>Inspect</span>
                    </Button>
                </div>
            </div>
            <div className="muncher-settings--content">
                <div className="settings-content--item">
                    <Button size="small" variant="secondary"
                            onMouseDown={() => setSpellCheck(!spellCheck)}>
                        {spellCheck ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                        <span className={spellCheck ? "on" : "off"}><b>Spell Check</b></span>

                    </Button>
                </div>
            </div>
            <div className="muncher-settings--content">
                <div className="settings-content--item">
                    <Button size="small" variant="secondary"
                            onMouseDown={() => setStripPastedStyles(!stripPastedStyles)}>
                        {stripPastedStyles ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                        <span className={stripPastedStyles ? "on" : "off"}>Text Only Paste</span>
                    </Button>
                </div>
            </div>
            <div className="muncher-settings--content">
                <div className="settings-content--item">
                    <Button size="small" variant="secondary"
                            onMouseDown={() => setShowCharacterCount(!showCharacterCount)}>
                        {showCharacterCount ? <Icon name="toggle-right"/> : <Icon name="toggle-left"/>}
                        <span className={showCharacterCount ? "on" : "off"}>Show Character Count</span>
                    </Button>
                </div>
            </div>
        </DropdownButton>
    );
}

export interface SettingsControlProps {
    showStructure: boolean;
    setShowStructure: (showStructure: boolean) => void;
    stripPastedStyles: boolean;
    setStripPastedStyles: (stripPastedStyles: boolean) => void;
    spellCheck: boolean;
    setSpellCheck: (spellCheck: boolean) => void;
    showCharacterCount: boolean;
    setShowCharacterCount: (show: boolean) => void;
}

