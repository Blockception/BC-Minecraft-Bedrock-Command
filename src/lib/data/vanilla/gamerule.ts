import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The gamerule command */
export const gamerule: CommandInfo[] = [
  {
    name: "gamerule",
    documentation: "Whether command blocks should notify admins when they perform commands.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "commandblockoutput",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether command blocks should be enabled in-game.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "commandblocksenabled",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether the daylight cycle and moon phases progress.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "dodaylightcycle",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not entities drop loot.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "doentitydrops", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not to do fire ticks, meaning that fire could do damage to block or not.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "dofiretick", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether to show the player a respawn screen or immediate respawn.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "doimmediaterespawn",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not to activate or deactivate the insomnia mechanic.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "doinsomnia", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not mobs should drop loot.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "domobloot", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not mobs / animal should be spawning.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "domobspawning", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not blocks that are destroyed also drop items.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "dotiledrops", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not to change between clear, rain and thunder weather.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "doweathercycle", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not drowning does damage to players.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "drowningdamage", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not falling does damage to players.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "falldamage", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not fire does damage to players.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "firedamage", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not freezing does damage to players.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "freezedamage", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "The maximum amount of commands that can be run in a single call (sub calls included)",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "functioncommandlimit",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "amount", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not the players maintain their inventory when dying",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "keepinventory", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "The maximum amount of commands that can be run in a single call (sub calls included).",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "maxcommandchainlength",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "int", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not mobs can explode the world.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "mobgriefing", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not players regain health by regen.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "naturalregeneration",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not players can attack each other.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "pvp", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "How many ticks the server can randomly progress elements of the world, such a crop growing.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "randomtickspeed",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "int", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "??",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "respawnblocksexplode",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not commands send back feedback to players, such as /tag @s list",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "sendcommandfeedback",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Sets or queries a game rule value.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "showbordereffect",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not global coordinates display is showed.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "showcoordinates",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Whether or not the death message are outputted",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      {
        text: "showdeathmessages",
        type: ParameterType.keyword,
        required: true,
      },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Sets or queries a game rule value.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "showtags", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Sets or queries a game rule value.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "spawnradius", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.integer, required: false },
    ],
  },
  {
    name: "gamerule",
    documentation: "Sets or queries a game rule value.",
    parameters: [
      { text: "gamerule", type: ParameterType.keyword, required: true },
      { text: "tntexplodes", type: ParameterType.keyword, required: true },
      { text: "value", type: ParameterType.boolean, required: false },
    ],
  },
];