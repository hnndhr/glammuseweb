import React from 'react';

interface ArticleContentProps {
  className?: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ 
  className = '' 
}) => {
  const articleContent = (
    <>
      Walking down the skin-care aisle is like sensory overload. There are
      gels, creams, so-called essences, and serums, so many serums. The
      products claim to revitalize, exfoliate, hydrate, brighten, soothe,
      correct—or work anti-aging wonders. What's a skin-care novice to
      choose?
      <br />
      <br />
      The first step to developing a skin-care routine, Wu tells bewildered
      patients, is understanding your own skin: Is it oily, dry, or normal?
      To figure that out, wash your face, and then consider how it feels two
      hours later. "Is it feeling oily? Is it feeling dry and tight, or is
      it feeling pretty?" she asks. "That gives you a general idea of where
      you fall in that spectrum."
      <br />
      <br />
      From there, you can design a routine that requires only two to three
      steps at the start and end of the day. We asked experts which five
      products to prioritize—and when and how to apply them
      <br />
      <br />
      <span style={{ fontWeight: 700, fontSize: '24px' }}>
        A Gentle Cleanser
      </span>
      <br />
      <br />
      If you have dry skin, look for a creamy cleanser, she advises. If
      you're oily, opt for a gel or foaming cleanser, because they'll help
      break up the oils. Alexis Pfropper, an esthetician who owns ästhetik
      spa and skincare in Punta Gorda, Fla., likes to remind people that
      cleanser isn't meant to have a stripping effect. "We want to clean it,
      but not overstrip it to the point where you get that squeaky-clean
      feeling," she says. "That's actually a little inflammation starting to
      happen, because your face is now so dry, and the pH is thrown off the
      skin."
      <br />
      <br />
      <span style={{ fontWeight: 700, fontSize: '24px' }}>Moisturizer</span>
      <br />
      <br />
      Most people benefit from using a gentle moisturizer that doesn't have
      added scents or a ton of extra ingredients. Ian Michael Crumm, an
      esthetician in New York, suggests those with oily skin opt for a water
      cream moisturizer, which is lightweight; people who run dry might
      benefit from a rich moisturizer that has a thicker texture. You can
      apply it to your face, neck, chest, ears, under your eyes, your
      hands—anywhere prone to dryness.
      <br />
      <br />
      <span style={{ fontWeight: 700, fontSize: '24px' }}>
        Vitamin C serum
      </span>
      <br />
      <br />
      Vitamin C is a powerhouse antioxidant that helps protect your skin
      from particles called free radicals that are created by UV rays. 
      <a
        href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5514578/"
        style={{ textDecoration: 'underline' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Exposure can
      </a>
       break down the skin's collagen production, while leading to signs of
      aging, like wrinkles, dark spots, fine lines, and saggy skin. "Our
      skin is bombarded by these free-radical particles, and we want to
      protect its collagen from being unnecessarily or prematurely broken
      down," Wu says. "That way, we can keep the skin looking fresh and
      smooth and youthful."
    </>
  );

  return (
    <main
      className={`bg-white z-0 w-full overflow-hidden text-xl text-black font-normal tracking-[0.4px] leading-[30px] flex-1 px-[100px] max-md:max-w-full max-md:px-5 ${className}`}
    >
      <article className="max-w-4xl mx-auto py-[50px]">
        <div className="mb-[35px] text-lg text-gray-600">
          By Angela Haupt
          <br />
          July 30, 2024
        </div>
        <div className="border min-h-px w-full border-gray-300 border-solid max-md:max-w-full" />
        <div className="mt-[35px] max-md:max-w-full text-justify">
          {articleContent}
        </div>
      </article>
    </main>
  );
};
