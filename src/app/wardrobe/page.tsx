"use client";

import Image from "next/image";
import { useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface WardrobeCardProps {
  type: "add" | "outfit";
  images?: {
    top?: string;
    bottom?: string;
    shoes?: string;
  };
  onClick?: () => void;
}

const WardrobeCard = ({ type, images, onClick }: WardrobeCardProps) => {
  if (type === "add") {
    return (
      <div
        className="w-full h-[795px] border-2 border-gray-800 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 bg-white relative"
        onClick={onClick}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gray-800 flex items-center justify-center rounded-lg">
            <svg
              width="160"
              height="160"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M107.868 148.134H0.0996094V108.87H107.868V0.683105H147.133V108.87H255.319V148.134H147.133V255.903H107.868V148.134Z"
                fill="#4A3B30"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-[795px] border-2 border-gray-800 shadow-md cursor-pointer hover:shadow-lg bg-white relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 flex flex-col items-center">
        {images?.top && (
          <div className="flex items-center justify-center" style={{ height: "320px" }}>
            <Image
              src={images.top}
              alt="Top"
              width={227}
              height={284}
              className="object-contain"
            />
          </div>
        )}
        {images?.bottom && (
          <div className="flex items-center justify-center" style={{ height: "320px" }}>
            <Image
              src={images.bottom}
              alt="Bottom"
              width={284}
              height={284}
              className="object-contain"
            />
          </div>
        )}
        {images?.shoes && (
          <div className="flex items-center justify-center flex-1">
            <Image
              src={images.shoes}
              alt="Shoes"
              width={198}
              height={132}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function WardrobePage() {
  const outfits = [
    {
      id: 1,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/c933d244993fd7e2081c6cd46230d95dbc157f17?width=454",
        bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/54b68d88160433d660ec01d574fb4dfbcf1188ba?width=568",
        shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f14062a766d0e78af48603aaf764266a3b39d6b?width=396",
      },
    },
    {
      id: 2,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf44a5e84782d2edf358ab8cfd52f51221042cee?width=288",
        shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddf5d0f9741b5291ac06309e1977f237feada65f?width=300",
      },
    },
    {
      id: 3,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/669c88369c3bececb24fe69da5b0adfc22b07d69?width=378",
        bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/d145a83e9a8fe252058c45c84ebc8d4e419baa3e?width=305",
        shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/d283c3aa5f491cf04370077b956d0f1af53d731f?width=345",
      },
    },
    {
      id: 4,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/933cf5254a857576223c5c2c36f77fbf1df28034?width=470",
        bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/8380d014af3b7eed82cd46db6faafbfcd1cf8084?width=468",
        shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4ade316f68e5c5c459108b776f4fd5c0704962f?width=446",
      },
    },
    {
      id: 5,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b432204e703139fb04e1c728f245fdf50c35f5?width=460",
        bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/49e3779a3a25b0cb68dbddba7c8863cd7eeae8a7?width=316",
        shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/8498aec03a9e43e9307154680d87c2640a01ad4f?width=414",
      },
    },
  ];

  const handleAddOutfit = useCallback(() => {
    console.log("Add new outfit");
  }, []);

  const handleOutfitClick = useCallback((id: number) => {
    console.log("Outfit clicked:", id);
  }, []);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social clicked:", platform);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isLoggedIn={true} activePage="wardrobe" onSignOut={handleSignOut} />

      {/* Hero Section */}
      <div className="relative w-full h-[250px] bg-gray-900">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/959fcb73a73144cfb0d19ae1f103975d1f5637dd?width=2880"
          alt="Wardrobe Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-center">
            Wardrobe
          </h1>
        </div>
      </div>

      {/* Outfit Grid */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-[200px] py-5">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 p-5"
          style={{
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            minHeight: "1680px",
          }}
        >
          <WardrobeCard type="add" onClick={handleAddOutfit} />
          {outfits.map((outfit) => (
            <WardrobeCard
              key={outfit.id}
              type="outfit"
              images={outfit.images}
              onClick={() => handleOutfitClick(outfit.id)}
            />
          ))}
        </div>
      </main>

      <Footer
        onSocialClick={handleSocialClick}
        onLinkClick={handleFooterLinkClick}
      />
    </div>
  );
}
