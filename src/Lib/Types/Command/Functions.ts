import { Modes } from "bc-minecraft-bedrock-types";
import { Edu } from "../../Data/Edu";
import { Vanilla } from "../../Data/Vanilla";
import { CommandInfo } from "../../Data/include";
import { Command, ParameterType } from "../include";
import { Boolean } from "bc-minecraft-bedrock-types/lib/src/General/Boolean";
import { Json } from "bc-minecraft-bedrock-types/lib/src/General/Json";
import { Coordinate } from "bc-minecraft-bedrock-types/lib/src/General/Coordinate";
import { Float } from "bc-minecraft-bedrock-types/lib/src/General/Float";
import { Integer } from "bc-minecraft-bedrock-types/lib/src/General/Integer";
import { Selector } from "bc-minecraft-bedrock-types/lib/src/Minecraft/Selector";
import { XP } from "bc-minecraft-bedrock-types/lib/src/General/Xp";

export function getBestMatches(command: Command, edu: boolean = false): CommandInfo[] {
  const m = command.getCommandData(edu);

  return m.filter((x) => isMatch(command, x, edu));
}

function isMatch(command: Command, data: CommandInfo, edu: boolean = false): boolean {
  let Limit = data.parameters.length;

  if (Limit > command.parameters.length) {
    Limit = command.parameters.length;
  }

  for (let I = 0; I < Limit; I++) {
    const commandPar = command.parameters[I];
    const commandText = commandPar.text;
    const patPar = data.parameters[I];

    if (patPar.options) {
      if (patPar.options.acceptedValues) {
        if (patPar.options.acceptedValues.includes(commandText)) {
          continue;
        }
      }
    }

    switch (patPar.type) {
      case ParameterType.block:
      case ParameterType.entity:
      case ParameterType.event:
      case ParameterType.function:
      case ParameterType.item:
      case ParameterType.objective:
      case ParameterType.particle:
      case ParameterType.sound:
      case ParameterType.string:
      case ParameterType.tag:
      case ParameterType.unknown:
      case ParameterType.tickingarea:
        //TODO program matches types for these
        continue;

      case ParameterType.boolean:
        if (!Boolean.is(commandText)) return false;
        break;

      case ParameterType.blockStates:
        if (!Json.isArray(commandText)) return false;
        break;

      case ParameterType.cameraShakeType:
        if (!Modes.CameraShake.isValue(commandText)) return false;
        break;

      case ParameterType.command:
        if (!IsCommand(commandText, edu)) return false;
        break;

      case ParameterType.coordinate:
        if (!Coordinate.is(commandText)) return false;
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
        if (!Float.is(commandText)) return false;
        break;

      case ParameterType.gamemode:
        if (!Modes.Gamemode.isValue(commandText)) return false;
        break;

      case ParameterType.locateFeature:
        if (!Modes.LocateFeature.isValue(commandText)) return false;
        break;

      case ParameterType.integer:
      case ParameterType.slotID:
        if (!Integer.is(commandText)) return false;
        break;

      case ParameterType.jsonItem:
      case ParameterType.jsonRawText:
        if (!Json.isObject(commandText)) return false;
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
        if (!Selector.isSelector(commandText, patPar.options?.wildcard, patPar.options?.allowFakePlayers)) return false;
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

      case ParameterType.xp:
        if (!XP.is(commandText)) return false;
        break;
    }
  }

  return true;
}

export function IsCommand(command: string, edu: boolean = false): boolean {
  if (Vanilla[command]) return true;
  if (edu && Edu[command]) return true;

  return false;
}
