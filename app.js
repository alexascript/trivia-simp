// Función para manejar el evento submit del PRIMER formulario
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

// Función para manejar el evento submit del SEGUNDO formulario
function handleQuestion2Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario
  const selectedValue = document.querySelector(
    'input[name="questionTwo"]:checked'
  );

  // Verificar si es la respuesta correcta (valor "a" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "a") {
    alert("¡Respuesta correcta!");
    document.getElementById("question-2-card").style.display = "none";
    document.getElementById("question-3-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}

// Función para manejar el evento submit del TERCER formulario
function handleQuestion3Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario

  const selectedValue = document.querySelector(
    'input[name="questionThree"]:checked'
  );

  // Verificar si es la respuesta correcta (valor "b" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    document.getElementById("question-3-card").style.display = "none";
    document.getElementById("question-4-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}

// Función para manejar el evento submit del CUARTO formulario
function handleQuestion4Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario

  const selectedValue = document.querySelector(
    'input[name="questionFour"]:checked'
  );

  // Verificar si es la respuesta correcta (valor "b" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    document.getElementById("question-4-card").style.display = "none";
    document.getElementById("question-5-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
}

// Función para manejar el evento submit del QUINTO formulario
function handleQuestion5Submit(event) {
  event.preventDefault();

  // Obtener el valor seleccionado por el usuario

  const selectedValue = document.querySelector(
    'input[name="questionFive"]:checked'
  );

  // Verificar si es la respuesta correcta (valor "c" para la respuesta correcta)
  if (selectedValue && selectedValue.value === "c") {
    alert("¡Respuesta correcta!");
    document.getElementById("question-5-card").style.display = "none";
    document.getElementById("question-1-card").style.display = "block"; // debo volver a la pantalla de inicio, corregir
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

document
  .getElementById("question3")
  .addEventListener("submit", handleQuestion3Submit);

document
  .getElementById("question4")
  .addEventListener("submit", handleQuestion4Submit);

document
  .getElementById("question5")
  .addEventListener("submit", handleQuestion5Submit);
