import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The kill command */
export const kill: CommandInfo[] = [
  {
    name: "kill",
    documentation: "Kills entities (players, mobs, items, etc.).",
    parameters: [
      { text: "kill", type: ParameterType.keyword, required: true },
      { text: "selector", type: ParameterType.selector, required: false },
    ],
  },
];