import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The clone command */
export const clone: CommandInfo[] = [
  {
    name: "clone",
    documentation: "Copies blocks from one place to another.",
    parameters: [
      { text: "clone", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "mask", type: ParameterType.maskMode, required: false },
      { text: "clone mode", type: ParameterType.cloneMode, required: true },
    ],
  },
  {
    name: "clone",
    documentation: "Copies blocks from one place to another.",
    parameters: [
      { text: "clone", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "filtered", type: ParameterType.keyword, required: true },
      { text: "clone mode", type: ParameterType.cloneMode, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      { text: "tile data", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "clone",
    documentation: "Copies blocks from one place to another.",
    parameters: [
      { text: "clone", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      {
        text: "destination x",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination y",
        type: ParameterType.coordinate,
        required: true,
      },
      {
        text: "destination z",
        type: ParameterType.coordinate,
        required: true,
      },
      { text: "filtered", type: ParameterType.keyword, required: true },
      { text: "clone mode", type: ParameterType.cloneMode, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      {
        text: "block states",
        type: ParameterType.blockStates,
        required: false,
      },
    ],
  },
];
