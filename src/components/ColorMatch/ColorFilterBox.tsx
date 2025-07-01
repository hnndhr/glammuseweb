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
  return (
    <div className="w-full flex flex-col items-start gap-[26px] p-[52px_52px_15px] rounded-[20px] border border-glam-darker-brown border-opacity-70 bg-white shadow-[3px_3px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Top */}
      <div className="w-full flex justify-center items-center">
        <h2 className="text-glam-darker-brown text-center font-hanuman text-[40px] font-normal leading-[150%]">
          Choose Your True Color
        </h2>
      </div>

      {/* Color Palette Display */}
      <div className="relative w-full h-[716px] overflow-hidden rounded-lg">
        {/* Seasonal Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url('${seasonalBackgrounds[currentSeason].bgImage}')`,
          }}
        ></div>

        {/* Color overlay based on season */}
        <div
          className={`absolute inset-0 ${seasonalBackgrounds[currentSeason].palette} opacity-40 mix-blend-overlay`}
        ></div>

        {/* Center circle for face detection */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[224px] h-[265px] rounded-full bg-gray-300 border-4 border-white shadow-lg"></div>
      </div>

      {/* Season Navigation */}
      <div className="w-full flex items-center justify-center gap-[25px]">
        <button
          onClick={onPreviousSeason}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-glam-purple" />
        </button>

        <h3 className="text-glam-darker-brown font-hanuman text-[40px] font-normal leading-[150%] min-w-[200px] text-center">
          {currentSeason}
        </h3>

        <button
          onClick={onNextSeason}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-glam-purple" />
        </button>
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={onSeeDescription}
          className="w-[274px] h-[40px] rounded-[10px] bg-stone-700 text-white font-manrope text-[20px] font-normal leading-[150%] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] hover:bg-opacity-90 transition-all"
        >
          See Description
        </button>
      </div>
    </div>
  );
};

export default ColorFilterBox;
