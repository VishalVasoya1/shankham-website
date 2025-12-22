"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { editorial_new } from "@/app/fonts";
import { useRouter } from "next/navigation";
import  { getCalApi } from "@calcom/embed-react";


const HeroSection: React.FC = () => {
  const router = useRouter()
  const words: string[] = [
    "ambitious teams",
    "visionary leaders",
    "bold creators",
  ];
  const [wordIndex, setWordIndex] = useState<number>(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
    });

    words.forEach((_, index) => {
      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      })
        .set(textRef.current, {
          onComplete: () => setWordIndex(index),
        })
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        )
        .to({}, { duration: 2 });
    });

    return () => {
      tl.kill();
    };
  }, []);

    useEffect(() => {
      (async function () {
        const cal = await getCalApi({ namespace: "15min" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      })();
    }, []);
  
  

  const handleClick = () => {
     router.push("/contact")
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center text-gray-100 justify-center px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("/background.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // filter: "blur(4px)", // Custom blur amount in pixels
        }}
      />

      <div className="max-w-[1100px] w-full mx-auto relative z-10 mt-32">
        {/* Main Heading */}
        <div className="text-center mb-4 md:mb-6">
          <h1
            className={`text-4xl lg:text-7xl leading-tight md:leading-[1.15] tracking-tight px-2 ${editorial_new.className} text-center`}
          >
            We help{" "}
            <span className="relative inline-block">
              <span ref={textRef} className="inline-block whitespace-nowrap">
                {words[wordIndex]}
              </span>
            </span>
            <br />
            turn ideas into lasting impact.
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[620px] mx-auto text-center mb-6 md:mb-8 px-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed">
            Shankham Technology delivers intelligent solutions through
            AI-powered platforms, next-gen mobile apps, immersive gaming, and
            resilient cloud deployments.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          <Button
            size="lg"
            onClick={handleClick}
            className="w-full text-zinc-900 sm:w-auto h-11 sm:h-12 px-6 sm:px-7 text-sm font-medium gap-2 group"
          >
            <span className="relative z-10 text-zinc-100">Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10 text-zinc-100" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full text-zinc-900 sm:w-auto h-11 sm:h-12 px-6 sm:px-7 text-sm font-medium gap-2 group"
            data-cal-namespace="15min"
            data-cal-link="tarang-rajpara-lgnt7r/15min"
            data-cal-config='{"layout":"month_view"}'
          >
            <span>Book a Call</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
