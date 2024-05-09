import { render, screen } from "@testing-library/react";
import { DrawMatrix } from "@/components";
describe("DrawMatrix Component", () => {
  test("should renders DrawMatrix component with matrix", () => {
    const matrixValue = "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]";
    render(
      <DrawMatrix
        title="Test Matrix"
        subTitle="Test Subtitle:"
        matrixValue={matrixValue}
      />
    );

    const titleElement = screen.getByText("Test Matrix");
    expect(titleElement).toBeInTheDocument();

    const subTitleElement = screen.getByText("Test Subtitle:");
    expect(subTitleElement).toBeInTheDocument();

    const matrixElement = screen.getByText(matrixValue);
    expect(matrixElement).toBeInTheDocument();
  });

  test("should renders DrawMatrix component without crashing with invalid matrixValue", () => {
    const matrixValue = "invalid";
    const { queryByText } = render(
      <DrawMatrix
        title="Test Matrix"
        subTitle="Test Subtitle: "
        matrixValue={matrixValue}
      />
    );

    expect(queryByText("Test Matrix")).not.toBeInTheDocument();
    expect(queryByText("Test Subtitle: ")).not.toBeInTheDocument();
  });
});
