"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Feature {
  title: string;
  subtitle: string;
  image: string;
  route: string;
}

interface FeaturesSectionProps {
  onTryNow?: () => void;
}

export const FeaturesSection = ({ onTryNow }: FeaturesSectionProps) => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const router = useRouter();

  const features: Feature[] = [
    {
      title: "COLOR ANALYSIS",
      subtitle: "Discover the shades that make you pop!",
      image:
        "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0",
      route: "/color",
    },
    {
      title: "SKIN ANALYSIS",
      subtitle: "Know your skin. Glow your skin",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0",
      route: "/skin",
    },
    {
      title: "BODY SHAPE ANALYSIS",
      subtitle: "Dress for your shape, not the trend",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      route: "/body",
    },
  ];

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleTryNowClick = (feature: Feature) => {
    onTryNow?.();
    router.push(feature.route);
  };

  return (
    <div id="features-section" className="bg-medium pb-16 lg:pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#241910] via-[#20160F] to-[#17100C] py-12 lg:py-16 mb-16 opacity-75">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-center gap-5">
            <svg
              className="w-16 h-12 lg:w-20 lg:h-16 text-white"
              viewBox="0 0 81 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75.375 56.5314L64.125 46.5183L69.375 41.8455L80.625 51.8586L75.375 56.5314ZM61.875 16.479L56.625 11.8063L67.875 1.79318L73.125 6.46595L61.875 16.479ZM19.125 16.479L7.875 6.46595L13.125 1.79318L24.375 11.8063L19.125 16.479ZM5.625 56.5314L0.375 51.8586L11.625 41.8455L16.875 46.5183L5.625 56.5314ZM28.6875 50.2732L40.5 43.9316L52.3125 50.3567L49.2188 38.341L59.625 30.3305L45.9375 29.2457L40.5 17.8976L35.0625 29.1623L21.375 30.247L31.7812 38.341L28.6875 50.2732ZM17.3438 64.2081L23.4375 40.7608L3 24.9902L30 22.9041L40.5 0.79187L51 22.9041L78 24.9902L57.5625 40.7608L63.6562 64.2081L40.5 51.7752L17.3438 64.2081Z"
                fill="currentColor"
              />
            </svg>
            <h2 id="features-section" className="font-playfair text-white text-5xl lg:text-7xl font-black leading-[150%]">
              Our Features
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button onClick={prevFeature} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-2">
          <ChevronIcon direction="left" />
        </button>

        <button onClick={nextFeature} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-2">
          <ChevronIcon direction="right" />
        </button>

        <div className="overflow-hidden px-8 lg:px-16">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{
              transform: `translateX(-${currentFeatureIndex * (100 / features.length)}%)`,
              width: `${features.length * 100}%`,
            }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `${100 / features.length}%` }}>
                <div className="bg-gradient-to-r from-[#311D12] to-[#8E6751] rounded-3xl mx-auto max-w-5xl">
                  <div className="flex flex-col lg:flex-row items-center h-[617px]">
                    {/* Text */}
                    <div className="flex-1 p-8 lg:p-16 text-center lg:text-left">
                      <h3 className="font-port-lligat text-white text-3xl lg:text-5xl tracking-[2.75px] uppercase mb-4">
                        {feature.title}
                      </h3>
                      <p className="font-inter text-white text-lg lg:text-xl mb-8">
                        {feature.subtitle}
                      </p>
                      <button
                        onClick={() => handleTryNowClick(feature)}
                        className="group inline-flex items-center justify-center px-9 py-3.5 border border-white rounded-full font-hanuman font-bold text-2xl text-white hover:scale-105 transition-all"
                      >
                        Try Now
                      </button>
                    </div>

                    {/* Image */}
                    <div className="flex-1 p-8 lg:p-16 lg:pr-20">
                      <div className="relative w-full aspect-[387/581] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={feature.image}
                          alt={`${feature.title} demonstration`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    className={`w-8 h-12 lg:w-10 lg:h-16 text-glam-tertiary ${direction === "left" ? "rotate-180" : ""}`}
    viewBox="0 0 42 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M27.0484 33.5457L0.881836 7.45455L8.35782 0.00012207L42.0004 33.5457L8.35782 67.0913L0.881836 59.6368L27.0484 33.5457Z"
      fill="currentColor"
    />
  </svg>
);
