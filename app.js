//Variables para llevar el registro del puntaje y el resultado general

let score = 0;
let totalQuestions = 5;

// Función para manejar el evento submit del PRIMER formulario
function handleQuestion1Submit(event) {
  event.preventDefault();

  const selectedValue = document.querySelector(
    'input[name="questionOne"]:checked'
  );

  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    score++;

    document.getElementById("question-1-card").style.display = "none";
    document.getElementById("question-2-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. La respuesta correcta es Mona Simpson.");
    document.getElementById("question-1-card").style.display = "none";
    document.getElementById("question-2-card").style.display = "block";
  }

  printScore();
}

// SEGUNDO formulario
function handleQuestion2Submit(event) {
  event.preventDefault();

  const selectedValue = document.querySelector(
    'input[name="questionTwo"]:checked'
  );

  if (selectedValue && selectedValue.value === "a") {
    alert("¡Respuesta correcta!");
    score++;
    document.getElementById("question-2-card").style.display = "none";
    document.getElementById("question-3-card").style.display = "block";
  } else {
    alert(
      "Respuesta incorrecta. La respuesta correcta es Avenida Siempre Viva 142."
    );
    document.getElementById("question-2-card").style.display = "none";
    document.getElementById("question-3-card").style.display = "block";
  }
  printScore();
}

//TERCER formulario
function handleQuestion3Submit(event) {
  event.preventDefault();

  const selectedValue = document.querySelector(
    'input[name="questionThree"]:checked'
  );

  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    score++;
    document.getElementById("question-3-card").style.display = "none";
    document.getElementById("question-4-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. La respuesta correcta es Esquimales.");
    document.getElementById("question-3-card").style.display = "none";
    document.getElementById("question-4-card").style.display = "block";
  }
  printScore();
}

//CUARTO formulario
function handleQuestion4Submit(event) {
  event.preventDefault();

  const selectedValue = document.querySelector(
    'input[name="questionFour"]:checked'
  );

  if (selectedValue && selectedValue.value === "b") {
    alert("¡Respuesta correcta!");
    score++;
    document.getElementById("question-4-card").style.display = "none";
    document.getElementById("question-5-card").style.display = "block";
  } else {
    alert("Respuesta incorrecta. La respuesta correcta es un dinosaurio.");
    document.getElementById("question-4-card").style.display = "none";
    document.getElementById("question-5-card").style.display = "block";
  }
  printScore();
}

// QUINTO formulario
function handleQuestion5Submit(event) {
  event.preventDefault();

  const selectedValue = document.querySelector(
    'input[name="questionFive"]:checked'
  );

  if (selectedValue && selectedValue.value === "c") {
    alert("¡Respuesta correcta!");
    score++;
    document.getElementById("question-5-card").style.display = "none";
  } else {
    alert("Respuesta incorrecta. La respuesta correcta es Bola de Nieve.");
    document.getElementById("question-5-card").style.display = "none";
  }
  printScore();
  document.getElementById("result-container").style.display = "block";
}

// Mostrar el resultado general
function printScore() {
  document.getElementById(
    "score"
  ).textContent = `Puntaje: ${score} de ${totalQuestions}`;
}

// Obtener el parámetro "nombre" de la URL
const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get("playerName");

// Mostrar el saludo en la página
const messageDiv = document.getElementById("player-name-hello");
messageDiv.innerText = ` Hola, ${nombre}.`;

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
