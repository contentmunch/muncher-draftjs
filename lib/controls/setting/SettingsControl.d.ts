import React from "react";
import './assets/SettingsControl.scss';
export declare const SettingsControl: React.FC<SettingsControlProps>;
export interface SettingsControlProps {
    showStructure: boolean;
    setShowStructure: (showStructure: boolean) => void;
    saveHandler?: () => void;
    deleteHandler?: () => void;
}
