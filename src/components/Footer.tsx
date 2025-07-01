import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface FooterProps {
  onSocialClick?: (platform: string) => void;
  onLinkClick?: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSocialClick,
  onLinkClick,
}) => {
  const navigate = useNavigate();

  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform);
    } else {
      console.log(`${platform} clicked`);
    }
  };

  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link);
    } else {
      // Handle navigation based on link
      switch (link) {
        case "Skin":
          navigate("/skin");
          break;
        case "color-analysis":
          navigate("/color");
          break;
        case "body-analysis":
          navigate("/body");
          break;
        case "beautypedia":
          navigate("/article");
          break;
        default:
          console.log(`${link} clicked`);
      }
    }
  };

  return (
    <>
      <footer
        className="bg-tertiary flex w-full items-start gap-8 overflow-hidden flex-wrap justify-between mt-[91px] px-8 pt-12 pb-16 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:pb-12"
        role="contentinfo"
      >
        {/* Brand Section */}
        <div className="flex flex-col max-w-sm">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
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
                  fill="#FFE3CB"
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
            <div className="text-[40px] text-white font-normal whitespace-nowrap uppercase tracking-[2.2px] leading-[1.2] font-port-lligat">
              Glammuse
            </div>
          </div>

          {/* Tagline */}
          <div className="text-white text-xl font-normal leading-[28px] mb-16 font-port-lligat">
            Beauty Smarter,
            <br />
            Style Better
          </div>

          {/* Social Media Icons */}
          <div
            className="flex items-center gap-6"
            role="list"
            aria-label="Social media links"
          >
            <button
              onClick={() => handleSocialClick("instagram")}
              className="hover:opacity-80 transition-opacity duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="Follow us on Instagram"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.16c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.16c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => handleSocialClick("tiktok")}
              className="hover:opacity-80 transition-opacity duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="Follow us on TikTok"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.321 5.562a5.122 5.122 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.294-1.93-1.294-3.139C16.447.73 16.224 0 15.595 0h-3.096c-.629 0-.852.73-.852 1.199v11.49c0 1.784-1.451 3.235-3.235 3.235s-3.235-1.451-3.235-3.235 1.451-3.235 3.235-3.235c.37 0 .726.062 1.058.176.332.114.638.282.903.492.223.176.425.381.595.612.17.231.306.484.406.752.1.268.152.548.152.832v.001c0 .629.73.852 1.199.852h3.096c.469 0 1.199-.223 1.199-.852v-.001c0-3.568-2.667-6.235-6.235-6.235-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8V9.797a9.94 9.94 0 005.765-5.235z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={() => handleSocialClick("twitter")}
              className="hover:opacity-80 transition-opacity duration-200 p-2 rounded-full hover:bg-white/10"
              aria-label="Follow us on X (Twitter)"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav
          className="flex gap-16 flex-wrap mt-4 max-md:gap-8 max-md:mt-8"
          aria-label="Footer navigation"
        >
          {/* Features Section */}
          <div className="min-w-[180px]">
            <h3 className="text-medium text-xl font-semibold mb-6 font-syne">
              Features
            </h3>
            <ul
              className="text-white text-base font-normal leading-[32px] space-y-3 font-lato"
              role="list"
            >
              <li>
                <button
                  onClick={() => handleLinkClick("Skin")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Skin Type Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("color-analysis")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Color Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("body-analysis")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Body Type Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("wardrobe")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Personal Wardrobe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("beautypedia")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Beautypedia
                </button>
              </li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="min-w-[180px]">
            <h3 className="text-medium text-xl font-semibold mb-6 font-syne">
              Utility Pages
            </h3>
            <ul
              className="text-white text-base font-normal leading-[32px] space-y-3 font-lato"
              role="list"
            >
              <li>
                <button
                  onClick={() => handleLinkClick("privacy")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("terms")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("faq")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  FAQ's
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="min-w-[180px]">
            <h3 className="text-medium text-xl font-semibold mb-6 font-syne">
              Contact Us
            </h3>
            <ul
              className="text-white text-base font-normal leading-[32px] space-y-3 font-lato"
              role="list"
            >
              <li>
                <button
                  onClick={() => handleLinkClick("whatsapp")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("email")}
                  className="hover:text-medium transition-colors duration-200 text-left"
                >
                  Email
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </footer>

      {/* Copyright Section */}
      <div className="bg-white w-full overflow-hidden text-lg text-black font-normal text-center tracking-[-0.18px] leading-9 py-4 px-8 max-md:px-5 font-lato">
        © 2025, Glammuse | All rights reserved.
      </div>
    </>
  );
};
