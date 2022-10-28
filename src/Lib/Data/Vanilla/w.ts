import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The w command */
export const w: CommandInfo[] = [
  {
    name: "w",
    documentation: "Sends a message to the receiver.",
    parameters: [
      { text: "w", type: ParameterType.keyword, required: true },
      { text: "selector", type: ParameterType.selector, required: true },
      { text: "message", type: ParameterType.keyword, required: true },
    ],
  },
];
