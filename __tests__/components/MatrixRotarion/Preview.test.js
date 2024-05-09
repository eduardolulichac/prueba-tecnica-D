import { render, screen } from "@testing-library/react";
import { Preview } from "@/components/MatrixRotation/Preview";

describe("Preview Component", () => {
  test("should renders Preview component with original matrix", () => {
    const currentMatrix = "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]";
    render(<Preview currentMatrix={currentMatrix} newRotatedMatrix="" />);

    const originalMatrixTitle = screen.getByText("Matriz Original");
    expect(originalMatrixTitle).toBeInTheDocument();

    const originalMatrixSubtitle = screen.getByText("Input:");
    expect(originalMatrixSubtitle).toBeInTheDocument();

    const originalMatrixElement = screen.getByLabelText("matrix");
    expect(originalMatrixElement).toBeInTheDocument();

    const rotatedMatrixTitle = screen.queryByText(
      "Matriz Rotada -90 grados (Anti-horario)"
    );
    expect(rotatedMatrixTitle).not.toBeInTheDocument();
  });
  test("should renders Preview component with rotated matrix", () => {
    const currentMatrix = "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]";
    const newRotatedMatrix = "[[3, 6, 9], [2, 5, 8], [1, 4, 7]]";
    render(
      <Preview
        currentMatrix={currentMatrix}
        newRotatedMatrix={newRotatedMatrix}
      />
    );

    const originalMatrixTitle = screen.getByText("Matriz Original");
    expect(originalMatrixTitle).toBeInTheDocument();

    const originalMatrixSubtitle = screen.getByText("Input:");
    expect(originalMatrixSubtitle).toBeInTheDocument();

    const originalMatrixElement = screen.getByText(currentMatrix);
    expect(originalMatrixElement).toBeInTheDocument();

    const rotatedMatrixTitle = screen.getByText(
      "Matriz Rotada -90 grados (Anti-horario)"
    );
    expect(rotatedMatrixTitle).toBeInTheDocument();

    const rotatedMatrixSubtitle = screen.getByText("Ouput:");
    expect(rotatedMatrixSubtitle).toBeInTheDocument();

    const rotatedMatrixElement = screen.getByText(newRotatedMatrix);
    expect(rotatedMatrixElement).toBeInTheDocument();
  });
});
