function obtenerIniciales(nombreCompleto) {
  // 1. Validación: debe ser string y no estar vacío
  if (typeof nombreCompleto!== 'string' || nombreCompleto.trim() === '') 
    { return "Entrada inválida"; }

  // 2. Limpieza, separación y extracción dinámica
  const iniciales = nombreCompleto
   .trim() // elimina espacios al inicio y al final
   .split(/\s+/) // separa por 1 o más espacios (corrige múltiples espacios)
   .map(palabra => palabra[0].toUpperCase()) // toma la primera letra de cada palabra y la pone en mayúscula
   .join(''); // concatena todo

  return iniciales;
}

// --- Pruebas en consola ---

// 3 llamadas exitosas
console.log(obtenerIniciales("ana maria lópez")); // Salida: AML
console.log(obtenerIniciales("Juan Carlos Perez")); // Salida: JCP
console.log(obtenerIniciales(" carlos andres ruiz ")); // Salida: CAR (prueba con múltiples espacios)

// 1 llamada con error
console.log(obtenerIniciales("")); // Salida: Entrada inválida
console.log(obtenerIniciales(12345)); // Salida: Entrada inválida