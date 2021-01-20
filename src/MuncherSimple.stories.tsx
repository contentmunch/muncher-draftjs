import React, {Fragment, useEffect, useState} from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {MuncherSimpleSkeleton} from "./skeleton/MuncherSimpleSkeleton";
import {EditorProps, MuncherSimple} from "./MuncherSimple";

export default {
    title: "Muncher/Simple",
    component: MuncherSimple
} as Meta;

const Template: Story<EditorProps> = (args => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    const content = "<h1>This is a heading</h1>\n" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
        "<p></p>\n" +
        "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <a href=\"sdf\">accusantium</a> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\n" +
        "<p></p>\n";

    const changeHandler = (html: string) => {
        console.log(html);
    };
    return (
        <Fragment>
            {
                isLoading ?
                    <MuncherSimpleSkeleton/> :
                    <MuncherSimple content={content} changeHandler={changeHandler}  {...args}/>
            }
        </Fragment>
    );
});
export const Default = Template.bind({});
