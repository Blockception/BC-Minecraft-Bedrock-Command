import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The function command */
export const Function: CommandInfo[] = [
  {
    name: "function",
    documentation: "Runs a function.",
    parameters: [
      { text: "function", type: ParameterType.keyword, required: true },
      { text: "function path", type: ParameterType.function, required: true },
    ],
  },
];