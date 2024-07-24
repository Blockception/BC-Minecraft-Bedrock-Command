import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The code command */
export const code: CommandInfo[] = [
  {
    name: "code",
    documentation: "??",
    parameters: [{ text: "code", type: ParameterType.keyword, required: true }],
  },
];
