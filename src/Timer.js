import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = ({ targetTime }) => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  const handleUnlockClick = () => {
    alert("Advance Happy BirthDay - Wait And Watch");
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  };

  return (
    
    <div className="timer-container">
       <header className="birthday-header">
        <h1>Advance <br></br>Happy Birthday! <br></br>Name</h1>
      </header>
      <div className="timer">
        <h2>Current Time: <span className="time">{formatTime(currentTime)}</span></h2>
        <h2>Open Time: <span className="time">{formatTime(targetTime)}</span></h2>
        <button className="unlock-button" onClick={handleUnlockClick}>Unlock</button>
      </div>
    </div>
  );
};

export default Timer;

