

function obtenerIniciales(nombreCompleto) {
  // Validar que el parámetro sea un string y que no esté vacío tras quitar espacios extremos
  if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '')
     {return 'Entrada inválida'; }

  const iniciles = nombreCompleto
    .trim() // Remueve espacios al inicio y al final
    .split(/\s+/) // Divide el texto por uno o más espacios en blanco
    .map(palabra => palabra[0].toUpperCase()) // Extrae la primera letra y la pasa a mayúscula
    .join('');  // Une todas las iniciales en un solo string
    return iniciles; // 
}

//Pruebas por Consola 

// Llamadas exitosas
console.log(obtenerIniciales("Maria alejandra sarmiento")); // va a mostrar MAS
console.log(obtenerIniciales("  Jazmin Agudelo  ")); // JA
console.log(obtenerIniciales("  Andres David duarte  "));   // ADD (Manejo correcto de múltiples espacios)

// Llamada con error
console.log(obtenerIniciales(""));  // invalido
console.log(obtenerIniciales(123)); // invalido