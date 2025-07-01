interface HeroResultColor {
  title?: string;
  backgroundImage?: string;
  className?: string;
}

export const HeroSection = ({
  title = "Summer",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/7ff2d730c6d19789cf218b9a5817057c43406220?placeholderIfAbsent=true",
  className = ""
}: HeroResultColor) => {
  return (
    <section className={`relative w-full h-[250px] flex items-center justify-center ${className}`}>
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-60"></div>


      <h1 className="relative z-10 text-white text-center font-playfair text-[64px] font-normal leading-[150%] tracking-[1.28px] max-w-[1000px]">
        {title}
      </h1>
    </section>
  );
};