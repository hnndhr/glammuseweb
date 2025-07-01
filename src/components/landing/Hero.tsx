"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  backgroundImage: string;
  className?: string;
}

export const Hero = ({ title, backgroundImage, className = "" }: HeroProps) => {
  return (
    <section
      className={`self-center z-0 w-full text-[56px] text-white font-bold text-center tracking-[1.28px] leading-[1.2] max-md:max-w-full max-md:text-[36px] ${className}`}
    >
      <div className="flex flex-col relative min-h-[500px] w-full max-md:max-w-full">
        <Image
          src={backgroundImage}
          alt="Article hero background"
          fill
          className="object-cover z-[-1]"
          priority
        />
        <div className="relative w-full bg-black/50 flex items-center justify-center min-h-[500px] px-[70px] max-md:px-5">
          <h1 className="max-w-4xl">{title}</h1>
        </div>
      </div>
    </section>
  );
};
