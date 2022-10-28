import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The me command */
export const me: CommandInfo[] = [
  {
    name: "me",
    documentation: "Displays a message about the sender.",
    parameters: [
      { text: "me", type: ParameterType.keyword, required: true },
      { text: "message", type: ParameterType.message, required: true },
    ],
  },
];