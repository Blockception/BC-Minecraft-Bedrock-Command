import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The tell command */
export const tell: CommandInfo[] = [
  {
    name: "tell",
    documentation: "Sends a private message to one or more players.",
    parameters: [
      { text: "tell", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "message", type: ParameterType.message, required: true },
    ],
  },
];