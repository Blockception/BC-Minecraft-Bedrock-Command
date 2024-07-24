import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The ride command */
export const ride: CommandInfo[] = [
  {
    name: "ride",
    documentation:
      "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "start_riding", type: ParameterType.keyword, required: true },
      { text: "ride", type: ParameterType.selector, required: true },
      {
        text: "teleport",
        type: ParameterType.teleportRules,
        required: false,
      },
      {
        text: "fill mode",
        type: ParameterType.ridefillMode,
        required: false,
      },
    ],
  },
  {
    name: "ride",
    documentation:
      "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "stop_riding", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "ride",
    documentation:
      "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "rides", type: ParameterType.selector, required: true },
      { text: "evict_riders", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "ride",
    documentation:
      "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "summon_ride", type: ParameterType.keyword, required: true },
      { text: "entity type", type: ParameterType.entity, required: true },
      { text: "ride rules", type: ParameterType.rideRules, required: true },
      { text: "event", type: ParameterType.event, required: true },
      { text: "name", type: ParameterType.string, required: true },
    ],
  },
  {
    name: "ride",
    documentation:
      "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "rides", type: ParameterType.selector, required: true },
      { text: "summon_rider", type: ParameterType.keyword, required: true },
      { text: "entity type", type: ParameterType.entity, required: true },
      { text: "event", type: ParameterType.event, required: true },
      { text: "name", type: ParameterType.string, required: true },
    ],
  },
];