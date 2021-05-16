import React, { useEffect, useState } from "react";

import Questionaire from "./Questionaire";

const url =
  "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple";

function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const shuffledQuestions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random()),
        }));
        setQuestions(shuffledQuestions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      const newIndex = currentQuestion + 1;

      if (answer === questions[currentQuestion].correct_answer) {
        setScore(score + 1);
      }

      if (newIndex >= questions.length) {
        setGameEnded(true);
      }

      setShowAnswers(true);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);

    setCurrentQuestion(currentQuestion + 1);
  };

  return gameEnded ? (
    <div class="text-5xl text-white">Your score was {score}</div>
  ) : questions.length > 0 ? (
    <div>
      <Questionaire
        data={questions[currentQuestion]}
        showAnswers={showAnswers}
        handleAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion}
        gameEnded={gameEnded}
      />
    </div>
  ) : (
    <h1 class="text-white text-3xl">Loading...</h1>
  );
}

export default Quiz;
