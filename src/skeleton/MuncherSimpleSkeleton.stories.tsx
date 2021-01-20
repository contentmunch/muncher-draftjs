import React from "react";
import {MuncherSimpleSkeleton} from "./MuncherSimpleSkeleton";
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "Muncher/SimpleSkeleton",
    component: MuncherSimpleSkeleton
} as Meta;

const Template: Story = (() => <MuncherSimpleSkeleton/>);

export const Default = Template.bind({});
