export default function IframeDecorator(): {
    strategy: (contentBlock: any, callback: any, contentState: any) => void;
    component: (props: any) => JSX.Element;
};
