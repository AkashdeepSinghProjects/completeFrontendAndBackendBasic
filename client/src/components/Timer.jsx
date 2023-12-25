import { useState, useRef } from "react";

export default function Timer() {
  let clock = useRef();
  const [timer, setTimer] = useState(0);

  function timeUpdate() {
    setTimer((previosTime) => previosTime + 1);
  }

  function startTimer() {
    clock.current = setTimeout(() => setTimer(clock.current), 1000);
    console.log(clock.current);
  }

  return (
    <div className="flex flex-col items-center">
      <p className=" mt-20 text-2xl">{timer}</p>
      <button
        onClick={startTimer}
        className=" mt-5 p-2 rounded bg-amber-700 text-xl hover:bg-amber-800"
      >
        Start
      </button>
    </div>
  );
}
