import { expect } from "chai";
import { Command } from "../../src/main";

describe("Command", () => {
  it("parse 1 - simple test", () => {
    const comm = Command.parse("execute @s[scores={foo=1..}] ~ ~ ~ tp @a[tag=target] @s", 0);

    expect(comm.parameters.length).to.equal(8);

    expect(comm.parameters[0].text).to.equal("execute");
    expect(comm.parameters[1].text).to.equal("@s[scores={foo=1..}]");
    expect(comm.parameters[2].text).to.equal("~");
    expect(comm.parameters[3].text).to.equal("~");
    expect(comm.parameters[4].text).to.equal("~");
    expect(comm.parameters[5].text).to.equal("tp");
    expect(comm.parameters[6].text).to.equal("@a[tag=target]");
    expect(comm.parameters[7].text).to.equal("@s");

    expect(comm.getCommandData(false).length).be.greaterThanOrEqual(0);
  });

  it("parse 2 - condesed ~ coordiantes", () => {
    const comm = Command.parse("execute @s ~~~ tp @a @s", 0);

    expect(comm.parameters.length).to.equal(8);
  });

  it("parse 3 - condesed ^ coordiantes", () => {
    const comm = Command.parse("execute @s ^^^ tp @a @s", 0);

    expect(comm.parameters.length).to.equal(8);
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
});
