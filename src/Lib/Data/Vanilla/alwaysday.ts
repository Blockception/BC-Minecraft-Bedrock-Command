import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The alwaysday command */
export const alwaysday: CommandInfo[] = [
  {
    name: "alwaysday",
    documentation: "Locks and unlocks the day-night cycle.",
    parameters: [
      { text: "alwaysday", type: ParameterType.keyword, required: true },
      { text: "lock", type: ParameterType.boolean, required: false },
    ],
  },
];
