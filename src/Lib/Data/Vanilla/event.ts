import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The event command */
export const event: CommandInfo[] = [
  {
    name: "event",
    documentation: "Triggers an event for the specified objects.",
    parameters: [
      { text: "event", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true },
      { text: "event name", type: ParameterType.event, required: true },
    ],
  },
];
