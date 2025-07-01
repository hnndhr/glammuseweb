import React from "react";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/ResultColor/Autumn/Hero';
import ColorPalette, { } from '@/components/ResultColor/Autumn/ColorPalette';
import { Footer } from '@/components/Footer';

const ResultColorAutumn = () => {
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
              Fall in Love with the Warm Depth of Autumn
            </h2>

            <div className="space-y-6">
              <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                Earthy, rich, and naturally warm—Autumn types glow with grounded elegance. Your perfect shades are deep, warm, and cozy—think burnt orange, olive green, mustard, chocolate brown, and terracotta. These hues enhance your warm undertones and add depth to your overall look.
              </p>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  In fashion
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                   Chunky knits, suede, and gold accessories. Go for earthy prints, deep greens, and rust-toned layers that complement your rich coloring.
                </p>
              </div>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  For Makeup
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Copper eyeshadow, peachy blush, brick or terracotta lipsticks, and golden highlighter bring out your natural glow. Steer clear of cool or icy tones—they can clash with your warmth.
                </p>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black mt-4">
                  The Autumn palette is about comfort, richness, and natural allure. Let it wrap you in color that feels like home.
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

export default ResultColorAutumn;
