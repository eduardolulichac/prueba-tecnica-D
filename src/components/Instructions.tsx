export const Instructions = () => {
  return (
    <div className="md:w-1/2  flex flex-col mb-5">
      <h1 className="md:text-5xl text-2xl uppercase font-bold text-gray-700">
        Prueba Técnica
      </h1>
      <h2 className="md:text-2xl text-lg font-bold text-gray-700">
        Rotar matriz en sentido anti-horario (90 grados)
      </h2>
      <div className="text-base text-justify mt-4">
        Se tiene el requerimiento de crear una vista en Next.js con las mejores
        prácticas tanto en el código como en SEO. En base a ello, se requiere
        implementar una vista donde se pueda ingresar un array de arrays de
        números que conformen una matriz de NxN el ingreso de este array que sea
        dinámico, y se devuelva la misma matriz que represente la imagen, pero
        rotada en sentido anti-horario (90 grados). Se debe controlar
        correctamente los errores. Considerar que esta primera versión será la
        base para que posteriormente otros desarrolladores puedan incluir los
        demás requerimientos que aún están en definición, por lo que la solución
        debe garantizar la mantenibilidad y escalamiento.
      </div>
      <div className="text-base text-justify mt-4">
        <h3 className="font-bold">Ejemplo 1</h3>
        <p>
          <span className="font-semibold">Input: </span>
          <span className="font-medium">[[1,2],[3,4]]</span>
        </p>
        <p>
          <span className="font-semibold">Output: </span>
          <span className="font-medium">[[2,4],[1,3]]</span>
        </p>
      </div>
      <div className="text-base text-justify mt-4">
        <h3 className="font-bold">Ejemplo 2</h3>
        <p>
          <span className="font-semibold">Input: </span>
          <span className="font-medium"> [[1,2,3],[4,5,6],[7,8,9]]</span>
        </p>
        <p>
          <span className="font-semibold">Output: </span>
          <span className="font-medium"> [[3,6,9],[2,5,8],[1,4,7]]</span>
        </p>
      </div>
    </div>
  );
};
