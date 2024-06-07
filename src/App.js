
import React, { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';



function birthdayAnimation() {
  const duration = 5 * 1000; // Run birthday animation for 5 seconds
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
    useEffect(() => {
    setTimeout(birthdayAnimation, 3000); // Start birthday animation after 3 seconds
    
  }, []);
  

  const [imageSrc, setImageSrc] = useState('./img/cake1.gif');
  const [buttonText, setButtonText] = useState('START');
  const [click, setClick] = useState(1); // Initialize click state to 1
  
  const handleButtonClick = () => {
    // Update button text and image source based on click state
    switch (click) {
      case 1:
        setImageSrc('./img/cakeboy.gif');
        setButtonText('Again start');
        break;
        case 2:
        setImageSrc('./img/cake2.gif');
        setButtonText('once more');
        break;
        case 3:
          setImageSrc('./img/cake.gif');
          setButtonText('Blow the candle...');
          break;
      case 4:
        setImageSrc('./img/blow.gif');
        setButtonText('Cut the Cake...');
        break;
        case 5:
        setImageSrc('./img/cut.gif');
        setButtonText('Take a Bite ...');
        break;
        case 6:
        setImageSrc('./img/eat.gif');
        setButtonText('Treatu...');
        break;
        case 7:
          setImageSrc('./img/treat.jpg');
        setButtonText('Thanku...');
        break;
      default:
        // Reset click state and image source to initial values
        setClick(1);
        setImageSrc('./img/cake1.gif');
        setButtonText('START');
    }
  
    // Increment click state
    setClick(prevClick => prevClick + 1);
  
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  
    const audio = document.querySelector('.song');
    audio.play();
  };
 
  


  return (
    <div className="App">
      <section className="content-section">
        <div className="content">
          <h1>welcome to virtual party</h1>
          <h2>Happy Birthday <br />Jeev</h2>
          <img src={imageSrc} alt="Celebrate" className="responsive-img" />
          <audio class="song" controls loop >
        <source src="./img/music.mp3">
        </source>
        Your browser isn't invited for super fun audio time.
    </audio>
          <button className="wish-button" onClick={handleButtonClick}>{buttonText}</button>
          <h6>scroll for more</h6>
        </div>
      </section>

      <section className="content-section">
        <div className="content">
          <p className='message'>WISHING YOU A VERY  HAPPY BIRTHDAY JEEVANA💐💐💐 ... 
YOU ARE SUCH A HUMBLE, CUTE,  AND HONEST PERSON IN THE WORLD...🤩🤩🤩<br></br>
BUT PARTIALLY  INSANE 🤣🤣🤣.
WE WILL BE WEIRD , CRAZY AND STUPID FOREVER....😜😜😜</p>
        </div>
      </section>
        <section className="content-section">
        <div className="content">
          <h1>SCAN PANNUGO</h1>
          <img src="./img/qr1.png" alt="Celebrate" className="responsive-img" />
        </div>
      </section>
      <section className="content-section">
        <div className="content">
          <h1>YOU ARE THE MOON</h1>
          <img src="./img/moon.jpeg" alt="Celebrate" className="responsive-img" />
          <h1>I Don't Know Why 🤣🤣🤣</h1>
        </div>
      </section>
      <section className="content-section">
        <div className="content">
          <h1>Many More Happy Returns Of The Day Muttagose</h1>
          <img src="./img/coup.jpg" alt="Celebrate" className="responsive-img" />
          <h3>Yeppothum Happy ah Irunka 🖤✌️</h3>
       
        </div>
      </section>
      <footer>
        <p>&copy; Pratik_Creations</p>
      </footer>

      
    </div>
  );
}

export default App;

