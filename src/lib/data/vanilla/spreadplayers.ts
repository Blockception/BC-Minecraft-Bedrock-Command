import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The spreadplayers command */
export const spreadplayers: CommandInfo[] = [
  {
    name: "spreadplayers",
    documentation: "Teleports entities to random locations.",
    permission_level: 1,
    parameters: [
      { text: "spreadplayers", type: ParameterType.keyword, required: true },
      { text: "x", type: ParameterType.coordinate, required: true },
      { text: "z", type: ParameterType.coordinate, required: true },
      { text: "spreadDistance", type: ParameterType.float, required: true },
      { text: "maxRange", type: ParameterType.float, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "maxHeight", type: ParameterType.rotation, required: false },
    ],
  },
];