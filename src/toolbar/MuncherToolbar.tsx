import React, {Fragment} from "react";
import {LinkControl} from "../controls/link/LinkControl";
import {UnlinkControl} from "../controls/link/UnlinkControl";
import {ToggleCodeControl, ToggleCodeControlProps} from "../controls/code/ToggleCodeControl";
import {UndoControl} from "../controls/undo/UndoControl";
import {RedoControl} from "../controls/undo/RedoControl";
import {BlockControl} from "../controls/block/BlockControl";
import {InlineControl} from "../controls/inline/InlineControl";
import {ColorControl} from "../controls/inline/ColorControl";
import {ImageControl, ImageControlProps} from "../controls/media/ImageControl";
import {YoutubeControl} from "../controls/media/YoutubeControl";
import {AlignControl} from "../controls/align/AlignControl";
import {ListControl} from "../controls/block/ListControl";
import {TableControl} from "../controls/block/TableControl";
import {EditorStatePropsWithFocus} from "../Muncher";

export const MuncherToolBar: React.FC<MuncherToolbarProps> = (
    {
        isCodeView, setIsCodeView, editorState,
        handleEditorStateChange, focusEditor, imageBlockToEdit, setImageBlockToEdit, children
    }) => {


    return (
        <div className="muncher-toolbar">
            <div className="muncher-toolbar--left">
                <ToggleCodeControl setIsCodeView={setIsCodeView} isCodeView={isCodeView}/>
                <span className="muncher-separator">|</span>
                <UndoControl editorState={editorState}
                             handleEditorStateChange={handleEditorStateChange}/>
                <RedoControl editorState={editorState}
                             handleEditorStateChange={handleEditorStateChange}/>
                {!isCodeView ? <Fragment>
                    <span className="muncher-separator">|</span>
                    <ListControl focusEditor={focusEditor}
                                 handleEditorStateChange={handleEditorStateChange}
                                 editorState={editorState}/>
                    <BlockControl focusEditor={focusEditor}
                                  handleEditorStateChange={handleEditorStateChange}
                                  editorState={editorState}/>
                    <TableControl focusEditor={focusEditor}
                                  handleEditorStateChange={handleEditorStateChange}
                                  editorState={editorState}/>
                    <span className="muncher-separator">|</span>
                    <InlineControl focusEditor={focusEditor}
                                   handleEditorStateChange={handleEditorStateChange}
                                   editorState={editorState}/>
                    <ColorControl focusEditor={focusEditor}
                                  handleEditorStateChange={handleEditorStateChange}
                                  editorState={editorState}/>
                    <span className="muncher-separator">|</span>
                    <LinkControl focusEditor={focusEditor}
                                 handleEditorStateChange={handleEditorStateChange}
                                 editorState={editorState}/>
                    <UnlinkControl focusEditor={focusEditor}
                                   handleEditorStateChange={handleEditorStateChange}
                                   editorState={editorState}/>
                    <ImageControl handleEditorStateChange={handleEditorStateChange}
                                  editorState={editorState}
                                  imageBlockToEdit={imageBlockToEdit}
                                  setImageBlockToEdit={setImageBlockToEdit}
                    />
                    <YoutubeControl handleEditorStateChange={handleEditorStateChange}
                                    editorState={editorState}/>
                    <span className="muncher-separator">|</span>
                    <AlignControl focusEditor={focusEditor}
                                  handleEditorStateChange={handleEditorStateChange}
                                  editorState={editorState}/>
                    <span className="muncher-separator">|</span>
                </Fragment> : ''}

            </div>
            <div className="muncher-toolbar--right">
                {children}
            </div>
        </div>
    );
}

export interface MuncherToolbarProps extends ToggleCodeControlProps, EditorStatePropsWithFocus, ImageControlProps {

}