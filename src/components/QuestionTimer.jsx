import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutHandle = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(intervalHandle);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>;
}
