import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useGSAP(() => {
    // Initial glitch effect for terminal
    const glitchTl = gsap.timeline();
    
    glitchTl.from(".terminal-window", {
      opacity: 0,
      scale: 0.95,
      duration: 0.1,
      ease: "none"
    })
    .to(".terminal-window", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.1,
      ease: "none"
    })
    .to(".terminal-window", {
      clipPath: "polygon(0 0, 100% 0, 100% 5%, 0 5%)",
      duration: 0.05,
      ease: "none"
    })
    .to(".terminal-window", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.1,
      ease: "none"
    });

    // Terminal header buttons
    gsap.from(".terminal-button", {
      scale: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "back.out(1.7)",
      delay: 0.2
    });

    // Initialize loading text sequence
    const loadingTexts = document.querySelectorAll('.loading-text');
    gsap.set(loadingTexts, { opacity: 0, y: 10 });

    const loadingTl = gsap.timeline({
      onComplete: () => setShowMainContent(true)
    });

    loadingTexts.forEach((text, index) => {
      loadingTl.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        delay: index === 0 ? 0.3 : 0.15
      })
      .to(text, {
        opacity: 0.5,
        duration: 0.1,
        delay: 0.1
      });
    });

    // Main content animations (will only run after loading)
    if (showMainContent) {
      // Cursor animation
      gsap.to(".terminal-cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5
      });

      // SAIT text reveal with glitch
      const saitLetters = document.querySelectorAll('.sait-letter');
      gsap.set(saitLetters, { opacity: 0 });
      
      saitLetters.forEach((letter, index) => {
        gsap.to(letter, {
          opacity: 1,
          duration: 0.1,
          delay: 0.1 * index,
          onStart: () => {
            // Glitch effect on each letter
            gsap.to(letter, {
              skewX: 20,
              duration: 0.05,
              yoyo: true,
              repeat: 1
            });
          }
        });
      });

      // Gradient animation
      gsap.to(".sait-letter", {
        backgroundImage: "linear-gradient(45deg, #00d4ff, #0062ff, #00d4ff, #0062ff)",
        backgroundSize: "300% 300%",
        duration: 8,
        ease: "none",
        repeat: -1,
        delay: 0.5
      });

      // Subtitle typing effect
      const subtitleChars = document.querySelectorAll('.subtitle-char');
      gsap.set(subtitleChars, { opacity: 0 });
      
      gsap.to(subtitleChars, {
        opacity: 1,
        duration: 0.02,
        stagger: 0.02,
        delay: 0.8
      });
    }
  }, [showMainContent]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="hero-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 50,
                    smooth: 20
                  }
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.7,
                    color: "#ffffff"
                  }
                }
              },
            },
            particles: {
              color: {
                value: "#ffffff"
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 0.5
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out"
                },
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              number: {
                density: {
                  enable: true,
                  area: 900
                },
                value: 70
              },
              opacity: {
                value: 0.4
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 1, max: 2 }
              }
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />

        {/* Terminal Window Container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="terminal-window w-full max-w-4xl bg-black bg-opacity-90 rounded-lg overflow-hidden border border-blue-500/30 backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="terminal-header h-8 bg-gray-900/50 border-b border-blue-500/30 flex items-center px-4 gap-2">
              <div className="terminal-button w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="terminal-button w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="terminal-button w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm font-mono">sait@terminal ~ </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono">
              {/* Loading Sequence */}
              <div className="loading-text text-green-500/90 text-sm mb-2">
                {'>'} Initializing system...
              </div>
              <div className="loading-text text-green-500/90 text-sm mb-2">
                {'>'} Loading modules... OK
              </div>
              <div className="loading-text text-green-500/90 text-sm mb-2">
                {'>'} Establishing connection... OK
              </div>
              <div className="loading-text text-green-500/90 text-sm mb-4">
                {'>'} System ready. Welcome to SAIT Terminal v1.0.0
              </div>

              {showMainContent && (
                <>
                  {/* Command Line */}
                  <div className="terminal-line flex items-center text-blue-400 font-mono mb-6">
                    <span>$ initialize presentation</span>
                    <span className="terminal-cursor ml-1">_</span>
                  </div>

                  {/* SAIT Text */}
                  <div className="mb-6 flex justify-center space-x-4">
                    {"SAIT".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="sait-letter inline-block text-8xl font-black"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          background: 'linear-gradient(45deg, #0062ff, #00d4ff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 0 8px rgba(0,98,255,0.3))'
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>

                  {/* Subtitle with typing effect */}
                  <div className="flex justify-center">
                    <div className="subtitle font-mono text-xl text-blue-300/90">
                      {'>'}{' '}
                      {"Student Association of Information Technology".split('').map((char, index) => (
                        <span
                          key={index}
                          className="subtitle-char inline-block"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black parallax-text-slow">
        2<b>0</b>25
      </h1>
    </div>
  );
};

export default Hero;
