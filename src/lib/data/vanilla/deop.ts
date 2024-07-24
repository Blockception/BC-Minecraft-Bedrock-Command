import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The deop command */
export const deop: CommandInfo[] = [
  {
    name: "deop",
    documentation: "Removes operator status from a player",
    parameters: [
      { text: "deop", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true, playerOnly: true },
      },
    ],
  },
];
