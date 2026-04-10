import { useState } from "react";
import { getQuestions } from "./api/triviaApi";
import Question from "./components/Question";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const loadQuestions = async () => {
    try {
      const qs = await getQuestions();
      setQuestions(qs);
      setIsQuizStarted(true);
    } catch (e) { }
  };

  return (
    <div>
      <h1>Trivia Quiz</h1>

      {!isQuizStarted && (
        <button onClick={loadQuestions}>
          Start Quiz
        </button>
      )}

      {isQuizStarted && questions.length > 0 && (
        <div>
          {questions.map((q, index) => (
            <div key={index}>
              <Question
                question={q}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}