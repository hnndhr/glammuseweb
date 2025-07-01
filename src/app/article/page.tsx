"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleContent } from "@/components/blog/ArticleContent";

const Hero = ({
  title,
  backgroundImage,
}: {
  title: string;
  backgroundImage: string;
}) => {
  return (
    <section className="relative w-full h-[250px] flex items-center justify-center">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <h1 className="relative z-10 text-white text-center font-playfair text-[48px] font-semibold leading-[150%] tracking-[1.28px] max-w-[1000px] px-4">
        {title}
      </h1>
    </section>
  );
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header activePage="beautypedia"/>

      <main className="w-full">
        <Hero
          title="What's the Best Skin-Care Routine?"
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/64ccff1e4e3051dbed213384a58a5fc96cb16b06?placeholderIfAbsent=true"
        />
        <ArticleContent />
      </main>

      <Footer />
    </div>
  );
}