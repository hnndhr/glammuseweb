import React from "react";
import { useRouter } from "next/navigation";

interface FooterProps {
  onSocialClick?: (platform: string) => void;
  onLinkClick?: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSocialClick, onLinkClick }) => {
  const router = useRouter();

  const handleSocialClick = (platform: string) => {
    onSocialClick?.(platform);
  };

  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link);
    } else {
      const routeMap: Record<string, string> = {
        Skin: "/skin",
        "color-analysis": "/color",
        "body-analysis": "/body",
        beautypedia: "/article",
        wardrobe: "/wardrobe",
        privacy: "/privacy",
        terms: "/terms",
        faq: "/faq",
        whatsapp: "https://wa.me/6281234567890",
        email: "mailto:contact@glammuse.com",
      };
      const target = routeMap[link];
      if (target) {
        if (target.startsWith("http") || target.startsWith("mailto")) {
          window.open(target, "_blank");
        } else {
          router.push(target);
        }
      }
    }
  };

  return (
    <>
      <footer className="bg-tertiary flex flex-wrap justify-between px-8 pt-12 pb-16 mt-[91px] max-md:px-5 max-md:pb-12">
        {/* Brand Section */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[40px] text-white font-port-lligat tracking-[2.2px] uppercase">
              Glammuse
            </div>
          </div>
          <div className="text-white text-xl font-port-lligat mb-16">
            Beauty Smarter,
            <br />
            Style Better
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            {[
              { name: "instagram", label: "Instagram" },
              { name: "tiktok", label: "TikTok" },
              { name: "twitter", label: "Twitter" },
            ].map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleSocialClick(platform.name)}
                aria-label={`Follow us on ${platform.label}`}
                className="hover:opacity-80 transition p-2 rounded-full hover:bg-white/10"
              >
                <img src={`/icons/${platform.name}.svg`} alt={platform.label} className="w-8 h-8" />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-16 mt-4 max-md:gap-8">
          {[
            {
              heading: "Features",
              items: [
                { label: "Skin Type Analysis", key: "Skin" },
                { label: "Color Analysis", key: "color-analysis" },
                { label: "Body Type Analysis", key: "body-analysis" },
                { label: "Personal Wardrobe", key: "wardrobe" },
                { label: "Beautypedia", key: "beautypedia" },
              ],
            },
            {
              heading: "Utility Pages",
              items: [
                { label: "Privacy Policy", key: "privacy" },
                { label: "Terms of Use", key: "terms" },
                { label: "FAQ's", key: "faq" },
              ],
            },
            {
              heading: "Contact Us",
              items: [
                { label: "WhatsApp", key: "whatsapp" },
                { label: "Email", key: "email" },
              ],
            },
          ].map((section) => (
            <div key={section.heading} className="min-w-[180px]">
              <h3 className="text-medium text-xl font-syne font-semibold mb-6">
                {section.heading}
              </h3>
              <ul className="space-y-3 text-white text-base font-lato">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleLinkClick(item.key)}
                      className="text-left hover:text-medium transition"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </footer>

      {/* Copyright */}
      <div className="bg-white text-black text-center text-lg font-lato py-4">
        © 2025, Glammuse | All rights reserved.
      </div>
    </>
  );
};
