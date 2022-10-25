import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The title command */
export const title: CommandInfo[] = [
  {
    name: "title",
    documentation: "Sets the title.",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "title", type: ParameterType.keyword, required: true },
      { text: "titletext", type: ParameterType.message, required: true },
    ],
  },
  {
    name: "title",
    documentation: "Sets the sub titles.",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "subtitle", type: ParameterType.keyword, required: true },
      { text: "titletext", type: ParameterType.message, required: true },
    ],
  },
  {
    name: "title",
    documentation: "Sets the action bar.",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "actionbar", type: ParameterType.keyword, required: true },
      { text: "titletext", type: ParameterType.message, required: true },
    ],
  },
  {
    name: "title",
    documentation: "Clears the title & subtitle from the given players",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "clear", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "title",
    documentation: "Clears the title & subtitle from the given players",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "reset", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "title",
    documentation: "Set the title timings.",
    parameters: [
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "times", type: ParameterType.keyword, required: true },
      { text: "fade in", type: ParameterType.integer, required: true },
      { text: "stay", type: ParameterType.integer, required: true },
      { text: "fade out", type: ParameterType.integer, required: true },
    ],
  },
];