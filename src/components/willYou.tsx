import jamjamm from '../assets/jamjamm.jpeg'
import { useState } from 'react'

export default function WillYou() {
  const [noCount, setNoCount] = useState(0);
  const [buttonStyle, setButtonStyle] = useState({});
  const [buttonSize, setButtonSize] = useState('w-24');
  const [isVisible, setIsVisible] = useState(true);
  const [showLetter, setShowLetter] = useState(false);

  const loveLetter = `
Jam,

Happy Valentine's Day, my love.

Every day with you feels like a quiet kind of magic—the kind that makes the world softer, warmer, and infinitely more beautiful. From the day we met on our 4th date at the haunted house, I knew there was something about you that I never wanted to let go of. And now, months later, I still find myself falling for you in ways I never expected.

I love the way you laugh, the way you sleep like a little baby and the quiet moments we share when we're watching Manifest or playing games together. You are my comfort, my safe place, and my greatest joy. With you, love isn't just a word—it's something I feel when you're by my side, in the way you're understanding of me, and in the way you giddy up when you're eating your favorite food.

I want to grow old with you, Jam. I want to be by your side through every high and every low, through every adventure and every quiet chill days we have together. Life will throw challenges our way, but as long as I have you, I know we can face anything.

So, here's to us—to the love we have, to the future we're creating, and to a lifetime of holding each other close, no matter what comes our way.

Forever yours,
Bryan`;

  const handleNoClick = () => {
    if (noCount >= 3) {
      setIsVisible(false);
      setNoCount(noCount + 1);
      return;
    }

    const newTop = Math.random() * 80 + 10;
    const newLeft = Math.random() * 80 + 10;
    const newSize = 24 - (noCount * 4);

    setButtonStyle({
      top: `${newTop}%`,
      left: `${newLeft}%`,
      position: 'absolute',
    });
    setButtonSize(`w-${newSize}`);
    setNoCount(noCount + 1);
  };

  return (
    <div className="w-screen h-screen overflow-hidden overscroll-none">
      <div className="relative w-screen h-screen">
        <img src={jamjamm} alt="heart" className="absolute w-screen h-screen object-cover animate-fadeIn"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 animate-fadeIn animation-delay-500"></div>
        {!showLetter ? (
          <div className="relative z-10 w-screen h-screen flex items-center justify-center gap-8 animate-slideUp animation-delay-1000">
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="text-4xl font-bold text-white">Will you be my valentine?</h1>
              <div className="flex flex-row items-center justify-center gap-4">
                <button 
                  className="btn bg-green-500 text-white hover:bg-green-600 w-24 focus:outline-none border-none"
                  onClick={() => setShowLetter(true)}
                >
                  YES !
                </button>
                {isVisible && (
                  <button 
                    className={`btn btn-primary btn-outline ${buttonSize} focus:outline-none transition-all duration-200`}
                    style={buttonStyle}
                    onClick={handleNoClick}
                    data-theme="retro"
                  >
                    NO :(
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 w-screen h-screen flex items-center justify-center p-8 animate-fadeIn">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-2xl overflow-y-auto max-h-[80vh]">
              <pre className="whitespace-pre-wrap font-sans text-lg">
                {loveLetter}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}