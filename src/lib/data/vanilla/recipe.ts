import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The recipe command */
export const recipe: CommandInfo[] = [
  {
    name: "recipe",
    documentation: "Gives the player the given recipe id",
    parameters: [
      { text: "recipe", type: ParameterType.keyword, required: true },
      { text: "give", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "recipe", type: ParameterType.recipe, required: true, options: { playerOnly: true } },
    ]
  },
  {
    name: "recipe",
    documentation: "Takes recipe from the given player",
    parameters: [
      { text: "recipe", type: ParameterType.keyword, required: true },
      { text: "take", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "recipe", type: ParameterType.recipe, required: true, options: { playerOnly: true } },
    ]
  }
]