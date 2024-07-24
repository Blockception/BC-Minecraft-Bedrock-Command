import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The spawnpoint command */
export const spawnpoint: CommandInfo[] = [
  {
    name: "spawnpoint",
    documentation: "Sets the spawnpoint of the given entities.",
    parameters: [
      { text: "spawnpoint", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
      { text: "spawn x", type: ParameterType.coordinate, required: false },
      { text: "spawn y", type: ParameterType.coordinate, required: false },
      { text: "spawn z", type: ParameterType.coordinate, required: false },
    ],
  },
];