import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleFindYourBeauty = () => {
    navigate("/skin-type");
  };

  return (
    <div className="min-h-screen bg-white pt-5">
      <Header activePage="about" onSignOut={handleSignOut} />
        <main className="w-full pt-5">
        {/* Hero Section */}
        <div className="relative w-full h-[904px] bg-glam-medium overflow-hidden">
            {/* Background Image */}
            <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                "url('https://i.pinimg.com/736x/7b/35/df/7b35df0dd5aa7a5508eea4dbce31997d.jpg')",
            }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
            <h1 className="text-white text-center font-aclonica text-[120px] md:text-[150px] lg:text-[180px] font-normal leading-[150%] tracking-[3.6px] mb-8">
                Glammuse
            </h1>
            <p className="text-white text-center font-playfair text-[32px] md:text-[42px] lg:text-[50px] font-normal leading-[150%] tracking-[1px] max-w-[631px]">
                Your Personal Beauty and Fashion Assistant
            </p>
            </div>
        </div>
        </main>

      <Footer />
    </div>
  );
}
