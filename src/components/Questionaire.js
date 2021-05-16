import React, { useState } from "react";

const Button = ({ answer }) => (
  <button class="bg-white p-6 text-indigo-800">{answer}</button>
);

function Questionaire({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  gameEnded,
  data: { question, correct_answer, answers },
}) {
  return (
    <div class="flex flex-col">
      <div class="bg-white text-black-800 p-10 rounded-lg shadow-md text-center">
        <h1
          // dangerouslySetInnerHTML removes the issue with quotation marks coming through as a hex
          dangerouslySetInnerHTML={{ __html: question }}
          class="text-2xl"
        >
          {}
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-6 mt-4">
        {answers.map((answer) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "border-green-500 border-2 bg-white text-green-500"
              : "border-red-500 border-2 bg-white text-red-500"
            : "bg-white";

          return (
            <button
              dangerouslySetInnerHTML={{ __html: answer }}
              className={`${bgColor} "bg-white p-4 text-black-500 rounded"`}
              onClick={() => handleAnswer(answer)}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className="bg-white p-4 text-black-500 rounded ml-auto mt-4"
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default Questionaire;
