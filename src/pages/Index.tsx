import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteSection } from "@/components/QuoteSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BeautypediaSection } from "@/components/BeautypediaSections";
import { Footer } from "@/components/Footer";

export default function Index() {
  const handleSignOut = () => {
    console.log("User signed out");
    // Implement sign out logic here
  };

  const handleGetStarted = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTryNow = () => {
    console.log("Try Now clicked - Color Analysis");
    // Implement navigation to color analysis feature
  };

  const handleBlogCardClick = (title: string) => {
    console.log("Blog card clicked:", title);
    // Implement navigation to blog post details
  };

  return (
    <div className="bg-white pt-5">
      <Header activePage="home" onSignOut={handleSignOut} />

      <main className="w-full pt-5">
        <HeroSection onGetStarted={handleGetStarted} />

        <QuoteSection />

        <FeaturesSection onTryNow={handleTryNow} />

        <BeautypediaSection onBlogCardClick={handleBlogCardClick} />
      </main>

      <Footer/>
    </div>
  );
}
