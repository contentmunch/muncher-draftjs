import React from "react";

export const Table: React.FC = ({children}) => {
    return (
        <section className="row">
            {children}
        </section>
    );
};