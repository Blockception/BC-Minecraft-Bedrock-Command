import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The code command */
export const code: CommandInfo[] = [
  {
    name: "code",
    documentation: "??",
    parameters: [{ text: "code", type: ParameterType.keyword, required: true }],
  },
];
