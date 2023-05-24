import React from "react";
import { useStopwatch } from "react-timer-hook";
import './Timer.css';

export default function Timer() {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false
  });

  return (
      <>
      <div className="TimerSpace">
        <h1 className="TimerHeader">Timer</h1>
        <div className="myTimer">
            <div>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <button className="timerbutton" onClick={start}>Start</button>
            <button className="timerbutton" onClick={pause}>Pause</button>
            <button className="timerbutton" onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
