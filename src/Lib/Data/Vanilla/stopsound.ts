import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The stopsound command */
export const stopsound: CommandInfo[] = [
  {
    name: "stopsound",
    documentation: "Stops all playing sounds on the given players.",
    parameters: [
      { text: "stopsound", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "sound", type: ParameterType.sound, required: false },
    ],
  },
];