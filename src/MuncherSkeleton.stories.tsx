import React from "react";
import {MuncherSkeleton} from "./MuncherSkeleton";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Muncher/Skeleton",
    component: MuncherSkeleton
} as Meta;

const Template: Story = (() => <MuncherSkeleton/>);

export const Default = Template.bind({});
