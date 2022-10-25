import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

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