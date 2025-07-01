import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Measurements {
  bust: string;
  waist: string;
  hip: string;
  highHip: string;
}

export default function BodyShape() {
  const navigate = useNavigate();
  const [measurements, setMeasurements] = useState<Measurements>({
    bust: "",
    waist: "",
    hip: "",
    highHip: "",
  });

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
  };

  const handleInputChange = (field: keyof Measurements, value: string) => {
    setMeasurements((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateBodyType = (): { type: string; description: string } => {
    const bust = parseFloat(measurements.bust);
    const waist = parseFloat(measurements.waist);
    const hip = parseFloat(measurements.hip);
    const highHip = parseFloat(measurements.highHip);

    if (!bust || !waist || !hip || !highHip) {
      return { type: "Invalid", description: "Please enter all measurements" };
    }

    // Convert to inches for calculation (assuming input is in cm)
    const bustInches = bust / 2.54;
    const waistInches = waist / 2.54;
    const hipInches = hip / 2.54;
    const highHipInches = highHip / 2.54;

    // Calculate differences
    const bustMinusHips = bustInches - hipInches;
    const hipsMinusBust = hipInches - bustInches;
    const bustMinusWaist = bustInches - waistInches;
    const hipsMinusWaist = hipInches - waistInches;
    const highHipWaistRatio = highHipInches / waistInches;

    // Apply the exact rules provided

    // Hourglass
    if (
      bustMinusHips <= 1 &&
      hipsMinusBust < 3.6 &&
      (bustMinusWaist >= 9 || hipsMinusWaist >= 10)
    ) {
      return {
        type: "Hourglass",
        description:
          "You have a classic hourglass figure with balanced bust and hips and a well-defined waist. This is considered the ideal body shape with curves in all the right places.",
      };
    }

    // Bottom hourglass
    if (
      hipsMinusBust >= 3.6 &&
      hipsMinusBust < 10 &&
      hipsMinusWaist >= 9 &&
      highHipWaistRatio < 1.193
    ) {
      return {
        type: "Bottom Hourglass",
        description:
          "You have a bottom hourglass figure with fuller hips than bust, creating a beautiful pear-like hourglass silhouette with a defined waist.",
      };
    }

    // Top hourglass
    if (bustMinusHips > 1 && bustMinusHips < 10 && bustMinusWaist >= 9) {
      return {
        type: "Top Hourglass",
        description:
          "You have a top hourglass figure with a fuller bust than hips, creating an inverted pear-like hourglass silhouette with a defined waist.",
      };
    }

    // Spoon
    if (
      hipsMinusBust > 2 &&
      hipsMinusWaist >= 7 &&
      highHipWaistRatio >= 1.193
    ) {
      return {
        type: "Spoon",
        description:
          "You have a spoon body shape with fuller hips and a defined waist. Your upper hips are proportionally wider, creating a distinctive curved silhouette.",
      };
    }

    // Triangle (Pear)
    if (hipsMinusBust >= 3.6 && hipsMinusWaist < 9) {
      return {
        type: "Triangle",
        description:
          "You have a triangle (pear) body shape with hips wider than your bust. Your lower body is your most prominent feature, with a smaller upper body.",
      };
    }

    // Inverted triangle
    if (bustMinusHips >= 3.6 && bustMinusWaist < 9) {
      return {
        type: "Inverted Triangle",
        description:
          "You have an inverted triangle body shape with broader shoulders and bust than hips. Your upper body is your most prominent feature.",
      };
    }

    // Rectangle
    if (
      hipsMinusBust < 3.6 &&
      bustMinusHips < 3.6 &&
      bustMinusWaist < 9 &&
      hipsMinusWaist < 10
    ) {
      return {
        type: "Rectangle",
        description:
          "You have a rectangle body shape with similar measurements across bust, waist, and hips. You have a straight, athletic silhouette with minimal waist definition.",
      };
    }

    // Fallback (should not reach here with proper measurements)
    return {
      type: "Rectangle",
      description:
        "Based on your measurements, you have a rectangle body shape with balanced proportions throughout your torso.",
    };
  };

  const handleCalculate = () => {
    const bodyType = calculateBodyType();
    if (bodyType.type !== "Invalid") {
      navigate(`/body-type-results?type=${encodeURIComponent(bodyType.type)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignOut={handleSignOut} />

      {/* Hero Section */}
      <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/04/9a/13/049a138906420e68cc3ad6c3a0b293c9.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Title */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[150%] tracking-[1.28px]">
            Body Type Calculator
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-6 lg:px-[300px]">
        <div className="max-w-6xl mx-auto">
          {/* Calculator Form */}
          <div className="w-full max-w-[844px] mx-auto mb-8 p-[52px] border border-glam-tertiary/70 rounded-[20px] bg-white shadow-lg">
            {/* Form Header */}
            <div className="text-center mb-6">
              <h2 className="text-glam-tertiary font-hanuman text-[40px] font-normal leading-[150%]">
                Find Out Your Body Type
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Form Fields */}
              <div className="flex-1 space-y-6">
                {/* Bust Size */}
                <div className="w-full max-w-[274px]">
                  <label className="block text-glam-tertiary font-manrope text-[20px] font-normal leading-[150%] mb-2">
                    Bust Size
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={measurements.bust}
                      onChange={(e) =>
                        handleInputChange("bust", e.target.value)
                      }
                      placeholder="Bust Size"
                      className="flex-1 h-[40px] px-2 border border-black/25 rounded-[10px] bg-white shadow-md font-manrope text-[20px] text-glam-secondary/50 focus:outline-none focus:ring-2 focus:ring-glam-primary focus:text-glam-tertiary"
                    />
                    <div className="w-[39px] h-[40px] flex items-center justify-center bg-white border border-black/25 rounded-[10px] shadow-md">
                      <span className="text-glam-secondary font-manrope text-[20px]">
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Waist Size */}
                <div className="w-full max-w-[274px]">
                  <label className="block text-glam-tertiary font-manrope text-[20px] font-normal leading-[150%] mb-2">
                    Waist Size
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={measurements.waist}
                      onChange={(e) =>
                        handleInputChange("waist", e.target.value)
                      }
                      placeholder="Waist Size"
                      className="flex-1 h-[40px] px-2 border border-black/25 rounded-[10px] bg-white shadow-md font-manrope text-[20px] text-glam-secondary/50 focus:outline-none focus:ring-2 focus:ring-glam-primary focus:text-glam-tertiary"
                    />
                    <div className="w-[39px] h-[40px] flex items-center justify-center bg-white border border-black/25 rounded-[10px] shadow-md">
                      <span className="text-glam-secondary font-manrope text-[20px]">
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hip Size */}
                <div className="w-full max-w-[274px]">
                  <label className="block text-glam-tertiary font-manrope text-[20px] font-normal leading-[150%] mb-2">
                    Hip Size
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={measurements.hip}
                      onChange={(e) => handleInputChange("hip", e.target.value)}
                      placeholder="Hip Size"
                      className="flex-1 h-[40px] px-2 border border-black/25 rounded-[10px] bg-white shadow-md font-manrope text-[20px] text-glam-secondary/50 focus:outline-none focus:ring-2 focus:ring-glam-primary focus:text-glam-tertiary"
                    />
                    <div className="w-[39px] h-[40px] flex items-center justify-center bg-white border border-black/25 rounded-[10px] shadow-md">
                      <span className="text-glam-secondary font-manrope text-[20px]">
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                {/* High Hip Size */}
                <div className="w-full max-w-[274px]">
                  <label className="block text-glam-tertiary font-manrope text-[20px] font-normal leading-[150%] mb-2">
                    High Hip Size
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={measurements.highHip}
                      onChange={(e) =>
                        handleInputChange("highHip", e.target.value)
                      }
                      placeholder="High Hip Size"
                      className="flex-1 h-[40px] px-2 border border-black/25 rounded-[10px] bg-white shadow-md font-manrope text-[20px] text-glam-secondary/50 focus:outline-none focus:ring-2 focus:ring-glam-primary focus:text-glam-tertiary"
                    />
                    <div className="w-[39px] h-[40px] flex items-center justify-center bg-white border border-black/25 rounded-[10px] shadow-md">
                      <span className="text-glam-secondary font-manrope text-[20px]">
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={handleCalculate}
                  className="w-full max-w-[274px] h-[40px] bg-tertiary text-white font-manrope text-[20px] font-normal rounded-[10px] shadow-md transition-all duration-300 hover:bg-glam-darkest hover:scale-105 focus:outline-none focus:ring-2 focus:ring-glam-cream focus:ring-opacity-50"
                >
                  Calculate
                </button>
              </div>

              {/* Body Diagram */}
              <div className="flex-shrink-0">
                <img
                  src="https://teranicouture.com/wp-content/uploads/unnamed-3-1.jpg"
                  alt="Body measurement diagram"
                  className="w-[326px] h-[381px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-8"></div>

          {/* Instructions Section */}
          <div className="text-black font-manrope text-[20px] font-normal leading-[150%] tracking-[0.4px] text-justify space-y-6">
            <div>
              <h3 className="text-black font-manrope text-[24px] font-bold mb-4">
                How to Take Measurements for Accurate Body Shape?
              </h3>
              <p className="mb-4">
                Confidence begins with the right fit. Accurate body measurements
                help you discover styles that flatter your unique shape—whether
                you're styling virtually or in person.
              </p>
              <p className="mb-6">
                Follow the steps below to find your perfect silhouette:
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-black font-manrope text-[24px] font-bold mb-2">
                  Bust Measurement:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Wrap a flexible measuring tape around the fullest part of
                    your bust or chest.
                  </li>
                  <li>
                    Ensure that the tape is level and snug but not too tight.
                  </li>
                  <li>Record the measurement in centimeters.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-manrope text-[24px] font-bold mb-2">
                  Waist Measurement:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Locate the narrowest part of your waist.</li>
                  <li>
                    Ensure that the tape is level and snug but not too tight.
                  </li>
                  <li>Take note of the measurement.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-manrope text-[24px] font-bold mb-2">
                  Hip Measurement:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Find the fullest part of your hips and buttocks.</li>
                  <li>
                    Wrap the tape around this area, ensuring it is level and not
                    too tight.
                  </li>
                  <li>Record the measurement accurately.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-black font-manrope text-[24px] font-bold mb-2">
                  High Hip Measurement:
                </h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Find the area around your hip bones, slightly above your
                    natural waistline.
                  </li>
                  <li>
                    Wrap the tape around this area, ensuring it is level and not
                    too tight.
                  </li>
                  <li>Record the measurement accurately.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
