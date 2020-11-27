import React from "react";

export const IframeRenderer: React.FC<IframeRendererProps> = ({src, title}) => {
    const showToolBar = () => {
        console.log("showing toolbar")
    };
    return (
        <React.Fragment>
            <iframe title={title} allowFullScreen frameBorder={0} width={300} height={200} src={src}
                    onMouseEnter={showToolBar}/>

        </React.Fragment>
    )
};

export interface IframeRendererProps {
    src: string;
    title: string;
}
