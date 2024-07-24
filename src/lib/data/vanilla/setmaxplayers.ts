import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The setmaxplayers command */
export const setmaxplayers: CommandInfo[] = [
  {
    name: "setmaxplayers",
    documentation: "Sets the maximum number of players for this game session",
    parameters: [
      { text: "setmaxplayers", type: ParameterType.keyword, required: true },
      {
        text: "maximum players",
        type: ParameterType.integer,
        required: true,
        options: { minimum: 1 },
      },
    ],
  },
];