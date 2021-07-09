import { expect } from "chai";
import { IsArray, IsObject } from "../../src/Lib/Types/Json";

describe("Json", () => {
  it("IsObject", () => {
    expect(IsObject('{"rawtext":[{"text":"example"}]}')).be.true;

    expect(IsObject('{"rawtext":[{"text":"example}]')).be.false;
  });

  it("IsArray", () => {
    expect(IsArray("[foo:1]")).be.true;

    expect(IsArray("[example:something,hello:1]")).be.true;

    expect(IsArray("[foo:1")).be.false;

    expect(IsArray("example:something,hello:1")).be.false;
  });
});
