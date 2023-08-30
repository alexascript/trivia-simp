//Vars to register score and general result

let score = 0;
let totalQuestions = 5;
let currentQuestion = 1;

//Functions to handle submit form submission
function handleQuestionSubmit(
  event,
  correctAnswer,
  correctMessage,
  incorrectMessage
) {
  event.preventDefault();

  const checkedRadioButtonQuery = `input[name="question${currentQuestion}"]:checked`;
  const selectedValue = document.querySelector(checkedRadioButtonQuery);

  if (selectedValue && selectedValue.value === correctAnswer) {
    alert("¡Respuesta correcta!");
    score++;
  } else {
    alert(incorrectMessage);
  }

  document.getElementById(`question-${currentQuestion}-card`).style.display =
    "none";

  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    document.getElementById(`question-${currentQuestion}-card`).style.display =
      "block";
  } else {
    document.getElementById("result-container").style.display = "block";
    document.getElementById(
      "score"
    ).textContent = `Puntaje: ${score} de ${totalQuestions}`;
  }

  printScore();
}

// Show general result
function printScore() {
  document.getElementById(
    "score"
  ).textContent = `Puntaje: ${score} de ${totalQuestions}`;
}

// Get param "name" from URL
const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get("playerName");

// Show greeting in the website
const messageDiv = document.getElementById("player-name-hello");
messageDiv.innerText = ` Hola, ${nombre}.`;

// Add event listeners to the forms

for (let i = 1; i <= totalQuestions; i++) {
  const form = document.getElementById(`question${i}`);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let correctAnswer, correctMessage, incorrectMessage;

    if (i === 1) {
      correctAnswer = "b";
      correctMessage = "Bien hecho!";
      incorrectMessage =
        "Respuesta incorrecta. La respuesta correcta es Mona Simpson.";
    } else if (i === 2) {
      correctAnswer = "a";
      correctMessage = "Respuesta correcta.";

      incorrectMessage =
        "Respuesta incorrecta. La respuesta correcta es Avenida Siempre Viva 142.";
    } else if (i === 3) {
      correctAnswer = "b";
      correctMessage = "De pelos.";
      incorrectMessage =
        "Respuesta incorrecta. La respuesta correcta es Esquimales.";
    } else if (i === 4) {
      correctAnswer = "b";
      correctMessage = "Respuesta correcta.";

      incorrectMessage =
        "Respuesta incorrecta. La respuesta correcta es un dinosaurio.";
    } else if (i === 5) {
      correctAnswer = "c";
      correctMessage = "Correcto";

      incorrectMessage =
        "Respuesta incorrecta. La respuesta correcta es Bola de Nieve.";
    }

    handleQuestionSubmit(
      event,
      correctAnswer,
      correctMessage,
      incorrectMessage
    );
  });
}
