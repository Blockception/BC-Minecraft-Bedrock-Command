import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The playanimation command */
export const playanimation: CommandInfo[] = [
  {
    name: "playanimation",
    documentation: "Makes one or more entities play a one-off animation. Assumes all variables are set up correctly",
    parameters: [
      { text: "playanimation", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.selector, required: true },
      { text: "animation", type: ParameterType.animation, required: true },
      { text: "next state", type: ParameterType.string, required: false },
      {
        text: "stop expression",
        type: ParameterType.string,
        required: false,
      },
      {
        text: "controller name",
        type: ParameterType.string,
        required: false,
      },
    ],
  },
];