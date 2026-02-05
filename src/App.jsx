import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function App() {
  const [dotLottie, setDotLottie] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/tadum.mp3");
    audioRef.current.preload = "auto";
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    const startAutoplay = async () => {
      if (dotLottie && !hasStarted) {
        try {
          await audioRef.current.play().catch(() => {
            console.log("Audio autoplay blocked by browser");
          });
          
          setHasStarted(true);
          
          setTimeout(() => {
            dotLottie.play();
          }, 1100);
        } catch (error) {
          console.error("Autoplay failed:", error);
          setHasStarted(true);
          setTimeout(() => {
            dotLottie.play();
          }, 1100);
        }
      }
    };

    if (dotLottie) {
      startAutoplay();
    }
  }, [dotLottie, hasStarted]);

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

  return (
    <div className="h-dvh w-full overflow-hidden flex justify-center items-center relative bg-black text-white">
      {isFinished ? (
        <Outlet />
      ) : (
        <>
          <DotLottieReact
            src="https://lottie.host/3332de7c-1dc4-4e9d-af5b-f1b308f4a1e2/57Tu14nPEU.lottie"
            dotLottieRefCallback={setDotLottie}
            autoplay={true}
            loop={false}
          />
        </>
      )}
    </div>
  );
}
