import React, {Fragment} from "react";
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
import {SettingsControl} from "../controls/setting/SettingsControl";
import {EditorState} from "draft-js";

export const MuncherToolBar: React.FC<MuncherToolbarProps> = (
    {
        codeView, setCodeView, html, editorState, onChange,
        showStructure, setShowStructure, focusEditor, saveHandler, deleteHandler
    }) => {
    const onChangeAndFocus = (currentEditorState: any) => {
        onChange(currentEditorState);
        focusEditor();
    }
    return (
        <div className="muncher-toolbar">
            <div className="muncher-toolbar--left">
                <ToggleCodeControl isCodeView={codeView} setIsCodeView={setCodeView} html={html}
                                   editorState={editorState} setEditorState={onChange}/>
                <span className="muncher-separator">|</span>
                <UndoControl editorState={editorState} setEditorState={onChange}/>
                <RedoControl editorState={editorState} setEditorState={onChange}/>
                {!codeView ? <Fragment>
                    <span className="muncher-separator">|</span>
                    <ListControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <BlockControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher-separator">|</span>
                    <InlineControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <ColorControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher-separator">|</span>
                    <LinkControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <UnlinkControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <ImageControl editorState={editorState} setEditorState={onChange}/>
                    <YoutubeControl editorState={editorState} setEditorState={onChange}/>
                    <span className="muncher-separator">|</span>
                    <AlignControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher-separator">|</span>
                </Fragment> : ''}

            </div>
            <div className="muncher-toolbar--right">
                <SettingsControl showStructure={showStructure}
                                 setShowStructure={setShowStructure}
                                 saveHandler={saveHandler}
                                 deleteHandler={deleteHandler}
                />
            </div>
        </div>
    );
}

export interface MuncherToolbarProps {
    codeView: boolean;
    setCodeView: (codeView: boolean) => void;
    html?: string;
    editorState: EditorState;
    onChange: (e: any) => void;
    showStructure: boolean;
    setShowStructure: (showStructure: boolean) => void;
    focusEditor: () => void;
    saveHandler?: () => void;
    deleteHandler?: () => void;
}