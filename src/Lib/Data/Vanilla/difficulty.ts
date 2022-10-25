import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

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
