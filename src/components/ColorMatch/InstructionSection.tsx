import React from "react";

const InstructionSection = () => {
  return (
    <div className="w-full max-w-none">
      {/* Main Title */}
      <h3 className="text-black font-manrope text-[24px] font-bold leading-[150%] mb-8">
        How to Use the Color Match Filter Box Effectively
      </h3>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px] text-justify mb-6">
          Confidence begins with the right tones. Choosing the right personal
          color filter helps highlight your natural beauty—whether you're trying
          on outfits or selecting makeup shades. The filter box above offers
          four seasonal palettes: Summer, Winter, Autumn, and Spring, each
          representing unique color characteristics tailored to your skin
          undertone.
        </p>

        <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px] text-justify">
          Follow the steps below to find your ideal match:
        </p>
      </div>

      {/* Instructions Grid */}
      <div className="grid gap-8">
        {/* Step 1 */}
        <div className="bg-gradient-to-r from-glam-cream/10 to-transparent p-6 rounded-lg border-l-4 border-glam-brown">
          <h4 className="text-glam-darker-brown font-manrope text-[24px] font-bold leading-[150%] mb-4 flex items-center gap-3">
            <span className="bg-glam-brown text-white w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold">
              1
            </span>
            Use Natural Lighting
          </h4>
          <div className="space-y-3 ml-11">
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Stand in front of a window or in a space with soft, natural
                daylight.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Avoid harsh artificial lighting or colored lights that may alter
                how the filter appears on your skin.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-r from-glam-cream/10 to-transparent p-6 rounded-lg border-l-4 border-glam-brown">
          <h4 className="text-glam-darker-brown font-manrope text-[24px] font-bold leading-[150%] mb-4 flex items-center gap-3">
            <span className="bg-glam-brown text-white w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold">
              2
            </span>
            Make Sure Your Face is Clearly Visible
          </h4>
          <div className="space-y-3 ml-11">
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Remove anything that may block your face, such as masks, hats,
                or heavy bangs.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Tie your hair back if needed, especially if it shadows your
                face.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-r from-glam-cream/10 to-transparent p-6 rounded-lg border-l-4 border-glam-brown">
          <h4 className="text-glam-darker-brown font-manrope text-[24px] font-bold leading-[150%] mb-4 flex items-center gap-3">
            <span className="bg-glam-brown text-white w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold">
              3
            </span>
            Clean Face or Minimal Makeup Recommended
          </h4>
          <div className="space-y-3 ml-11">
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                For the most accurate result, use the filter with a clean face
                or minimal makeup.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Bold lipsticks or strong blush may interfere with how the filter
                adjusts to your natural tone.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-gradient-to-r from-glam-cream/10 to-transparent p-6 rounded-lg border-l-4 border-glam-brown">
          <h4 className="text-glam-darker-brown font-manrope text-[24px] font-bold leading-[150%] mb-4 flex items-center gap-3">
            <span className="bg-glam-brown text-white w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold">
              4
            </span>
            Click Through Each Seasonal Filter
          </h4>
          <div className="space-y-3 ml-11">
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Click through each seasonal filter.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                Notice how each palette affects your skin tone, eye color, and
                hair.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-glam-brown text-[20px] mt-1">•</span>
              <p className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px]">
                The right filter will brighten your features and make you look
                naturally radiant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionSection;