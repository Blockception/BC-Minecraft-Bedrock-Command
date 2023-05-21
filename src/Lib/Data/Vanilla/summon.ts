import { ParameterType } from "../../Types/ParameterType";
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
      { text: "rotation y", type: ParameterType.coordinate, required: false },
      { text: "rotation x", type: ParameterType.coordinate, required: false },
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
  {
    name: "summon",
    documentation: "Summons an entity.",
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entity type", type: ParameterType.entity, required: true },
      { text: "name", type: ParameterType.string, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: true },
      { text: "spawnPos y", type: ParameterType.coordinate, required: true },
      { text: "spawnPos z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookat entity", type: ParameterType.entity, required: true },
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
      { text: "name", type: ParameterType.string, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: true },
      { text: "spawnPos y", type: ParameterType.coordinate, required: true },
      { text: "spawnPos z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookat x", type: ParameterType.coordinate, required: true },
      { text: "lookat y", type: ParameterType.coordinate, required: true },
      { text: "lookat z", type: ParameterType.coordinate, required: true },
      { text: "spawnevent", type: ParameterType.event, required: false },
      { text: "name", type: ParameterType.string, required: false },
    ],
  },
];