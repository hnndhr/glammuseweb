export const QuoteSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 transform -translate-x-1/2">
          <span className="font-syne font-bold text-glam-darkest text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none opacity-80">
            "
          </span>
        </div>
        <blockquote className="relative z-10 pt-8 sm:pt-12 lg:pt-16">
          <p className="font-syne font-bold text-glam-darkest text-2xl sm:text-3xl lg:text-4xl leading-relaxed tracking-wide">
            Confidence isn't a style. It's the result of knowing what fits you
            best
          </p>
        </blockquote>
      </div>
    </div>
  );
};
