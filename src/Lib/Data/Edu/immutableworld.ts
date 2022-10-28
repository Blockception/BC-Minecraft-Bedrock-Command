import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The immutableworld command */
export const immutableworld: CommandInfo[] = [
  {
    name: "immutableworld",
    documentation: "Sets the immutable state of the world",
    parameters: [
      { text: "immutableworld", type: ParameterType.keyword, required: true },
      { text: "immutableworld", type: ParameterType.boolean, required: false },
    ],
  },
];
