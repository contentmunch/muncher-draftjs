import React from "react";
import {ReactComponent as Smile} from "../icons/smile.svg";

export default function SmileyDecorator() {
    return {
        strategy: findSmileyEntities,
        component: Smiley,
    };
}

const findSmileyEntities = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        if (entityKey != null) {
            let entity = contentState ? contentState.getEntity(entityKey) : null;
            console.log(entity.getType());
            return entity != null && entity.getType() === 'SMILEY';
        }
        return false;
    }, callback);
};

const Smiley = props => {
    const {smiley} = props.contentState.getEntity(props.entityKey).getData();
    const smileyClicked = () => {
        console.log("smiley clicked")
    };
    const smileyIcon = () => {
        switch (smiley) {
            case 'smile':
                return <Smile/>
        }
    };
    return (
        <span data-smiley={smiley} onClick={smileyClicked}>
            {smileyIcon()}
        </span>
    );
};
