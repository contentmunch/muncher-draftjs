import React, {Fragment} from "react";
import LinkControl from "../controls/link/LinkControl";
import UnlinkControl from "../controls/link/UnlinkControl";
import ToggleCodeControl from "../controls/code/ToggleCodeControl";
import UndoControl from "../controls/undo/UndoControl";
import RedoControl from "../controls/undo/RedoControl";
import BlockControl from "../controls/block/BlockControl";
import BoldControl from "../controls/inline/BoldControl";
import ItalicControl from "../controls/inline/ItalicControl";
import UnderlineControl from "../controls/inline/UnderlineControl";
import CodeControl from "../controls/inline/CodeControl";
import ColorControl from "../controls/inline/ColorControl";
import ImageControl from "../controls/media/ImageControl";
import YoutubeControl from "../controls/media/YoutubeControl";
import AlignLeftControl from "../controls/align/AlignLeftControl";
import AlignCenterControl from "../controls/align/AlignCenterControl";
import AlignRightControl from "../controls/align/AlignRightControl";
import AlignJustifyControl from "../controls/align/AlignJustifyControl";
import UnorderedListControl from "../controls/list/UnorderedListControl";
import OrderedListControl from "../controls/list/OrderedListControl";
import SmileControl from "../controls/media/SmileControl";
import SettingsControl from "../controls/setting/SettingsControl";

export default function MuncherToolBar(props) {

    const {codeView, setCodeView, html, editorState, onChange, showStructure, setShowStructure, focusEditor} = {...props};

    const onChangeAndFocus = (currentEditorState) => {
        onChange(currentEditorState);
        focusEditor();
    }
    return (
        <div className="muncher__toolbar">
            <div className="muncher__toolbar--left">
                <ToggleCodeControl codeView={codeView} setCodeView={setCodeView} html={html}
                                   editorState={editorState} setEditorState={onChange}/>
                <span className="muncher__separator">|</span>
                <UndoControl editorState={editorState} setEditorState={onChange}/>
                <RedoControl editorState={editorState} setEditorState={onChange}/>
                {!codeView ? <Fragment>
                    <span className="muncher__separator">|</span>
                    <UnorderedListControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <OrderedListControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <BlockControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher__separator">|</span>
                    <BoldControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <ItalicControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <UnderlineControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <CodeControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <ColorControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher__separator">|</span>
                    <LinkControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <UnlinkControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <ImageControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <YoutubeControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <SmileControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher__separator">|</span>
                    <AlignLeftControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <AlignCenterControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <AlignRightControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <AlignJustifyControl editorState={editorState} setEditorState={onChangeAndFocus}/>
                    <span className="muncher__separator">|</span>
                </Fragment> : ''}

            </div>
            <div className="muncher__toolbar--right">
                <SettingsControl showStructure={showStructure} setShowStructure={setShowStructure}/>
            </div>
        </div>
    );
}

