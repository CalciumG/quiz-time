import React, { useEffect, useState } from "react";

import Questionaire from "./Questionaire";

const url =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentQuestion + 1;
    setCurrentQuestion(currentQuestion + 1);

    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setGameEnded(true);
    }
  };

  return gameEnded ? (
    <div>Your score was {score}</div>
  ) : questions.length > 0 ? (
    <div>
      <Questionaire
        data={questions[currentQuestion]}
        handleAnswer={handleAnswer}
      />
    </div>
  ) : (
    <h1>hey bro we're loading)</h1>
  );
}

export default Quiz;
