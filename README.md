# Interactive Quiz App

![Quiz App](/QuizAppCover.jpg)
[Visit My Project on Netlify](https://nenorvalls-quiz-app.netlify.app/)

This repository contains an interactive quiz implemented in HTML, CSS, and JavaScript. The quiz dynamically generates questions and allows users to submit their answers for evaluation.

## Features

1. **Document Ready Event:**

   - Ensures that the DOM is fully loaded before executing JavaScript code.

2. **Quiz Container and Results Container:**

   - The HTML containers for the quiz and results are identified and stored using `document.getElementById`.

3. **Generate Quiz Function:**

   - The `generateQuiz` function dynamically creates the quiz based on provided questions.
   - Questions and options are iterated through using `for` loops.
   - Stylish question containers are created with appropriate styling.
   - Radio input elements and labels are created for each option.
   - The entire question container is appended to the quiz container.

4. **Submit Button:**

   - A submit button is dynamically created and added to the quiz.
   - The button triggers the `checkAnswers` function when clicked.

5. **Check Answers Function:**

   - The `checkAnswers` function evaluates user responses.
   - It iterates through each question, compares selected answers with correct answers, and provides feedback in the results container.

6. **Initialization:**
   - The `generateQuiz` function is called to initialize and display the quiz when the DOM is ready.

## How to Use

1. Clone the repository.
2. Open the `index.html` file in a web browser.
3. Answer the quiz questions and click the 'Submit' button.
4. View the results in the designated results container.
