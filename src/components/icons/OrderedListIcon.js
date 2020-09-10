import React from "react";

export default function OrderedListIcon() {

    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="9" y1="5" x2="21" y2="5" />
            <line x1="9" y1="12" x2="21" y2="12" />
            <line x1="9" y1="19" x2="21" y2="19" />
            <polyline points="3 10 5 10 3 13 5 13" />
            <polyline points="3 3 4 3 4 6" />
            <path d="M3 17H4H5L4 19C4.55 19 5 19.45 5 20C5 20.55 4.55 21 4 21H3" />
        </svg>
    );
}