"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
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
  const { data: session, status } = useSession();
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [currentPlan, setCurrentPlan] = useState("Iconic Plan");

  // ✅ Fetch user info & plan
  useEffect(() => {
    const fetchUser = async () => {
      if (!session?.user?.email) return;

      try {
        const res = await fetch(
          `/api/user/${encodeURIComponent(session.user.email)}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch user");

        setPersonalInfo({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || "",
        });
        setCurrentPlan(data.subscriptionPlan || "Iconic Plan");
      } catch (error) {
        console.error("❌ Error fetching user:", error);
      }
    };

    if (status === "authenticated") {
      fetchUser();
    }
  }, [session, status]);

  // ✅ Update profile info
  const handleUpdateInfo = async (newInfo: PersonalInfo) => {
    try {
      const res = await fetch(
        `/api/user/${encodeURIComponent(newInfo.email)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newInfo),
        }
      );

      if (!res.ok) throw new Error("Failed to update user info");

      setPersonalInfo(newInfo);
      console.log("✅ Info updated:", newInfo);
    } catch (err) {
      console.error("❌ Failed to update info:", err);
    }
  };

  // ✅ Update subscription plan in DB
  const handleChangePlan = async (newPlan: string) => {
    if (!session?.user?.email) return;

    try {
      const res = await fetch("/api/user/plan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.user.email,
          subscriptionPlan: newPlan,
        }),
      });

      if (!res.ok) throw new Error("Failed to update subscription plan");

      setCurrentPlan(newPlan);
      console.log("✅ Plan updated to:", newPlan);
    } catch (error) {
      console.error("❌ Error updating plan:", error);
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log("🔗 Social click:", platform);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("🔗 Footer link clicked:", link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status !== "authenticated" || !personalInfo) return <p>Unauthorized</p>;

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="profile" />

      <main className="flex w-full flex-col pl-[35px] max-md:max-w-full max-md:pl-5">
        <ProfileSection
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/444a845eb8b00ad32b69ad163f55a62b0b1860d7?placeholderIfAbsent=true"
          userName={personalInfo.firstName}
          personalInfo={personalInfo}
          onUpdateInfo={handleUpdateInfo}
        />

        <SubscriptionSection
          userEmail={personalInfo.email}
          currentPlan={currentPlan}
          planCost={
            currentPlan === "Iconic Plan"
              ? "Rp169.000"
              : currentPlan === "Muse Plan"
              ? "Rp99.000"
              : "FREE"
          }
          renewalDate="Dec 25, 2025"
          onChangePlan={handleChangePlan}
        />
      </main>

      <Footer
        onSocialClick={handleSocialClick}
        onLinkClick={handleFooterLinkClick}
      />
    </div>
  );
}
