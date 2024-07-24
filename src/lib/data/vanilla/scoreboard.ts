import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The scoreboard command */
export const scoreboard: CommandInfo[] = [
  {
    name: "scoreboard",
    documentation: "Add a new objective to the scoreboard.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.objective, required: true },
      { text: "dummy", type: ParameterType.keyword, required: true },
      { text: "display name", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Display a list of objectives.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "list", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Removes the given objective from chat.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "remove", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.objective, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the objective on the list.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "setdisplay", type: ParameterType.keyword, required: true },
      { text: "list", type: ParameterType.keyword, required: true },
      { text: "objective", type: ParameterType.objective, required: false },
      { text: "ascending", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the objective on the list.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "setdisplay", type: ParameterType.keyword, required: true },
      { text: "list", type: ParameterType.keyword, required: true },
      { text: "objective", type: ParameterType.objective, required: false },
      { text: "descending", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the objective on the sidebar.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "setdisplay", type: ParameterType.keyword, required: true },
      { text: "sidebar", type: ParameterType.keyword, required: true },
      { text: "objective", type: ParameterType.objective, required: false },
      { text: "ascending", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the objective on the sidebar.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "setdisplay", type: ParameterType.keyword, required: true },
      { text: "sidebar", type: ParameterType.keyword, required: true },
      { text: "objective", type: ParameterType.objective, required: false },
      { text: "descending", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the objective under the name.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "objectives", type: ParameterType.keyword, required: true },
      { text: "setdisplay", type: ParameterType.keyword, required: true },
      { text: "belowname", type: ParameterType.keyword, required: true },
      { text: "objective", type: ParameterType.objective, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Adds the given value onto the specified entities.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "add", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      { text: "count", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "List values of the given entity and their scores.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "list", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: false,
        options: { allowFakePlayers: true },
      },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Executes a scoreboard operation between two entities.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "operation", type: ParameterType.keyword, required: true },
      {
        text: "destination",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      { text: "operation", type: ParameterType.operation, required: true },
      {
        text: "selector",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Generates a random value onto the given entity.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "random", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      { text: "min", type: ParameterType.integer, required: true },
      { text: "max", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Substract a value from the given entities.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "remove", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      { text: "count", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Removes the scores from the given entities.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "reset", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { wildcard: true, allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: false },
    ],
  },
  {
    name: "scoreboard",
    documentation: "Sets the scores of the entities to a specific value.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      { text: "score", type: ParameterType.integer, required: true },
    ],
  },
  {
    name: "scoreboard",
    documentation: "A test statement on wheter or not the entity has the specified value/range.",
    parameters: [
      { text: "scoreboard", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.keyword, required: true },
      { text: "test", type: ParameterType.keyword, required: true },
      {
        text: "entity",
        type: ParameterType.selector,
        required: true,
        options: { allowFakePlayers: true },
      },
      { text: "objective", type: ParameterType.objective, required: true },
      {
        text: "min",
        type: ParameterType.integer,
        required: true,
        options: { wildcard: true },
      },
      {
        text: "max",
        type: ParameterType.integer,
        required: true,
        options: { wildcard: true },
      },
    ],
  },
];