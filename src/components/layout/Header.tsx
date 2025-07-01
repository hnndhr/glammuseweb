import React from 'react';

interface HeaderProps {
  onSignOut?: () => void;
  activePage?: 'home' | 'features' | 'beautypedia' | 'wardrobe' | 'about' | 'profile';
}

export const Header: React.FC<HeaderProps> = ({ onSignOut, activePage = 'home' }) => {
  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      // Default sign out behavior
      console.log('Sign out clicked');
    }
  };

  const getLinkClass = (page: string) => {
    const baseClass = "self-stretch my-auto transition-colors duration-200 hover:text-primary font-manrope";
    const activeClass = "text-primary font-bold";
    const inactiveClass = "text-[#141414] font-normal";
    
    return `${baseClass} ${activePage === page ? activeClass : inactiveClass}`;
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Port+Lligat+Slab:wght@400&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <header className="flex w-full flex-col pl-[35px] max-md:max-w-full max-md:pl-5 font-manrope">
        <div className="self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.0" 
                width="40" 
                height="40" 
                viewBox="0 0 512.000000 512.000000" 
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
              >
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="var(--color-secondary)" stroke="none">
                  <path d="M2488 5099 c-69 -36 -78 -70 -78 -284 0 -166 2 -190 20 -225 23 -45 80 -80 130 -80 50 0 107 35 130 80 18 35 20 59 20 225 0 166 -2 190 -20 225 -37 73 -127 99 -202 59z"/>
                  <path d="M1205 4455 c-96 -33 -129 -146 -67 -232 29 -41 233 -238 261 -253 36 -18 104 -16 142 6 69 41 93 138 51 206 -24 38 -237 250 -267 265 -37 19 -80 21 -120 8z"/>
                  <path d="M3855 4465 c-5 -2 -23 -6 -39 -10 -32 -7 -253 -216 -287 -272 -43 -69 -19 -166 50 -207 38 -22 106 -24 142 -6 33 18 246 228 271 268 41 66 18 166 -47 203 -32 18 -74 29 -90 24z"/>
                  <path d="M2495 4191 c-37 -17 -83 -66 -206 -221 -79 -99 -205 -302 -270 -435 -275 -563 -275 -1087 0 -1650 65 -133 191 -336 270 -435 159 -200 204 -240 271 -240 67 0 112 40 271 240 143 179 307 481 378 695 160 480 126 911 -108 1390 -65 133 -191 336 -270 435 -189 238 -234 268 -336 221z"/>
                  <path d="M688 3289 c-70 -36 -78 -68 -78 -301 0 -211 9 -327 36 -463 83 -417 351 -807 719 -1047 202 -132 409 -209 679 -253 45 -8 50 -20 -46 112 -227 313 -390 678 -453 1022 -48 254 -44 482 12 744 14 65 23 120 20 123 -2 2 -47 15 -100 29 -163 41 -298 55 -535 55 -196 -1 -221 -3 -254 -21z"/>
                  <path d="M3840 3294 c-90 -13 -288 -58 -297 -68 -3 -2 6 -58 20 -123 56 -262 60 -490 12 -744 -63 -344 -226 -709 -453 -1022 -96 -132 -91 -120 -46 -112 270 44 477 121 679 253 368 240 636 630 719 1047 27 136 36 252 36 463 0 235 -8 265 -80 302 -36 18 -57 20 -267 19 -135 -1 -267 -7 -323 -15z"/>
                  <path d="M460 1802 c-222 -148 -420 -320 -446 -388 -32 -85 -7 -135 133 -259 305 -273 626 -448 946 -517 147 -31 389 -31 537 1 182 40 396 128 555 228 l60 38 -130 12 c-370 35 -670 141 -960 341 -194 134 -386 329 -509 517 -33 50 -62 93 -65 97 -3 3 -58 -28 -121 -70z"/>
                  <path d="M4480 1783 c-85 -130 -220 -285 -337 -385 -334 -289 -690 -439 -1138 -481 l-130 -12 60 -38 c159 -100 373 -188 555 -228 148 -32 390 -32 537 -1 320 69 641 244 946 517 55 48 107 102 118 119 53 87 32 154 -82 256 -110 100 -271 224 -377 292 l-89 56 -63 -95z"/>
                  <path d="M2510 724 c-102 -78 -310 -196 -453 -258 l-59 -26 59 -66 c145 -167 425 -374 503 -374 78 0 358 207 503 374 l59 66 -59 26 c-146 63 -333 170 -450 256 -29 21 -53 38 -55 37 -2 0 -23 -16 -48 -35z"/>
                </g>
              </svg>
            </div>
            <div 
              className="text-[35px] font-normal whitespace-nowrap text-center uppercase tracking-[1.93px] leading-[1.2] mt-[5px] text-primary font-port-lligat"
            >
              Glammuse
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-[33px] text-base flex-wrap px-[30px] max-md:max-w-full max-md:px-5" role="navigation" aria-label="Main navigation">
            <div className="self-stretch flex min-w-60 items-center gap-10 flex-wrap my-auto max-md:max-w-full">
              <a href="/" className={getLinkClass('home')}>
                Home
              </a>
                <a href="/" className={getLinkClass('features')}>
                Features
                </a>
              <a href="/article" className={getLinkClass('beautypedia')}>
                Beautypedia
              </a>
              <a href="/about-us" className={getLinkClass('about')}>
                About Us
              </a>
              <a href="/profile" className={getLinkClass('profile')}>
                Profile
              </a>
            </div>
            <button
              onClick={handleSignOut}
              className="text-white self-stretch bg-primary gap-2.5 font-normal text-center my-auto px-6 py-3.5 rounded-[5px] transition-colors duration-200 hover:bg-darkest max-md:px-5 font-manrope"
              aria-label="Sign out of account"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};