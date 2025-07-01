import { useState } from "react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-medium relative flex-1 bg-glam-medium flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
      <div className="flex-1 px-6 sm:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-12 lg:pb-16 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="font-playfair font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.2] mb-8 lg:mb-12">
            Beauty and Fashion Assistant
          </h1>
          <p className="text-cream font-syne font-semibold text-lg sm:text-xl lg:text-2xl leading-[1.4] tracking-[0.44px] mb-8 lg:mb-12 text-justify max-w-2xl">
            Temukan gaya terbaik versi dirimu! Dengan analisis personal color,
            bentuk tubuh, dan kondisi kulit, kami bantu kamu merancang wardrobe
            yang sempurna — semua dalam satu platform cerdas dan stylish.
          </p>
          <button
            onClick={onGetStarted}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              inline-flex items-center justify-center
              px-6 py-3.5
                bg-primary
                rounded-md
                font-hanuman font-bold text-xl sm:text-2xl text-white
                transition-all duration-200 ease-in-out
                hover:bg-glam-darkest hover:shadow-lg hover:scale-105
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-glam-cream focus:ring-opacity-50
              ${isHovered ? "shadow-lg transform scale-105" : ""}
            `}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center p-6 lg:p-8 lg:pr-12">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b3ea67720fe1c546f0824d58cb459f85435c7c?placeholderIfAbsent=true"
            alt="Beautiful woman showcasing fashion and beauty"
            className="w-full h-auto object-cover rounded-lg shadow-2xl aspect-[569/665]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
