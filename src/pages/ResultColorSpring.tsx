import React from "react";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/ResultColor/Spring/Hero';
import ColorPalette from '@/components/ResultColor/Spring/ColorPalette';
import { Footer } from '@/components/Footer';

const ResultColorSpring = () => {
  return (
    <div className="bg-white pt-[34px]">
      <Header />

      <div className="mt-8 md:mt-12">
        <HeroSection />
      </div>

      <main className="flex-1 px-6 md:px-12 lg:px-[100px] xl:px-[200px] py-[30px]">
        <div className="flex flex-col gap-9">
          <ColorPalette />

          {/* Divider */}
          <div className="w-full h-px bg-black"></div>

          {/* Text Content */}
          <div className="text-justify max-w-[1040px] mx-auto">
            <h2 className="font-manrope text-xl md:text-2xl lg:text-[30px] font-bold leading-[150%] tracking-[0.6px] text-black mb-6">
              Radiate Fresh Energy with Spring
            </h2>

            <div className="space-y-6">
              <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                Bright, fresh, and full of life—Spring types sparkle with youthful energy and warmth. Your palette is playful and uplifting, featuring clear, warm-toned colors like peach, coral, mint, light turquoise, butter yellow, and warm pinks.
              </p>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  In fashion
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Spring types dazzle in light fabrics, fun prints, and gold-toned accents. Flowy dresses in coral or aqua, soft pastels, and light beige basics make your complexion come alive.
                </p>
              </div>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  For Makeup
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Use apricot blush, soft peach lips, warm brown mascara, and champagne-toned highlighters. Avoid dark or overly muted tones—they can weigh down your bright, airy look.
                </p>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black mt-4">
                 The Spring palette captures your lighthearted charm and joyful spirit. Embrace color that brings out your sparkle and keeps your style blooming.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResultColorSpring;
