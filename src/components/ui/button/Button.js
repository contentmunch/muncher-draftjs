import React from 'react';
import './assets/Button.scss';
import PropTypes from "prop-types";

export default function Button(props) {
    const {onClick, onMouseDown, disabled, title, active, children} = {...props};
    return (
        <button onClick={onClick} onMouseDown={onMouseDown}
                className={active ? "muncher__btn muncher__btn--active" : "muncher__btn"} data-title={title}
                type="submit" disabled={!!disabled}>{children}</button>
    );
}
Button.propTypes = {
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};