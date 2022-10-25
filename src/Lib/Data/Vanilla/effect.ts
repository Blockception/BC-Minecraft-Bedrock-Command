import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The effect command */
export const effect: CommandInfo[] = [
  {
    name: "effect",
    documentation: "Sets the difficulty level.",
    parameters: [
      { text: "effect", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true },
      { text: "effect", type: ParameterType.effect, required: true },
      { text: "seconds", type: ParameterType.integer, required: false },
      { text: "amplifier", type: ParameterType.integer, required: false },
      {
        text: "hide particles",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "effect",
    documentation: "Sets the difficulty level.",
    parameters: [
      { text: "effect", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
    ],
  },
];
