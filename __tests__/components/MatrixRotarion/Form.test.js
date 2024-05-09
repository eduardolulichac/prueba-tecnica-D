import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "@/components/MatrixRotation/Form";

describe("Form Component", () => {
  const setup = () => {
    const mock1 = jest.fn();
    const { getByRole } = render(
      <Form
        setCurrentMatrix={mock1}
        setNewRotatedMatrix={mock1}
        setShowResult={mock1}
      />
    );
    const inputElement = screen.getByLabelText("matrix-input");
    return {
      inputElement,
      getByRole,
    };
  };

  test("should renders Form component", () => {
    setup();
    const inputLabel = screen.getByText("Search");
    expect(inputLabel).toBeInTheDocument();
  });

  test("clears input on clear button click", () => {
    const { inputElement, getByRole } = setup();
    fireEvent.change(inputElement, { target: { value: "[[1,2],[3,4]]" } });
    const clearButton = getByRole("clearButton");
    fireEvent.click(clearButton);
    expect(inputElement.value).toBe("");
  });

  test("should show message error wrong input", () => {
    const { inputElement } = setup();
    fireEvent.change(inputElement, { target: { value: "abc" } });

    expect(
      screen.getByText("La matriz ingresada es invalida")
    ).toBeInTheDocument();
  });

  test("should enabled button clear when click on button rotate", () => {
    const { inputElement, getByRole } = setup();
    fireEvent.change(inputElement, { target: { value: "[[1,2],[3,4]]" } });
    const rotateButton = getByRole("rotateButton");
    const clearButton = getByRole("clearButton");
    fireEvent.click(rotateButton);
    expect(clearButton).not.toBeDisabled();
  });
});
