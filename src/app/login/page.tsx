"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError("Email atau password salah.");
    }
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-[url('/bg-logreg.png')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0,0 C200,50 400,80 600,60 C700,50 750,40 800,30 L800,0 Z" fill="rgba(244, 238, 213, 0.6)" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0,400 C200,350 400,320 600,340 C700,350 750,360 800,370 L800,400 Z" fill="rgba(197, 165, 128, 0.5)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h1 className="text-6xl lg:text-7xl font-bold text-warmBrown-800 mb-4 font-serif italic">Holla!</h1>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Beauty Smarter,</p>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Style Better</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                {/* logo SVG */}
              </div>
              <div className="text-[35px] font-normal text-center uppercase tracking-[1.93px] mt-[5px] text-primary font-port-lligat">
                Glammuse
              </div>
            </div>

            <h3 className="text-4xl font-bold text-warmBrown-800 text-center mb-8 font-serif">Login</h3>

            {error && (
              <div className="text-red-600 text-center mb-4 text-sm">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-center py-2">
                <span className="text-warmBrown-600 text-sm">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="text-warmBrown-800 font-semibold hover:text-warmBrown-900 underline"
                  >
                    Register
                  </button>
                </span>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
