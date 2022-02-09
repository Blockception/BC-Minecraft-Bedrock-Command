import { ParameterType } from "../Types/ParameterType";
import { CommandContainer } from "./CommandContainer";

export const Vanilla: CommandContainer = {
  /**The alwaysday command */
  alwaysday: [
    {
      name: "alwaysday",
      documentation: "Locks and unlocks the day-night cycle.",
      parameters: [
        { text: "alwaysday", type: ParameterType.keyword, required: true },
        { text: "lock", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The camerashake command */
  camerashake: [
    {
      name: "camerashake",
      documentation: "Applies shaking to the players' camera with specified intensity and duration",
      parameters: [
        { text: "camerashake", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "intensity", type: ParameterType.float, required: false, options: { minimum: 0, maximum: 4 } },
        { text: "seconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
        { text: "shake type", type: ParameterType.cameraShakeType, required: false },
      ],
    },
    {
      name: "camerashake",
      documentation: "Stops shaking to the players' camera with specified intensity and duration",
      parameters: [
        { text: "camerashake", type: ParameterType.keyword, required: true },
        { text: "stop", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
      ],
    },
  ],
  /**The clear command */
  clear: [
    {
      name: "clear",
      documentation: "Clears items from player inventory.",
      parameters: [
        { text: "clear", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
        { text: "item name", type: ParameterType.item, required: false },
        { text: "data", type: ParameterType.integer, required: false },
        { text: "max count", type: ParameterType.integer, required: false },
      ],
    },
  ],
  /**The clearspawnpoint command */
  clearspawnpoint: [
    {
      name: "clearspawnpoint",
      documentation: "Removes the spawnpoint from the player.",
      parameters: [
        { text: "clearspawnpoint", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } }
      ],
    },
  ],
  /**The clone command */
  clone: [
    {
      name: "clone",
      documentation: "Copies blocks from one place to another.",
      parameters: [
        { text: "clone", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "mask", type: ParameterType.maskMode, required: false },
        { text: "clone mode", type: ParameterType.cloneMode, required: true },
      ],
    },
    {
      name: "clone",
      documentation: "Copies blocks from one place to another.",
      parameters: [
        { text: "clone", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "filtered", type: ParameterType.keyword, required: true },
        { text: "clone mode", type: ParameterType.cloneMode, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "tile data", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "clone",
      documentation: "Copies blocks from one place to another.",
      parameters: [
        { text: "clone", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "filtered", type: ParameterType.keyword, required: true },
        { text: "clone mode", type: ParameterType.cloneMode, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "block states", type: ParameterType.blockStates, required: false },
      ],
    },
  ],
  /**The damage command */
  damage: [
    {
      name: "damage",
      documentation: "Apply damage to the specified entity.",
      parameters: [
        { text: "damage", type: ParameterType.keyword, required: true },
        { text: "target", type: ParameterType.selector, required: true },
        { text: "amount", type: ParameterType.integer, required: true },
        { text: "cause", type: ParameterType.causeType, required: false },
      ],
    },
    {
      name: "damage",
      documentation: "Apply damage to the specified entity.",
      parameters: [
        { text: "damage", type: ParameterType.keyword, required: true },
        { text: "target", type: ParameterType.selector, required: true },
        { text: "amount", type: ParameterType.integer, required: true },
        { text: "cause", type: ParameterType.causeType, required: true },
        { text: "entity", type: ParameterType.keyword, required: true },
        { text: "damager", type: ParameterType.selector, required: true },
      ],
    }
  ],
  /**The daylock command */
  daylock: [
    {
      name: "daylock",
      documentation: "Locks and unlocks the day-night cycle.",
      parameters: [
        { text: "daylock", type: ParameterType.keyword, required: true },
        { text: "lock", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The dialogue command */
  dialogue: [
    {
      name: "dialogue",
      documentation: "Forces to open an NPC dialogue box to the targeted player(s)",
      parameters: [
        { text: "dialogue", type: ParameterType.keyword, required: true },
        { text: "open", type: ParameterType.keyword, required: true },
        { text: "npc", type: ParameterType.selector, required: true, options: { allowFakePlayers: false, playerOnly: false } },
        { text: "player receiver", type: ParameterType.selector, required: true, options: { playerOnly: true, allowFakePlayers: false } },
        { text: "scene name", type: ParameterType.string, required: false },
      ],
    },
    {
      name: "dialogue",
      documentation: "Direct an NPC to use the dialogue provided in a specifically designated scene file",
      parameters: [
        { text: "dialogue", type: ParameterType.keyword, required: true },
        { text: "change", type: ParameterType.keyword, required: true },
        { text: "npc", type: ParameterType.selector, required: true, options: { allowFakePlayers: false, playerOnly: false } },
        { text: "scene name", type: ParameterType.string, required: true },
        { text: "player receiver", type: ParameterType.selector, required: false, options: { playerOnly: true, allowFakePlayers: false } },
      ],
    },
  ],
  /**The difficulty command */
  difficulty: [
    {
      name: "difficulty",
      documentation: "Sets the difficulty level.",
      parameters: [
        { text: "difficulty", type: ParameterType.keyword, required: true },
        { text: "mode", type: ParameterType.difficulty, required: true },
      ],
    },
  ],
  /**The effect command */
  effect: [
    {
      name: "effect",
      documentation: "Sets the difficulty level.",
      parameters: [
        { text: "effect", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true },
        { text: "effect", type: ParameterType.effect, required: true },
        { text: "seconds", type: ParameterType.integer, required: false },
        { text: "amplifier", type: ParameterType.integer, required: false },
        { text: "hide particles", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "effect",
      documentation: "Sets the difficulty level.",
      parameters: [
        { text: "effect", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true },
        { text: "clear", type: ParameterType.keyword, required: true },
      ],
    },
  ],
  /**The enchant command */
  enchant: [
    {
      name: "enchant",
      documentation: "Enchants a player item.",
      parameters: [
        { text: "enchant", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "id", type: ParameterType.integer, required: true },
        { text: "level", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "enchant",
      documentation: "Enchants a player item.",
      parameters: [
        { text: "enchant", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "id", type: ParameterType.string, required: true },
        { text: "level", type: ParameterType.keyword, required: false },
      ],
    },
  ],
  /**The event command */
  event: [
    {
      name: "event",
      documentation: "Triggers an event for the specified objects.",
      parameters: [
        { text: "event", type: ParameterType.keyword, required: true },
        { text: "entity", type: ParameterType.keyword, required: true },
        { text: "target", type: ParameterType.selector, required: true },
        { text: "event name", type: ParameterType.event, required: true },
      ],
    },
  ],
  /**The execute command */
  execute: [
    {
      name: "execute",
      documentation: "Executes another command.",
      parameters: [
        { text: "execute", type: ParameterType.keyword, required: true },
        { text: "origin", type: ParameterType.selector, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "command", type: ParameterType.command, required: true },
      ],
    },
    {
      name: "execute",
      documentation: "Executes another command.",
      parameters: [
        { text: "execute", type: ParameterType.keyword, required: true },
        { text: "origin", type: ParameterType.selector, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "detect", type: ParameterType.keyword, required: true },
        { text: "detectPos x", type: ParameterType.coordinate, required: true },
        { text: "detectPos y", type: ParameterType.coordinate, required: true },
        { text: "detectPos z", type: ParameterType.coordinate, required: true },
        { text: "block", type: ParameterType.block, required: true },
        { text: "data", type: ParameterType.integer, required: true },
        { text: "command", type: ParameterType.command, required: true },
      ],
    },
  ],
  /**The fill command */
  fill: [
    {
      name: "fill",
      documentation: "Fills a region with a specific block.",
      parameters: [
        { text: "fill", type: ParameterType.keyword, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "tile data", type: ParameterType.integer, required: true },
        { text: "replace", type: ParameterType.keyword, required: true },
        { text: "replace tile name", type: ParameterType.block, required: false },
        { text: "replace data value", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "fill",
      documentation: "Fills a region with a specific block.",
      parameters: [
        { text: "fill", type: ParameterType.keyword, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "tile data", type: ParameterType.integer, required: true },
        { text: "replace", type: ParameterType.keyword, required: true },
        { text: "replace tile name", type: ParameterType.block, required: false },
        { text: "replace block states", type: ParameterType.blockStates, required: false },
      ],
    },
    {
      name: "fill",
      documentation: "Fills a region with a specific block.",
      parameters: [
        { text: "fill", type: ParameterType.keyword, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "block states", type: ParameterType.blockStates, required: true },
        { text: "replace", type: ParameterType.keyword, required: true },
        { text: "replace tile name", type: ParameterType.block, required: false },
        { text: "replace block states", type: ParameterType.blockStates, required: false },
      ],
    },
    {
      name: "fill",
      documentation: "Fills a region with a specific block.",
      parameters: [
        { text: "fill", type: ParameterType.keyword, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "tile data", type: ParameterType.integer, required: false },
        { text: "mode", type: ParameterType.fillMode, required: true },
      ],
    },
  ],
  /**The fog command */
  fog: [
    {
      name: "fog",
      documentation: "Pushes a new fog setting, to specified player(s), along with a user provided ID, onto the top of the Fog Command layers of the players' active fog stacks.",
      parameters: [
        { text: "fog", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "push", type: ParameterType.keyword, required: true },
        { text: "fog id", type: ParameterType.string, required: true },
        { text: "user provided id", type: ParameterType.string, required: true },
      ],
    },
    {
      name: "fog",
      documentation: 'Removes the top-most fog setting, from selected player(s), that matches the user provided ID (i.e. as provided previously via a "/fog push" command).',
      parameters: [
        { text: "fog", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "pop", type: ParameterType.keyword, required: true },
        { text: "user provided id", type: ParameterType.string, required: true },
      ],
    },
    {
      name: "fog",
      documentation:
        'Removes all matching fog settings, from the selected player(s), that matches the user-provided ID (i.e. as provided previously via one or more "/fog push" commands).',
      parameters: [
        { text: "fog", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "remove", type: ParameterType.keyword, required: true },
        { text: "user provided id", type: ParameterType.string, required: true },
      ],
    },
  ],
  /**The function command */
  function: [
    {
      name: "function",
      documentation: "Runs a function.",
      parameters: [
        { text: "function", type: ParameterType.keyword, required: true },
        { text: "function path", type: ParameterType.function, required: true },
      ],
    },
  ],
  /**The gamemode command */
  gamemode: [
    {
      name: "gamemode",
      documentation: "Sets a player's game mode.",
      parameters: [
        { text: "gamemode", type: ParameterType.keyword, required: true },
        { text: "gamemode", type: ParameterType.gamemode, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
      ],
    },
  ],
  /**The gamerule command */
  gamerule: [
    {
      name: "gamerule",
      documentation: "Whether command blocks should notify admins when they perform commands.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "commandblockoutput", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Whether command blocks should be enabled in-game.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "commandblocksenabled", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Whether the daylight cycle and moon phases progress.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "dodaylightcycle", type: ParameterType.keyword, required: true },
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
        { text: "doimmediaterespawn", type: ParameterType.keyword, required: true },
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
        { text: "functioncommandlimit", type: ParameterType.keyword, required: true },
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
        { text: "maxcommandchainlength", type: ParameterType.keyword, required: true },
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
        { text: "naturalregeneration", type: ParameterType.keyword, required: true },
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
        { text: "randomtickspeed", type: ParameterType.keyword, required: true },
        { text: "int", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "??",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "respawnblocksexplode", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Whether or not commands send back feedback to players, such as /tag @s list",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "sendcommandfeedback", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Sets or queries a game rule value.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "showbordereffect", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Whether or not global coordinates display is showed.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "showcoordinates", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation: "Whether or not the death message are outputted",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "showdeathmessages", type: ParameterType.keyword, required: true },
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
  ],
  /**The give command */
  give: [
    {
      name: "give",
      documentation: "Gives an item to a player.",
      parameters: [
        { text: "give", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "item name", type: ParameterType.item, required: true },
        { text: "amount", type: ParameterType.integer, required: false },
        { text: "data", type: ParameterType.integer, required: false },
        { text: "components", type: ParameterType.jsonItem, required: false },
      ],
    },
  ],
  /**The kick command */
  kick: [
    {
      name: "kick",
      documentation: "Kicks the specified players.",
      parameters: [
        { text: "kick", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: false, options: { playerOnly: true } },
      ],
    },
  ],
  /**The kill command */
  kill: [
    {
      name: "kill",
      documentation: "Kills entities (players, mobs, items, etc.).",
      parameters: [
        { text: "kill", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: false },
      ],
    },
  ],
  /**The locate command */
  locate: [
    {
      name: "locate",
      documentation: "Displays the coordinates for the closest structure of a given type.",
      parameters: [
        { text: "locate", type: ParameterType.keyword, required: true },
        { text: "feature", type: ParameterType.locateFeature, required: true },
      ],
    },
  ],
  /**The loot command */
  loot: [
    {
      name: "loot",
      documentation: "Drops the given loot table into the world",
      parameters: [
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "spawn", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "kill", type: ParameterType.keyword, required: true },
        { text: "entity target", type: ParameterType.selector, required: true },
        { text: "item", type: ParameterType.item, required: false },
      ]
    },
    {
      name: "loot",
      documentation: "Drops the given loot table into the world",
      parameters: [
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "spawn", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "kill", type: ParameterType.keyword, required: true },
        { text: "entity target", type: ParameterType.selector, required: true },
        { text: "item", type: ParameterType.handType, required: false },
      ]
    },
    {
      name: "loot",
      documentation: "Drops the given loot table into the world",
      parameters: [
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "spawn", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "loot table", type: ParameterType.lootTable, required: true },
        { text: "item", type: ParameterType.item, required: false },
      ]
    },
    {
      name: "loot",
      documentation: "Drops the given loot table into the world",
      parameters: [
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "spawn", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "loot", type: ParameterType.keyword, required: true },
        { text: "loot table", type: ParameterType.lootTable, required: true },
        { text: "item", type: ParameterType.handType, required: false },
      ]
    }
  ],
  /**The me command */
  me: [
    {
      name: "me",
      documentation: "Displays a message about the sender.",
      parameters: [
        { text: "me", type: ParameterType.keyword, required: true },
        { text: "message", type: ParameterType.keyword, required: true },
      ],
    },
  ],
  /**The msg command */
  msg: [
    {
      name: "msg",
      documentation: "An alias of `/tell` and `/w`. Displays a private message to other players.",
      parameters: [
        { text: "msg", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "message", type: ParameterType.message, required: true },
      ],
    },
  ],
  /**The music command */
  music: [
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        { text: "music", type: ParameterType.keyword, required: true },
        { text: "queue", type: ParameterType.keyword, required: true },
        { text: "track name", type: ParameterType.string, required: true },
        { text: "volume", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
        { text: "fade seconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
        { text: "repeat", type: ParameterType.musicRepeatMode, required: false },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        { text: "music", type: ParameterType.keyword, required: true },
        { text: "play", type: ParameterType.keyword, required: true },
        { text: "track name", type: ParameterType.string, required: true },
        { text: "volume", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
        { text: "fade seconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
        { text: "repeat", type: ParameterType.musicRepeatMode, required: false },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        { text: "music", type: ParameterType.keyword, required: true },
        { text: "stop", type: ParameterType.keyword, required: true },
        { text: "fade seconds", type: ParameterType.float, required: false, options: { minimum: 0 } },
      ],
    },
    {
      name: "music",
      documentation: "Allows you to control playing music tracks.",
      parameters: [
        { text: "music", type: ParameterType.keyword, required: true },
        { text: "volume", type: ParameterType.keyword, required: true },
        { text: "volume", type: ParameterType.float, required: false, options: { minimum: 0.01, maximum: 1 } },
      ],
    },
  ],
  /**The op command */
  op: [
    {
      name: "op",
      documentation: "Grants operator status to a player.",
      parameters: [
        { text: "op", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      ],
    },
  ],
  /**The particle command */
  particle: [
    {
      name: "particle",
      documentation: "Creates particles.",
      parameters: [
        { text: "particle", type: ParameterType.keyword, required: true },
        { text: "effect", type: ParameterType.particle, required: true },
        { text: "position x", type: ParameterType.coordinate, required: false },
        { text: "position y", type: ParameterType.coordinate, required: false },
        { text: "position z", type: ParameterType.coordinate, required: false },
      ],
    },
  ],
  /**The playsound command */
  playsound: [
    {
      parameters: [
        { text: "playsound", type: ParameterType.keyword, required: true },
        { text: "sound", type: ParameterType.sound, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
        { text: "position x", type: ParameterType.coordinate, required: false },
        { text: "position y", type: ParameterType.coordinate, required: false },
        { text: "position z", type: ParameterType.coordinate, required: false },
        { text: "volume", type: ParameterType.float, required: false },
        { text: "pitch", type: ParameterType.float, required: false },
        { text: "minimumVolume", type: ParameterType.float, required: false },
      ],
      name: "playsound",
      documentation: "Plays a sound.",
    },
  ],
  /**The playanimation command */
  playanimation: [
    {
      name: "playanimation",
      documentation: "Makes one or more entities play a one-off animation. Assumes all variables are set up correctly",
      parameters: [
        { text: "playanimation", type: ParameterType.keyword, required: true },
        { text: "entity", type: ParameterType.selector, required: true },
        { text: "animation", type: ParameterType.animation, required: true },
        { text: "next state", type: ParameterType.string, required: false },
        { text: "stop expression", type: ParameterType.string, required: false },
        { text: "controller name", type: ParameterType.string, required: false },
      ],
    },
  ],
  /**The replaceitem command */
  replaceitem: [
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        { text: "replaceitem", type: ParameterType.keyword, required: true },
        { text: "block", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "slot.container", type: ParameterType.keyword, required: true },
        { text: "slot id", type: ParameterType.slotID, required: true },
        { text: "item name", type: ParameterType.item, required: true },
        { text: "amount", type: ParameterType.keyword, required: false },
        { text: "data", type: ParameterType.keyword, required: false },
        { text: "components", type: ParameterType.keyword, required: false },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        { text: "replaceitem", type: ParameterType.keyword, required: true },
        { text: "block", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "slot.container", type: ParameterType.keyword, required: true },
        { text: "slotId", type: ParameterType.slotID, required: true },
        { text: "replacemode", type: ParameterType.replaceMode, required: true },
        { text: "item name", type: ParameterType.item, required: true },
        { text: "amount", type: ParameterType.keyword, required: false },
        { text: "data", type: ParameterType.keyword, required: false },
        { text: "components", type: ParameterType.keyword, required: false },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        { text: "replaceitem", type: ParameterType.keyword, required: true },
        { text: "entity", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "slot.container", type: ParameterType.slotType, required: true },
        { text: "slotId", type: ParameterType.slotID, required: true },
        { text: "item name", type: ParameterType.item, required: true },
        { text: "amount", type: ParameterType.integer, required: false },
        { text: "data", type: ParameterType.integer, required: false },
        { text: "components", type: ParameterType.jsonItem, required: false },
      ],
    },
    {
      name: "replaceitem",
      documentation: "Replaces items in inventories.",
      parameters: [
        { text: "replaceitem", type: ParameterType.keyword, required: true },
        { text: "entity", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "slot type", type: ParameterType.slotType, required: true },
        { text: "slot id", type: ParameterType.slotID, required: true },
        { text: "replace mode", type: ParameterType.replaceMode, required: true },
        { text: "item name", type: ParameterType.item, required: true },
        { text: "amount", type: ParameterType.integer, required: false },
        { text: "data", type: ParameterType.integer, required: false },
        { text: "components", type: ParameterType.jsonItem, required: false },
      ],
    },
  ],
  /**The ride command */
  ride: [
    {
      name: "ride",
      documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
      parameters: [
        { text: "ride", type: ParameterType.keyword, required: true },
        { text: "riders", type: ParameterType.selector, required: true },
        { text: "start_riding", type: ParameterType.keyword, required: true },
        { text: "ride", type: ParameterType.selector, required: true },
        { text: "teleport", type: ParameterType.teleportRules, required: false },
        { text: "fill mode", type: ParameterType.ridefillMode, required: false },
      ],
    },
    {
      name: "ride",
      documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
      parameters: [
        { text: "ride", type: ParameterType.keyword, required: true },
        { text: "riders", type: ParameterType.selector, required: true },
        { text: "stop_riding", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "ride",
      documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
      parameters: [
        { text: "ride", type: ParameterType.keyword, required: true },
        { text: "rides", type: ParameterType.selector, required: true },
        { text: "evict_riders", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "ride",
      documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
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
      documentation: "Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders",
      parameters: [
        { text: "ride", type: ParameterType.keyword, required: true },
        { text: "rides", type: ParameterType.selector, required: true },
        { text: "summon_rider", type: ParameterType.keyword, required: true },
        { text: "entity type", type: ParameterType.entity, required: true },
        { text: "event", type: ParameterType.event, required: true },
        { text: "name", type: ParameterType.string, required: true },
      ],
    },
  ],
  /**The say command */
  say: [
    {
      name: "say",
      documentation: "Displays a message to multiple players.",
      parameters: [
        { text: "say", type: ParameterType.keyword, required: true },
        { text: "message", type: ParameterType.message, required: true },
      ],
    },
  ],
  /**The schedule command */
  schedule: [
    {
      name: "schedule",
      documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
      parameters: [
        { text: "schedule", type: ParameterType.keyword, required: true },
        { text: "on_area_loaded", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "function", type: ParameterType.function, required: true },
      ],
    },
    {
      name: "schedule",
      documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
      parameters: [
        { text: "schedule", type: ParameterType.keyword, required: true },
        { text: "on_area_loaded", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "circle", type: ParameterType.keyword, required: true },
        { text: "center x", type: ParameterType.coordinate, required: true },
        { text: "center y", type: ParameterType.coordinate, required: true },
        { text: "center z", type: ParameterType.coordinate, required: true },
        { text: "radius", type: ParameterType.integer, required: true },
        { text: "function", type: ParameterType.function, required: true },
      ],
    },
    {
      name: "schedule",
      documentation: "Schedules an action to be executed once an area is loaded, or after a certain amount of time",
      parameters: [
        { text: "schedule", type: ParameterType.keyword, required: true },
        { text: "on_area_loaded", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "tickingarea name", type: ParameterType.tickingarea, required: true },
        { text: "function", type: ParameterType.function, required: true },
      ],
    },
  ],
  /**The scoreboard command */
  scoreboard: [
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
        { text: "below_name", type: ParameterType.keyword, required: true },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: false, options: { allowFakePlayers: true } },
      ],
    },
    {
      name: "scoreboard",
      documentation: "Executes a scoreboard operation between two entities.",
      parameters: [
        { text: "scoreboard", type: ParameterType.keyword, required: true },
        { text: "players", type: ParameterType.keyword, required: true },
        { text: "operation", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
        { text: "objective", type: ParameterType.objective, required: true },
        { text: "operation", type: ParameterType.operation, required: true },
        { text: "selector", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { wildcard: true, allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
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
        { text: "entity", type: ParameterType.selector, required: true, options: { allowFakePlayers: true } },
        { text: "objective", type: ParameterType.objective, required: true },
        { text: "min", type: ParameterType.integer, required: true, options: { wildcard: true } },
        { text: "max", type: ParameterType.integer, required: true, options: { wildcard: true } },
      ],
    },
  ],
  /**The setblock command */
  setblock: [
    {
      name: "setblock",
      documentation: "Places the specified block.",
      parameters: [
        { text: "setblock", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "tile data", type: ParameterType.integer, required: false },
        { text: "old block mode", type: ParameterType.oldBlockMode, required: false },
      ],
    },
    {
      name: "setblock",
      documentation: "Places the specified block.",
      parameters: [
        { text: "setblock", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "block states", type: ParameterType.blockStates, required: false },
        { text: "old block mode", type: ParameterType.oldBlockMode, required: false },
      ],
    },
  ],
  /**The setworldspawn command */
  setworldspawn: [
    {
      name: "setworldspawn",
      documentation: "Sets the worldspawn.",
      parameters: [
        { text: "setworldspawn", type: ParameterType.keyword, required: true },
        { text: "spawn x", type: ParameterType.coordinate, required: false },
        { text: "spawn y", type: ParameterType.coordinate, required: false },
        { text: "spawn z", type: ParameterType.coordinate, required: false },
      ],
    },
  ],
  /**The setmaxplayers command */
  setmaxplayers: [
    {
      name: "setmaxplayers",
      documentation: "Sets the maximum number of players for this game session",
      parameters: [
        { text: "setmaxplayers", type: ParameterType.keyword, required: true },
        { text: "maximum players", type: ParameterType.integer, required: true, options: { minimum: 1 } },
      ],
    },
  ],
  /**The spawnpoint command */
  spawnpoint: [
    {
      name: "spawnpoint",
      documentation: "Sets the spawnpoint of the given entities.",
      parameters: [
        { text: "spawnpoint", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
        { text: "spawn x", type: ParameterType.coordinate, required: false },
        { text: "spawn y", type: ParameterType.coordinate, required: false },
        { text: "spawn z", type: ParameterType.coordinate, required: false },
      ],
    },
  ],
  /**The spreadplayers command */
  spreadplayers: [
    {
      name: "spreadplayers",
      documentation: "Spreads the players around.",
      parameters: [
        { text: "spreadplayers", type: ParameterType.keyword, required: true },
        { text: "x", type: ParameterType.coordinate, required: true },
        { text: "z", type: ParameterType.coordinate, required: true },
        { text: "spread distance", type: ParameterType.float, required: true },
        { text: "max range", type: ParameterType.float, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
      ],
    },
  ],
  /**The stopsound command */
  stopsound: [
    {
      name: "stopsound",
      documentation: "Stops all playing sounds on the given players.",
      parameters: [
        { text: "stopsound", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "sound", type: ParameterType.sound, required: false },
      ],
    },
  ],
  /**The structure command */
  structure: [
    {
      name: "structure",
      documentation: "Saves the given area into a structure.",
      parameters: [
        { text: "structure", type: ParameterType.keyword, required: true },
        { text: "save", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.structure, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "save mode", type: ParameterType.saveMode, required: false },
      ],
    },
    {
      name: "structure",
      documentation: "Saves the given area into a structure.",
      parameters: [
        { text: "structure", type: ParameterType.keyword, required: true },
        { text: "save", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.structure, required: true },
        { text: "from x", type: ParameterType.coordinate, required: true },
        { text: "from y", type: ParameterType.coordinate, required: true },
        { text: "from z", type: ParameterType.coordinate, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "include entities", type: ParameterType.boolean, required: false },
        { text: "save mode", type: ParameterType.saveMode, required: false },
        { text: "include blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "structure",
      documentation: "Loads a structure to the world.",
      parameters: [
        { text: "structure", type: ParameterType.keyword, required: true },
        { text: "load", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.structure, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "rotation", type: ParameterType.rotation, required: false },
        { text: "mirror", type: ParameterType.mirror, required: false },
        { text: "include entities", type: ParameterType.boolean, required: false },
        { text: "include blocks", type: ParameterType.boolean, required: false },
        { text: "integrity", type: ParameterType.float, required: false },
        { text: "seed", type: ParameterType.string, required: false },
      ],
    },
    {
      name: "structure",
      documentation: "Loads a structure to the world.",
      parameters: [
        { text: "structure", type: ParameterType.keyword, required: true },
        { text: "load", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.structure, required: true },
        { text: "to x", type: ParameterType.coordinate, required: true },
        { text: "to y", type: ParameterType.coordinate, required: true },
        { text: "to z", type: ParameterType.coordinate, required: true },
        { text: "rotation", type: ParameterType.rotation, required: false },
        { text: "mirror", type: ParameterType.mirror, required: false },
        { text: "animation mode", type: ParameterType.structureAnimationMode, required: false },
        { text: "animation seconds", type: ParameterType.float, required: false },
        { text: "include entities", type: ParameterType.boolean, required: false },
        { text: "include blocks", type: ParameterType.boolean, required: false },
        { text: "integrity", type: ParameterType.float, required: false },
        { text: "seed", type: ParameterType.string, required: false },
      ],
    },
    {
      name: "structure",
      documentation: "Removes the structure from the contents.",
      parameters: [
        { text: "structure", type: ParameterType.keyword, required: true },
        { text: "delete", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.structure, required: true },
      ],
    },
  ],
  /**The summon command */
  summon: [
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
  ],
  /**The tag command */
  tag: [
    {
      name: "tag",
      documentation: "Manages tags stored in entities.",
      parameters: [
        { text: "tag", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.tag, required: true },
      ],
    },
    {
      name: "tag",
      documentation: "Manages tags stored in entities.",
      parameters: [
        { text: "tag", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "list", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "tag",
      documentation: "Manages tags stored in entities.",
      parameters: [
        { text: "tag", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true, options: { wildcard: true } },
        { text: "remove", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.tag, required: true },
      ],
    },
  ],
  /**The tell command */
  tell: [
    {
      name: "tell",
      documentation: "Sends a private message to one or more players.",
      parameters: [
        { text: "tell", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "message", type: ParameterType.message, required: true },
      ],
    },
  ],
  /**The tellraw command */
  tellraw: [
    {
      name: "tellraw",
      documentation: "Sends a json messsage to players.",
      parameters: [
        { text: "tellraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "json raw text", type: ParameterType.jsonRawText, required: true },
      ],
    },
  ],
  /**The testfor command */
  testfor: [
    {
      name: "testfor",
      documentation: "Counts entities (players, mobs, items, etc.) matching specified conditions.",
      parameters: [
        { text: "testfor", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
      ],
    },
  ],
  /**The testforblock command */
  testforblock: [
    {
      name: "testforblock",
      documentation: "tests whether a certain block is a specific location.",
      parameters: [
        { text: "testforblock", type: ParameterType.keyword, required: true },
        { text: "position x", type: ParameterType.coordinate, required: true },
        { text: "position y", type: ParameterType.coordinate, required: true },
        { text: "position z", type: ParameterType.coordinate, required: true },
        { text: "tile name", type: ParameterType.block, required: true },
        { text: "data value", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "testforblocks",
      documentation: "Tests whether the blocks in two regions match.",
      parameters: [
        { text: "testforblocks", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
      ],
    },
    {
      name: "testforblocks",
      documentation: "Tests whether the blocks in two regions match.",
      parameters: [
        { text: "testforblocks", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "all", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "testforblocks",
      documentation: "Tests whether the blocks in two regions match.",
      parameters: [
        { text: "testforblocks", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "masked", type: ParameterType.keyword, required: true },
      ],
    },
  ],
  /**The tickingarea command */
  tickingarea: [
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "begin x", type: ParameterType.coordinate, required: true },
        { text: "begin y", type: ParameterType.coordinate, required: true },
        { text: "begin z", type: ParameterType.coordinate, required: true },
        { text: "end x", type: ParameterType.coordinate, required: true },
        { text: "end y", type: ParameterType.coordinate, required: true },
        { text: "end z", type: ParameterType.coordinate, required: true },
        { text: "name", type: ParameterType.tickingarea, required: false },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "add", type: ParameterType.keyword, required: true },
        { text: "circle", type: ParameterType.keyword, required: true },
        { text: "center x", type: ParameterType.coordinate, required: true },
        { text: "center y", type: ParameterType.coordinate, required: true },
        { text: "center z", type: ParameterType.coordinate, required: true },
        { text: "radius", type: ParameterType.integer, required: true },
        { text: "name", type: ParameterType.tickingarea, required: false },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "list", type: ParameterType.keyword, required: true },
        { text: "all-dimensions", type: ParameterType.keyword, required: false },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "remove", type: ParameterType.keyword, required: true },
        { text: "x", type: ParameterType.coordinate, required: true },
        { text: "y", type: ParameterType.coordinate, required: true },
        { text: "z", type: ParameterType.coordinate, required: true },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "remove", type: ParameterType.keyword, required: true },
        { text: "name", type: ParameterType.tickingarea, required: true },
      ],
    },
    {
      name: "tickingarea",
      documentation: "Add, remove, or list ticking areas.",
      parameters: [
        { text: "tickingarea", type: ParameterType.keyword, required: true },
        { text: "remove_all", type: ParameterType.keyword, required: true },
      ],
    },
  ],
  /**The time command */
  time: [
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
    }
  ],
  /**The title command */
  title: [
    {
      name: "title",
      documentation: "Sets the title.",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "titletext", type: ParameterType.message, required: true },
      ],
    },
    {
      name: "title",
      documentation: "Sets the sub titles.",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "subtitle", type: ParameterType.keyword, required: true },
        { text: "titletext", type: ParameterType.message, required: true },
      ],
    },
    {
      name: "title",
      documentation: "Sets the action bar.",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "actionbar", type: ParameterType.keyword, required: true },
        { text: "titletext", type: ParameterType.message, required: true },
      ],
    },
    {
      name: "title",
      documentation: "Clears the title & subtitle from the given players",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "clear", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "title",
      documentation: "Clears the title & subtitle from the given players",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "reset", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "title",
      documentation: "Set the title timings.",
      parameters: [
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "times", type: ParameterType.keyword, required: true },
        { text: "fade in", type: ParameterType.integer, required: true },
        { text: "stay", type: ParameterType.integer, required: true },
        { text: "fade out", type: ParameterType.integer, required: true },
      ],
    },
  ],
  /**The titleraw command */
  titleraw: [
    {
      name: "titleraw",
      documentation: "Sets the title.",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "title", type: ParameterType.keyword, required: true },
        { text: "json raw text", type: ParameterType.jsonRawText, required: true },
      ],
    },
    {
      name: "titleraw",
      documentation: "Sets the sub titles.",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "subtitle", type: ParameterType.keyword, required: true },
        { text: "json raw text", type: ParameterType.jsonRawText, required: true },
      ],
    },
    {
      name: "titleraw",
      documentation: "Sets the action bar.",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "actionbar", type: ParameterType.keyword, required: true },
        { text: "json raw text", type: ParameterType.jsonRawText, required: true },
      ],
    },
    {
      name: "titleraw",
      documentation: "Clears the title & subtitle from the given players",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "clear", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "titleraw",
      documentation: "Clears the title & subtitle from the given players",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "reset", type: ParameterType.keyword, required: true },
      ],
    },
    {
      name: "titleraw",
      documentation: "Set the timings.",
      parameters: [
        { text: "titleraw", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "times", type: ParameterType.keyword, required: true },
        { text: "fade in", type: ParameterType.integer, required: true },
        { text: "stay", type: ParameterType.integer, required: true },
        { text: "fade out", type: ParameterType.integer, required: true },
      ],
    },
  ],
  /**The toggledownfall command */
  toggledownfall: [
    {
      parameters: [{ text: "toggledownfall", type: ParameterType.keyword, required: true }],
      name: "toggledownfall",
      documentation: "Toggles the weather.",
    },
  ],
  /**The tp command */
  tp: [
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination entity.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the location.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination entity.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the specified location.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination with rotation.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination with rotation.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with rotation.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with rotation.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the executing entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "tp",
      documentation: "Teleport the entity to the destination with facing.",
      parameters: [
        { text: "tp", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The teleport command */
  teleport: [
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport the entity to the destination with rotation.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "yRot", type: ParameterType.coordinate, required: false },
        { text: "xRot", type: ParameterType.coordinate, required: false },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination", type: ParameterType.selector, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at", type: ParameterType.selector, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "teleport",
      documentation: "Teleport Entities.",
      parameters: [
        { text: "teleport", type: ParameterType.keyword, required: true },
        { text: "victim", type: ParameterType.selector, required: true },
        { text: "destination x", type: ParameterType.coordinate, required: true },
        { text: "destination y", type: ParameterType.coordinate, required: true },
        { text: "destination z", type: ParameterType.coordinate, required: true },
        { text: "facing", type: ParameterType.keyword, required: true },
        { text: "look at x", type: ParameterType.coordinate, required: true },
        { text: "look at y", type: ParameterType.coordinate, required: true },
        { text: "look at z", type: ParameterType.coordinate, required: true },
        { text: "check for blocks", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The w command */
  w: [
    {
      name: "w",
      documentation: "Sends a message to the receiver.",
      parameters: [
        { text: "w", type: ParameterType.keyword, required: true },
        { text: "selector", type: ParameterType.selector, required: true },
        { text: "message", type: ParameterType.keyword, required: true },
      ],
    },
  ],
  /**The weather command */
  weather: [
    {
      name: "weather",
      documentation: "Sets the weather.",
      parameters: [
        { text: "weather", type: ParameterType.keyword, required: true },
        { text: "clear", type: ParameterType.keyword, required: true },
        { text: "duration", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "weather",
      documentation: "Sets the weather.",
      parameters: [
        { text: "weather", type: ParameterType.keyword, required: true },
        { text: "rain", type: ParameterType.keyword, required: true },
        { text: "duration", type: ParameterType.integer, required: false },
      ],
    },
    {
      name: "weather",
      documentation: "Sets the weather.",
      parameters: [
        { text: "weather", type: ParameterType.keyword, required: true },
        { text: "thunder", type: ParameterType.keyword, required: true },
        { text: "duration", type: ParameterType.integer, required: false },
      ],
    },
  ],
  /**The xp command */
  xp: [
    {
      name: "xp",
      documentation: "Adds or removes player experience.",
      parameters: [
        { text: "xp", type: ParameterType.keyword, required: true },
        { text: "amount", type: ParameterType.xp, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
      ],
    },
    {
      name: "xp",
      documentation: "Adds or removes player experience.",
      parameters: [
        { text: "xp", type: ParameterType.keyword, required: true },
        { text: "amount", type: ParameterType.integer, required: true },
        { text: "player", type: ParameterType.selector, required: false, options: { playerOnly: true } },
      ],
    },
  ],
};
