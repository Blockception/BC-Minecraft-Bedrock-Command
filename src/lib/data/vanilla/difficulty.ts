import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The difficulty command */
export const difficulty: CommandInfo[] = [
  {
    name: "difficulty",
    documentation: "Sets the difficulty level.",
    parameters: [
      { text: "difficulty", type: ParameterType.keyword, required: true },
      { text: "mode", type: ParameterType.difficulty, required: true },
    ],
  },
];
