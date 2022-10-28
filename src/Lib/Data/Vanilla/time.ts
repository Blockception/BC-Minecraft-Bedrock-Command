import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The time command */
export const time: CommandInfo[] = [
  {
    name: "time",
    documentation: "Add to the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "amount", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "time",
    documentation: "Changes or queries the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "query", type: ParameterType.keyword, required: true },
      { text: "daytime", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "time",
    documentation: "Queries the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "query", type: ParameterType.keyword, required: true },
      { text: "gametime", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "time",
    documentation: "Changes or queries the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "query", type: ParameterType.keyword, required: true },
      { text: "day", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "time",
    documentation: "Sets the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "amount", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "time",
    documentation: "Sets the world's game time.",
    parameters: [
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "amount", type: ParameterType.time, required: true },
    ],
  },
];
