import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The ability command */
export const ability: CommandInfo[] = [
  {
    name: "ability",
    documentation: "Grants or revokes a player ability.",
    parameters: [{ text: "ability", type: ParameterType.keyword, required: true }],
  },
  {
    name: "ability",
    documentation: "Returns a list of abilities assigned to the specified player",
    parameters: [
      { text: "ability", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
    ],
  },
  {
    name: "ability",
    documentation: "Grants or revokes a player ability to fly",
    parameters: [
      { text: "ability", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "mayfly", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "ability",
    documentation: "Grants or revokes a player ability to speak",
    parameters: [
      { text: "ability", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "mute", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "ability",
    documentation: "Grants or revokes a player ability to build",
    parameters: [
      { text: "ability", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "worldbuilder", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
];
