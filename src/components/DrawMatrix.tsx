import { DrawMatrixProps } from "@/interfaces";
import { Matrix } from "@/types";
import { transformMatrix } from "@/utils";

export const DrawMatrix = ({
  title,
  subTitle,
  matrixValue,
}: DrawMatrixProps) => {
  try {
    const matrix: Matrix = transformMatrix(matrixValue);
    return (
      <>
        <div className="mr-20 mt-10 lg:mt-2">
          <h3 className=" text-lg font-bold text-gray-700">{title}</h3>
          <p className="mt-2 mb-5">
            <span>{subTitle}</span>
            <span aria-label="matrix">{matrixValue}</span>
          </p>
          <section>
            {matrix.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className="w-8 h-8 border border-gray-500 text-center content-center bg-gray-50"
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </section>
        </div>
      </>
    );
  } catch (error) {
    return null;
  }
};
