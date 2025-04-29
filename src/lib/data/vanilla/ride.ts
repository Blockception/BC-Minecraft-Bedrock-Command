import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The ride command */
export const ride: CommandInfo[] = [
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "start_riding", type: ParameterType.keyword, required: true },
      { text: "ride", type: ParameterType.selector, required: true },
      { text: "teleport_ride", type: ParameterType.keyword, required: false },
      { text: "if_group_fits", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "start_riding", type: ParameterType.keyword, required: true },
      { text: "ride", type: ParameterType.selector, required: true },
      { text: "teleport_ride", type: ParameterType.keyword, required: false },
      { text: "until_full", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "start_riding", type: ParameterType.keyword, required: true },
      { text: "ride", type: ParameterType.selector, required: true },
      { text: "teleport_rider", type: ParameterType.keyword, required: false },
      { text: "if_group_fits", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "start_riding", type: ParameterType.keyword, required: true },
      { text: "ride", type: ParameterType.selector, required: true },
      { text: "teleport_rider", type: ParameterType.keyword, required: false },
      { text: "until_full", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "stop_riding", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "summon_ride", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "no_ride_change", type: ParameterType.keyword, required: false },
      { text: "spawnEvent", type: ParameterType.string, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "summon_ride", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "reassign_rides", type: ParameterType.keyword, required: false },
      { text: "spawnEvent", type: ParameterType.string, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "riders", type: ParameterType.selector, required: true },
      { text: "summon_ride", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "skip_riders", type: ParameterType.keyword, required: false },
      { text: "spawnEvent", type: ParameterType.string, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "rides", type: ParameterType.selector, required: true },
      { text: "evict_riders", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "ride",
    documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.",
    permission_level: 1,
    parameters: [
      { text: "ride", type: ParameterType.keyword, required: true },
      { text: "rides", type: ParameterType.selector, required: true },
      { text: "summon_rider", type: ParameterType.keyword, required: true },
      { text: "entityType", type: ParameterType.entity, required: true },
      { text: "spawnEvent", type: ParameterType.string, required: false },
      { text: "nameTag", type: ParameterType.string, required: false },
    ],
  },
];