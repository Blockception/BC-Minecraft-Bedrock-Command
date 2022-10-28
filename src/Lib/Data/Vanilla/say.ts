import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The say command */
export const say: CommandInfo[] = [
  {
    name: "say",
    documentation: "Displays a message to multiple players.",
    parameters: [
      { text: "say", type: ParameterType.keyword, required: true },
      { text: "message", type: ParameterType.message, required: true },
    ],
  },
];