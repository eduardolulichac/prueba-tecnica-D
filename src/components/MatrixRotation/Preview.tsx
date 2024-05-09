import { PreviewProps } from "@/interfaces";
import { DrawMatrix } from "../DrawMatrix";

export const Preview = ({ currentMatrix, newRotatedMatrix }: PreviewProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <DrawMatrix
        title="Matriz Original"
        subTitle="Input:"
        matrixValue={currentMatrix}
      />
      {newRotatedMatrix.length > 0 && (
        <DrawMatrix
          title="Matriz Rotada -90 grados (Anti-horario)"
          subTitle="Ouput:"
          matrixValue={newRotatedMatrix}
        />
      )}
    </div>
  );
};
