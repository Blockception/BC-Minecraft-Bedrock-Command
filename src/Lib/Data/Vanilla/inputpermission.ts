import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The inputpermission command */
export const inputpermission: CommandInfo[] = [
  {
    name: "inputpermission",
    documentation: "Queries the status of an input permission",
    parameters: [
      { text: "inputpermission", type: ParameterType.keyword, required: true },
      { text: "query", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "permission", type: ParameterType.permission, required: true },
      { text: "state", type: ParameterType.permissionState, required: false },
    ],
  },
  {
    name: "inputpermission",
    documentation: "Sets whether or not a player's input can affect their character",
    parameters: [
      { text: "inputpermission", type: ParameterType.keyword, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      { text: "permission", type: ParameterType.permission, required: true },
      { text: "state", type: ParameterType.permissionState, required: true },
    ],
  },
];
