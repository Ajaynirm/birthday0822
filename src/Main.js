import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import App from './App';


const Main = () => {
   

      const [timeExceeded, setTimeExceeded] = useState(false);

      // Set target time to June 7th at 23:00
      const targetTime = new Date(new Date().getFullYear(), 5, 7, 23, 59, 59);
    
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
      
    </div>
  );
};

export default Main;

