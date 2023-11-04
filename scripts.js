document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const resultsContainer = document.getElementById("results-container");
  
    function generateQuiz() {
      for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
  
        const questionContainer = document.createElement("div");
  
        questionContainer.classList.add("question");
  
        questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
  
        for (let j = 0; j < currentQuestion.options.length; j++) {
          const optionElement = document.createElement("input");
  
          optionElement.type = "radio";
  
          optionElement.name = "question" + i;
  
          optionElement.value = currentQuestion.options[j];
  
          optionElement.id = "q" + i + "option" + j;
  
          const labelElement = document.createElement("label");
  
          labelElement.textContent = currentQuestion.options[j];
  
          labelElement.setAttribute("for", "q" + i + "option" + j);
  
          questionContainer.appendChild(optionElement);
          questionContainer.appendChild(labelElement);
        }
        quizContainer.appendChild(questionContainer);
        quizContainer.appendChild(questionContainer);
      }
  
      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      submitButton.addEventListener("click", checkAnswers);
      quizContainer.appendChild(submitButton);
    }
  
    function checkAnswers() {
      for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
  
        const selectedAnswer = document.querySelector(
          'input[name="question' + i + '"]:checked'
        );
  
        if (selectedAnswer) {
          if (selectedAnswer.value === currentQuestion.correctAnswer) {
            resultsContainer.innerHTML += `Question ${i + 1}: Correct! 🎉 <br>`;
          } else {
            resultsContainer.innerHTML += `Question ${
              i + 1
            }: Incorrect! Correct answer: ${
              currentQuestion.correctAnswer
            } 🤔 <br>`;
          }
        } else {
          resultsContainer.innerHTML += `Question ${
            i + 1
          }: Not answered. 🤔 <br>`;
        }
      }
    }
  
    generateQuiz();
  });
  
