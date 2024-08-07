import { expect } from "chai";
import { CommandContainer } from "../src/lib/data/command-container";
import { CommandData } from "../src/lib/data/command-data";

describe("Data/Commands", () => {
  const { VanillaCommands, EduCommands } = CommandData;

  describe("Check General", () => {
    CheckCommandContainer(CommandData.Edu);
    CheckCommandContainer(CommandData.Vanilla);
    CheckCommandContainer(CommandData.ExecuteSubcommands);
  });

  it("Dialogue Check", () => {
    expect(CommandData.Edu["dialogue"]).to.be.undefined;
    expect(CommandData.Vanilla["dialogue"]).to.be.not.undefined;
  });

  it("Inventory Check", () => {
    VanillaCommands.forEach((item) => {
      if (CommandData.Vanilla == undefined && CommandData.Vanilla[item] == undefined) {
        expect.fail("missing command: " + item);
      }
    });

    EduCommands.forEach((item) => {
      if (CommandData.Edu == undefined && CommandData.Edu[item] == undefined) {
        expect.fail("missing command: " + item);
      }
    });

    const ExecuteSubcommand = Object.keys(CommandData.ExecuteSubcommands);
    ExecuteSubcommand.forEach((item) => {
      if (CommandData.ExecuteSubcommands == undefined && CommandData.ExecuteSubcommands[item] == undefined) {
        expect.fail("missing command: " + item);
      }
    });
  });
});

function CheckCommandContainer(value: CommandContainer) {
  const keys = Object.getOwnPropertyNames(value);

  it("More then one key", () => {
    expect(keys.length).to.be.greaterThan(0);
  });

  for (var I = 0; I < keys.length; I++) {
    const name = keys[I];
    const items = value[name];

    describe(`Command ${name}`, () => {
      it("Has atleast one item", () => {
        expect(items.length).to.be.greaterThan(0);
      });

      for (var J = 0; J < items.length; J++) {
        describe(`${name} ${J}`, () => {
          const value = items[J];

          it("Has documentation", () => {
            expect(value.documentation.length).to.be.greaterThan(
              0,
              `command: ${name}, expected documentation to be filled`
            );
          });

          it("Has a valid name", () => {
            expect(value.name.length).to.be.greaterThan(0, `command: ${name}, expected name to be filled`);
          });

          it("Has parameters", () => {
            expect(value.parameters.length).to.be.greaterThan(0, `command: ${name}, expected a parameter`);

            value.parameters.forEach((p) => {
              expect(p.required).to.be.a("boolean");
              expect(p.type).to.be.a("number");
              expect(p.text).to.be.a("string");

              if (p.options) {
                expect(p.options).to.be.a("object");
              }
            });
          });
        });
      }
    });
  }
}
