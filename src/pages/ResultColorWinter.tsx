import React from "react";
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/ResultColor/Winter/Hero';
import ColorPalette, { } from '@/components/ResultColor/Winter/ColorPalette';
import { Footer } from '@/components/Footer';

const ResultColorWinter = () => {
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
              Unleash the Bold Power of Winter
            </h2>

            <div className="space-y-6">
              <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                Striking, crisp, and confident—Winter beauties are made to turn heads. This seasonal palette is filled with cool, high-contrast colors that bring drama and definition. Think icy white, jet black, sapphire blue, emerald green, and rich burgundy—bold shades that match your intense elegance.
              </p>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  In fashion
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Winter types own clean lines, statement pieces, and sharp contrasts. Classic black and white combos, jewel-toned dresses, and sleek fabrics are your best friends. Metallics like silver and platinum add an edge that feels right at home.
                </p>
              </div>

              <div>
                <h3 className="font-manrope text-lg md:text-xl lg:text-[30px] font-bold leading-[150%] text-glam-purple mb-4">
                  For Makeup
                </h3>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black">
                  Crisp winged eyeliner, deep berry or red lips, and cool-toned contouring enhance your strong features. Avoid warm or muted colors—they can dull your natural brilliance.
                </p>
                <p className="font-manrope text-base md:text-lg lg:text-xl font-normal leading-[150%] text-black mt-4">
                  You’re not here to blend in. The Winter palette celebrates your cool intensity and bold glamour. Step into your season and let your style speak volumes.
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

export default ResultColorWinter;
