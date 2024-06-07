
import React from 'react';
import './App.css';
import confetti from 'canvas-confetti';

function fireworksAnimation() {
  const duration = 1 * 1000; // Run fireworks for 3 seconds
  const end = Date.now() + duration;

  (function frame() {
    const timeLeft = end - Date.now();

    confetti({
      particleCount: 3,
      angle: 60,
      spread: 40,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 40,
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
  setTimeout(fireworksAnimation, 2000);
}

function birthdayAnimation() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    const timeLeft = end - Date.now();

    confetti({
      particleCount: 5,
      angle: 90,
      spread: 77,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff']
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
}

function App() {
  React.useEffect(() => {
    setTimeout(birthdayAnimation, 3000);
    fireworksAnimation();
  }, []);

  return (
    <div className="App">
      

      <section className="content-section">
        <div className="content">
          <h1>Happy Birthday <br></br>Jeev</h1>
          <img src="./img/cake1.gif" alt="Celebrate" className="responsive-img" />
        </div>
      </section>

      <section className="content-section">
        <div className="content">
          <p>Hi, this is Ajay</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content">
          <h2>Section 3</h2>
          <p>This is some content in section 3.</p>
        </div>
      </section>

      <footer>
        <p>&copy; Pratik_Creations</p>
      </footer>

      <canvas id="fireworksCanvas"></canvas>
    </div>
);

}

export default App;

