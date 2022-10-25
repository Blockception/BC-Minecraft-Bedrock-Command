import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The locate command */
export const locate: CommandInfo[] = [
  {
    name: "locate",
    documentation: "Displays the coordinates for the closest structure of a given type.",
    parameters: [
      { text: "locate", type: ParameterType.keyword, required: true },
      { text: "feature", type: ParameterType.locateFeature, required: true },
    ],
  },
];