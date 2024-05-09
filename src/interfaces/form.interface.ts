import { Dispatch, SetStateAction } from "react";

export interface FormProps {
  setCurrentMatrix: Dispatch<SetStateAction<string>>;
  setNewRotatedMatrix: Dispatch<SetStateAction<string>>;
  setShowResult: Dispatch<SetStateAction<boolean>>;
}
