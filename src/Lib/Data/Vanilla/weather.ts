import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The weather command */
export const weather: CommandInfo[] = [
  {
    name: "weather",
    documentation: "Sets the weather.",
    parameters: [
      { text: "weather", type: ParameterType.keyword, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
      { text: "duration", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "weather",
    documentation: "Sets the weather.",
    parameters: [
      { text: "weather", type: ParameterType.keyword, required: true },
      { text: "rain", type: ParameterType.keyword, required: true },
      { text: "duration", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "weather",
    documentation: "Sets the weather.",
    parameters: [
      { text: "weather", type: ParameterType.keyword, required: true },
      { text: "thunder", type: ParameterType.keyword, required: true },
      { text: "duration", type: ParameterType.integer, required: false },
    ],
  },
];
