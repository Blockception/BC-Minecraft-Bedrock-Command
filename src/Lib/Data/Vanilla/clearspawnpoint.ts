import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

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
