// Función para manejar el evento submit del primer formulario
function handleQuestion1Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario

  const selectedValue = document.querySelector(
    'input[name="questionOne"]:checked'
  );
  // Verificar si es la respuesta correcta (valor "b" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    document.getElementById("question-1-card").style.display = "none";
    document.getElementById("question-2-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}

// Función para manejar el evento submit del segundo formulario
function handleQuestion2Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario
  const selectedValue = document.querySelector(
    'input[name="questionTwo"]:checked'
  );

  // Verificar si es la respuesta correcta (valor "a" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "a") {
    alert("¡Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}

// Agregar event listeners a los formularios
document
  .getElementById("question1")
  .addEventListener("submit", handleQuestion1Submit);

document
  .getElementById("question2")
  .addEventListener("submit", handleQuestion2Submit);
