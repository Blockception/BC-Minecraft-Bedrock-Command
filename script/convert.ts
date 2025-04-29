import { CommandInfo, ParameterInfo } from "../src/lib/data/command-info";
import { ParameterType } from "../src/lib/types/parameter-type";
import { Command, CommandParameter, MinecraftCommandData } from "./minecraft-data";
import { mutate } from "./mutate";

export function convert(data: MinecraftCommandData): Record<string, CommandInfo[]> {
  const result: Record<string, CommandInfo[]> = {};

  data.commands.forEach((c) => {
    const r = convertCommand(c);
    r.forEach((item) => {
      if (!result[item.name]) {
        result[item.name] = [];
      }
      result[item.name].push(item);
    });
  });

  // Sort
  for (const [key, value] of Object.entries(result)) {
    result[key] = value.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;

      if (a.parameters.length < b.parameters.length) return -1;
      if (a.parameters.length > b.parameters.length) return 1;

      for (let i = 0; i < a.parameters.length; i++) {
        if (a.parameters[i].text < b.parameters[i].text) return -1;
        if (a.parameters[i].text > b.parameters[i].text) return 1;
      }

      return 0;
    });
  }

  return result;
}

function convertCommand(data: Command): Array<CommandInfo> {
  mutate(data);
  data.name = data.name === "?" ? "help" : data.name;

  const base: CommandInfo = {
    name: data.name,
    documentation: data.description,
    parameters: [],
  };

  const temp: Array<CommandInfo> = [];

  data.overloads.forEach((overload) => {
    const commandInfo: CommandInfo = {
      ...base,
      parameters: [
        {
          text: data.name,
          type: ParameterType.keyword,
          required: true,
        },
      ],
    };
    overload.params.map((item) => convertParameter(data.name, item, commandInfo.parameters));
    temp.push(commandInfo);
  });

  if (data.aliases.length === 0) {
    return temp;
  }

  const result: Array<CommandInfo> = [];

  data.aliases.forEach((alias) => {
    alias.name = alias.name === "?" ? "help" : alias.name;

    temp.forEach((c) => {
      const commandInfo = { ...c };
      commandInfo.name = alias.name;
      result.push(commandInfo);
    });
  });

  return result;
}

function convertParameter(comm: string, param: CommandParameter, receiver: ParameterInfo[]) {
  const name = param.name;
  const required = !param.is_optional;

  switch (param.type.name) {
    case "POSITION":
    case "POSITION_FLOAT":
      receiver.push(
        {
          text: name + " x",
          type: ParameterType.coordinate,
          required: required,
        },
        {
          text: name + " y",
          type: ParameterType.coordinate,
          required: required,
        },
        {
          text: name + " z",
          type: ParameterType.coordinate,
          required: required,
        }
      );
      break;
    case "ROT":
    case "ROTATION":
      receiver.push(
        {
          text: name + " yaw",
          type: ParameterType.rotation,
          required: required,
        },
        {
          text: name + " pitch",
          type: ParameterType.rotation,
          required: required,
        }
      );
      break;
    default:
      const b = {
        text: name,
        type: ParameterType.unknown,
        required: required,
      };
      if (param.type.name in keyWordReplace) {
        b.text = keyWordReplace[param.type.name];
        b.type = ParameterType.keyword;
      } else {
        b.type = converType(comm, name, param.type.name);
      }

      receiver.push(b);
  }
}

function converType(comm: string, name: string, type: string): ParameterType {
  if (type in enumMap) {
    return enumMap[type];
  }

  if (type === "ID") {
    switch (true) {
      case comm === "tickingarea" && name === "name":
        return ParameterType.tickingarea;
      case comm === "summon" && name === "nameTag":
        return ParameterType.string;
      case comm === "whitelist" && name === "name":
        return ParameterType.selector;
    }
  }

  if (type === "JSON_OBJECT") {
    switch (name) {
      case "components":
        return ParameterType.jsonItem;
      default:
    }
  }

  if (type.startsWith("postfix_")) {
    switch (name) {
      case "time":
        return ParameterType.time;
      default:
    }
  }

  console.log("unknown type", comm, name, type);
  return ParameterType.unknown;
}

const enumMap: Record<string, ParameterType> = {
  AIMASSISTTARGETMODE: ParameterType.keyword,
  BLOCK_STATE_ARRAY: ParameterType.blockStates,
  BLOCK: ParameterType.block,
  BOOLEAN: ParameterType.boolean,
  CAMERAPRESETS: ParameterType.cameraPresets,
  CAMERASHAKETYPE: ParameterType.cameraShakeType,
  ENTITYEQUIPMENTSLOT: ParameterType.slotType,
  ENTITYEVENTS: ParameterType.event,
  ENTITYTYPE: ParameterType.entity,
  FEATURERULES: ParameterType.locateFeature,
  FEATURES: ParameterType.locateFeature,
  FILLTYPE: ParameterType.fillMode,
  FLOAT: ParameterType.float,
  INT: ParameterType.integer,
  ITEM: ParameterType.item,
  JIGSAWSTRUCTURE: ParameterType.jigsaw,
  KEYWORD: ParameterType.keyword,
  MESSAGE_ROOT: ParameterType.message,
  MIRROR: ParameterType.mirror,
  MOBEVENT: ParameterType.event,
  PATHCOMMAND: ParameterType.function,
  PERMISSIONSACTION: ParameterType.permission,
  postfix_l: ParameterType.xp,
  RAWTEXT: ParameterType.jsonRawText,
  REPLACEMODE: ParameterType.replaceMode,
  RIDERULES: ParameterType.rideRules,
  RVAL: ParameterType.rotation,
  SAVEMODE: ParameterType.saveMode,
  SCOREBOARDOBJECTIVES: ParameterType.objective,
  SELECTION: ParameterType.selector,
  STRUCTURESAVEMODE: ParameterType.saveMode,
  TITLERAWSET: ParameterType.jsonRawText,
  VAL: ParameterType.float,
};

const keyWordReplace: Record<string, string> = {
  "3PSERVEROFFERLIST": "server",
  ADD: "push",
  ADDINFINITEEFFECT: "infinite",
  ADDTICKINGAREATYPE: "circle",
  AIMASSISTACTIONCLEAR: "clear",
  AIMASSISTACTIONSET: "set",
  ALLDIMENSIONS: "all-dimensions",
  BLOCKEQUIPMENTSLOT: "slot.container",
  BOOLSETTINGNAME: "allow-cheats",
  CAMERASHAKEACTIONADD: "add",
  CAMERASHAKEACTIONSTOP: "stop",
  CIRCLEAREA: "circle",
  CLEAR: "clear",
  CLEAREFFECTS: "clear",
  COLOR: "color",
  DAMAGEORIGINACTOR: "entity",
  DEFAULT: "default",
  DIALOGUECHANGEACTION: "change",
  DIALOGUEOPENACTION: "open",
  DIFFICULTYSETTINGNAME: "difficulty",
  EASE: "ease",
  ENTITY_OFFSET: "entity_offset",
  EVENTENTITYACTION: "entity",
  FACING: "facing",
  FADE: "fade",
  FUNCTIONNAME: "function",
  GAMETESTMODECLEARALL: "clearall",
  GAMETESTMODECREATETEST: "create",
  GAMETESTMODERUN: "run",
  GAMETESTMODERUNSET: "runset",
  GAMETESTMODERUNSETUNTILFAIL: "runsetuntilfail",
  GAMETESTMODERUNTHIS: "runthis",
  GAMETESTMODESHOWPOSITION: "pos",
  GAMETESTRUNNEARBYTESTS: "runthese",
  GAMETESTSTOPTESTS: "stopall",
  GIVE: "give",
  LOCATESUBCOMMANDBIOME: "biome",
  LOCATESUBCOMMANDSTRUCTURE: "structure",
  MASKMODEFILTERED: "filtered",
  MUSICPLAYACTION: "play",
  MUSICQUEUEACTION: "queue",
  MUSICSTOPACTION: "stop",
  MUSICVOLUMEACTION: "volume",
  OPTION_ALIGN: "align",
  OPTION_ANCHORED: "anchored",
  OPTION_AS: "as",
  OPTION_AT: "at",
  OPTION_CONDITION_BLOCK: "block",
  OPTION_CONDITION_BLOCKS: "blocks",
  OPTION_CONDITION_ENTITY: "entity",
  OPTION_CONDITION_SCORE: "score",
  OPTION_ENTITY: "entity",
  OPTION_FACING: "facing",
  OPTION_IN: "in",
  OPTION_POSITIONED: "positioned",
  OPTION_QUERY: "query",
  OPTION_ROTATED: "rotated",
  OPTION_RUN: "run",
  OPTION_SET: "set",
  PLACEFEATUREACTION: "feature",
  PLACEFEATURERULEACTION: "featurerule",
  PLACEJIGSAWACTION: "jigsaw",
  PLACESTRUCTUREACTION: "structure",
  POS: "pos",
  REMOVE_TARGET: "remove_target",
  REPLACE: "replace",
  REPLACEITEMBLOCK: "block",
  REPLACEITEMENTITY: "entity",
  REQUESTACTIONADD: "add",
  REQUESTACTIONCLEAR: "clear",
  RIDEMODEEVICT: "evict_riders",
  RIDEMODESTART: "start_riding",
  RIDEMODESTOP: "stop_riding",
  RIDEMODESUMMONRIDE: "summon_ride",
  RIDEMODESUMMONRIDER: "summon_rider",
  ROT: "rot",
  SCHEDULEACTIONCLEAR: "clear",
  SCHEDULEACTIONDELAY: "delay",
  SCHEDULEACTIONONAREALOADED: "on_area_loaded",
  SCOREBOARDADDACTION: "add",
  SCOREBOARDCRITERIA: "dummy",
  SCOREBOARDDISPLAYSLOTNONSORTABLE: "belowname",
  SCOREBOARDLISTACTION: "list",
  SCOREBOARDOBJECTIVESCATEGORY: "objectives",
  SCOREBOARDOPERATIONACTION: "operation",
  SCOREBOARDPLAYERSCATEGORY: "players",
  SCOREBOARDRANDOMACTION: "random",
  SCOREBOARDREMOVEACTION: "remove",
  SCOREBOARDRESETACTION: "reset",
  SCOREBOARDSETDISPLAYACTION: "setdisplay",
  SCOREBOARDTESTACTION: "test",
  SCORERANGEMODE: "matches",
  SCRIPTDEBUGGERCLOSE: "close",
  SCRIPTDEBUGGERCONNECT: "connect",
  SCRIPTDEBUGGERLISTEN: "listen",
  SCRIPTDEBUGMODEDEBUGGER: "debugger",
  SCRIPTDEBUGMODEDIAGNOSTICS: "diagnostics",
  SCRIPTDEBUGMODEPROFILER: "profiler",
  SCRIPTDIAGNOSTICSSTARTCAPTURE: "startcapture",
  SCRIPTDIAGNOSTICSSTOPCAPTURE: "stopcapture",
  SCRIPTPROFILERSTART: "start",
  SCRIPTPROFILERSTOP: "stop",
  SET: "set",
  SOURCEKILL: "kill",
  SOURCELOOT: "loot",
  SOURCEMINE: "mine",
  STRUCTUREDELETEACTION: "delete",
  STRUCTURELOADACTION: "load",
  STRUCTURESAVEACTION: "save",
  SUBCOMMANDEXPORT: "export",
  TAGLISTACTION: "list",
  TAKE: "take",
  TARGET_CENTER_OFFSET: "target_center_offset",
  TARGET_ENTITY: "target_entity",
  TARGETBLOCK: "block",
  TARGETENTITY: "entity",
  TARGETGIVE: "give",
  TARGETINSERT: "insert",
  TARGETREPLACE: "replace",
  TARGETSPAWN: "spawn",
  TELEPORTFACING: "facing",
  TICKINGAREA: "tickingarea",
  TICKINGAREAMODEADD: "add",
  TICKINGAREAMODELIST: "list",
  TICKINGAREAMODEPRELOAD: "preload",
  TICKINGAREAMODEREMOVE: "remove",
  TICKINGAREAMODEREMOVEALL: "remove_all",
  TICKINGAREANAME: "tickingarea",
  TIME: "time",
  TIMEMODEADD: "add",
  TIMEMODEQUERY: "query",
  TIMEMODESET: "set",
  TITLECLEAR: "clear",
  TITLERAWCLEAR: "clear",
  TITLERAWRESET: "reset",
  TITLERAWTIMES: "times",
  TITLERESET: "reset",
  TITLETIMES: "times",
  VIEW_OFFSET: "view_offset",
  WEATHERQUERY: "query",
};
