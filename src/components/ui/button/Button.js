import React from 'react';
import './assets/Button.scss';

export default function Button(props) {
    const {onClick, disabled, title, active} = {...props};
    return (
        <button onClick={onClick} className={active?"muncher__btn muncher__btn--active":"muncher__btn"} data-title={title}
                type="submit" disabled={!!disabled}>{props.children}</button>
    );
}