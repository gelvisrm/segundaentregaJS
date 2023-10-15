//Preguntas y respuestas en un array de objetos
const questions = [
    {
        question: "¿Cuál es la capital de Venezuela?",
        options: ["Caracas", "Bogotá", "Lima", "Buenos Aires"],
        answer: "Caracas"
    },
    {
        question: "¿En qué año se firmó la independencia de Venezuela?",
        options: ["1810", "1821", "1830", "1845"],
        answer: "1821"
    },
    {
        question: "¿Quién es el libertador de Venezuela?",
        options: ["Simón Bolívar", "Hugo Chávez", "Fidel Castro", "Juan Guaidó"],
        answer: "Simón Bolívar"
    }
    ];

  // Inicializar variables
let currentQuestionIndex = 0;
let score = 0;

  // Función para mostrar una pregunta
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.getElementById(`option${i + 1}`);
        optionButton.textContent = currentQuestion.options[i];
        optionButton.addEventListener("click", checkAnswer);
    }
}

  // Función para comprobar la respuesta
    function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.answer) {
    score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
    displayQuestion();
    } else {
    endGame();
    }
}

  // Función para terminar el juego
    function endGame() {
    document.getElementById("question-container").innerHTML = `
        <h2>Juego terminado</h2>
        <p>Puntaje: ${score} de ${questions.length}</p>
    `;
}

  // Comenzar el juego mostrando la primera pregunta
displayQuestion();
