import { CommandData } from "../src/lib/data/command-data";
import { CommandInfo, ParameterInfo } from "../src/lib/data/command-info";
import { ParameterType } from "../src/lib/types/parameter-type";
import { writeFileSync } from "fs";

interface Parameter {
  text: string;
  type: string;
  required: boolean;
  options?: any;
}

interface Command {
  name: string;
  parameters: Array<Parameter>;
  documentation: string;
}

interface ExportData {
  vanilla: Command[];
  edu: Command[];
}

describe.skip("Export", () => {
  const { Vanilla, Edu } = CommandData;

  it("exported", () => {
    const out: ExportData = {
      vanilla: [],
      edu: [],
    };

    Object.getOwnPropertyNames(Vanilla)
      .map((key) => Vanilla[key])
      .map(exportCommands)
      .forEach((commands) => out.vanilla.push(...commands));

    Object.getOwnPropertyNames(Edu)
      .map((key) => Edu[key])
      .map(exportCommands)
      .forEach((commands) => out.edu.push(...commands));

    writeFileSync("./out.json", JSON.stringify(out, null, 2));
  });
});

function exportCommands(data: CommandInfo[]): Command[] {
  return data.map(convertCommand);
}

function convertCommand(c: CommandInfo): Command {
  return {
    name: c.name,
    documentation: c.documentation,
    parameters: c.parameters.map(convertParameter),
  };
}

function convertParameter(p: ParameterInfo): Parameter {
  return {
    text: p.text,
    type: ptype[p.type],
    required: p.required,
    options: p.options,
  };
}

const ptype: Record<ParameterType, string> = {
  [ParameterType.animation]: "animation",
  [ParameterType.block]: "block",
  [ParameterType.blockStates]: "blockStates",
  [ParameterType.boolean]: "boolean",
  [ParameterType.cameraShakeType]: "cameraShakeType",
  [ParameterType.causeType]: "causeType",
  [ParameterType.cloneMode]: "cloneMode",
  [ParameterType.command]: "command",
  [ParameterType.coordinate]: "coordinate",
  [ParameterType.difficulty]: "difficulty",
  [ParameterType.dimension]: "dimension",
  [ParameterType.effect]: "effect",
  [ParameterType.entity]: "entity",
  [ParameterType.event]: "event",
  [ParameterType.executeSubcommand]: "executeSubcommand",
  [ParameterType.fillMode]: "fillMode",
  [ParameterType.float]: "float",
  [ParameterType.function]: "function",
  [ParameterType.gamemode]: "gamemode",
  [ParameterType.handType]: "handType",
  [ParameterType.hudElement]: "hudElement",
  [ParameterType.hudVisibility]: "hudVisibility",
  [ParameterType.integer_range]: "integer_range",
  [ParameterType.integer]: "integer",
  [ParameterType.item]: "item",
  [ParameterType.jsonItem]: "jsonItem",
  [ParameterType.jsonRawText]: "jsonRawText",
  [ParameterType.keyword]: "keyword",
  [ParameterType.locateFeature]: "locateFeature",
  [ParameterType.lootTable]: "lootTable",
  [ParameterType.maskMode]: "maskMode",
  [ParameterType.message]: "message",
  [ParameterType.mirror]: "mirror",
  [ParameterType.musicRepeatMode]: "musicRepeatMode",
  [ParameterType.objective]: "objective",
  [ParameterType.oldBlockMode]: "oldBlockMode",
  [ParameterType.operation]: "operation",
  [ParameterType.particle]: "particle",
  [ParameterType.permission]: "permission",
  [ParameterType.permissionState]: "permissionState",
  [ParameterType.recipe]: "recipe",
  [ParameterType.replaceMode]: "replaceMode",
  [ParameterType.ridefillMode]: "ridefillMode",
  [ParameterType.rideRules]: "rideRules",
  [ParameterType.rotation]: "rotation",
  [ParameterType.saveMode]: "saveMode",
  [ParameterType.scanMode]: "scanMode",
  [ParameterType.selector]: "selector",
  [ParameterType.slotID]: "slotID",
  [ParameterType.slotType]: "slotType",
  [ParameterType.sound]: "sound",
  [ParameterType.string]: "string",
  [ParameterType.structure]: "structure",
  [ParameterType.structureAnimationMode]: "structureAnimationMode",
  [ParameterType.tag]: "tag",
  [ParameterType.teleportRules]: "teleportRules",
  [ParameterType.tickingarea]: "tickingarea",
  [ParameterType.time]: "time",
  [ParameterType.unknown]: "unknown",
  [ParameterType.xp]: "xp",
};
