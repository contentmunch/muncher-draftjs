export default function BlockRenderer(block: any): {
    component: (props: any) => JSX.Element | undefined;
    editable: boolean;
} | null;
