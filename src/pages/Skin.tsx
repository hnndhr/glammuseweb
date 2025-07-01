import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Skin() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleFindYourGlow = () => {
    console.log("Find Your Glow clicked - starting skin type test");
    navigate("/skin-type-quiz");
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
    // Implement social media navigation
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    // Implement footer link navigation
  };

  return (
    <div className="min-h-screen pt-5">
      <Header onSignOut={handleSignOut} />
      <main className="w-full pt-5">
        {/* Hero Section */}
        <div className="relative w-full h-[904px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pt-5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center">
            {/* Top Headline */}
            <h2 className="text-[#FFE3CB] font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[150%] tracking-[1.6px] mb-8">
              Discover Your Skin Type
            </h2>

            {/* Main Title */}
            <h1 className="text-white font-lora text-6xl md:text-7xl lg:text-8xl font-semibold leading-[120%] tracking-[2.2px] mb-12">
              Reveal Your Natural Radiance
            </h1>

            {/* Subtitle */}
            <p className="text-white text-opacity-60 font-manrope text-xl md:text-2xl font-normal leading-[150%] tracking-[0.6px] mb-16 max-w-[1200px] mx-auto">
              Take the Glammuse Skin Type Test and unlock the secrets to your
              unique beauty
            </p>

            {/* CTA Button */}
            <button
              onClick={handleFindYourGlow}
              className="group relative inline-flex items-center justify-center w-[450px] h-[84px] px-9 py-2.5 bg-[#936C4B] border border-[#4A3B30] border-opacity-60 rounded-[40px] transition-all duration-300 hover:bg-[#744B28] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE3CB] focus:ring-opacity-50"
            >
              <span className="text-[#FFE3CB] font-hanuman text-4xl font-bold leading-6 drop-shadow-lg">
                Find Your Glow
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
