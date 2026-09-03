import { useEffect, useRef, useState } from "react";
import { marqueeRow1, marqueeRow2 } from "../data/content";

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = tripled(marqueeRow1);
  const row2 = tripled(marqueeRow2);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div
        className="flex gap-3 mb-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: "transform",
        }}
      >
        {row1.map((src, i) => (
          <img
            key={`row1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>

      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: "transform",
        }}
      >
        {row2.map((src, i) => (
          <img
            key={`row2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  );
}
