import { render, screen } from "@testing-library/react";
import { MatrixRotation } from "@/components/MatrixRotation";

describe("MatrixRotation Component", () => {
  test("should renders MatrixRotation component", () => {
    render(<MatrixRotation />);
    const matrixTitle = screen.getByText("Ingresar Matriz de NxN");
    expect(matrixTitle).toBeInTheDocument();
  });
});
