## URL del proyecto Deployado

- [https://prueba-tecnica-d.vercel.app/](https://prueba-tecnica-d.vercel.app/)

### Consideraciones:

- Tener instalado `node en la versión 20 hacia adelante`

## Levantar el proyecto en local por primera vez

```bash
# instala los paquetes con:
npm install
# levantar el servidor localmente
npm run dev
```

## Ejecución de los test

```bash
# opción 1
npm test
# opción 2
npm run test:watch
```

## Resumen de la prueba técnica.

Se tiene el requerimiento de crear una vista en Next.js con las mejores prácticas tanto en el código como en SEO. En base a ello, se requiere implementar una vista donde se pueda ingresar un array de arrays de números que conformen una matriz de NxN el ingreso de este array que sea dinámico, y se devuelva la misma matriz que represente la imagen, pero rotada en sentido anti-horario (90 grados). Se debe controlar correctamente los errores. Considerar que esta primera versión será la base para que posteriormente otros desarrolladores puedan incluir los demás requerimientos que aún están en definición, por lo que la solución debe garantizar la mantenibilidad y escalamiento.

### casos de prueba

```bash
# Ejemplo 1
Input: [[1,2],[3,4]]
Output: [[2,4],[1,3]]

# Ejemplo 1
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[3,6,9],[2,5,8],[1,4,7]]
```
