import formatMoney from "../../utils/formatMoney";

describe("formatMoney function", () => {
  it("works with fractional units", () => {
    expect(formatMoney(1)).toBe("R\xa00,01");
    expect(formatMoney(10)).toBe("R\xa00,10");
    expect(formatMoney(99)).toBe("R\xa00,99");
    expect(formatMoney(101)).toBe("R\xa01,01");
  });

  it("leaves off cents on whole units", () => {
    expect(formatMoney(100)).toBe("R\xa01");
    expect(formatMoney(21000)).toBe("R\xa0210");
    expect(formatMoney(55340000)).toBe("R\xa0553\xa0400");
    expect(formatMoney(785340000)).toBe("R\xa07\xa0853\xa0400");
  });

  it("works with whole and fractional units", () => {
    expect(formatMoney(102)).toBe("R\xa01,02");
    expect(formatMoney(5012)).toBe("R\xa050,12");
    expect(formatMoney(35487821)).toBe("R\xa0354\xa0878,21");
  });
});
