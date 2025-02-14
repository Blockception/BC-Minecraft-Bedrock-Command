import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The schedule command */
export const schedule: CommandInfo[] = [
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "on_area_loaded", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "on_area_loaded", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "circle", type: ParameterType.keyword, required: true },
      { text: "center x", type: ParameterType.coordinate, required: true },
      { text: "center y", type: ParameterType.coordinate, required: true },
      { text: "center z", type: ParameterType.coordinate, required: true },
      { text: "radius", type: ParameterType.integer, required: true },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "on_area_loaded", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      {
        text: "tickingarea name",
        type: ParameterType.tickingarea,
        required: true,
      },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "on_area_loaded", type: ParameterType.keyword, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "on_area_loaded", type: ParameterType.keyword, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "tickingarea", type: ParameterType.keyword, required: true },
      {
        text: "tickingarea name",
        type: ParameterType.tickingarea,
        required: true,
      },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "delay", type: ParameterType.keyword, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "function", type: ParameterType.function, required: true },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "delay", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "function", type: ParameterType.function, required: true },
      { text: "time", type: ParameterType.timeInTicks, required: true },
      { text: "append", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "schedule",
    documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
    parameters: [
      { text: "schedule", type: ParameterType.keyword, required: true },
      { text: "delay", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "function", type: ParameterType.function, required: true },
      { text: "time", type: ParameterType.timeInTicks, required: true },
      { text: "replace", type: ParameterType.keyword, required: false },
    ],
  },
];
