"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  isLoggedIn: boolean;
  onSignOut?: () => void;
  activePage?: "home" | "features" | "beautypedia" | "wardrobe" | "about" | "profile";
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  onSignOut,
  activePage = "home",
}) => {
  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      console.log("Sign out clicked");
    }
  };

  const getLinkClass = (page: string) => {
    const baseClass =
      "transition-colors duration-200 hover:text-primary font-manrope";
    const activeClass = "text-primary font-bold";
    const inactiveClass = "text-[#141414] font-normal";

    return `${baseClass} ${activePage === page ? activeClass : inactiveClass}`;
  };

  return (
    <header className="w-full bg-white shadow-md font-manrope">
      <div className="flex items-center justify-between w-full px-[35px] py-4 max-md:flex-col max-md:items-start max-md:gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            {/* SVG Logo */}
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
                fill="#4A3B30"
                stroke="none"
              >
                <path d="..." /> {/* Biarkan isi path-nya tetap seperti yang kamu punya */}
              </g>
            </svg>
          </div>
          <div className="text-[35px] font-normal whitespace-nowrap text-center uppercase tracking-[1.93px] leading-[1.2] mt-[5px] text-primary font-port-lligat">
            Glammuse
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="flex items-center gap-[33px] text-base flex-wrap max-md:flex-col max-md:items-start"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-10 flex-wrap max-md:flex-col max-md:items-start">
            <Link href="/" className={getLinkClass("home")}>
              Home
            </Link>
            <Link href="/" className={getLinkClass("features")}>
              Features
            </Link>
            <Link href="/#beautypedia-section" className={getLinkClass("beautypedia")}>
              Beautypedia
            </Link>
            {isLoggedIn && (
              <Link href="/wardrobe" className={getLinkClass("wardrobe")}>
                Wardrobe
              </Link>
            )}
            <Link href="/about" className={getLinkClass("about")}>
              About Us
            </Link>
            {isLoggedIn && (
              <Link href="/profile" className={getLinkClass("profile")}>
                Profile
              </Link>
            )}
          </div>

          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleSignOut}
              className="text-white bg-primary gap-2.5 font-normal text-center px-6 py-3.5 rounded-[5px] transition-colors duration-200 hover:bg-darkest font-manrope"
              aria-label="Sign out of account"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="text-white bg-primary gap-2.5 font-normal text-center px-6 py-3.5 rounded-[5px] transition-colors duration-200 hover:bg-darkest font-manrope"
              aria-label="Log in to account"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
