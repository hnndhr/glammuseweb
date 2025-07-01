"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { SubscriptionSection } from "@/components/profile/SubscriptionSection";
import { Footer } from "@/components/layout/Footer";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function ProfilePage() {
  const router = useRouter();

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "Jasmine",
    lastName: "Khalaera",
    email: "jasminekhala@gmail.com",
    phone: "(+62)81234567890",
  });

  const [currentPlan, setCurrentPlan] = useState("Iconic Plan");

  const handleSignOut = () => {
    console.log("User signed out");
    // TODO: Replace with actual sign-out logic
    router.push("/login");
  };

  const handleUpdateInfo = (newInfo: PersonalInfo) => {
    setPersonalInfo(newInfo);
    console.log("✅ Personal info updated:", newInfo);
    // TODO: Send API request to update user info
  };

  const handleChangePlan = (newPlan: string) => {
    setCurrentPlan(newPlan);
    console.log("✅ Subscription plan changed to:", newPlan);
    // TODO: Send API request to change user's plan
  };

  const handleViewAnalysisDetails = (analysisId: string) => {
    console.log("📊 Viewing analysis details for:", analysisId);
    router.push(`/analysis/${analysisId}`);
    // e.g., navigate to /analysis/123
  };

  const handleSocialClick = (platform: string) => {
    console.log("🔗 Social click:", platform);
    // router.push(`/social/${platform}`); // example
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("🔗 Footer link clicked:", link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignOut={handleSignOut} />

      <main className="flex w-full flex-col pl-[35px] max-md:max-w-full max-md:pl-5">
        <ProfileSection
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/444a845eb8b00ad32b69ad163f55a62b0b1860d7?placeholderIfAbsent=true"
          userName="Jasmine"
          personalInfo={personalInfo}
          onUpdateInfo={handleUpdateInfo}
        />

        <SubscriptionSection
          currentPlan={currentPlan}
          planCost="Rp169.000"
          renewalDate="Dec 25, 2025"
          onChangePlan={handleChangePlan}
          onViewAnalysisDetails={handleViewAnalysisDetails}
        />
      </main>

      <Footer
        onSocialClick={handleSocialClick}
        onLinkClick={handleFooterLinkClick}
      />
    </div>
  );
}
