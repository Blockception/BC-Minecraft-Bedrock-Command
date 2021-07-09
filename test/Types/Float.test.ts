import { expect } from "chai";
import { IsFloat } from "../../src/Lib/Types/Float";

describe("Float", () => {
  it("IsFloat", () => {
    expect(IsFloat("0.2")).be.true;
    expect(IsFloat("-0.2")).be.true;

    expect(IsFloat("-.2")).be.true;
    expect(IsFloat(".2")).be.true;

    expect(IsFloat("123456.987654")).be.true;
    expect(IsFloat("-123456.987654")).be.true;

    expect(IsFloat("-.987654")).be.true;
    expect(IsFloat(".987654")).be.true;

    expect(IsFloat("foo")).be.false;
  });
});
