import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The enchant command */
export const enchant: CommandInfo[] = [
  {
    name: "enchant",
    documentation: "Enchants a player item.",
    parameters: [
      { text: "enchant", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "id", type: ParameterType.integer, required: true },
      { text: "level", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "enchant",
    documentation: "Enchants a player item.",
    parameters: [
      { text: "enchant", type: ParameterType.keyword, required: true },
      {
        text: "player",
        type: ParameterType.selector,
        required: true,
        options: { playerOnly: true },
      },
      { text: "id", type: ParameterType.string, required: true },
      { text: "level", type: ParameterType.integer, required: false },
    ],
  },
];
