import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface BodyTypeInfo {
  name: string;
  description: string;
  stylingAdvice: {
    title: string;
    content: string;
    tips: string[];
  };
  clothingCategories: {
    necklines: string;
    shirts: string;
    jackets: string;
    trousers: string;
    skirts: string;
    dresses: string;
  };
}

// Image mapping for body types and clothing categories
const bodyTypeImages: Record<
  string,
  {
    illustration: string;
    necklines: string;
    shirts: string;
    jackets: string;
    trousers: string;
    skirts: string;
    dresses: string;
  }
> = {
  triangle: {
    illustration:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee764f85ac120459fcfb626_Pear%20Body%20Shape%201-p-500.webp",
    necklines:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed928aaf813806da444d1d3_5ed3a2df412d2bf04ab1ddd4_Pear-Body-Shape-Necklines-Dos-and-Donts.webp",
    shirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed928aad30b18743a6bc0de_5ed3a2df3b79977081576454_Pear-Body-Shape-Shirts-Dos-and-Donts.webp",
    jackets:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed928ab461530b09e2d940f_5ed3a2dfa0977fc52c494f78_Pear-Body-Shape-Jackets-Dos-and-Donts.webp",
    trousers:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed9299313326e755ca77fc8_5ed3a2e0ef82aeb98b81a1c0_Pear-Body-Shape-Trousers-Dos-and-Donts.webp",
    skirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed92993fd9f3292005eef99_5ed3a2e0a0977f3058494f79_Pear-Body-Shape-Skirts-Dos-and-Donts.webp",
    dresses:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed929937c2ce8fb59fc5d45_5ed3a2e0a90a9c90931e5175_Pear-Body-Shape-Dresses-Dos-and-Donts.webp",
  },
  hourglass: {
    illustration:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee94418f037264b47738441_Hourglass%20Body%20Shape%201-p-500.webp",
    necklines:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdc1db414c7d475a7d804_5ed3a2e57eda2aedf4cd1124_Hourglass-Necklines-Dos-and-Donts.webp",
    shirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdc1da64212399ddbd9ce_5ed3a2e53b7997522e5764aa_Hourglass-Body-Shape-Shirts-Dos-and-Donts.webp",
    jackets:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdc1e800a2364176cb656_5ed3a2e64b317b6ba07a8ae6_Hourglass-Body-Shape-Jackets-Dos-and-Donts.webp",
    trousers:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdd11800a23e34a6cb9ed_5ed3a2e697a20a1edb8d123a_Hourglass-Body-Shape-Trousers-Dos-and-Donts.webp",
    skirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdd11b414c76ee3a7dd39_5ed3a2e6c6c9786497e0cb2e_Hourglass-Body-Shape-Skirts-Dos-and-Donts.webp",
    dresses:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbdd11bca2fa4f249093bf_5ed3a2e66103a39ca6ec66ac_Hourglass-Body-Shape-Dresses-Dos-and-Donts.webp",
  },
  rectangle: {
    illustration:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee75925921007691cf74eda_Rectangle%20Body%20Shape%201-p-500.webp",
    necklines:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91dbcdc47dae1c14a0f39_Rectangle%20Body%20Shape%20Necklines%20Do%27s%20and%20Don%27ts.webp",
    shirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91ea1a1e0934d78eded61_5ed3a2db4fe81a258ea3c7d1_Rectangle-Body-Shape-Shirts-Dos-and-Donts.webp",
    jackets:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91ea111d714d2296a40e8_5ed3a2db3b79977082576429_Rectangle-Body-Shape-Jackets-Dos-and-Donts.webp",
    trousers:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91f80dc47da64a44a22df_5ed3a2dbc6c9789efde0cb24_Rectangle-Body-Shape-Trousers.webp",
    skirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91f804c1873002c88d83f_5ed3a2dcc6c9787c8de0cb25_Rectangle-Body-Shape-Skirts-Dos-and-Donts.webp",
    dresses:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ed91f807f50a06aa4ef80ab_5ed3a2dc97a20aae9c8d1231_Rectangle-Body-Shape-Dresses-Dos-and-Donts.webp",
  },
  "inverted-triangle": {
    illustration:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee765222dbae8159b56877b_Inverted%20Triangle%20Body%20Shape%201-p-500.webp",
    necklines:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbbfa981168b6d728e895a_5ed3a2e26103a3167cec66a4_Inverted-Triangle-Body-Shape-Neckline-Dos-and-Donts.webp",
    shirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbc03db414c769dba724b8_5ed3a2e2a0977f0ffe494f85_Inverted-Triangle-Body-Shape-Shirts-Dos-and-Donts.webp",
    jackets:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbc091c8019d2ad5f5dd3b_5ed3a2e3412d2b1e1ab1ddd8_Inverted-Triangle-Body-Shape-Jackets-Dos-and-Donts.webp",
    trousers:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbc222b414c7996ba73dc1_5ed3a2e397a20a3fec8d1237_Inverted-Triangle-Body-Shape-Trousers-Dos-and-Donts.webp",
    skirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbc294a642123595db284d_5ed3a2e3c6c978311de0cb2c_Inverted-Triangle-Body-Shape-Skirts-Dos-and-Donts.webp",
    dresses:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbc2b91f30ad69d0c617d2_5ed3a2e397a20a0f498d1239_Inverted-Triangle-Body-Shape-Dresses-Dos-and-Donts.webp",
  },
  // Apple body type images for future use
  apple: {
    illustration:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee9442a0258fa44591cb4bf_Apple%20Body%20Shape%201-p-500.webp",
    necklines:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe06ce93ebb0090407da1_5ed3a2e9ec5df28c32f8f33a_Apple-Body-Shape-Necklines-Dos-and-Donts.webp",
    shirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe06c88219c974da7c3c9_5ed3a2ea412d2b2191b1dddb_Apple-Shirts-Dos-and-Donts.webp",
    jackets:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe06c4bc6a541ee1915ff_5ed3a2ea7eda2a665dcd1125_Apple-Body-Shape-Jackets-Dos-and-Donts.webp",
    trousers:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe1a22f7ba22b3dd1a6d7_5ed3a2ea7eda2adaa5cd1126_Apple-Body-Shape-Trousers-Dos-and-Donts.webp",
    skirts:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe1a24bc6a5e2b2191a38_5ed3a2ea412d2bb215b1ddd9_Apple-Body-Shape-Skirts-Dos-and-Donts.webp",
    dresses:
      "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5edbe1a2c6e427f350a90a69_5ed3a2ebec5df27514f8f33c_Apple-Body-Shape-Dresses-Dos-and-Donts.webp",
  },
};

const bodyTypeData: Record<string, BodyTypeInfo> = {
  hourglass: {
    name: "Hourglass",
    description:
      "You have a classic hourglass figure with balanced bust and hips and a well-defined waist. This is considered the ideal body shape with curves in all the right places. Your measurements show harmonious proportions that create a naturally feminine silhouette.",
    stylingAdvice: {
      title: "How to Style the Hourglass?",
      content:
        "The goal for dressing this shape is to highlight your natural waist and maintain the beautiful balance between your bust and hips.",
      tips: [
        "Highlight your waist - Use belts, fitted tops, and wrap dresses to emphasize your natural waistline",
        "Choose fitted silhouettes - Avoid oversized clothing that hides your curves",
        "Embrace your curves - Select pieces that follow your natural body line without being too tight",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, scoop necks, sweetheart necklines, and wrap styles that complement your balanced proportions",
      shirts:
        "Fitted blouses, wrap tops, peplum styles, and anything that cinches at the waist",
      jackets:
        "Tailored blazers, wrap jackets, cropped styles that hit at the waist, and fitted cardigans",
      trousers:
        "High-waisted pants, straight-leg trousers, bootcut styles, and anything that highlights your waist",
      skirts:
        "Pencil skirts, A-line styles, wrap skirts, and any fitted silhouette that shows your curves",
      dresses:
        "Wrap dresses, fit-and-flare styles, bodycon dresses, and anything with a defined waistline",
    },
  },
  "bottom-hourglass": {
    name: "Bottom Hourglass",
    description:
      "You have a bottom hourglass figure with fuller hips than bust, creating a beautiful pear-like hourglass silhouette with a defined waist. Your curves are elegant and feminine, with a lovely waist definition that creates an attractive silhouette.",
    stylingAdvice: {
      title: "How to Style the Bottom Hourglass?",
      content:
        "The goal for dressing this shape is to balance your fuller bottom half while highlighting your defined waist and adding some volume to your upper body.",
      tips: [
        "Add volume to your upper body - Use patterns, textures, and details on tops to balance your proportions",
        "Highlight your waist - Emphasize your natural waistline with fitted tops and belts",
        "Choose the right bottoms - Select styles that flatter your hip area without adding unnecessary bulk",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, scoop necks, and horizontal stripes on top to add width",
      shirts:
        "Peplum tops, ruffled blouses, embellished tops, and light-colored or patterned upper pieces",
      jackets:
        "Structured blazers with shoulder details, cropped jackets, and styles that end at the waist",
      trousers:
        "Straight-leg pants, bootcut styles, dark colors, and high-waisted designs that smooth your silhouette",
      skirts:
        "A-line skirts, straight skirts in darker colors, and styles that skim over your hips",
      dresses:
        "Fit-and-flare dresses, empire waist styles, and dresses with detailed tops and simple bottoms",
    },
  },
  "top-hourglass": {
    name: "Top Hourglass",
    description:
      "You have a top hourglass figure with a fuller bust than hips, creating an inverted pear-like hourglass silhouette with a defined waist. Your upper body is beautifully proportioned with an attractive waistline that creates feminine curves.",
    stylingAdvice: {
      title: "How to Style the Top Hourglass?",
      content:
        "The goal for dressing this shape is to balance your fuller upper body with your narrower hips while maintaining your beautiful waist definition.",
      tips: [
        "Balance your proportions - Add volume to your lower body to match your fuller bust",
        "Support your bust - Choose well-fitted, supportive undergarments and tops",
        "Highlight your waist - Emphasize your natural waistline to maintain your hourglass shape",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, wrap styles, and scoop necks that flatter your bust without overwhelming your frame",
      shirts:
        "Fitted tops, wrap blouses, and styles that provide good support and shape",
      jackets:
        "Open-front cardigans, long blazers, and styles that create vertical lines",
      trousers:
        "Wide-leg pants, flared styles, light colors, and textured fabrics to add volume",
      skirts:
        "A-line skirts, pleated styles, full skirts, and lighter colors to balance your proportions",
      dresses:
        "A-line dresses, fit-and-flare styles with fuller skirts, and empire waist designs",
    },
  },
  spoon: {
    name: "Spoon",
    description:
      "You have a spoon body shape with fuller hips and a defined waist. Your upper hips are proportionally wider, creating a distinctive curved silhouette. This shape is similar to the pear but with more defined curves and a more pronounced waist.",
    stylingAdvice: {
      title: "How to Style the Spoon?",
      content:
        "The goal for dressing this shape is to balance your fuller lower body while highlighting your waist and adding visual interest to your upper body.",
      tips: [
        "Emphasize your upper body - Use bright colors, patterns, and details on tops to draw attention upward",
        "Define your waist - Choose fitted tops and use belts to highlight your natural waistline",
        "Choose flattering bottoms - Select styles that smooth over your hip area without clinging",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, wide necklines, and horizontal details to broaden shoulders",
      shirts:
        "Peplum tops, embellished blouses, bright patterns, and textured fabrics on top",
      jackets:
        "Structured blazers, cropped styles, and jackets with shoulder details or embellishments",
      trousers:
        "Straight-leg pants, bootcut styles, darker colors, and fabrics that drape well",
      skirts:
        "A-line skirts, straight styles in darker tones, and designs that skim over curves",
      dresses:
        "Fit-and-flare dresses, empire waist styles, and dresses with interesting necklines or sleeve details",
    },
  },
  triangle: {
    name: "Triangle",
    description:
      "You have a triangle (pear) body shape with hips wider than your bust. Your lower body is your most prominent feature, with a smaller upper body. This creates a naturally feminine silhouette that's elegant and graceful.",
    stylingAdvice: {
      title: "How to Style the Triangle?",
      content:
        "The goal for dressing this shape is to balance your proportions by adding visual weight to your upper body while flattering your lower body.",
      tips: [
        "Add volume to your upper body - Use light colors, patterns, and horizontal stripes on tops",
        "Minimize your lower body - Choose darker colors and simpler designs for bottoms",
        "Create shoulder interest - Select tops with details that broaden your shoulder line",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, wide scoop necks, and embellished necklines",
      shirts:
        "Puffed sleeves, ruffled tops, horizontal stripes, and bright or light-colored tops",
      jackets:
        "Structured blazers with shoulder pads, cropped styles, and jackets with lapel details",
      trousers:
        "Straight-leg pants, dark colors, vertical stripes, and smooth fabrics",
      skirts:
        "A-line skirts, straight styles, darker colors, and minimal detailing",
      dresses:
        "Empire waist dresses, A-line styles, and dresses with detailed tops and simple bottoms",
    },
  },
  "inverted-triangle": {
    name: "Inverted Triangle",
    description:
      "The inverted triangle body shape is characterised by broad shoulders and/or bust that narrow down to the hips. This makes the body appear like an inverted triangle shape. The strong shoulders often lend this body shape an athletic-looking physique.",
    stylingAdvice: {
      title: "How to Styling the Inverted Triangle?",
      content:
        "The goal for dressing this shape is to balance the broader shoulders, chest and back with the narrower lower body to create a balanced silhouette.",
      tips: [
        "Soften the shoulder line - Reduce the wide appearance of your shoulders by playing them down and balancing them out with the narrower hips",
        "Create curves around your hips - Add volume and interest to your hips and bottom to make them look curvier and your shoulders smaller",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, scoop necks, soft rounded necklines that don't emphasize shoulder width",
      shirts:
        "Soft draping tops, avoid shoulder details, choose styles that flow away from shoulders",
      jackets:
        "Open-front cardigans, long blazers, avoid structured shoulders or wide lapels",
      trousers:
        "Wide-leg pants, flared styles, light colors, and textured fabrics to add volume",
      skirts:
        "A-line skirts, pleated styles, fuller cuts, and lighter colors to balance proportions",
      dresses:
        "A-line dresses, empire waist styles, and dresses that add volume to the lower body",
    },
  },
  rectangle: {
    name: "Rectangle",
    description:
      "You have a rectangle body shape with similar measurements across bust, waist, and hips. You have a straight, athletic silhouette with minimal waist definition. This body type is often associated with a lean, sporty appearance.",
    stylingAdvice: {
      title: "How to Style the Rectangle?",
      content:
        "The goal for dressing this shape is to create the illusion of curves and define a waistline while maintaining your naturally athletic appearance.",
      tips: [
        "Create a waistline - Use belts, peplum tops, and fitted styles to add definition to your midsection",
        "Add curves - Choose pieces with ruffles, pleats, and other details that create the illusion of curves",
        "Layer strategically - Use layering to add dimension and shape to your silhouette",
      ],
    },
    clothingCategories: {
      necklines:
        "All necklines work well, experiment with different styles to find your favorites",
      shirts:
        "Peplum tops, ruffled blouses, wrap styles, and anything that adds shape to your torso",
      jackets:
        "Belted blazers, cropped styles, peplum jackets, and anything that creates waist definition",
      trousers:
        "Skinny jeans, straight-leg pants, and styles that follow your natural lines",
      skirts:
        "Pencil skirts, pleated styles, mini skirts, and designs that add curves to your silhouette",
      dresses:
        "Sheath dresses, wrap styles, bodycon dresses, and anything that creates shape and definition",
    },
  },
};

export default function BodyTypeResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [bodyType, setBodyType] = useState<string>("");
  const [bodyTypeInfo, setBodyTypeInfo] = useState<BodyTypeInfo | null>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      const normalizedType = type.toLowerCase().replace(/\s+/g, "-");
      setBodyType(type);
      setBodyTypeInfo(bodyTypeData[normalizedType] || null);
    } else {
      navigate("/body-shape");
    }
  }, [searchParams, navigate]);

  const getBodyTypeImages = (bodyTypeName: string) => {
    const normalizedType = bodyTypeName.toLowerCase().replace(/\s+/g, "-");
    return bodyTypeImages[normalizedType];
  };

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetakeQuiz = () => {
    navigate("/body-shape");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!bodyTypeInfo) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-tertiary font-hanuman text-2xl mb-4">
            Loading your results...
          </h2>
          <button
            onClick={() => navigate("/body-shape")}
            className="px-6 py-3 bg-tertiary text-white rounded-lg hover:bg-darkest transition-colors"
          >
            Back to Calculator
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-5">
      <Header onSignOut={handleSignOut} />
      <div className="pt-5 bg-white"></div>

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
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Title */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[150%] tracking-[1.28px]">
            {bodyTypeInfo.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5 px-6 lg:px-[300px]">
        <div className="max-w-[840px] mx-auto">
          {/* Top Description Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            {(() => {
              const images = getBodyTypeImages(bodyType);
              return (
                <img
                  src={
                    images?.illustration ||
                    "https://images.unsplash.com/photo-1594824804732-ca8db5ac6d84?q=80&w=273&auto=format&fit=crop&ixlib=rb-4.1.0"
                  }
                  alt={`${bodyType} body type illustration`}
                  className="w-[273px] h-[407px] object-cover rounded-lg flex-shrink-0"
                />
              );
            })()}
            <div className="flex-1">
              <p className="text-black font-manrope text-xl md:text-2xl font-normal leading-[150%] tracking-[0.48px] text-justify">
                {bodyTypeInfo.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-8"></div>

          {/* Styling Advice Section */}
          <div className="mb-8">
            <h2 className="text-black font-manrope text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.6px] mb-4">
              {bodyTypeInfo.stylingAdvice.title}
            </h2>
            <p className="text-black font-manrope text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px] text-justify mb-6">
              {bodyTypeInfo.stylingAdvice.content}
            </p>
            <div className="space-y-4">
              {bodyTypeInfo.stylingAdvice.tips.map((tip, index) => {
                const [title, description] = tip.split(" - ");
                return (
                  <div key={index}>
                    <h3 className="text-black font-manrope text-xl md:text-2xl font-bold mb-2">
                      {title}
                    </h3>
                    <p className="text-black font-manrope text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px] text-justify">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-8"></div>

          {/* Clothing Categories Section */}
          <div className="mb-8">
            <h2 className="text-black font-manrope text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.6px] mb-8">
              Which Clothing Matches Best?
            </h2>

            <div className="space-y-12">
              {/* Necklines */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Necklines
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.necklines ? (
                    <img
                      src={images.necklines}
                      alt={`${bodyType} Necklines Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.necklines}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Shirts */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Shirts
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.shirts ? (
                    <img
                      src={images.shirts}
                      alt={`${bodyType} Shirts Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.shirts}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Jackets */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Jackets
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.jackets ? (
                    <img
                      src={images.jackets}
                      alt={`${bodyType} Jackets Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.jackets}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Trousers */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Trousers
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.trousers ? (
                    <img
                      src={images.trousers}
                      alt={`${bodyType} Trousers Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.trousers}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Skirts */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Skirts
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.skirts ? (
                    <img
                      src={images.skirts}
                      alt={`${bodyType} Skirts Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.skirts}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Dresses */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Dresses
                </h3>
                {(() => {
                  const images = getBodyTypeImages(bodyType);
                  return images?.dresses ? (
                    <img
                      src={images.dresses}
                      alt={`${bodyType} Dresses Dos and Don'ts`}
                      className="w-full h-auto border-4 border-tertiary/70 rounded-lg object-contain"
                    />
                  ) : (
                    <div className="w-full h-[280px] border-4 border-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                      <p className="text-tertiary font-manrope text-lg text-center px-4">
                        {bodyTypeInfo.clothingCategories.dresses}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={handleRetakeQuiz}
              className="px-8 py-3 bg-tertiary text-white font-manrope text-lg font-normal rounded-lg shadow-md transition-all duration-300 hover:bg-darkest hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cream focus:ring-opacity-50"
            >
              Retake Calculator
            </button>
            <button
              onClick={handleBackToHome}
              className="px-8 py-3 bg-white text-tertiary border-2 border-tertiary font-manrope text-lg font-normal rounded-lg shadow-md transition-all duration-300 hover:bg-cream hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-opacity-50"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer
        onSocialClick={handleSocialClick}
        onLinkClick={handleFooterLinkClick}
      />
    </div>
  );
}
