import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutHandle = setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout}/>;
}
