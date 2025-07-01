import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ProfileSection } from '@/components/ProfileSection';
import { SubscriptionSection } from '@/components/SubscriptionSection';
import { Footer } from '@/components/Footer';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function Index() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "Jasmine",
    lastName: "Khalaera",
    email: "jasminekhala@gmail.com",
    phone: "(+62)81234567890"
  });

  const handleSignOut = () => {
    console.log('User signed out');
    // Implement sign out logic here
  };

  const handleUpdateInfo = (newInfo: PersonalInfo) => {
    setPersonalInfo(newInfo);
    console.log('Personal info updated:', newInfo);
    // Implement API call to update user info
  };

  const handleChangePlan = (planId: string) => {
    console.log('Plan changed to:', planId);
    // Implement plan change logic here
  };

  const handleViewAnalysisDetails = (analysisId: string) => {
    console.log('Viewing details for:', analysisId);
    // Implement navigation to analysis details
  };

  const handleSocialClick = (platform: string) => {
    console.log('Social media clicked:', platform);
    // Implement social media navigation
  };

  const handleFooterLinkClick = (link: string) => {
    console.log('Footer link clicked:', link);
    // Implement footer link navigation
  };

  return (
    <div className="bg-white pt-[34px]">
      <Header activePage="profile" onSignOut={handleSignOut} />
      
      <main className="flex w-full flex-col pl-[35px] max-md:max-w-full max-md:pl-5">
        <ProfileSection
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/444a845eb8b00ad32b69ad163f55a62b0b1860d7?placeholderIfAbsent=true"
          userName="Jasmine"
          personalInfo={personalInfo}
          onUpdateInfo={handleUpdateInfo}
        />
        
        <SubscriptionSection
          currentPlan="Iconic Plan"
          planCost="Rp169.000"
          renewalDate="Dec 25, 2025"
          onChangePlan={handleChangePlan}
        />
      </main>
      
      <Footer/>
    </div>
  );
}
