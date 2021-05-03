import React, { useEffect, useState } from "react";

const url =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

function Quiz(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  console.log(questions);

  return questions.length > 0 ? (
    <div class="bg-white text-indigo-800 p-10 rounded-lg shadow-md">
      <h1
        // dangerouslySetInnerHTML removes the issue with quotation marks coming through as a hex
        dangerouslySetInnerHTML={{ __html: questions[0].question }}
        class="text-2xl"
      >
        {}
      </h1>
      <button class="bg-white w-1/2 p-4">{questions[0].correct_answer}</button>
      <button class="bg-white w-1/2 p-4">
        {questions[0].incorrect_answers[0]}
      </button>
      <button class="bg-white w-1/2 p-4">
        {questions[0].incorrect_answers[1]}
      </button>
      <button class="bg-white w-1/2 p-4">
        {questions[0].incorrect_answers[2]}
      </button>
    </div>
  ) : (
    <h1>hey bro we're loading)</h1>
  );
}

export default Quiz;
