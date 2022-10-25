import { ParameterType } from "../../Types";
import { CommandInfo } from "../CommandInfo";

/**The summon command */
export const summon: CommandInfo[] = [
  {
    name: "summon",
    documentation: "Summons an entity.",
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entity type", type: ParameterType.entity, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
      { text: "spawnevent", type: ParameterType.event, required: false },
      { text: "name", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "summon",
    documentation: "Summons an entity.",
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entity type", type: ParameterType.entity, required: true },
      { text: "name", type: ParameterType.string, required: false },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
    ],
  },
];