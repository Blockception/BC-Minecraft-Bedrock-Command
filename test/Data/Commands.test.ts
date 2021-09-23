import { expect } from "chai";
import { CommandContainer } from "../../src/Lib/Data/CommandContainer";
import { CommandInfo } from "../../src/Lib/Data/CommandInfo";
import { CommandData } from "../../src/main";

/**List of command from the wiki */
const commandlist = [
  "ability",
  "alwaysday",
  "camerashake",
  "clear",
  "clearspawnpoint",
  "clone",
  "connect",
  "daylock",
  "dialogue",
  "difficulty",
  "effect",
  "enchant",
  "event",
  "execute",
  "fill",
  "fog",
  "function",
  "gamemode",
  "gamerule",
  "give",
  "help",
  "immutableworld",
  "kick",
  "kill",
  "list",
  "locate",
  "me",
  "mobevent",
  "msg",
  "music",
  "particle",
  "permission",
  "playanimation",
  "playsound",
  "reload",
  "replaceitem",
  "ride",
  "save",
  "say",
  "schedule",
  "scoreboard",
  "setblock",
  "setmaxplayers",
  "setworldspawn",
  "spawnpoint",
  "spreadplayers",
  "stop",
  "stopsound",
  "structure",
  "summon",
  "tag",
  "teleport",
  "tell",
  "tellraw",
  "testfor",
  "testforblock",
  "testforblocks",
  "tickingarea",
  "time",
  "title",
  "titleraw",
  "toggledownfall",
  "tp",
  "w",
  "wb",
  "weather",
  "whitelist",
  "worldbuilder",
  "wsserver",
  "xp",
];

describe("Data/Commands", () => {
  it("Check General", () => {
    CheckCommandContainer(CommandData.Edu);
    CheckCommandContainer(CommandData.Vanilla);
  });

  it("Dialogue Check", () => {
    expect(CommandData.Edu["dialogue"]).to.be.undefined;
    expect(CommandData.Vanilla["dialogue"]).to.be.not.undefined;
  });

  it("Inventory Check", () => {
    commandlist.forEach((item) => {
      if (CommandData.Vanilla[item] == undefined && CommandData.Edu == undefined) {
        expect.fail("missing command: " + item);
      }
    });
  });
});

function CheckCommandContainer(value: CommandContainer) {
  const keys = Object.getOwnPropertyNames(value);

  expect(keys.length).to.be.greaterThan(0);

  for (var I = 0; I < keys.length; I++) {
    const k = keys[I];
    const items = value[k];

    expect(items.length).to.be.greaterThan(0);

    for (var J = 0; J < items.length; J++) {
      CheckCommandContent(k, items[J]);
    }
  }
}

function CheckCommandContent(name: string, value: CommandInfo) {
  expect(value.documentation.length).to.be.greaterThan(0, `command: ${name}, expected documentation to be filled`);
  expect(value.name.length).to.be.greaterThan(0, `command: ${name}, expected name to be filled`);

  expect(value.parameters.length).to.be.greaterThan(0, `command: ${name}, expected a parameter`);
}
