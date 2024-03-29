import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The daylock command */
export const daylock: CommandInfo[] = [
  {
    name: "daylock",
    documentation: "Locks and unlocks the day-night cycle.",
    parameters: [
      { text: "daylock", type: ParameterType.keyword, required: true },
      { text: "lock", type: ParameterType.boolean, required: false },
    ],
  },
];
