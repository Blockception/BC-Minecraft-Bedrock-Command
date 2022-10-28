import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The op command */
export const op: CommandInfo[] = [
  {
    name: "op",
    documentation: "Grants operator status to a player.",
    parameters: [
      { text: "op", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
    ],
  },
];