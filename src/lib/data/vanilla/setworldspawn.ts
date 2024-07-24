import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The setworldspawn command */
export const setworldspawn: CommandInfo[] = [
  {
    name: "setworldspawn",
    documentation: "Sets the worldspawn.",
    parameters: [
      { text: "setworldspawn", type: ParameterType.keyword, required: true },
      { text: "spawn x", type: ParameterType.coordinate, required: false },
      { text: "spawn y", type: ParameterType.coordinate, required: false },
      { text: "spawn z", type: ParameterType.coordinate, required: false },
    ],
  },
];
