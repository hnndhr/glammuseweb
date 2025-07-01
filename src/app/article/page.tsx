"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/landing/Hero";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { Footer } from "@/components/layout/Footer";

export default function ArticlePage() {
  const handleSignOut = () => {
    console.log("User signed out");
  };

  return (
    <div className="bg-white flex flex-col min-h-screen pt-5">
      <Header activePage="home" onSignOut={handleSignOut} />
      <main className="w-full pt-5">
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
