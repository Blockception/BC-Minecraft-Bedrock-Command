import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The tellraw command */
export const tellraw: CommandInfo[] = [
  {
    name: "tellraw",
    documentation: "Sends a json messsage to players.",
    parameters: [
      { text: "tellraw", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      {
        text: "json raw text",
        type: ParameterType.jsonRawText,
        required: true,
      },
    ],
  },
];
