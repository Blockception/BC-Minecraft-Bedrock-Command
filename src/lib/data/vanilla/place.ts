import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The place command */
export const place: CommandInfo[] = [
  {
    name: "place",
    documentation: "Places a jigsaw structure, feature or feature rule in the world",
    parameters: [
      { text: "place", type: ParameterType.keyword, required: true },
      { text: "feature", type: ParameterType.keyword, required: true },
      { text: "feature", type: ParameterType.string, required: true },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
    ],
  },
  {
    name: "place",
    documentation: "Places a jigsaw structure, feature or feature rule in the world",
    parameters: [
      { text: "place", type: ParameterType.keyword, required: true },
      { text: "featurerule", type: ParameterType.keyword, required: true },
      { text: "featurerule", type: ParameterType.string, required: true },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
    ],
  },
  {
    name: "place",
    documentation: "Places a jigsaw structure, feature or feature rule in the world",
    parameters: [
      { text: "place", type: ParameterType.keyword, required: true },
      { text: "jigsaw", type: ParameterType.keyword, required: true },
      { text: "pool", type: ParameterType.jigsaw, required: true },
      { text: "jigsawTarget", type: ParameterType.string, required: true },
      { text: "maxDepth", type: ParameterType.integer, required: true },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
      { text: "keepJigsaws", type: ParameterType.boolean, required: false },
      { text: "includeEntities", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "place",
    documentation: "Places a jigsaw structure, feature or feature rule in the world",
    parameters: [
      { text: "place", type: ParameterType.keyword, required: true },
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "structure", type: ParameterType.string, required: true },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
      { text: "ignoreStartHeight", type: ParameterType.boolean, required: false },
      { text: "keepJigsaws", type: ParameterType.boolean, required: false },
      { text: "includeEntities", type: ParameterType.boolean, required: false },
    ],
  },
];
