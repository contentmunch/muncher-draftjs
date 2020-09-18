export const entityFromSelection = (editorState) => {
    const selectionState = editorState.getSelection();
    if (!selectionState.isCollapsed()) {
        const anchorKey = selectionState.getAnchorKey();

        const currentContent = editorState.getCurrentContent();

        const currentContentBlock = currentContent.getBlockForKey(anchorKey);

        const start = selectionState.getStartOffset();

        const entityId = currentContentBlock.getEntityAt(start);

        if (entityId !== null) {
            return currentContent.getEntity(entityId);
        }

    }
    return null;
};

export const getBlock = (editorState) => {
    const selection = editorState.getSelection();
    return editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey());
};
export const getBlockType = (editorState) => {

    return getBlock(editorState).getType();
};
export const getBlockAlignment = (editorState) => {
    return getBlock(editorState).getData().get('textAlign');
};
export const COLORS = [
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
        {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
    {label: 'Black', style: 'black'},
    {label: 'Brown', style: 'brown'},
];
export const colorStyleMap = {
    red: {
        color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)',
    },
    black: {
        color: 'rgba(19, 41, 75, 1.0)',
    },
    brown: {
        color: 'rgba(168, 42, 42, 1.0)',
    }
};