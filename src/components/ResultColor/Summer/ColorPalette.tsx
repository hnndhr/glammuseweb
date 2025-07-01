import React from "react";

const ColorPalette = () => {
  const colors = [
    "#51939F", // summer-1
    "#406B8E", // summer-2
    "#41548E", // summer-3
    "#45418E", // summer-4
    "#5C418E", // summer-5
    "#8A428E", // summer-6
    "#704155", // summer-7
    "#AE606D", // summer-8
  ];

  return (
    <div className="flex flex-col items-center gap-7 px-6 md:px-13 py-8 md:py-12 border border-[rgba(74,59,48,0.7)] rounded-[20px] bg-white shadow-[3px_3px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[1040px] mx-auto">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-hanuman text-2xl md:text-3xl lg:text-[40px] font-normal leading-[150%] text-[#4A3B30]">
          Your True Color Type
        </h2>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-3.5 w-full max-w-[775px] aspect-[775/363]">
        {colors.map((color, index) => (
          <div
            key={index}
            className="rounded-lg h-full min-h-[80px] md:min-h-[120px]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;