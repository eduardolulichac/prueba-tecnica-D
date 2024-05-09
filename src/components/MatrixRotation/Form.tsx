"use client";
import { FormProps } from "@/interfaces";
import { validarMatrix, rotateMatrix } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import style from "./MatrixRotation.module.css";

export const Form = ({
  setCurrentMatrix,
  setNewRotatedMatrix,
  setShowResult,
}: FormProps) => {
  const [originalMatrix, setOriginalMatrix] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setShowResult(error.length === 0 && originalMatrix.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, originalMatrix]);

  const isDisabledBtn = error.length === 0 && originalMatrix.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleErrors(value);

    setOriginalMatrix(value.trim());
    setCurrentMatrix(value.trim());
    setNewRotatedMatrix("");
  };

  const handlerClear = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setOriginalMatrix("");
      setCurrentMatrix("");
      setNewRotatedMatrix("");
      setError("");
      setShowResult(false);
    },
    [setCurrentMatrix, setNewRotatedMatrix, setShowResult]
  );

  const handleRotate = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setNewRotatedMatrix(rotateMatrix(originalMatrix));
    },
    [originalMatrix, setNewRotatedMatrix]
  );

  const handleErrors = useCallback((value: string) => {
    const isValidValue: boolean = validarMatrix(value);
    if (!isValidValue) setError("La matriz ingresada es invalida");
    if (isValidValue || value.trim().length === 0) setError("");
  }, []);

  return (
    <section>
      <h2 className="md:text-2xl text-lg font-bold text-gray-700">
        Ingresar Matriz de NxN
      </h2>
      <form className={style.formMatrix} onSubmit={handleRotate}>
        <label htmlFor="matriznxn" className="sr-only">
          Search
        </label>
        <div className="w-full mb-5 lg:w-10/12 lg:mr-2">
          <input
            type="text"
            id="matriznxn"
            aria-label="matrix-input"
            autoComplete="off"
            value={originalMatrix}
            onChange={handleChange}
            className={style.inputMatrix}
            placeholder="Ingresar matriz de NxN: [[1,2],[3,4]]"
          />
          {error && <span className={style.errorMessage}>{error}</span>}
        </div>
        <div className="flex self-start">
          <button
            type="submit"
            disabled={!isDisabledBtn}
            className={style.rotateButton}
            role="rotateButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
              />
            </svg>
            <span className="ml-2">ROTAR</span>
          </button>
          <button
            onClick={handlerClear}
            disabled={!(originalMatrix.length > 0)}
            className={style.clearButton}
            role="clearButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>

            <span className="ml-2">LIMPIAR</span>
          </button>
        </div>
      </form>
    </section>
  );
};
