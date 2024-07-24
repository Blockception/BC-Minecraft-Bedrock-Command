import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

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