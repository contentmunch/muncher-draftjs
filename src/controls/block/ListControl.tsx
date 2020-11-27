import React, {Fragment, useContext} from "react";
import {RichUtils} from "draft-js";
import {getBlockType} from "../../utilities/draft/DraftUtilities";
import {Button, Icon} from "@contentmunch/muncher-ui";
import {MuncherContext} from "../../context/MuncherContext";


export const ListControl: React.FC = () => {
    const {handleEditorStateChange, focusEditor, editorState} = useContext(MuncherContext);

    return (
        <Fragment>
            {
                LIST_TYPES.map(listType =>
                    <Button
                        size="small"
                        active={listType.style === getBlockType(editorState)}
                        key={listType.style} title={listType.label}
                        onMouseDown={() => {
                            handleEditorStateChange(RichUtils.toggleBlockType(editorState, listType.style));
                            focusEditor();
                        }}>
                        <Icon iconString={listType.iconName}/>
                    </Button>
                )}
        </Fragment>
    );
};
const LIST_TYPES = [
    {label: 'Ordered List', style: 'ordered-list-item', iconName: 'ordered-list'},
    {label: 'Unordered List', style: 'unordered-list-item', iconName: 'unordered-list'},
];