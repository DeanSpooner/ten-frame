export const arrayMaker = (length: number): number[] => {
  return Array.from(Array(length)).map((e, i) => i + 1);
};
