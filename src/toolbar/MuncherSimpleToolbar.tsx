import React from "react";
import {LinkControl} from "../controls/link/LinkControl";
import {UnlinkControl} from "../controls/link/UnlinkControl";
import {UndoControl} from "../controls/undo/UndoControl";
import {RedoControl} from "../controls/undo/RedoControl";
import {BlockControl} from "../controls/block/BlockControl";
import {InlineControl} from "../controls/inline/InlineControl";
import {ListControl} from "../controls/block/ListControl";
import {EditorStatePropsWithFocus} from "../MuncherSimple";

export const MuncherSimpleToolbar: React.FC<EditorStatePropsWithFocus> = (
    {
        editorState, handleEditorStateChange, focusEditor
    }) => {

    return (
        <div className="muncher-toolbar">
            <div className="muncher-toolbar--left">
                <UndoControl editorState={editorState}
                             handleEditorStateChange={handleEditorStateChange}/>
                <RedoControl editorState={editorState}
                             handleEditorStateChange={handleEditorStateChange}/>
                <span className="muncher-separator">|</span>
                <ListControl focusEditor={focusEditor}
                             handleEditorStateChange={handleEditorStateChange}
                             editorState={editorState}/>
                <BlockControl focusEditor={focusEditor}
                              handleEditorStateChange={handleEditorStateChange}
                              editorState={editorState}/>
                <span className="muncher-separator">|</span>
                <InlineControl focusEditor={focusEditor}
                               handleEditorStateChange={handleEditorStateChange}
                               editorState={editorState}/>
                <span className="muncher-separator">|</span>
                <LinkControl focusEditor={focusEditor}
                             handleEditorStateChange={handleEditorStateChange}
                             editorState={editorState}/>
                <UnlinkControl focusEditor={focusEditor}
                               handleEditorStateChange={handleEditorStateChange}
                               editorState={editorState}/>

                <span className="muncher-separator">|</span>

            </div>
        </div>
    );
}