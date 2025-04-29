import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The effect command */
export const effect: CommandInfo[] = [
  {
    name: "effect",
    documentation: "Adds status effects on players and other entities.",
    permission_level: 1,
    parameters: [
      { text: "effect", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "effect", type: ParameterType.effect, required: false },
    ],
  },
  {
    name: "effect",
    documentation: "Adds status effects on players and other entities.",
    permission_level: 1,
    parameters: [
      { text: "effect", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true },
      { text: "effect", type: ParameterType.effect, required: true },
      { text: "infinite", type: ParameterType.keyword, required: true },
      { text: "amplifier", type: ParameterType.integer, required: false },
      { text: "hideParticles", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "effect",
    documentation: "Removes all status effects on players and other entities.",
    permission_level: 1,
    parameters: [
      { text: "effect", type: ParameterType.keyword, required: true },
      { text: "player", type: ParameterType.selector, required: true },
      { text: "effect", type: ParameterType.effect, required: true },
      { text: "seconds", type: ParameterType.integer, required: false },
      { text: "amplifier", type: ParameterType.integer, required: false },
      { text: "hideParticles", type: ParameterType.boolean, required: false },
    ],
  },
];