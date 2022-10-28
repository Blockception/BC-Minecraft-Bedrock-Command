import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The testfor command */
export const testfor: CommandInfo[] = [
  {
    name: "testfor",
    documentation: "Counts entities (players, mobs, items, etc.) matching specified conditions.",
    parameters: [
      { text: "testfor", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
    ],
  },
];
