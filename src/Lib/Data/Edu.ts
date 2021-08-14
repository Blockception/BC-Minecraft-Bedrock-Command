import { ParameterType } from "../Types/ParameterType";
import { CommandContainer } from "./CommandContainer";

export const Edu: CommandContainer = {
  /**The abillity command */
  ability: [
    {
      name: "ability",
      documentation: "Grants or revokes a player ability.",
      parameters: [{ text: "ability", type: ParameterType.keyword, required: true }],
    },
    {
      name: "ability",
      documentation: "Returns a list of abillities assigned to the specified player",
      parameters: [
        { text: "ability", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
      ],
    },
    {
      name: "ability",
      documentation: "Grants or revokes a player ability to fly",
      parameters: [
        { text: "ability", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "mayfly", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "ability",
      documentation: "Grants or revokes a player ability to speak",
      parameters: [
        { text: "ability", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "mute", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "ability",
      documentation: "Grants or revokes a player ability to build",
      parameters: [
        { text: "ability", type: ParameterType.keyword, required: true },
        { text: "player", type: ParameterType.selector, required: true, options: { playerOnly: true } },
        { text: "worldbuilder", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The classroom mode command */
  classroommode: [
    {
      name: "classroommode",
      documentation: "Launches and connects the world to the Classroom mode",
      parameters: [{ text: "classroommode", type: ParameterType.keyword, required: true }],
    },
  ],
  /**The code command */
  code: [
    {
      name: "code",
      documentation: "??",
      parameters: [{ text: "code", type: ParameterType.keyword, required: true }],
    },
  ],
  /**The gamerule command */
  gamerule: [
    {
      name: "gamerule",
      documentation: "When set to true, players may use TNT near others. You may also use specialty blocks (allow, deny, border) to help limit potential damage.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "allowdestructiveobjects", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation:
        "Mobs are living, moving creatures found within the Minecraft world. Friendly (creatures like chickens and ocelots) and not so friendly mobs (creatures like creepers) are allowed to appear in the world when this is turned on.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "allowmobs", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
    {
      name: "gamerule",
      documentation:
        "Disables chat for all players when set to true, otherwise players in your world can communicate with each other within the world they are in via the client. Chatting is on by default.",
      parameters: [
        { text: "gamerule", type: ParameterType.keyword, required: true },
        { text: "globalmute", type: ParameterType.keyword, required: true },
        { text: "value", type: ParameterType.boolean, required: false },
      ],
    },
  ],
  /**The immutableworld command */
  immutableworld: [
    {
      name: "immutableworld",
      documentation: "Sets the immutable state of the world",
      parameters: [
        { text: "immutableworld", type: ParameterType.keyword, required: true },
        { text: "immutableworld", type: ParameterType.boolean, required: false },
      ],
    },
  ],
};
