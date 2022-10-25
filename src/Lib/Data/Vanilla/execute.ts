import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The execute command */
export const execute: CommandInfo[] = [
  {
    name: "execute",
    documentation: "Executes another command.",
    parameters: [
      { text: "execute", type: ParameterType.keyword, required: true },
      { text: "origin", type: ParameterType.selector, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "command", type: ParameterType.command, required: true },
    ],
  },
  {
    name: "execute",
    documentation: "Executes another command.",
    parameters: [
      { text: "execute", type: ParameterType.keyword, required: true },
      { text: "origin", type: ParameterType.selector, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "detect", type: ParameterType.keyword, required: true },
      { text: "detectPos x", type: ParameterType.coordinate, required: true },
      { text: "detectPos y", type: ParameterType.coordinate, required: true },
      { text: "detectPos z", type: ParameterType.coordinate, required: true },
      { text: "block", type: ParameterType.block, required: true },
      { text: "data", type: ParameterType.integer, required: true },
      { text: "command", type: ParameterType.command, required: true },
    ],
  },
];