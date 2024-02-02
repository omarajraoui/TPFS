import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className='text-black'>
      <h1>Compte à rebours</h1>
      <p>Temps restant : {seconds} secondes</p>
    </div>
  );
};

export default CountdownTimer;
