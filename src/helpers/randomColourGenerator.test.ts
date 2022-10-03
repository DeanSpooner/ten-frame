import { randomColourGenerator } from "./randomColourGenerator";

describe("randomColourGenerator()", () => {
  const firstRandomColour = randomColourGenerator();
  const secondRandomColour = randomColourGenerator();
  const thirdRandomColour = randomColourGenerator();
  it("returns a string", () => {
    expect(typeof firstRandomColour === "string").toBe(true);
    expect(typeof secondRandomColour === "string").toBe(true);
    expect(typeof thirdRandomColour === "string").toBe(true);
  });
  it("returns a string with a hex code of six characters", () => {
    expect(firstRandomColour).toHaveLength(6);
    expect(parseInt(firstRandomColour, 16)).toBeLessThan(16777215);
    expect(secondRandomColour).toHaveLength(6);
    expect(parseInt(firstRandomColour, 16)).toBeLessThan(16777215);
    expect(thirdRandomColour).toHaveLength(6);
    expect(parseInt(firstRandomColour, 16)).toBeLessThan(16777215);
  });
  it("parses from hexadecimal into an integer greater than or equal to 0", () => {
    expect(parseInt(firstRandomColour, 16)).toBeGreaterThanOrEqual(0);
    expect(parseInt(secondRandomColour, 16)).toBeGreaterThanOrEqual(0);
    expect(parseInt(thirdRandomColour, 16)).toBeGreaterThanOrEqual(0);
  });
  it("parses from hexadecimal into an integer less than 16777215", () => {
    expect(parseInt(firstRandomColour, 16)).toBeLessThan(16777215);
    expect(parseInt(secondRandomColour, 16)).toBeLessThan(16777215);
    expect(parseInt(thirdRandomColour, 16)).toBeLessThan(16777215);
  });
});
