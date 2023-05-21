import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The inputpermission command */
export const inputpermission: CommandInfo[] = [
  {
    name: "inputpermission",
    documentation: "Forces to open an NPC dialogue box to the targeted player(s)",
    parameters: [
      { text: "inputpermission", type: ParameterType.keyword, required: true },
      { text: "query", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.entity, required: true, options: { playerOnly: true } },
      { text: "permission", type: ParameterType.permission, required: true },
      { text: "state", type: ParameterType.permissionState, required: false },
    ],
  },
  {
    name: "inputpermission",
    documentation: "Forces to open an NPC dialogue box to the targeted player(s)",
    parameters: [
      { text: "inputpermission", type: ParameterType.keyword, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "target", type: ParameterType.entity, required: true, options: { playerOnly: true } },
      { text: "permission", type: ParameterType.permission, required: true },
      { text: "state", type: ParameterType.permissionState, required: true },
    ],
  },
];
