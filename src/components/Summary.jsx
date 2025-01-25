import ReactSpoiler from "react-spoiler";
import quizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );

  const skippedAnswersPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;
  return (
    <div id="summary">
      <img src={quizCompleted} alt="Quiz Completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[i].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
              {cssClass.indexOf('correct') == -1 ? <ReactSpoiler><p className='user-answer correct'>{QUESTIONS[i].answers[0]}</p></ReactSpoiler> : ''}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
