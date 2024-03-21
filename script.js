const quizData=[{Question: "What is the capital of India?",
          options: ["Delhi ","Kolkata ","Mumbai"],
          Answer:"Delhi "},

         {Question: "Which is the national bird of India?",
          options: ["Pigeon ","Parrot ","Peacock"],
          Answer: "Peacock "},

         {Question: "Which is the national animal of India?",
          options: ["Lion ","Tiger ","Leopard"],
          Answer: "Tiger "},

         {Question: "Which state was divided from Andhra Pradesh?",
          options: ["Bangalore ","Tamil Nadu ","Telangana"],
          Answer: "Telangana"},

         {Question: "Which is the longest highway in India?",
          options: ["NH-8 ","NH-44 ","NH-48"],
          Answer: "NH-44 "},

         {Question: "What is the jersey colour of Team India?",
          Answer: "Blue"},
                  
         {Question: "What is the powerhouse of a cell?",
          Answer: "Mitochondria"},

         {Question: "How many states are there in India?",
          Answer: "29"},

         {Question: "Who is called the IronMan of India?",
          Answer: "Sardar Vallabhbhai Patel"},

         {Question: "What is the name of green pigment present in a Leaf?",
          Answer: "Chlorophyll"}
        ];
let currentQuestion = 0;
let score=0;
const questionElement = document.getElementById('questions');
const optionsElement = document.getElementById('options');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.Question;
    optionsElement.innerHTML = "";

    if (currentQuizData.options) {
        currentQuizData.options.forEach((option) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            optionsElement.appendChild(label);
        });
    } else {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'userAnswer';
    optionsElement.appendChild(inputField);
    }
}

function nextQuestion() {
    if (quizData[currentQuestion].options) {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].Answer;

    if (userAnswer === correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }
    } else {
    const userAnswer = document.getElementById('userAnswer').value;
    const correctAnswer = quizData[currentQuestion].Answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! The correct answer is: " + correctAnswer);
    }
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
    loadQuestion();
    } else {
    alert("Quiz Completed! You scored "+score+" out of "+quizData.length);
    }
}