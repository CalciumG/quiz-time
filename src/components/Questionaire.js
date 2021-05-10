import React from "react";

const Button = ({ answer }) => (
  <button class="bg-white p-6 text-indigo-800">{answer}</button>
);

function Questionaire({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) {
  const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div class="container">
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
        {shuffleAnswers.map((answer) => (
          <button
            dangerouslySetInnerHTML={{ __html: answer }}
            class="bg-white p-4 text-black-500 rounded"
            onClick={() => handleAnswer(answer)}
          />
        ))}
      </div>
    </div>
  );
}

export default Questionaire;
