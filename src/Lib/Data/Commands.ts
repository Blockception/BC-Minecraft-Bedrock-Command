import { CommandContainer } from "./CommandContainer";
import { alwaysday } from "./Vanilla/alwaysday";
import { camerashake } from "./Vanilla/camerashake";
import { clear } from "./Vanilla/clear";
import { clearspawnpoint } from "./Vanilla/clearspawnpoint";
import { clone } from "./Vanilla/clone";
import { damage } from "./Vanilla/damage";
import { daylock } from "./Vanilla/daylock";
import { deop } from "./Vanilla/deop";
import { dialogue } from "./Vanilla/dialogue";
import { difficulty } from "./Vanilla/difficulty";
import { effect } from "./Vanilla/effect";
import { event } from "./Vanilla/event";
import { enchant } from "./Vanilla/enchant";
import { execute } from "./Vanilla/execute";
import { fill } from "./Vanilla/fill";
import { Function } from "./Vanilla/function";
import { fog } from "./Vanilla/fog";
import { gamemode } from "./Vanilla/gamemode";
import { gamerule } from "./Vanilla/gamerule";
import { give } from "./Vanilla/give";
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
import { tickingarea } from "./Vanilla/tickingarea";
import { time } from "./Vanilla/time";
import { title } from "./Vanilla/title";
import { titleraw } from "./Vanilla/titleraw";
import { toggledownfall } from "./Vanilla/toggledownfall";
import { w } from "./Vanilla/w";
import { weather } from "./Vanilla/weather";
import { xp } from "./Vanilla/xp";
import { ability } from "./Edu/ability";
import { classroommode } from "./Edu/classroommode";
import { code } from "./Edu/code";
import { immutableworld } from "./Edu/immutableworld";

/** Vanilla commands */
export const Vanilla: CommandContainer = {
  alwaysday,
  camerashake,
  clear,
  clearspawnpoint,
  clone,
  damage,
  daylock,
  dialogue,
  difficulty,
  deop,
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
  kick,
  kill,
  locate,
  loot,
  me,
  msg,
  music,
  op,
  particle,
  playsound,
  playanimation,
  replaceitem,
  ride,
  say,
  schedule,
  scoreboard,
  setblock,
  setworldspawn,
  setmaxplayers,
  spawnpoint,
  spreadplayers,
  stopsound,
  structure,
  summon,
  tag,
  tell,
  tellraw,
  testfor,
  testforblock,
  tickingarea,
  time,
  title,
  titleraw,
  toggledownfall,
  tp: teleport,
  teleport: teleport,
  w,
  weather,
  xp,
};

/** Edu commands */
export const Edu: CommandContainer = {
  ability,
  classroommode,
  code,
  gamerule,
  immutableworld,
};

export const VanillaCommands = Object.keys(Vanilla);
export const EduCommands = Object.keys(Edu);
