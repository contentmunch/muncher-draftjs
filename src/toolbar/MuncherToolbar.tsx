import React, {Fragment, useContext} from "react";
import {LinkControl} from "../controls/link/LinkControl";
import {UnlinkControl} from "../controls/link/UnlinkControl";
import {ToggleCodeControl} from "../controls/code/ToggleCodeControl";
import {UndoControl} from "../controls/undo/UndoControl";
import {RedoControl} from "../controls/undo/RedoControl";
import {BlockControl} from "../controls/block/BlockControl";
import {InlineControl} from "../controls/inline/InlineControl";
import {ColorControl} from "../controls/inline/ColorControl";
import {ImageControl} from "../controls/media/ImageControl";
import {YoutubeControl} from "../controls/media/YoutubeControl";
import {AlignControl} from "../controls/align/AlignControl";
import {ListControl} from "../controls/block/ListControl";
import {MuncherContext} from "../context/MuncherContext";

export const MuncherToolBar: React.FC = ({children}) => {
    const {isCodeView} = useContext(MuncherContext);

    return (
        <div className="muncher-toolbar">
            <div className="muncher-toolbar--left">
                <ToggleCodeControl/>
                <span className="muncher-separator">|</span>
                <UndoControl/><RedoControl/>
                {!isCodeView ? <Fragment>
                    <span className="muncher-separator">|</span>
                    <ListControl/><BlockControl/>
                    <span className="muncher-separator">|</span>
                    <InlineControl/><ColorControl/>
                    <span className="muncher-separator">|</span>
                    <LinkControl/><UnlinkControl/><ImageControl/><YoutubeControl/>
                    <span className="muncher-separator">|</span>
                    <AlignControl/>
                    <span className="muncher-separator">|</span>
                </Fragment> : ''}

            </div>
            <div className="muncher-toolbar--right">
                {children}
            </div>
        </div>
    );
}