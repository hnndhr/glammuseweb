import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

interface SkinTypeData {
  title: string;
  heroImage: string;
  resultImage: string;
  description: string;
  characteristics: string;
  tips: {
    title: string;
    items: Array<{
      label: string;
      description: string;
    }>;
  };
}

const skinTypeData: Record<string, SkinTypeData> = {
  normal: {
    title: "Your Skin Type is Normal",
    heroImage:
      "https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    resultImage:
      "https://i.pinimg.com/736x/5b/2d/3b/5b2d3b56a6dd8b3ca98596f61103c1d1.jpg",
    description:
      "Your skin is naturally balanced, which means it's not too oily, not too dry—just beautifully in between. It usually feels smooth and comfortable, and even when it does lean a little dry or a bit shiny, it's easy to manage and gets back to normal in no time.",
    characteristics:
      "Normal skin is characterized by small, barely visible pores, an even tone, and a soft, healthy texture. It doesn't flake like dry skin or feel greasy like oily skin. You're not dealing with breakouts or tightness—your skin just feels... right!",
    tips: {
      title: "💡 Skincare Tips for Normal Skin",
      items: [
        {
          label: "Stick to a gentle routine:",
          description:
            "Cleanse twice a day with a mild, hydrating cleanser to maintain balance.",
        },
        {
          label: "Don't skip moisturizer:",
          description:
            "Even normal skin needs hydration! Choose a lightweight, non-greasy formula to keep your skin supple.",
        },
        {
          label: "Protect with SPF:",
          description:
            "Sunscreen is a must to keep your skin looking youthful and even-toned.",
        },
        {
          label: "Exfoliate weekly:",
          description:
            "A mild exfoliant (1–2 times a week) helps remove dead skin cells and keeps your glow going.",
        },
        {
          label: "Adjust with the seasons:",
          description:
            "Your skin may need a little extra moisture in colder months or lighter products in summer.",
        },
      ],
    },
  },
  dry: {
    title: "Your Skin Type is Dry",
    heroImage:
      "https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    resultImage:
      "https://i.pinimg.com/736x/89/35/97/893597339357a9bfcfcf4f37972b2768.jpg",
    description:
      "Your skin tends to feel tight, rough, or flaky, especially after cleansing. You might notice fine lines more easily, and your skin often feels like it needs extra moisture throughout the day.",
    characteristics:
      "Dry skin typically has small pores, may appear dull or rough, and feels tight or uncomfortable, especially in cold or dry weather. You might experience flaking, itching, or irritation when using harsh products.",
    tips: {
      title: "💡 Skincare Tips for Dry Skin",
      items: [
        {
          label: "Use a gentle, creamy cleanser:",
          description:
            "Avoid harsh foaming cleansers that can strip natural oils. Opt for cream or oil-based cleansers.",
        },
        {
          label: "Layer on the moisture:",
          description:
            "Use a rich, nourishing moisturizer and consider adding a hydrating serum with hyaluronic acid.",
        },
        {
          label: "Limit exfoliation:",
          description:
            "Exfoliate gently only once a week with a mild chemical exfoliant to avoid irritation.",
        },
        {
          label: "Use a humidifier:",
          description:
            "Adding moisture to the air can help prevent your skin from drying out, especially in winter.",
        },
        {
          label: "Choose dewy makeup:",
          description:
            "Opt for hydrating primers and dewy-finish foundations to enhance your natural glow.",
        },
      ],
    },
  },
  oily: {
    title: "Your Skin Type is Oily",
    heroImage:
      "https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    resultImage:
      "https://i.pinimg.com/736x/cd/a7/7c/cda77c9f074b251420ff5a973c612e0d.jpg",
    description:
      "Your skin produces excess sebum, giving you that shiny, greasy appearance especially in the T-zone. While this can be frustrating, the extra oil actually helps prevent premature aging!",
    characteristics:
      "Oily skin is characterized by enlarged pores, a shiny or greasy appearance, and a tendency to develop blackheads, whiteheads, and acne. Your makeup might slide off more easily, but your skin is less prone to wrinkles.",
    tips: {
      title: "💡 Skincare Tips for Oily Skin",
      items: [
        {
          label: "Don't over-cleanse:",
          description:
            "Cleanse twice daily with a gentle foaming cleanser, but avoid over-washing which can increase oil production.",
        },
        {
          label: "Use oil-free moisturizer:",
          description:
            "Yes, oily skin needs moisture too! Choose lightweight, non-comedogenic formulas.",
        },
        {
          label: "Include salicylic acid:",
          description:
            "This beta hydroxy acid helps unclog pores and reduce excess oil production.",
        },
        {
          label: "Blot, don't wipe:",
          description:
            "Use blotting papers throughout the day to absorb excess oil without disturbing your makeup.",
        },
        {
          label: "Choose matte formulas:",
          description:
            "Opt for oil-free, matte-finish foundations and setting powders to control shine.",
        },
      ],
    },
  },
  combination: {
    title: "Your Skin Type is Combination",
    heroImage:
      "https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    resultImage:
      "https://i.pinimg.com/736x/2c/fa/31/2cfa31aa59f0cd3e13d4dd2a6ad5e839.jpg",
    description:
      "You have the best (and sometimes most challenging) of both worlds! Your T-zone tends to be oily with visible pores, while your cheeks and other areas may be normal to dry.",
    characteristics:
      "Combination skin typically shows an oily T-zone (forehead, nose, and chin) with enlarged pores, while the cheeks and eye area remain normal or dry. This can make finding the right products tricky!",
    tips: {
      title: "💡 Skincare Tips for Combination Skin",
      items: [
        {
          label: "Zone-specific care:",
          description:
            "Use different products for different areas—oil control for T-zone, hydration for dry areas.",
        },
        {
          label: "Gentle, balanced cleanser:",
          description:
            "Choose a mild cleanser that won't over-dry your cheeks or under-cleanse your T-zone.",
        },
        {
          label: "Multi-masking:",
          description:
            "Use clay masks on oily areas and hydrating masks on dry areas for targeted treatment.",
        },
        {
          label: "Lightweight layering:",
          description:
            "Use a light moisturizer all over, then add extra hydration to dry areas as needed.",
        },
        {
          label: "Satin-matte makeup:",
          description:
            "Choose products that provide a natural, satin finish—not too matte, not too dewy.",
        },
      ],
    },
  },
};

export default function SkinTypeResults() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get skin type from location state or default to normal
  const skinType = location.state?.skinType || "normal";
  const data = skinTypeData[skinType];

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleRetakeQuiz = () => {
    navigate("/skin-type-quiz");
  };

  const handleBackHome = () => {
    navigate("/");
  };

  if (!data) {
    navigate("/skin-type");
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onSignOut={handleSignOut} />

      {/* Hero Section */}
      <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${data.heroImage}')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Title */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[150%] tracking-[1.28px]">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 px-6 lg:px-48">
        <div className="max-w-6xl mx-auto">
          {/* Result Image */}
          <div className="mb-8">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[20px] border border-[#4A3B30] border-opacity-70 bg-white shadow-lg overflow-hidden">
              <img
                src={data.resultImage}
                alt={`${data.title} skin type`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Text */}
          <div className="space-y-6 text-black font-manrope text-justify">
            {/* Main Title */}
            <h2 className="text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.4px]">
              You Have {data.title} Skin —{" "}
              {data.title === "Normal"
                ? "Lucky You!"
                : `Here's What You Need to Know!`}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px]">
              {data.description}
            </p>

            {/* Characteristics */}
            <p className="text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px]">
              {data.characteristics}
            </p>

            {/* Tips Section */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.4px]">
                {data.tips.title}
              </h3>

              <ul className="space-y-3">
                {data.tips.items.map((tip, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl leading-[150%] tracking-[0.4px]"
                  >
                    <span className="font-bold">{tip.label}</span>{" "}
                    <span className="font-normal">{tip.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={handleRetakeQuiz}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#744B28] text-white font-manrope text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[#623B1C] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE3CB] focus:ring-opacity-50"
              >
                Retake Quiz
              </button>
              <button
                onClick={handleBackHome}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#744B28] border-2 border-[#744B28] font-manrope text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[#744B28] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE3CB] focus:ring-opacity-50"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
