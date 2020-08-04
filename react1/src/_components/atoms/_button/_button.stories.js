import React from "react";
import MyButton from "./_button"
import { action } from "@storybook/addon-actions";

export default {
    component: AddTaskButton,
    title: "AddButton",
};

const buttonData={
    hidden: "false",
    setHidden: action("Button clicked"),
}

export const AddButtonStory=()=><MyButton {...buttonData}></MyButton>