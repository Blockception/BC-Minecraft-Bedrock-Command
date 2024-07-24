import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

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