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
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0,0 C200,50 400,80 600,60 C700,50 750,40 800,30 L800,0 Z"
              fill="rgba(244, 238, 213, 0.6)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-96">
          <svg
            viewBox="0 0 800 400"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0,400 C200,350 400,320 600,340 C700,350 750,360 800,370 L800,400 Z"
              fill="rgba(197, 165, 128, 0.5)"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h1 className="text-6xl lg:text-7xl font-bold text-warmBrown-800 mb-4 font-serif italic">
              Holla!
            </h1>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">
              Beauty Smarter,
            </p>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">
              Style Better
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="48"
                  height="48"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full h-full"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#141414"
                    stroke="none"
                  >
                    <path d="M2488 5099 c-69 -36 -78 -70 -78 -284 0 -166 2 -190 20 -225 23 -45 80 -80 130 -80 50 0 107 35 130 80 18 35 20 59 20 225 0 166 -2 190 -20 225 -37 73 -127 99 -202 59z" />
                    <path d="M1205 4455 c-96 -33 -129 -146 -67 -232 29 -41 233 -238 261 -253 36 -18 104 -16 142 6 69 41 93 138 51 206 -24 38 -237 250 -267 265 -37 19 -80 21 -120 8z" />
                    <path d="M3855 4465 c-5 -2 -23 -6 -39 -10 -32 -7 -253 -216 -287 -272 -43 -69 -19 -166 50 -207 38 -22 106 -24 142 -6 33 18 246 228 271 268 41 66 18 166 -47 203 -32 18 -74 29 -90 24z" />
                    <path d="M2495 4191 c-37 -17 -83 -66 -206 -221 -79 -99 -205 -302 -270 -435 -275 -563 -275 -1087 0 -1650 65 -133 191 -336 270 -435 159 -200 204 -240 271 -240 67 0 112 40 271 240 143 179 307 481 378 695 160 480 126 911 -108 1390 -65 133 -191 336 -270 435 -189 238 -234 268 -336 221z" />
                    <path d="M688 3289 c-70 -36 -78 -68 -78 -301 0 -211 9 -327 36 -463 83 -417 351 -807 719 -1047 202 -132 409 -209 679 -253 45 -8 50 -20 -46 112 -227 313 -390 678 -453 1022 -48 254 -44 482 12 744 14 65 23 120 20 123 -2 2 -47 15 -100 29 -163 41 -298 55 -535 55 -196 -1 -221 -3 -254 -21z" />
                    <path d="M3840 3294 c-90 -13 -288 -58 -297 -68 -3 -2 6 -58 20 -123 56 -262 60 -490 12 -744 -63 -344 -226 -709 -453 -1022 -96 -132 -91 -120 -46 -112 270 44 477 121 679 253 368 240 636 630 719 1047 27 136 36 252 36 463 0 235 -8 265 -80 302 -36 18 -57 20 -267 19 -135 -1 -267 -7 -323 -15z" />
                    <path d="M460 1802 c-222 -148 -420 -320 -446 -388 -32 -85 -7 -135 133 -259 305 -273 626 -448 946 -517 147 -31 389 -31 537 1 182 40 396 128 555 228 l60 38 -130 12 c-370 35 -670 141 -960 341 -194 134 -386 329 -509 517 -33 50 -62 93 -65 97 -3 3 -58 -28 -121 -70z" />
                    <path d="M4480 1783 c-85 -130 -220 -285 -337 -385 -334 -289 -690 -439 -1138 -481 l-130 -12 60 -38 c159 -100 373 -188 555 -228 148 -32 390 -32 537 -1 320 69 641 244 946 517 55 48 107 102 118 119 53 87 32 154 -82 256 -110 100 -271 224 -377 292 l-89 56 -63 -95z" />
                    <path d="M2510 724 c-102 -78 -310 -196 -453 -258 l-59 -26 59 -66 c145 -167 425 -374 503 -374 78 0 358 207 503 374 l59 66 -59 26 c-146 63 -333 170 -450 256 -29 21 -53 38 -55 37 -2 0 -23 -16 -48 -35z" />
                  </g>
                </svg>
              </div>
              <div className="text-[35px] font-normal text-center uppercase tracking-[1.93px] mt-[5px] text-primary font-port-lligat">
                Glammuse
              </div>
            </div>

            <h3 className="text-4xl font-bold text-warmBrown-800 text-center mb-8 font-serif">
              Login
            </h3>

            {error && (
              <div className="text-red-600 text-center mb-4 text-sm">
                {error}
              </div>
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
              <Button type="submit" className="w-full text-white">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
