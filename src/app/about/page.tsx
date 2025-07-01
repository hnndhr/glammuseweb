"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutUsPage() {

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="about" />

      <main className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[904px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Bg/wardrobe.png')",
            }}
          />

          {/* Content */}
          <div className="relative z-[2] flex flex-col items-center justify-center h-full px-4">
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
