"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfits = [
  {
    top: "https://cdn.builder.io/api/v1/image/assets/TEMP/c933d244993fd7e2081c6cd46230d95dbc157f17?width=454",
    bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/54b68d88160433d660ec01d574fb4dfbcf1188ba?width=568",
    shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f14062a766d0e78af48603aaf764266a3b39d6b?width=396",
  },
  {
    top: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf44a5e84782d2edf358ab8cfd52f51221042cee?width=288",
    shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddf5d0f9741b5291ac06309e1977f237feada65f?width=300",
  },
  {
    top: "https://cdn.builder.io/api/v1/image/assets/TEMP/669c88369c3bececb24fe69da5b0adfc22b07d69?width=378",
    bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/d145a83e9a8fe252058c45c84ebc8d4e419baa3e?width=305",
    shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/d283c3aa5f491cf04370077b956d0f1af53d731f?width=345",
  },
  {
    top: "https://cdn.builder.io/api/v1/image/assets/TEMP/933cf5254a857576223c5c2c36f77fbf1df28034?width=470",
    bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/8380d014af3b7eed82cd46db6faafbfcd1cf8084?width=468",
    shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4ade316f68e5c5c459108b776f4fd5c0704962f?width=446",
  },
  {
    top: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b432204e703139fb04e1c728f245fdf50c35f5?width=460",
    bottom: "https://cdn.builder.io/api/v1/image/assets/TEMP/49e3779a3a25b0cb68dbddba7c8863cd7eeae8a7?width=316",
    shoes: "https://cdn.builder.io/api/v1/image/assets/TEMP/8498aec03a9e43e9307154680d87c2640a01ad4f?width=414",
  },
];

const categories = ["Upper Body", "Lower Body", "Shoes"] as const;
type Category = typeof categories[number];

type PreviewType = {
  top: string;
  bottom: string;
  shoes: string;
};

export default function CapsuleWardrobePage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>("Upper Body");
  const [preview, setPreview] = useState<PreviewType>({
    top: outfits[0].top ?? "",
    bottom: outfits[0].bottom ?? "",
    shoes: outfits[0].shoes ?? "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("savedOutfits");
    if (saved) {
      setSavedOutfits(JSON.parse(saved));
    }
  }, []);

  const [savedOutfits, setSavedOutfits] = useState<PreviewType[]>([]);

  const handleItemClick = (image: string) => {
    if (activeCategory === "Upper Body") {
      setPreview((prev) => ({ ...prev, top: image }));
    } else if (activeCategory === "Lower Body") {
      setPreview((prev) => ({ ...prev, bottom: image }));
    } else if (activeCategory === "Shoes") {
      setPreview((prev) => ({ ...prev, shoes: image }));
    }
  };

  const handleSave = () => {
    const existing = JSON.parse(localStorage.getItem("savedLooks") || "[]");
    const updated = [...existing, preview];
    localStorage.setItem("savedLooks", JSON.stringify(updated));
    alert("Look saved!");
  };

  const handleRemoveItem = (category: Category) => {
    setPreview((prev) => ({
      ...prev,
      ...(category === "Upper Body" && { top: "" }),
      ...(category === "Lower Body" && { bottom: "" }),
      ...(category === "Shoes" && { shoes: "" }),
    }));
  };

  const getItems = () => {
    return outfits
      .map((o) =>
        activeCategory === "Upper Body"
          ? o.top
          : activeCategory === "Lower Body"
          ? o.bottom
          : o.shoes
      )
      .filter((img): img is string => Boolean(img));
  };

  const isDressOnly = preview.top && !preview.bottom;

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
          <h1 className="text-white text-5xl font-normal">Capsule Wardrobe</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-10 py-8 grid grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="flex flex-col items-center justify-center gap-6 border-r pr-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-[160px] h-[160px] rounded-2xl flex items-center justify-center text-center border text-lg font-semibold transition ${
                activeCategory === cat
                  ? "bg-[#3E2E22] text-white"
                  : "bg-white text-[#3E2E22] border-[#3E2E22]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Outfit Items */}
        <div className="col-span-2 grid grid-cols-3 gap-6">
          {getItems().map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => handleItemClick(img)}
            >
              <img
                src={img ?? ""}
                alt={`${activeCategory} ${idx + 1}`}
                className="h-40 object-contain"
              />
              <p className="text-[#3E2E22] text-sm font-medium">{activeCategory}</p>
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="border-l pl-6">
          <h2 className="text-xl font-semibold mb-4 text-center border-b pb-2">Preview</h2>
          <div className="flex flex-col items-center gap-4">
            {preview.top && (
              <div className="flex flex-col items-center">
                <img
                  src={preview.top}
                  alt="Top Preview"
                  className={`object-contain ${isDressOnly ? "h-64" : "h-40"}`}
                />
                <button
                  onClick={() => handleRemoveItem("Upper Body")}
                  className="mt-1 text-xs text-[#C2926D] hover:underline"
                >
                  Remove Upper
                </button>
              </div>
            )}
            {preview.bottom && (
              <div className="flex flex-col items-center">
                <img src={preview.bottom} alt="Bottom Preview" className="h-32 object-contain" />
                <button
                  onClick={() => handleRemoveItem("Lower Body")}
                  className="mt-1 text-xs text-[#C2926D] hover:underline"
                >
                  Remove Lower
                </button>
              </div>
            )}
            {preview.shoes && (
              <div className="flex flex-col items-center mt-2">
                <img
                  src={preview.shoes}
                  alt="Shoes Preview"
                  className={`${!preview.bottom ? "h-20" : "h-24"} object-contain`}
                />
                <button
                  onClick={() => handleRemoveItem("Shoes")}
                  className="mt-1 text-xs text-[#C2926D] hover:underline"
                >
                  Remove Shoes
                </button>
              </div>
            )}
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-6 px-4 py-2 bg-[#3E2E22] text-white rounded-lg mx-auto block"
          >
            Save Look
          </button>

          {/* Back Button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => router.push("/wardrobe")}
              className="px-4 py-2 bg-[#3E2E22] text-white rounded-lg"
            >
              Back to Wardrobe
            </button>
          </div>
        </div>
      </div>

      <Footer onSocialClick={() => {}} onLinkClick={() => {}} />
    </div>
  );
}
