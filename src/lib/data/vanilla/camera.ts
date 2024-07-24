import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

export const camera: CommandInfo[] = [
  // Clear
  {
    name: "camera",
    documentation: "Clears the camera settings on the selected players",
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "clear", type: ParameterType.keyword, required: true },
    ],
  },
  // Fades
  {
    name: "camera",
    documentation: "Makes the camera do a fade transition",
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "fade", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Makes the camera do a fade transition using a specified color",
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "color", type: ParameterType.keyword, required: true },
      { text: "red", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "green", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "blue", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
    ],
  },
  {
    name: "camera",
    documentation: "Makes the camera do a fade transition using a specified color",
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "fade in seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
      { text: "hold in seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
      { text: "fade out seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
    ],
  },
  {
    name: "camera",
    documentation: "Makes the camera do a fade transition using a specified color",
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "fade in seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
      { text: "hold in seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
      { text: "fade out seconds", type: ParameterType.float, required: true, options: { minimum: 0, maximum: 10 } },
      { text: "color", type: ParameterType.keyword, required: true },
      { text: "red", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "green", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "blue", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
    ],
  },
];
