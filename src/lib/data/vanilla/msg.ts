import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The msg command */
export const msg: CommandInfo[] = [
  {
    name: "msg",
    documentation: "An alias of `/tell` and `/w`. Displays a private message to other players.",
    parameters: [
      { text: "msg", type: ParameterType.keyword, required: true },
      { text: "selector", type: ParameterType.selector, required: true },
      { text: "message", type: ParameterType.message, required: true },
    ],
  },
];
