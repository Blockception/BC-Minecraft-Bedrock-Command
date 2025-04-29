import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The clone command */
export const clone: CommandInfo[] = [
  {
    name: "clone",
    documentation: "Clones blocks from one region to another.",
    permission_level: 1,
    parameters: [
      { text: "clone", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "filtered", type: ParameterType.keyword, required: true },
      { text: "cloneMode", type: ParameterType.cloneMode, required: true },
      { text: "tileName", type: ParameterType.block, required: true },
      { text: "blockStates", type: ParameterType.blockStates, required: false },
    ],
  },
  {
    name: "clone",
    documentation: "Clones blocks from one region to another.",
    permission_level: 1,
    parameters: [
      { text: "clone", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "maskMode", type: ParameterType.maskMode, required: false },
      { text: "cloneMode", type: ParameterType.cloneMode, required: false },
    ],
  },
];