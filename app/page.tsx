"use client";

import { useSpring, animated, config } from "@react-spring/web";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  });

  const logoSpring = useSpring({
    loop: true,
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(10px)" }, { transform: "translateY(-10px)" }],
    config: {
      duration: 2000,
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2d388a] to-black p-4 overflow-hidden">
      {/* Círculos decorativos con blur */}
      <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#00aeef] opacity-20 blur-[100px]" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#2d388a] opacity-20 blur-[100px]" />

      <animated.div
        style={fadeIn}
        className="relative w-full max-w-3xl backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20"
      >
        <div className="flex flex-col items-center justify-center p-8 md:p-12 space-y-12">
          <animated.div
            style={logoSpring}
            className="w-40 h-40 md:w-48 lg:w-56 md:h-48 lg:h-56 relative"
          >
            <Image
              src="/cubika_labs_logo.png"
              alt="Cubika Labs Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </animated.div>

          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
              Coming Soon
            </h1>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
