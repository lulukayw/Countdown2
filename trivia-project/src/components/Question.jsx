import React, { useState } from "react";

export default function Question({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const allAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ].sort(() => Math.random() - 0.5);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <div className="answers-container">
        {allAnswers.map((answer, index) => (
          <button
            key={index}
            className={`answer-btn ${
              selectedAnswer === answer ? "selected" : ""
            } ${
              selectedAnswer === answer &&
              answer === question.correctAnswer
                ? "correct"
                : ""
            } ${
              selectedAnswer === answer &&
              answer !== question.correctAnswer
                ? "incorrect"
                : ""
            }`}
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
