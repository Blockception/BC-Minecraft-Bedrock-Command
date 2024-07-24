import { expect } from "chai";
import { Command } from "../src/main";

describe("Command", () => {
  it("parse 1 - simple test", () => {
    const comm = Command.parse("scoreboard players set @a[scores={foo=1..}] foo 1", 0);

    expect(comm.parameters.length).to.equal(6);

    expect(comm.parameters[0].text).to.equal("scoreboard");
    expect(comm.parameters[1].text).to.equal("players");
    expect(comm.parameters[2].text).to.equal("set");
    expect(comm.parameters[3].text).to.equal("@a[scores={foo=1..}]");
    expect(comm.parameters[4].text).to.equal("foo");
    expect(comm.parameters[5].text).to.equal("1");

    expect(comm.getCommandData(false).length).be.greaterThanOrEqual(0);
  });

  it("parse 2 - condensed ~ coordinates", () => {
    const comm = Command.parse("tp @s ~~~", 0);

    expect(comm.parameters.length).to.equal(5);
  });

  it("parse 3 - condensed ^ coordinates", () => {
    const comm = Command.parse("tp @s ^^^", 0);

    expect(comm.parameters.length).to.equal(5);
  });

  it("parse 4 - unknown command", () => {
    const comm = Command.parse("fakecommand fakeparameter @s a", 0);

    expect(comm.parameters.length).to.equal(4);

    expect(comm.getCommandData(false).length).to.equal(0);
  });

  it("parse 5 - offset", () => {
    const comm = Command.parse("    execute @s ~~~", 0);

    expect(comm.parameters.length).to.equal(5);
    expect(comm.parameters[0].offset).to.equal(4);
  });

  it("subcommand 1", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}] ~ ~ ~ tp @a[tag=target] @s", 0);

    const sub = comm.getSubCommand();

    if (sub) {
      expect(sub.parameters.length).to.equal(3);

      expect(sub.parameters[0].text).to.equal("tp");
      expect(sub.parameters[1].text).to.equal("@a[tag=target]");
      expect(sub.parameters[2].text).to.equal("@s");
    } else {
      expect.fail("expected a sub command");
    }
  });

  it("subcommand 2", () => {
    const comm = Command.parse(
      "execute @s[scores={foo=1..}] ~ ~ ~ detect ~ ~ ~ minecraft:air -1 tp @a[tag=target] @s",
      0
    );

    const sub = comm.getSubCommand();

    if (sub) {
      expect(sub.parameters.length).to.equal(3);

      expect(sub.parameters[0].text).to.equal("tp");
      expect(sub.parameters[1].text).to.equal("@a[tag=target]");
      expect(sub.parameters[2].text).to.equal("@s");
    } else {
      expect.fail("expected a sub command");
    }
  });

  it("is in subcommand 1", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}] ~ ~ ~ tp @a[tag=target] @s", 0);
    const sub = comm.isInSubCommand(46, false);

    if (sub) {
      expect(sub.parameters.length).to.equal(3);

      expect(sub.parameters[0].text).to.equal("tp");
      expect(sub.parameters[1].text).to.equal("@a[tag=target]");
      expect(sub.parameters[2].text).to.equal("@s");
    } else {
      expect.fail("expected a sub command");
    }
  });

  it("is in subcommand 2", () => {
    const comm = Command.parse(
      "execute @s[scores={foo=1..}] ~ ~ ~ detect ~ ~ ~ minecraft:air -1 tp @a[tag=target] @s",
      0
    );
    const sub = comm.isInSubCommand(38, false);

    expect(sub).to.be.undefined;
  });

  it("cursorIndex must match specific parameter", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}] ~ ~ ~ tp @a[tag=target] @s", 0);

    expect(comm.findCursorIndex(2)).to.equal(0, "execute");
    expect(comm.findCursorIndex(29)).to.equal(2, "~");
    expect(comm.findCursorIndex(30)).to.equal(2, "~ ");
    //In the selector
    expect(comm.findCursorIndex(14)).to.equal(1, "@s[scores={foo=1..}]");
    //In the second selector
    expect(comm.findCursorIndex(41)).to.equal(6, "@a[tag=target]");
  });

  it("cursorIndex must be in the first word", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}]", 0);

    expect(comm.findCursorIndex(29)).to.equal(2, "execute");
  });

  it("cursorIndex must be in the first word if before", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}]", 30);

    expect(comm.findCursorIndex(5)).to.equal(0, "execute");
  });
});
