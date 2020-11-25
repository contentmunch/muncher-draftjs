import React, {Fragment, useEffect, useState} from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Muncher, MuncherProps} from "./Muncher";
import {MuncherSkeleton} from "./MuncherSkeleton";

export default {
    title: "Muncher",
    component: Muncher
} as Meta;

const Template: Story<MuncherProps> = (args => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    const content = "<h1>Lorem Ipsum</h1>\n" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ultrices blandit. Maecenas vulputate diam risus, vel pellentesque nibh consequat ac. Morbi iaculis pharetra ultrices. Donec eros risus, tincidunt quis sodales eget, luctus eget diam. Mauris rhoncus felis facilisis lectus blandit congue. Vestibulum est tortor, ultricies in est eu, posuere efficitur diam. Nunc at vulputate metus, id eleifend risus. Aenean consequat convallis nisl, ut elementum tellus dapibus vitae.</p>\n" +
        "<p></p>\n" +
        "<p>Ut fermentum est arcu, vel scelerisque nisl consequat et. Ut in purus ut odio aliquam condimentum. Nulla condimentum risus id eros convallis, quis mollis dolor tristique. Fusce molestie libero quis tortor bibendum, sit amet pulvinar magna faucibus. Vivamus a massa quis augue ultricies ullamcorper ut sit amet mauris. Sed pharetra, nisi eget accumsan hendrerit, ligula mauris eleifend massa, eget efficitur enim nulla ac dui. Aliquam sed congue dui. Maecenas et purus sed mauris rhoncus molestie. Etiam a massa iaculis, semper neque ac, sodales nibh. Curabitur pellentesque felis mi, quis rutrum est rhoncus a. Integer condimentum id leo ac tempus. In arcu nisl, pretium ac tortor vel, consequat elementum justo.</p>\n" +
        "<p></p>\n" +
        "<p>Nunc elit mi, pharetra sit amet diam et, pulvinar ornare arcu. Duis sollicitudin tempus varius. Nunc sed neque viverra, finibus felis et, iaculis nibh. Sed vel mauris a nibh feugiat accumsan. Praesent et rhoncus ligula, rutrum convallis nulla. Pellentesque eget nibh augue. Mauris maximus libero nec metus tincidunt luctus. Vivamus enim dui, vulputate eget lorem id, venenatis vulputate risus.</p>";

    const changeHandler = (html: string) => {
        console.log(html);
    };
    return (
        <Fragment>
            {
                isLoading ?
                    <MuncherSkeleton/> :
                    <Muncher content={content} changeHandler={changeHandler} {...args}/>
            }
        </Fragment>
    );
});
export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args={
    content:"<h2>Content with Image</h2>\n" +
        "<figure><img src='https://images.pexels.com/photos/5778749/pexels-photo-5778749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100'/></figure>"
};