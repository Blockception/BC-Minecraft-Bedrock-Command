import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The clear command */
export const clear: CommandInfo[] = [
  {
    name: "clear",
    documentation: "Clears items from player inventory.",
    parameters: [
      { text: "clear", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: false,
        options: { playerOnly: true },
      },
      { text: "item name", type: ParameterType.item, required: false },
      { text: "data", type: ParameterType.integer, required: false },
      { text: "max count", type: ParameterType.integer, required: false },
    ],
  },
];
