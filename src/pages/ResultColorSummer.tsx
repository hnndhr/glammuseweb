import React from "react";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/ResultColor/Summer/Hero';
import ColorPalette, { } from '@/components/ResultColor/Summer/ColorPalette';
import { Footer } from '@/components/Footer';

const ResultColorSummer = () => {
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
              Embrace the Effortless Elegance of Summer
            </h2>

            <div className="space-y-6">
              <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                Cool, calm, and naturally chic—you might be a Summer if soft
                sophistication feels like second nature. This seasonal color
                type is all about embracing gentle, cool-toned shades that
                highlight your graceful glow. Think of serene pastels like dusty
                rose, powder blue, misty lavender, and sage green—colors that
                whisper, never shout.
              </p>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  In fashion
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Summer types shine in light, flowy fabrics and silver accents.
                  Soft-wash denim, icy blue tops, and blush-toned dresses bring
                  out your most radiant self. Go for gentle contrasts and avoid
                  overly bright or saturated colors—they can overpower your
                  delicate undertones.
                </p>
              </div>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  For Makeup
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Reach for cool-toned rose blushes, taupe or mauve eyeshadows,
                  and lip colors in soft pinks or berry tints. Light, natural
                  looks will enhance your features beautifully, giving you that
                  signature Summer softness.
                </p>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black mt-4">
                  Ready to see your most authentic beauty bloom? The Summer
                  palette was made to match your quiet confidence and timeless
                  style. Let your colors speak with calm elegance.
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

export default ResultColorSummer;
