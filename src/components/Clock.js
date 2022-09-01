import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clockState, setClockState] = useState();
  const [dateState, setDateState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
      setDateState(date.toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <>
      <h1 style={{ color: "darkblue" }}>{clockState}</h1>
      <h2>{dateState}</h2>
    </>
  );
};

export default Clock;
