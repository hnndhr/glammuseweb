"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[url('/bg-logreg.png')] bg-cover bg-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        {/* Tambahan shape SVG seperti login jika mau */}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Greeting */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h1 className="text-6xl lg:text-7xl font-bold text-warmBrown-800 mb-4 font-serif italic">Holla!</h1>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Beauty Smarter,</p>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Style Better</p>
          </div>
        </div>

        {/* Register Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="40"
                  height="40"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full h-full fill-current text-warmBrown-800"
                >
                  <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="var(--color-secondary)"
                stroke="none"
              >
                <path d="M2488 5099c-69-36-78-70-78-284 0-166 2-190 20-225 23-45 80-80 130-80 50 0 107 35 130 80 18 35 20 59 20 225 0 166-2 190-20 225-37 73-127 99-202 59z" />
                <path d="M1205 4455c-96-33-129-146-67-232 29-41 233-238 261-253 36-18 104-16 142 6 69 41 93 138 51 206-24 38-237 250-267 265-37 19-80 21-120 8z" />
                <path d="M3855 4465c-5-2-23-6-39-10-32-7-253-216-287-272-43-69-19-166 50-207 38-22 106-24 142-6 33 18 246 228 271 268 41 66 18 166-47 203-32 18-74 29-90 24z" />
                <path d="M2495 4191c-37-17-83-66-206-221-79-99-205-302-270-435-275-563-275-1087 0-1650 65-133 191-336 270-435 159-200 204-240 271-240 67 0 112 40 271 240 143 179 307 481 378 695 160 480 126 911-108 1390-65 133-191 336-270 435-189 238-234 268-336 221z" />
                <path d="M688 3289c-70-36-78-68-78-301 0-211 9-327 36-463 83-417 351-807 719-1047 202-132 409-209 679-253 45-8 50-20-46 112-227 313-390 678-453 1022-48 254-44 482 12 744 14 65 23 120 20 123-2 2-47 15-100 29-163 41-298 55-535 55-196-1-221-3-254-21z" />
                <path d="M3840 3294c-90-13-288-58-297-68-3-2 6-58 20-123 56-262 60-490 12-744-63-344-226-709-453-1022-96-132-91-120-46-112 270 44 477 121 679 253 368 240 636 630 719 1047 27 136 36 252 36 463 0 235-8 265-80 302-36 18-57 20-267 19-135-1-267-7-323-15z" />
              </g>
            </svg>
          </div>
          <div className="text-[35px] font-normal whitespace-nowrap text-center uppercase tracking-[1.93px] leading-[1.2] mt-[5px] text-primary font-port-lligat">
            Glammuse
          </div>
        </div>

            <h3 className="text-4xl font-bold text-warmBrown-800 text-center mb-8 font-serif">Register</h3>

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
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <div className="text-center py-2">
                <span className="text-warmBrown-600 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={handleLoginClick}
                    className="text-warmBrown-800 font-semibold hover:text-warmBrown-900 underline"
                  >
                    Login
                  </button>
                </span>
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
