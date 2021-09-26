import { General, Minecraft, Modes } from "bc-minecraft-bedrock-types";
import { Edu } from "../../Data/Edu";
import { Vanilla } from "../../Data/Vanilla";
import { CommandInfo } from "../../Data/include";
import { Command, ParameterType } from "../include";

/**Gets the best matching commandinfo data, if multiple are returned, it unclear or somewhere not fully specified
 * @param command The command to search through
 * @param edu Wheter or not to include education data
 * @returns An array with commands info*/
export function getBestMatches(command: Command, edu: boolean = false): CommandInfo[] {
  const m = command.getCommandData(edu);

  if (m.length === 1) return m;

  return m.filter((x) => isMatch(command, x, edu));
}

/**Checks if the command matches the commandinfo
 * @param command The command to examine
 * @param data The commandinfo serving as the basis
 * @param edu If education content should be used or not
 * @returns true or false is this commandinfo matches the command*/
export function isMatch(command: Command, data: CommandInfo, edu: boolean = false): boolean {
  let Limit = data.parameters.length;

  if (Limit > command.parameters.length) {
    Limit = command.parameters.length;
  }

  for (let I = 0; I < Limit; I++) {
    const commandPar = command.parameters[I];
    const commandText = commandPar.text;
    const patPar = data.parameters[I];

    if (patPar.options?.acceptedValues?.includes(commandText)) {
      continue;
    }

    switch (patPar.type) {
      case ParameterType.block:
      case ParameterType.entity:
      case ParameterType.event:
      case ParameterType.function:
      case ParameterType.item:
      case ParameterType.objective:
      case ParameterType.particle:
      case ParameterType.message:
      case ParameterType.sound:
      case ParameterType.string:
      case ParameterType.tag:
      case ParameterType.unknown:
      case ParameterType.tickingarea:
        //TODO program matches types for these
        continue;

      case ParameterType.boolean:
        if (!General.Boolean.is(commandText)) return false;
        break;

      case ParameterType.blockStates:
        if (!General.Json.isArray(commandText)) return false;
        break;

      case ParameterType.cameraShakeType:
        if (!Modes.CameraShake.isValue(commandText)) return false;
        break;

      case ParameterType.command:
        if (!IsCommand(commandText, edu)) return false;
        break;

      case ParameterType.coordinate:
        if (!Minecraft.Coordinate.is(commandText)) return false;
        break;

      case ParameterType.cloneMode:
        if (!Modes.Clone.isValue(commandText)) return false;
        break;

      case ParameterType.difficulty:
        if (!Modes.Difficulty.isValue(commandText)) return false;
        break;

      case ParameterType.effect:
        if (commandText === "clear") return false;
        break;

      case ParameterType.fillMode:
        if (!Modes.Fill.isValue(commandText)) return false;
        break;

      case ParameterType.float:
        if (!General.Float.is(commandText)) return false;
        break;

      case ParameterType.gamemode:
        if (!Modes.Gamemode.isValue(commandText)) return false;
        break;

      case ParameterType.locateFeature:
        if (!Modes.LocateFeature.isValue(commandText)) return false;
        break;

      case ParameterType.integer:
      case ParameterType.slotID:
        if (!General.Integer.is(commandText)) return false;
        break;

      case ParameterType.jsonItem:
      case ParameterType.jsonRawText:
        if (!General.Json.isObject(commandText)) return false;
        break;

      case ParameterType.keyword:
        if (commandText != patPar.text) return false;
        break;

      case ParameterType.maskMode:
        if (!Modes.Mask.isValue(commandText)) return false;
        break;

      case ParameterType.mirror:
        if (!Modes.Mirror.isValue(commandText)) return false;
        break;

      case ParameterType.musicRepeatMode:
        if (!Modes.MusicRepeat.isValue(commandText)) return false;
        break;

      case ParameterType.oldBlockMode:
        if (!Modes.OldBlock.isValue(commandText)) return false;
        break;

      case ParameterType.operation:
        if (!Modes.Operation.isValue(commandText)) return false;
        break;

      case ParameterType.replaceMode:
        if (!Modes.Replace.isValue(commandText)) return false;
        break;

      case ParameterType.rideRules:
        if (!Modes.RideRules.isValue(commandText)) return false;
        break;

      case ParameterType.rotation:
        if (!Modes.Rotation.isValue(commandText)) return false;
        break;

      case ParameterType.saveMode:
        if (!Modes.Save.isValue(commandText)) return false;
        break;

      case ParameterType.selector:
        if (!Minecraft.Selector.isSelector(commandText, patPar.options?.wildcard, patPar.options?.allowFakePlayers)) return false;
        break;

      case ParameterType.slotType:
        if (!Modes.SlotType.isValue(commandText)) return false;
        break;

      case ParameterType.structureAnimationMode:
        if (!Modes.StructureAnimation.isValue(commandText)) return false;
        break;

      case ParameterType.teleportRules:
        if (!Modes.TeleportRules.isValue(commandText)) return false;
        break;

      case ParameterType.time:
          if (!Modes.Time.isValue(commandText)) return false;
          break;

      case ParameterType.xp:
        if (!Minecraft.XP.is(commandText)) return false;
        break;
    }
  }

  return true;
}

/**Retrieves the command data related to the given keyword
 * @param name The command to retrieve
 * @param edu Wheter or not to include education commands
 * @returns An array with commands info*/
export function getCommandData(name: string, edu: boolean = false): CommandInfo[] {
  const out: CommandInfo[] = [];

  Add(out, Vanilla[name]);

  if (edu) Add(out, Edu[name]);

  return out;
}

/**Checks if the given commanddata is present
 * @param name The command to retrieve
 * @param edu Wheter or not to include education commands
 * @returns An array with commands info*/
export function hasCommandData(name: string, edu: boolean = false): boolean {
  if (Vanilla[name]) return true;
  if (edu && Edu[name]) return true;

  return false;
}

/**Checks if the given commanddata is present
 * @param command The command to retrieve
 * @param edu Wheter or not to include education commands
 * @returns True or false*/
export function IsCommand(command: string, edu: boolean = false): boolean {
  if (Vanilla[command]) return true;
  if (edu && Edu[command]) return true;

  return false;
}

function Add(receiver: CommandInfo[], items: CommandInfo[] | undefined): void {
  if (items) receiver.push(...items);
}
