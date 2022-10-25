import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The xp command */
export const xp: CommandInfo[] = [
  {
    name: "xp",
    documentation: "Adds or removes player experience.",
    parameters: [
      { text: "xp", type: ParameterType.keyword, required: true },
      { text: "amount", type: ParameterType.xp, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
  {
    name: "xp",
    documentation: "Adds or removes player experience.",
    parameters: [
      { text: "xp", type: ParameterType.keyword, required: true },
      { text: "amount", type: ParameterType.integer, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
    ],
  },
];
