"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const SmoothTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Timeline for smooth text transformations
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(textElement, {
      duration: 2,
      text: "Creative",
      ease: "power2.inOut",
      fontFamily: "Arial, sans-serif",
    })
      .to(textElement, {
        duration: 2,
        text: "Innovative",
        ease: "power2.inOut",
        fontFamily: "Georgia, serif",
      })
      .to(textElement, {
        duration: 2,
        text: "Award-Winning",
        ease: "power2.inOut",
        fontFamily: "Courier New, monospace",
      })
      .to(textElement, {
        duration: 2,
        text: "Smooth",
        ease: "power2.inOut",
        fontFamily: "Verdana, sans-serif",
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        overflow: "hidden",
      }}
    >
      {/* SVG Filter for Gooey Effect */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Animated Text */}
      <div
        style={{
          filter: "url(#goo)",
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        <span ref={textRef} style={{ fontFamily: "Arial, sans-serif" }}>
          Creative
        </span>
      </div>
    </div>
  );
};

export default SmoothTextAnimation;