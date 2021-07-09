import { expect } from "chai";
import { IsInteger } from "../../src/Lib/Types/Integer";

describe("Integer", () => {
  it("IsInteger", () => {
    expect(IsInteger("-123456")).be.true;
    expect(IsInteger("123456")).be.true;

    expect(IsInteger("foo")).be.false;
  });
});
