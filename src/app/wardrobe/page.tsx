"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  onDelete?: () => void;
}

interface Look {
  top: string;
  bottom: string;
  shoes: string;
}

const WardrobeCard = ({ type, images, onClick, onDelete }: WardrobeCardProps) => {
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
    className="w-full h-[795px] border-2 border-gray-800 shadow-md cursor-pointer hover:shadow-lg bg-white relative overflow-hidden pt-6 pb-16"
    onClick={onClick}
  >
    <div className="flex flex-col items-center justify-center h-full">
      {images?.top && (
        <div className="mb-2">
          <Image
            src={images.top}
            alt="Top"
            width={200}
            height={300}
            className="object-contain"
          />
        </div>
      )}
      {images?.bottom && (
        <div className="mb-2">
          <Image
            src={images.bottom}
            alt="Bottom"
            width={200}
            height={320}
            className="object-contain"
          />
        </div>
      )}
      {images?.shoes && (
        <div>
          <Image
            src={images.shoes}
            alt="Shoes"
            width={180}
            height={132}
            className="object-contain"
          />
        </div>
      )}
    </div>

    {type === "outfit" && onDelete && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete?.();
        }}
        className="absolute bottom-3 right-3 bg-[#C2926D] text-white text-base px-4 py-2 rounded-md hover:bg-[#a27554] shadow-md"
      >
        Delete
      </button>
    )}
  </div>
  );
};

export default function WardrobePage() {
  const router = useRouter();
  const [savedLooks, setSavedLooks] = useState<Look[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedLooks");
    if (stored) {
      setSavedLooks(JSON.parse(stored));
    }
  }, []);

  const handleAddOutfit = useCallback(() => {
    router.push("/wardrobe/capsule");
  }, [router]);

  const handleDeleteLook = (index: number) => {
    const updatedLooks = [...savedLooks];
    updatedLooks.splice(index, 1); // hapus 1 item di posisi index
    setSavedLooks(updatedLooks);
    localStorage.setItem("savedLooks", JSON.stringify(updatedLooks));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="features" />
      {/* Hero Section */}
      <div className="relative w-full h-[250px] bg-gray-900">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/959fcb73a73144cfb0d19ae1f103975d1f5637dd?width=2880"
          alt="Wardrobe Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
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
          {savedLooks.map((look, index) => (
            <WardrobeCard
              key={index}
              type="outfit"
              images={{
                top: look.top,
                bottom: look.bottom,
                shoes: look.shoes,
              }}
              onDelete={() => handleDeleteLook(index)}
            />
          ))}
        </div>
      </main>

      <Footer
        onSocialClick={() => {}}
        onLinkClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
