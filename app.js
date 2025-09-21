// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desafío 1: Crear un array para almacenar los nombres
let amigos = [];

// Desafío 2: Implementar función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";
}
