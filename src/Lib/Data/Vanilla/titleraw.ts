import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The titleraw command */
export const titleraw: CommandInfo[] = [
  {
    name: "titleraw",
    documentation: "Sets the title.",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "title", type: ParameterType.keyword, required: true },
      {
        text: "json raw text",
        type: ParameterType.jsonRawText,
        required: true,
      },
    ],
  },
  {
    name: "titleraw",
    documentation: "Sets the sub titles.",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "subtitle", type: ParameterType.keyword, required: true },
      {
        text: "json raw text",
        type: ParameterType.jsonRawText,
        required: true,
      },
    ],
  },
  {
    name: "titleraw",
    documentation: "Sets the action bar.",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "actionbar", type: ParameterType.keyword, required: true },
      {
        text: "json raw text",
        type: ParameterType.jsonRawText,
        required: true,
      },
    ],
  },
  {
    name: "titleraw",
    documentation: "Clears the title & subtitle from the given players",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
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
    name: "titleraw",
    documentation: "Clears the title & subtitle from the given players",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
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
    name: "titleraw",
    documentation: "Set the timings.",
    parameters: [
      { text: "titleraw", type: ParameterType.keyword, required: true },
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
