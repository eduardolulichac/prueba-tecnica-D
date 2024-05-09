import { Matrix } from "@/types";
import { transformMatrix } from "./transformMatrix";

export const validarMatrix = (value: String): boolean => {
  const inputValue = value.trim();
  try {
    const parsedMatrix: Matrix = transformMatrix(inputValue);
    if (!isMatrix(parsedMatrix)) return false;

    if (parsedMatrix.length === 0) return false;

    if (!isArrayNxN(parsedMatrix)) return false;

    if (!hasNumbers(parsedMatrix)) return false;

    return true;
  } catch (error) {
    return false;
  }
};

const isMatrix = (matrix: Matrix): boolean => {
  if (!Array.isArray(matrix)) {
    return false;
  }
  return true;
};

const isArrayNxN = (matrix: Matrix): boolean => {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
      return false;
    }
  }
  return true;
};

const hasNumbers = (matrix: Matrix): boolean => {
  const n = matrix.length;
  const regex = /^-?\d+$/;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!regex.test(String(matrix[i][j]))) {
        return false;
      }
    }
  }
  return true;
};
