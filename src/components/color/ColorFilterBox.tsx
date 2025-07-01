'use client';

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SeasonalBackground {
  bgImage: string;
  palette: string;
}

interface SeasonalBackgrounds {
  [key: string]: SeasonalBackground;
}

interface ColorFilterBoxProps {
  currentSeason: string;
  onPreviousSeason: () => void;
  onNextSeason: () => void;
  onSeeDescription: () => void;
  seasonalBackgrounds: SeasonalBackgrounds;
}

const ColorFilterBox = ({
  currentSeason,
  onPreviousSeason,
  onNextSeason,
  onSeeDescription,
  seasonalBackgrounds,
}: ColorFilterBoxProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Tidak dapat mengakses kamera:", err);
      }
    };

    getCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-[26px] p-[52px] rounded-[20px] border border-glam-darker-brown border-opacity-70 bg-white shadow-md">
      {/* Title */}
      <div className="w-full flex justify-center items-center">
        <h2 className="text-glam-darker-brown text-center font-hanuman text-[40px]">
          Choose Your True Color
        </h2>
      </div>

      {/* Background + Camera */}
      <div className="relative w-full h-[716px] overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url('${seasonalBackgrounds[currentSeason].bgImage}')` }}
        />
        <div
          className={`absolute inset-0 ${seasonalBackgrounds[currentSeason].palette} opacity-40 mix-blend-overlay`}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] max-w-[240px] aspect-[9/11] rounded-full border-4 border-white shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Season Navigator */}
      <div className="w-full flex items-center justify-center gap-[25px]">
        <button onClick={onPreviousSeason} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-glam-purple" />
        </button>
        <h3 className="text-glam-darker-brown font-hanuman text-[40px] text-center min-w-[200px]">
          {currentSeason}
        </h3>
        <button onClick={onNextSeason} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRight className="w-6 h-6 text-glam-purple" />
        </button>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={onSeeDescription}
          className="w-[274px] h-[40px] rounded-[10px] bg-stone-700 text-white text-[20px] hover:bg-opacity-90"
        >
          See Description
        </button>
      </div>
    </div>
  );
};

export default ColorFilterBox;
