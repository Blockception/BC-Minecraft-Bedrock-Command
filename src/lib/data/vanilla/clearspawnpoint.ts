import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The clearspawnpoint command */
export const clearspawnpoint: CommandInfo[] = [
  {
    name: "clearspawnpoint",
    documentation: "Removes the spawnpoint from the player.",
    parameters: [
      {
        text: "clearspawnpoint",
        type: ParameterType.keyword,
        required: true,
      },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
];
