import { validarMatrix } from "@/utils";

describe("validarMatrix function", () => {
  test("should return true for a matrix 2x2", () => {
    const validMatrix = "[[1,2],[3,4]]";
    expect(validarMatrix(validMatrix)).toBe(true);
  });

  test("should return true for a matrix 3x3", () => {
    const validMatrix = "[[1,2,3],[4,5,6],[7,8,9]]";
    expect(validarMatrix(validMatrix)).toBe(true);
  });

  test("should return false for empty params", () => {
    const emptyString = "";
    expect(validarMatrix(emptyString)).toBe(false);
  });

  test("should return false for wrong Input Matrix", () => {
    const invalidMatrix = "[[1,2],[3,4]";
    expect(validarMatrix(invalidMatrix)).toBe(false);
  });

  test("should return false for unsquare matrix", () => {
    const nonSquareMatrix = "[[1,2,3],[4,5,6]]";
    expect(validarMatrix(nonSquareMatrix)).toBe(false);
  });

  test("should return false for a matrix with element not numeric", () => {
    const matrixWithNonNumericElements = '[[1,2],["a","b"]]';
    expect(validarMatrix(matrixWithNonNumericElements)).toBe(false);
  });

  test("should return true for a matrix with negative numbers", () => {
    const matrixWithNonNumericElements = "[[1,-2],[3,4]]";
    console.log("miremosss: ", validarMatrix(matrixWithNonNumericElements));
    expect(validarMatrix(matrixWithNonNumericElements)).toBe(true);
  });
  test("should return false for empty matrix", () => {
    const emptyMatrix = "[]";
    expect(validarMatrix(emptyMatrix)).toBe(false);
  });
});
