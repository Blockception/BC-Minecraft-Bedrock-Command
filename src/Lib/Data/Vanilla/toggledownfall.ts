import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The toggledownfall command */
export const toggledownfall: CommandInfo[] = [
  {
    parameters: [{ text: "toggledownfall", type: ParameterType.keyword, required: true }],
    name: "toggledownfall",
    documentation: "Toggles the weather.",
  },
];
