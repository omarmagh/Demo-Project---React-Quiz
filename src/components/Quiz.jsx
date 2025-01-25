import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleted from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
