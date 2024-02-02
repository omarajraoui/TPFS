import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  const resetTimer = () => {
    setSeconds(0);
  };

  return (
    <div className="container mx-auto mt-8 text-black">
      <h2 className="text-3xl font-bold mb-4">Timer Component</h2>
      <p>Elapsed Time: {seconds} seconds</p>
      <button onClick={resetTimer} className="bg-blue-500 text-black p-2 rounded mt-2">
        Reset Timer
      </button>
    </div>
  );
};

export default Timer;
