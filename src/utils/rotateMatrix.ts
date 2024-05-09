import { Matrix } from "@/types";
import { validarMatrix } from "./validateMatrix";
import { transformMatrix } from "./transformMatrix";

enum Directions {
  Anticlockwise = "-90",
}

export const rotateMatrix = (matrixValue: string): string => {
  if (!validarMatrix(matrixValue)) {
    throw new Error("invalid matrix");
  }

  const matrix: Matrix = transformMatrix(matrixValue);

  const rotatedMatrix = handleRotateMatrix(matrix, Directions.Anticlockwise);

  return JSON.stringify(rotatedMatrix);
};

const handleRotateMatrix = (matrix: Matrix, direction: Directions) => {
  const n = matrix.length;
  const rotatedMatrix: Matrix = [];
  for (let i = 0; i < n; i++) {
    rotatedMatrix.push([]);
  }

  switch (direction) {
    case Directions.Anticlockwise:
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          rotatedMatrix[n - 1 - j][i] = matrix[i][j];
        }
      }
      return rotatedMatrix;
    default:
      return;
  }
};
