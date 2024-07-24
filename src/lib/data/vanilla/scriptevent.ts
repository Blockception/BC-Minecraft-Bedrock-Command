import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The scriptevent command */
export const scriptevent: CommandInfo[] = [
  {
    name: "scriptevent",
    documentation: "Fires the given event and message id",
    parameters: [
      { text: "scriptevent", type: ParameterType.keyword, required: true },
      { text: "message id", type: ParameterType.string, required: true },
      { text: "message", type: ParameterType.string, required: true },
    ],
  },
];
