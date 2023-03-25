import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The setblock command */
export const setblock: CommandInfo[] = [
  {
    name: "setblock",
    documentation: "Places the specified block.",
    parameters: [
      { text: "setblock", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      {
        text: "block states",
        type: ParameterType.blockStates,
        required: false,
      },
      {
        text: "old block mode",
        type: ParameterType.oldBlockMode,
        required: false,
      },
    ],
  },
];