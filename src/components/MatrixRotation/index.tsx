"use client";
import { useState } from "react";
import { Form } from "./Form";
import { Preview } from "./Preview";

export const MatrixRotation = () => {
  const [currentMatrix, setCurrentMatrix] = useState("");
  const [newRotatedMatrix, setNewRotatedMatrix] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex flex-row w-full lg:ml-10">
      <div className="w-full z-10 lg:ml-4">
        <Form
          setCurrentMatrix={setCurrentMatrix}
          setNewRotatedMatrix={setNewRotatedMatrix}
          setShowResult={setShowResult}
        />
        {showResult && (
          <Preview
            currentMatrix={currentMatrix}
            newRotatedMatrix={newRotatedMatrix}
          />
        )}
      </div>
    </div>
  );
};
