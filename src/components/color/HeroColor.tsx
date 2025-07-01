import React from "react";

const HeroColor = () => {
  return (
    <section className="relative w-full h-[250px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/25fcaa921a5f1ec4b02023896ce1f34489f9f51b?placeholderIfAbsent=true')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Title */}
      <h1 className="relative z-10 text-white text-center font-playfair text-[64px] font-normal leading-[150%] tracking-[1.28px] max-w-[1000px]">
        Personal Color Match
      </h1>
    </section>
  );
};

export default HeroColor;
