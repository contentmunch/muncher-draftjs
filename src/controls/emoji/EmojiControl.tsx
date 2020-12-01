import React, {useState} from "react";
import {Button, DropdownButton, Icon} from "@contentmunch/muncher-ui";
import {EditorStatePropsWithFocus} from "../../Muncher";
import "./assets/EmojiControl.scss";
import {EditorState, Modifier} from "draft-js";

export const EmojiControl: React.FC<EditorStatePropsWithFocus> = ({editorState, handleEditorStateChange, focusEditor}) => {

    const [showContent, setShowContent] = useState(false);

    const insertEmoji = (e: React.MouseEvent, emoji: Emoji) => {
        const contentStateWithText = Modifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), emoji.emoji)
        const currentEditorState = EditorState.set(editorState, {currentContent: contentStateWithText});

        handleEditorStateChange(EditorState.moveFocusToEnd(currentEditorState));
        focusEditor();
        setShowContent(false);
    };
    return (
        <DropdownButton
            title="Emoji"
            drop="middle"
            element={<Icon name="smile"/>}
            showContent={showContent}
            setShowContent={setShowContent}
            active={showContent}
            size="small">
            <div className="emoji-content">
                {emojis.map((emoji, i) =>
                    <Button key={i} variant="transparent" size="small"
                            onMouseDown={(e) => insertEmoji(e, emoji)}>
                        <span title={emoji.label}>{emoji.emoji}</span>
                    </Button>
                )}
            </div>
        </DropdownButton>
    );
}
export const emojis: Emoji[] = [
    {label: "Smiling", emoji: "😀"},
    {label: "Smiling with sunglasses", emoji: "😎"},
    {label: "Laughing", emoji: "🤣"},
    {label: "Tears of joy", emoji: "😂"},
    {label: "Winking", emoji: "😉"},
    {label: "Smiling with hearts", emoji: "🥰"},
    {label: "With tounge", emoji: "😛"},
    {label: "With hand over mouth", emoji: "🤭"},
    {label: "Shushing", emoji: "🤫"},
    {label: "Thinking", emoji: "🤔"},
    {label: "Zipper-mouth", emoji: "🤐"},
    {label: "Smirking", emoji: "😏"},
    {label: "Lying", emoji: "🤥"},
    {label: "Sleeping", emoji: "😴"},
    {label: "With medical mask", emoji: "😷"},
    {label: "With thermometer", emoji: "🤒"},
    {label: "Sneezing", emoji: "🤧"},
    {label: "Woozy", emoji: "🥴"},
    {label: "Confused", emoji: "😕"},
    {label: "Worried", emoji: "😟"},
    {label: "With open mouth", emoji: "😯"},
    {label: "Astonished", emoji: "😲"},
    {label: "Crying ", emoji: "😢"},
    {label: "Screaming in fear", emoji: "😱"},
    {label: "Disappointed", emoji: "😞"},
    {label: "Weary", emoji: "😩"},
    {label: "Angry", emoji: "😠"},
    {label: "Skull", emoji: "💀"},
    {label: "Pile of poop", emoji: "💩"},
    {label: "Clown", emoji: "🤡"},
    {label: "Ghost", emoji: "👻"},
    {label: "Alien", emoji: "👽"},
    {label: "See no evil", emoji: "🙈"},
    {label: "Hear no evil", emoji: "🙉"},
    {label: "Speak no evil", emoji: "🙊"},
    {label: "Heart", emoji: "🧡"},
    {label: "Heart break", emoji: "💔"},
    {label: "Hundred", emoji: "💯"},
    {label: "Bomb", emoji: "💣"},
    {label: "Ok", emoji: "👌"},
    {label: "Crossed finger", emoji: "🤞"},
    {label: "Thumbs up", emoji: "👍"},
    {label: "Thumbs down", emoji: "👎"},
    {label: "Clap", emoji: "👏"},
    {label: "Hand shake", emoji: "🤝"},
    {label: "Namaste", emoji: "🙏"},
    {label: "Flexed bicep", emoji: "💪"},
    {label: "Unicorn", emoji: "🦄"},
    {label: "Pig", emoji: "🐖"},
    {label: "Goat", emoji: "🐐"},
    {label: "Rhinoceros", emoji: "🦏"},
    {label: "Hippopotamus", emoji: "🦛"},
];

export interface Emoji {
    label: string;
    emoji: string;
}