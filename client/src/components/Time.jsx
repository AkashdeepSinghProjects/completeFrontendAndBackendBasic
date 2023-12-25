import { useState } from "react";
export default function Time({ ...props }) {
  const date = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(date);
  setTimeout(() => changeTime(), 1000);
  function changeTime() {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  return <h3 {...props}>{currentTime}</h3>;
}
