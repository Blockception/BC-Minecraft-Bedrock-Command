import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The tickingarea command */
export const tickingarea: CommandInfo[] = [
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "begin x", type: ParameterType.coordinate, required: true },
      { text: "begin y", type: ParameterType.coordinate, required: true },
      { text: "begin z", type: ParameterType.coordinate, required: true },
      { text: "end x", type: ParameterType.coordinate, required: true },
      { text: "end y", type: ParameterType.coordinate, required: true },
      { text: "end z", type: ParameterType.coordinate, required: true },
      { text: "name", type: ParameterType.tickingarea, required: false },
    ],
  },
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "circle", type: ParameterType.keyword, required: true },
      { text: "center x", type: ParameterType.coordinate, required: true },
      { text: "center y", type: ParameterType.coordinate, required: true },
      { text: "center z", type: ParameterType.coordinate, required: true },
      { text: "radius", type: ParameterType.integer, required: true },
      { text: "name", type: ParameterType.tickingarea, required: false },
    ],
  },
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "list", type: ParameterType.keyword, required: true },
      {
        text: "all-dimensions",
        type: ParameterType.keyword,
        required: false,
      },
    ],
  },
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "remove", type: ParameterType.keyword, required: true },
      { text: "x", type: ParameterType.coordinate, required: true },
      { text: "y", type: ParameterType.coordinate, required: true },
      { text: "z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "remove", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.tickingarea, required: true },
    ],
  },
  {
    name: "tickingarea",
    documentation: "Add, remove, or list ticking areas.",
    parameters: [
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      { text: "remove_all", type: ParameterType.keyword, required: true },
    ],
  },
];
