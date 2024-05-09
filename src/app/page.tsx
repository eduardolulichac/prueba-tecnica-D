import { Instructions, MatrixRotation } from "@/components";

export const metadata = {
  title: "Rotación de Matriz",
  description:
    "Ejercició de rotación de matriz en sentido anti horario (-90 grados)",
  keywords: [
    "React",
    "Next",
    "Prueba técnica",
    "matrices",
    "rotación de matriz",
  ],
};

export default function Home() {
  return (
    <div className="m-auto max-w-full p-12">
      <div className="flex flex-col md:flex-row">
        <Instructions />
        <MatrixRotation />
      </div>
    </div>
  );
}
