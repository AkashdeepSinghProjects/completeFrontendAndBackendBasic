import { useState, useRef } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Timer() {
  let clock = useRef();
  const modelRef = useRef();
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const displayTime = (timer / 1000).toFixed(2);

  function startTimer() {
    setIsActive(true);
    clock.current = setInterval(
      () => setTimer((previosTime) => previosTime + 10),
      10
    );
  }
  function stopTimer() {
    setIsActive(false);
    clearInterval(clock.current);
    modelRef.current.open();
  }

  function handleReset() {
    setIsActive(false);
    clearInterval(clock.current);
    setTimer(0);
  }

  return (
    <div className="flex flex-col items-center">
      <Modal timer={displayTime} ref={modelRef} />
      <p className=" mt-20 text-2xl">
        {displayTime} second{displayTime > 1 && "s"}
      </p>
      <div className="flex justify-center">
        <Button onClick={isActive ? stopTimer : startTimer}>
          {isActive ? "Stop" : "Start"}
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
