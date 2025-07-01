interface HeroResultColor {
  title?: string;
  backgroundImage?: string;
  className?: string;
}

export const HeroSection = ({
  title = "Autumn",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/7ff2d730c6d19789cf218b9a5817057c43406220?placeholderIfAbsent=true",
  className = ""
}: HeroResultColor) => {
  return (
    <section
      className={`self-center z-0 w-full text-[56px] text-white font-bold text-center tracking-[1.28px] leading-[1.2] max-md:max-w-full max-md:text-[36px] ${className}`}
    >
      <div className="relative flex flex-col min-h-[250px] w-full overflow-hidden max-md:mr-0 max-md:max-w-full max-md:text-4xl">
        
        <img
          src={backgroundImage}
          className="absolute h-full w-full object-cover inset-0"
          alt="Autumn background"
        />

        <div className="absolute h-full w-full bg-black bg-opacity-60 inset-0 z-10" />

        <div className="relative z-20 px-16 py-20 w-full max-md:px-5 max-md:max-w-full max-md:text-4xl flex items-center justify-center">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};
