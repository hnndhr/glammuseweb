import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";

interface SkinTypeOption {
  id: string;
  description: string;
  imageUrl: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: SkinTypeOption[];
}

export default function SkinTypeQuiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Sentuh kulit muka kita yuk!\nWhat do you feel?",
      options: [
        {
          id: "normal",
          description:
            "Kulit terasa lembut, halus, tidak ada yang mengelupas, dan tidak terlalu berminyak",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "dry",
          description:
            "Kulit terasa kering, tertarik, terlihat kering, dan kusam",
          imageUrl:
            "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "oily",
          description: "Kulit terasa berminyak, licin, dan terlihat mengkilap",
          imageUrl:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "combination",
          description: "Mengkilap di T-Zone dan kering di area lainnya",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 2,
      question:
        "Apa masalah kulit yang paling sering kamu alami dalam 1 bulan terakhir?",
      options: [
        {
          id: "stable",
          description: "Kulitku cukup stabil, tidak ada masalah yang berarti",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "dry-peeling",
          description:
            "Kulit sering terasa kering dan ketarik, kadang juga mengelupas",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "acne-prone",
          description: "Sering muncul jerawat di area-area wajah",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664391616054-1671f1b7f75d?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "red-acne",
          description:
            "Kulit sering kemerahan dan berjerawat di waktu bersamaan",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 3,
      question:
        "Mana yang paling mendeskripsikan tampilan pori-pori di wajahmu?",
      options: [
        {
          id: "small-moderate",
          description: "Pori-pori terlihat kecil hingga sedang, cukup merata",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "very-small",
          description: "Pori-pori sangat kecil, bahkan hampir tidak terlihat",
          imageUrl:
            "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "large-visible",
          description:
            "Pori-pori besar dan terlihat jelas di hampir seluruh wajah",
          imageUrl:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "tzone-large",
          description:
            "Pori-pori besar hanya di T-zone, tapi kecil di bagian lain",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 4,
      question: "Kapan biasanya kulit wajahmu muncul kemerahan?",
      options: [
        {
          id: "sun-exposure",
          description: "Hanya saat terpapa sinar matahari secara langsung",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "washing-no-moisturizer",
          description:
            "Setiap kali mencuci muka atau saat tidak menggunakan pelembap",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "acne-hormonal",
          description: "Setiap ada jerawat atau masalah hormonal",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664391616054-1671f1b7f75d?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "new-products",
          description: "Saat tidak cocok menggunakan produk skincare baru",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 5,
      question: "Seberapa mengkilap wajahmu di sore hari?",
      options: [
        {
          id: "moderate-shine",
          description: "Tidak terlalu mengkilap, tapi juga tidak tampak kusam",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "dull-tight",
          description: "Kulit lebih terlihat kusam dan kadang terasa perih",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "very-oily",
          description: "Wajah sangat mengkilap dan berminyak di semua bagian",
          imageUrl:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "tzone-only",
          description:
            "Hanya pada T-zone yang mengkilap, area lainnya tetap normal",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 6,
      question:
        "Hanya ada 1 produk untuk touch up\nApa produk yang akan kamu pilih?",
      options: [
        {
          id: "face-mist",
          description: "Face mist untuk menyegarkan dan melembapkan kulit",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "moisturizer",
          description: "Moisturizer karena kulitku mudah kering saat siang",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "blotting-paper",
          description:
            "Blotting paper buat menyerap minyak tanpa harus hapus makeup",
          imageUrl:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "loose-powder",
          description: "Loose powder supaya wajah tetap kelihatan matte",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
    {
      id: 7,
      question: "Apa makeup finish yang kamu suka?",
      options: [
        {
          id: "semi-matte",
          description: "Semi-matte, natural tapi nggak terlalu mengkilap",
          imageUrl:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "dewy",
          description: "Dewy, bikin kulit terlihat sehat dan glowing",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "matte",
          description: "Matte, biar wajah terlihat halus dan tidak berminyak",
          imageUrl:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
          id: "satin-matte",
          description: "Satin-matte, sedikit glowwing tapi tetap elegan",
          imageUrl:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
      ],
    },
  ];

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const determineSkinType = (answers: { [key: number]: string }): string => {
    // Determine skin type based on question 7 (makeup finish preference)
    const makeupFinishAnswer = answers[7];

    switch (makeupFinishAnswer) {
      case "semi-matte":
        return "normal";
      case "dewy":
        return "dry";
      case "matte":
        return "oily";
      case "satin-matte":
        return "combination";
      default:
        return "normal"; // fallback
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(
        answers[quizQuestions[currentQuestionIndex + 1].id] || null,
      );
    } else {
      // All questions completed, determine skin type and navigate to results
      const skinType = determineSkinType(answers);
      console.log("Quiz completed:", answers, "Skin type:", skinType);
      navigate("/skin-type-results", { state: { skinType, answers } });
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(
        answers[quizQuestions[currentQuestionIndex - 1].id] || null,
      );
    } else {
      navigate("/skin-type-quiz");
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
              "url('https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Title */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-[150%] tracking-[1.28px]">
            Skin Type Test
          </h1>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="py-12 lg:py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Question */}
          <div className="text-center mb-12">
            <h2 className="text-black font-lora text-3xl md:text-4xl lg:text-5xl font-semibold leading-[130%] tracking-[0.8px] max-w-4xl mx-auto whitespace-pre-line">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Choices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`group relative w-full h-[350px] bg-white rounded-[20px] border border-[#4A3B30] border-opacity-70 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#744B28] focus:ring-opacity-50 ${
                  selectedOption === option.id
                    ? "ring-2 ring-[#744B28] bg-[#FBF5F0]"
                    : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full h-[180px] overflow-hidden rounded-t-[20px] p-4">
                  <img
                    src={option.imageUrl}
                    alt={option.description}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Divider */}
                <div className="w-[250px] h-px bg-black bg-opacity-30 mx-auto mb-4" />

                {/* Description */}
                <div className="px-6 pb-6">
                  <p className="text-[#4A3B30] font-manrope text-lg leading-[150%] text-left">
                    {option.description}
                  </p>
                </div>

                {/* Selection Indicator */}
                {selectedOption === option.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#744B28] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#744B28] focus:ring-opacity-50"
            >
              <svg
                className="w-6 h-5 text-[#1C1B1F]"
                viewBox="0 0 34 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.832 25.5L0.332031 13L12.832 0.5L15.7487 3.52083L8.35286 10.9167H33.6654V15.0833H8.35286L15.7487 22.4792L12.832 25.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Continue Button */}
            {selectedOption && (
              <button
                onClick={handleNext}
                className="inline-flex items-center justify-center px-12 py-4 bg-[#744B28] text-white font-hanuman text-2xl font-bold rounded-full transition-all duration-300 hover:bg-[#623B1C] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE3CB] focus:ring-opacity-50"
              >
                {currentQuestionIndex < quizQuestions.length - 1
                  ? "Next Question"
                  : "Complete Analysis"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
