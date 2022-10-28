import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The testforblock command */
export const testforblock: CommandInfo[] = [
  {
    name: "testforblock",
    documentation: "tests whether a certain block is a specific location.",
    parameters: [
      { text: "testforblock", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "tile name", type: ParameterType.block, required: true },
      { text: "data value", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "testforblocks",
    documentation: "Tests whether the blocks in two regions match.",
    parameters: [
      { text: "testforblocks", type: ParameterType.keyword, required: true },
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
    ],
  },
  {
    name: "testforblocks",
    documentation: "Tests whether the blocks in two regions match.",
    parameters: [
      { text: "testforblocks", type: ParameterType.keyword, required: true },
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
      { text: "all", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "testforblocks",
    documentation: "Tests whether the blocks in two regions match.",
    parameters: [
      { text: "testforblocks", type: ParameterType.keyword, required: true },
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
      { text: "masked", type: ParameterType.keyword, required: true },
    ],
  },
];