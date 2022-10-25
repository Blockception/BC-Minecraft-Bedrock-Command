import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The spreadplayers command */
export const spreadplayers: CommandInfo[] = [
  {
    name: "spreadplayers",
    documentation: "Spreads the players around.",
    parameters: [
      { text: "spreadplayers", type: ParameterType.keyword, required: true },
      { text: "x", type: ParameterType.coordinate, required: true },
      { text: "z", type: ParameterType.coordinate, required: true },
      { text: "spread distance", type: ParameterType.float, required: true },
      { text: "max range", type: ParameterType.float, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
    ],
  },
];