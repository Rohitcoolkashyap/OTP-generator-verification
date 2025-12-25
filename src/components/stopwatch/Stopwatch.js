import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div>
      <h2>Time: {seconds}s</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export default Stopwatch;
