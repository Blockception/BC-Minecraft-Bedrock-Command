import { ability } from "./edu/ability";
import { alwaysday } from "./vanilla/alwaysday";
import { camera } from "./vanilla/camera";
import { camerashake } from "./vanilla/camerashake";
import { classroommode } from "./edu/classroommode";
import { clear } from "./vanilla/clear";
import { clearspawnpoint } from "./vanilla/clearspawnpoint";
import { clone } from "./vanilla/clone";
import { code } from "./edu/code";
import { CommandContainer } from "./command-container";
import { damage } from "./vanilla/damage";
import { daylock } from "./vanilla/daylock";
import { deop } from "./vanilla/deop";
import { dialogue } from "./vanilla/dialogue";
import { difficulty } from "./vanilla/difficulty";
import { effect } from "./vanilla/effect";
import { enchant } from "./vanilla/enchant";
import { event } from "./vanilla/event";
import { execute } from "./vanilla/execute";
import { executeSubCommands } from './vanilla/execute/subcommands';
import { fill } from "./vanilla/fill";
import { fog } from "./vanilla/fog";
import { Function } from "./vanilla/function";
import { gamemode } from "./vanilla/gamemode";
import { gamerule } from "./vanilla/gamerule";
import { give } from "./vanilla/give";
import { hud } from "./vanilla/hud";
import { immutableworld } from "./edu/immutableworld";
import { inputpermission } from './vanilla/inputpermission';
import { kick } from "./vanilla/kick";
import { kill } from "./vanilla/kill";
import { locate } from "./vanilla/locate";
import { loot } from "./vanilla/loot";
import { me } from "./vanilla/me";
import { msg } from "./vanilla/msg";
import { music } from "./vanilla/music";
import { op } from "./vanilla/op";
import { particle } from "./vanilla/particle";
import { playanimation } from "./vanilla/playanimation";
import { playsound } from "./vanilla/playsound";
import { recipe } from "./vanilla/recipe";
import { replaceitem } from "./vanilla/replaceitem";
import { ride } from "./vanilla/ride";
import { say } from "./vanilla/say";
import { schedule } from "./vanilla/schedule";
import { scoreboard } from "./vanilla/scoreboard";
import { scriptevent } from "./vanilla/scriptevent";
import { setblock } from "./vanilla/setblock";
import { setmaxplayers } from "./vanilla/setmaxplayers";
import { setworldspawn } from "./vanilla/setworldspawn";
import { spawnpoint } from "./vanilla/spawnpoint";
import { spreadplayers } from "./vanilla/spreadplayers";
import { stopsound } from "./vanilla/stopsound";
import { structure } from "./vanilla/structure";
import { summon } from "./vanilla/summon";
import { tag } from "./vanilla/tag";
import { teleport } from "./vanilla/teleport";
import { tell } from "./vanilla/tell";
import { tellraw } from "./vanilla/tellraw";
import { testfor } from "./vanilla/testfor";
import { testforblock } from "./vanilla/testforblock";
import { testforblocks } from './vanilla/testforblocks';
import { tickingarea } from "./vanilla/tickingarea";
import { time } from "./vanilla/time";
import { title } from "./vanilla/title";
import { titleraw } from "./vanilla/titleraw";
import { toggledownfall } from "./vanilla/toggledownfall";
import { tp } from "./vanilla/tp";
import { w } from "./vanilla/w";
import { weather } from "./vanilla/weather";
import { xp } from "./vanilla/xp";

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
    camera,
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
    recipe,
    replaceitem,
    ride,
    say,
    schedule,
    scoreboard,
    scriptevent,
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
