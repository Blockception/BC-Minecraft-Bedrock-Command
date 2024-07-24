import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The classroom mode command */
export const classroommode: CommandInfo[] = [
  {
    name: "classroommode",
    documentation: "Launches and connects the world to the Classroom mode",
    parameters: [{ text: "classroommode", type: ParameterType.keyword, required: true }],
  },
]