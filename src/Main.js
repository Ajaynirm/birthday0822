import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import App from './App';
import confetti from 'canvas-confetti';
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

const Main = () => {
    React.useEffect(() => {
        
        fireworksAnimation();
      }, []);

      const [timeExceeded, setTimeExceeded] = useState(false);

      // Set target time to June 7th at 23:00
      const targetTime = new Date(new Date().getFullYear(), 5, 7, 15, 30, 0);
    
      useEffect(() => {
        const checkTime = setInterval(() => {
          if (new Date() >= targetTime) {
            setTimeExceeded(true);
            clearInterval(checkTime);
          }
        }, 1000);
    
        return () => clearInterval(checkTime);
      }, [targetTime]);

  return (
    <div className="Main">
      {!timeExceeded ? <Timer targetTime={targetTime} /> : <App />}
      <canvas id="fireworksCanvas"></canvas>
    </div>
  );
};

export default Main;

