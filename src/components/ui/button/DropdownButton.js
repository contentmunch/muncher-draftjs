import React, {useCallback, useEffect, useRef} from 'react';
import './assets/DropdownButton.scss';
import Button from "./Button";

export default function DropdownButton(props) {
    const {onClick, disabled, title,active, icon, drop, onClose, showContent, setShowContent} = {...props};
    const ref = useRef(null);
    const buttonOnClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        setShowContent(true);
    }

    const onContentClose = useCallback(() => {
        setShowContent(false);
        if (onClose) {
            onClose();
        }
    }, [onClose, setShowContent]);
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onContentClose();
        }
    }, [onContentClose]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref && ref !== null) {
                const cur = ref.current;
                if (cur && !cur.contains(event.target)) {
                    onContentClose();
                }
            }
        }
        document.addEventListener("keydown", escFunction, false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction, onContentClose]);
    const dropdownClass = () => {
        switch (drop) {
            case "left":
                return "muncher__dropdown--content drop-left";

            default:
                return "muncher__dropdown--content";
        }
    };
    return (
        <div className="muncher__dropdown" ref={ref}>
            <Button onClick={buttonOnClick} title={title} disabled={!!disabled} active={active}>{icon}</Button>
            {
                showContent ? <div className={dropdownClass()}>
                    {props.children}
                </div> : ""
            }

        </div>
    );
}