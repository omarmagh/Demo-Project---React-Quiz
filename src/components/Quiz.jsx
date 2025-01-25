import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleted from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const shuffledAnswered = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswered.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={5000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswered.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
