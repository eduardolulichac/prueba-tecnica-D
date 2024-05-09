import { rotateMatrix } from "@/utils";

describe("rotateMatrix function", () => {
  test("should correctly rotate a 2x2 numeric matrix", () => {
    const input = "[[1,2],[3,4]]";
    const output = "[[2,4],[1,3]]";
    expect(rotateMatrix(input)).toBe(output);
  });

  test("should correctly rotate a 3x3 numeric matrix", () => {
    const input = "[[1,2,3],[4,5,6],[7,8,9]]";
    const output = "[[3,6,9],[2,5,8],[1,4,7]]";
    expect(rotateMatrix(input)).toBe(output);
  });

  test("should correctly rotate matrix with negative numbers", () => {
    const input = "[[1,-2],[3,4]]";
    const output = "[[-2,4],[1,3]]";
    expect(rotateMatrix(input)).toBe(output);
  });

  test("should handle a malformed matrix", () => {
    const input = "[[1,2],[3,4]";
    expect(() => rotateMatrix(input)).toThrow();
  });

  test("should handle a non-square matrix", () => {
    const input = "[[1,2,3],[4,5,6]]";
    expect(() => rotateMatrix(input)).toThrow();
  });

  test("should handle a matrix with non-numeric elements", () => {
    const input = '[[1,2],[3,"a"]]';
    expect(() => rotateMatrix(input)).toThrow();
  });
});
