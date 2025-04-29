import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The summon command */
export const summon: CommandInfo[] = [
  {
    name: "summon",
    documentation: "Summons an entity.",
    permission_level: 1,
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "nameTag", type: ParameterType.string, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
    ],
  },
  {
    name: "summon",
    documentation: "Summons an entity.",
    permission_level: 1,
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
      { text: "spawnEvent", type: ParameterType.event, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "summon",
    documentation: "Summons an entity.",
    permission_level: 1,
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
      { text: "spawnEvent", type: ParameterType.event, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "summon",
    documentation: "Summons an entity.",
    permission_level: 1,
    parameters: [
      { text: "summon", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "spawnPos x", type: ParameterType.coordinate, required: false },
      { text: "spawnPos y", type: ParameterType.coordinate, required: false },
      { text: "spawnPos z", type: ParameterType.coordinate, required: false },
      { text: "yRot", type: ParameterType.rotation, required: false },
      { text: "xRot", type: ParameterType.rotation, required: false },
      { text: "spawnEvent", type: ParameterType.event, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
];