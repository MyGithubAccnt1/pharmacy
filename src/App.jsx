import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function App() {
  const [dotLottie, setDotLottie] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio("/tadum.mp3");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // Handle Lottie completion
  useEffect(() => {
    if (dotLottie) {
      const onComplete = () => {
        setIsFinished(true);
      };

      dotLottie.addEventListener("complete", onComplete);

      return () => {
        dotLottie.removeEventListener("complete", onComplete);
      };
    }
  }, [dotLottie]);

  const handleManualStart = async () => {
    if (audioRef.current && dotLottie) {
      try {
        await audioRef.current.play();
        setHasStarted(true);
        setTimeout(() => {
          dotLottie.play();
        }, 1100);
      } catch (error) {
        console.error("Manual play failed:", error);
      }
    }
  };

  return (
    <div className="h-dvh w-full overflow-hidden flex justify-center items-center relative bg-black text-white">
      {isFinished ? (
        <Outlet />
      ) : (
        <>
          {!hasStarted && (
            <div
              className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer"
              onClick={handleManualStart}
            >
              <button className="bg-white text-black p-6 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
          <DotLottieReact
            src="https://lottie.host/0829a14a-9719-4aa6-86f0-3df122be4600/BCo9wBbKlG.lottie"
            dotLottieRefCallback={setDotLottie}
          />
        </>
      )}
    </div>
  );
}
