import formatMoney from "../../utils/formatMoney";

describe("formatMoney function", () => {
  it("works with fractional units", () => {
    expect(formatMoney(1)).toBe("R\xa00,01");
  });
});
