import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnsweres = useRef();

  if (!shuffledAnsweres.current) {
    shuffledAnsweres.current = [...answers];
    shuffledAnsweres.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnsweres.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (isSelected) {
          if (answerState === "answered") {
            cssClass = "selected";
          } else if (answerState === "correct" || answerState === "wrong") {
            cssClass = answerState;
          }
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
