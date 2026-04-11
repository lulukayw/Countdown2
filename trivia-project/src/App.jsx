import { useState } from "react";
import { getQuestions } from "./api/triviaApi";
import Question from "./components/Question";
import Button from '@mui/material/Button';

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
        <Button variant="contained" onClick={loadQuestions}>
          Start Quiz
        </Button>
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