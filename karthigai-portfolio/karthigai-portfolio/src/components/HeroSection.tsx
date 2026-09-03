import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import { profile } from "../data/content";
import { motion } from "framer-motion";

const navLinks = ["About", "Price", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      <FadeIn as="nav" delay={0} y={-20}>
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-end relative">
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading text-center font-black uppercase leading-none tracking-tight whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
            >
              <span className="sr-only">Hi, I&apos;m {profile.firstName}</span>
              <span aria-hidden="true">
                {["Hi, I'm ", profile.firstName].map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-pre">
                    {word.split("").map((character, characterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${characterIndex}`}
                        className="hero-letter inline-block"
                        initial={{ opacity: 0, y: 110, rotateX: -75, scale: 0.8, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
                        transition={{
                          delay: 0.35 + wordIndex * 0.25 + characterIndex * 0.045,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {character}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </h1>
          </FadeIn>
        </div>

        {/* Portrait */}
        <div className="absolute left-1/2 top-1/2 z-0 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3}>
              <img
                src={profile.portraitUrl}
                alt={profile.name}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </Magnet>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
