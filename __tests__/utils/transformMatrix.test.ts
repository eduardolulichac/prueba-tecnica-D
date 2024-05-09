import { transformMatrix } from "@/utils";

describe("transformMatrix function", () => {
  test("transforms valid string to matrix", () => {
    const input = "[[1,2],[3,4]]";
    const expectedOutput = [
      [1, 2],
      [3, 4],
    ];

    expect(transformMatrix(input)).toEqual(expectedOutput);
  });

  test("throws error for invalid string", () => {
    const invalidInput = "invalid";
    expect(() => {
      transformMatrix(invalidInput);
    }).toThrow();
  });
});
