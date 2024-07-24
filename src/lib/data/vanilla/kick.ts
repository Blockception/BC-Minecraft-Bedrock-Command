import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The kick command */
export const kick: CommandInfo[] = [
  {
    name: "kick",
    documentation: "Kicks the specified players.",
    parameters: [
      { text: "kick", type: ParameterType.keyword, required: true },
      {
        text: "selector",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
];