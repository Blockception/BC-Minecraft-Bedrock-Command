import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The structure command */
export const structure: CommandInfo[] = [
  {
    name: "structure",
    documentation: "Saves the given area into a structure.",
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "save", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "save mode", type: ParameterType.saveMode, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Saves the given area into a structure.",
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "save", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      {
        text: "include entities",
        type: ParameterType.boolean,
        required: false,
      },
      { text: "save mode", type: ParameterType.saveMode, required: false },
      {
        text: "include blocks",
        type: ParameterType.boolean,
        required: false,
      },
    ],
  },
  {
    name: "structure",
    documentation: "Loads a structure to the world.",
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "load", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "rotation", type: ParameterType.rotation, required: false },
      { text: "mirror", type: ParameterType.mirror, required: false },
      {
        text: "include entities",
        type: ParameterType.boolean,
        required: false,
      },
      {
        text: "include blocks",
        type: ParameterType.boolean,
        required: false,
      },
      {
        text: "water logged blocks",
        type: ParameterType.boolean,
        required: false,
      },
      { text: "integrity", type: ParameterType.float, required: false },
      { text: "seed", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Loads a structure to the world.",
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "load", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "rotation", type: ParameterType.rotation, required: false },
      { text: "mirror", type: ParameterType.mirror, required: false },
      {
        text: "animation mode",
        type: ParameterType.structureAnimationMode,
        required: false,
      },
      {
        text: "animation seconds",
        type: ParameterType.float,
        required: false,
      },
      {
        text: "include entities",
        type: ParameterType.boolean,
        required: false,
      },
      {
        text: "include blocks",
        type: ParameterType.boolean,
        required: false,
      },
      {
        text: "water logged blocks",
        type: ParameterType.boolean,
        required: false,
      },
      { text: "integrity", type: ParameterType.float, required: false },
      { text: "seed", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Removes the structure from the contents.",
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "delete", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
    ],
  },
];