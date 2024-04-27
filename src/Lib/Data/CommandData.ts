import { ability } from "./Edu/ability";
import { alwaysday } from "./Vanilla/alwaysday";
import { camerashake } from "./Vanilla/camerashake";
import { classroommode } from "./Edu/classroommode";
import { clear } from "./Vanilla/clear";
import { clearspawnpoint } from "./Vanilla/clearspawnpoint";
import { clone } from "./Vanilla/clone";
import { code } from "./Edu/code";
import { CommandContainer } from "./CommandContainer";
import { damage } from "./Vanilla/damage";
import { daylock } from "./Vanilla/daylock";
import { deop } from "./Vanilla/deop";
import { dialogue } from "./Vanilla/dialogue";
import { difficulty } from "./Vanilla/difficulty";
import { effect } from "./Vanilla/effect";
import { enchant } from "./Vanilla/enchant";
import { event } from "./Vanilla/event";
import { execute } from "./Vanilla/execute";
import { executeSubCommands } from './Vanilla/execute/subcommands';
import { fill } from "./Vanilla/fill";
import { fog } from "./Vanilla/fog";
import { Function } from "./Vanilla/function";
import { gamemode } from "./Vanilla/gamemode";
import { gamerule } from "./Vanilla/gamerule";
import { give } from "./Vanilla/give";
import { hud } from "./Vanilla/hud";
import { immutableworld } from "./Edu/immutableworld";
import { inputpermission } from './Vanilla/inputpermission';
import { kick } from "./Vanilla/kick";
import { kill } from "./Vanilla/kill";
import { locate } from "./Vanilla/locate";
import { loot } from "./Vanilla/loot";
import { me } from "./Vanilla/me";
import { msg } from "./Vanilla/msg";
import { music } from "./Vanilla/music";
import { op } from "./Vanilla/op";
import { particle } from "./Vanilla/particle";
import { playanimation } from "./Vanilla/playanimation";
import { playsound } from "./Vanilla/playsound";
import { replaceitem } from "./Vanilla/replaceitem";
import { ride } from "./Vanilla/ride";
import { say } from "./Vanilla/say";
import { schedule } from "./Vanilla/schedule";
import { scoreboard } from "./Vanilla/scoreboard";
import { setblock } from "./Vanilla/setblock";
import { setmaxplayers } from "./Vanilla/setmaxplayers";
import { setworldspawn } from "./Vanilla/setworldspawn";
import { spawnpoint } from "./Vanilla/spawnpoint";
import { spreadplayers } from "./Vanilla/spreadplayers";
import { stopsound } from "./Vanilla/stopsound";
import { structure } from "./Vanilla/structure";
import { summon } from "./Vanilla/summon";
import { tag } from "./Vanilla/tag";
import { teleport } from "./Vanilla/teleport";
import { tell } from "./Vanilla/tell";
import { tellraw } from "./Vanilla/tellraw";
import { testfor } from "./Vanilla/testfor";
import { testforblock } from "./Vanilla/testforblock";
import { testforblocks } from './Vanilla/testforblocks';
import { tickingarea } from "./Vanilla/tickingarea";
import { time } from "./Vanilla/time";
import { title } from "./Vanilla/title";
import { titleraw } from "./Vanilla/titleraw";
import { toggledownfall } from "./Vanilla/toggledownfall";
import { tp } from "./Vanilla/tp";
import { w } from "./Vanilla/w";
import { weather } from "./Vanilla/weather";
import { xp } from "./Vanilla/xp";

/** The minecraft command data set */
export namespace CommandData {
  /** The edu command data set */
  export const Edu: CommandContainer = {
    ability,
    classroommode,
    code,
    gamerule,
    immutableworld,
  };

  /** The vanilla command data set */
  export const Vanilla: CommandContainer = {
    alwaysday,
    camerashake,
    clear,
    clearspawnpoint,
    clone,
    damage,
    daylock,
    deop,
    dialogue,
    difficulty,
    effect,
    enchant,
    event,
    execute,
    fill,
    fog,
    function: Function,
    gamemode,
    gamerule,
    give,
    hud,
    inputpermission,
    kick,
    kill,
    locate,
    loot,
    me,
    msg,
    music,
    op,
    particle,
    playanimation,
    playsound,
    replaceitem,
    ride,
    say,
    schedule,
    scoreboard,
    setblock,
    setmaxplayers,
    setworldspawn,
    spawnpoint,
    spreadplayers,
    stopsound,
    structure,
    summon,
    tag,
    teleport,
    tell,
    tellraw,
    testfor,
    testforblock,
    testforblocks,
    tickingarea,
    time,
    title,
    titleraw,
    toggledownfall,
    tp,
    w,
    weather,
    xp,
  };

  /** The execute sub command data set */
  export const ExecuteSubcommands = executeSubCommands;

  /** All the vanilla commands */
  export const VanillaCommands = Object.keys(Vanilla);
  /** All the edu commands */
  export const EduCommands = Object.keys(Edu);
}
