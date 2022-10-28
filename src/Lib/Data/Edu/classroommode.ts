import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The classroom mode command */
export const classroommode: CommandInfo[] = [
  {
    name: "classroommode",
    documentation: "Launches and connects the world to the Classroom mode",
    parameters: [{ text: "classroommode", type: ParameterType.keyword, required: true }],
  },
]