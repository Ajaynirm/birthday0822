import React, { useState, useEffect } from 'react';
import './timer.css';
//import confetti from 'canvas-confetti';
/*
function fireworksAnimation() {
    const duration = 3 * 1000; // Run fireworks for 3 seconds
    const end = Date.now() + duration;
  
    (function frame() {
      const timeLeft = end - Date.now();
  
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
  
      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  
    // Stop the animation after 3 seconds and restart it after 2 seconds
    setTimeout(stopFireworksAnimation, duration + 2000);
  }
  
  function stopFireworksAnimation() {
    setTimeout(fireworksAnimation, 3000);
  }
  */
const Timer = ({ targetTime }) => {
/*
  React.useEffect(() => {
        
    fireworksAnimation();
  }, []);
  */
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
    alert("Advance Happy BirthDay 🥳🥳- Wait And Watch");
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  };

  return (
    
    <div className="timer-container">
       <header className="birthday-header">
        <h1>Advance <br></br>Happy Birthday! <br></br>Jeev</h1>
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

