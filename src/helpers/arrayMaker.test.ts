import { arrayMaker } from "./arrayMaker";

describe("arrayMaker()", () => {
  const arrayOfOne = arrayMaker(1);
  const arrayOfSeven = arrayMaker(7);
  const arrayOfTen = arrayMaker(10);
  it("returns an array", () => {
    expect(arrayOfOne instanceof Array).toBe(true);
    expect(arrayOfSeven instanceof Array).toBe(true);
    expect(arrayOfTen instanceof Array).toBe(true);
  });
  it("returns an array with its length matching the argument passed", () => {
    expect(arrayOfOne).toHaveLength(1);
    expect(arrayOfSeven).toHaveLength(7);
    expect(arrayOfTen).toHaveLength(10);
  });
  it("returns an array with its contents being integer numbers up to and including the argument passed", () => {
    expect(arrayOfOne).toEqual([1]);
    expect(arrayOfSeven).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(arrayOfTen).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
