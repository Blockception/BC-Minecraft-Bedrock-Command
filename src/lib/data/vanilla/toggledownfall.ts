import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The toggledownfall command */
export const toggledownfall: CommandInfo[] = [
  {
    parameters: [{ text: "toggledownfall", type: ParameterType.keyword, required: true }],
    name: "toggledownfall",
    documentation: "Toggles the weather.",
  },
];
