"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { QuoteSection } from "@/components/landing/QuoteSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { BeautypediaSection } from "@/components/blog/BeautypediaSections";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const router = useRouter();

  const handleSignOut = () => {
    console.log("User signed out");
    router.push("/login"); // Redirect to login page
  };

  const handleGetStarted = () => {
    const target = document.getElementById("features-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTryNow = () => {
    router.push("/color");
  };

  const handleBlogCardClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    router.push(`/article/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignOut={handleSignOut} />

      <main className="w-full">
        <HeroSection onGetStarted={handleGetStarted} />
        <QuoteSection />
        <FeaturesSection onTryNow={handleTryNow} />
        <BeautypediaSection onBlogCardClick={handleBlogCardClick} />
      </main>

      <Footer />
    </div>
  );
}
