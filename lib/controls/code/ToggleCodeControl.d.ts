import React from "react";
import { EditorStateProps } from "../../Muncher";
export declare const ToggleCodeControl: React.FC<ToggleCodeControlProps>;
export interface ToggleCodeControlProps extends EditorStateProps {
    isCodeView?: boolean;
    setIsCodeView?: (codeView: boolean) => void;
    html?: string;
}
