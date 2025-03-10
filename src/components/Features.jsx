import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const HackathonAnnouncement = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Array of tech words for background animation
  const techWords = [
    "function", "class", "const", "let", "async",
    "await", "import", "export", "return", "if",
    "else", "try", "catch", "promise", "map",
    "filter", "reduce", "React", "Node.js", "Python",
    "JavaScript", "TypeScript", "API", "Git", "Docker"
  ];

  useGSAP(() => {
    // Main content fade in
    gsap.from(".announcement-content > *", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    });

    // Profile section animation
    gsap.from(".profile-section", {
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: "power3.out"
    });

    // Blob animation
    gsap.to(".blob-animation", {
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Gentle rotation for the profile container
    gsap.to(".profile-container", {
      rotate: 3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Code text animation
    gsap.to(".code-text", {
      opacity: 0.2,
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.5,
        from: "random"
      }
    });

    // Memory tag typing effect
    gsap.from(".memory-tag span", {
      opacity: 0,
      duration: 0.1,
      stagger: 0.05,
      ease: "none"
    });

    // Prize cards reveal
    gsap.from(".prize-card", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".prizes-section",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white relative">
      {/* Tech words background */}
      <div className="fixed inset-0 pointer-events-none">
        {techWords.map((word, i) => (
          <div
            key={i}
            className="code-text absolute font-mono text-xs md:text-sm opacity-[0.03]"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              color: `hsl(${210 + Math.random() * 40}, 70%, 60%)`
            }}
          >
            {word}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full mx-auto px-4 md:px-6 py-12 md:py-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Event Details */}
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6">
                
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    Hack_Europa 
                  </h1>
                </div>
              </div>

              {/* Event Details */}
              <div className="inline-block">
                  <div className="memory-tag relative font-mono text-lg px-4 md:px-6 py-2 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-lg"></div>
                    <div className="relative flex items-center justify-center gap-3 text-blue-400">
                      <span className="text-purple-400 opacity-70">&lt;</span>
                      <span className="tracking-wide text-2xl">in_memory_of</span>
                      <span className="text-purple-400 opacity-70">&gt;</span>
                    </div>
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>
                    <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>
                  </div>
                </div>
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Abhijit Menon
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl text-blue-300">
                  8 Hours of Innovation, Creation, and Impact
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-start items-center">
                  <div className="flex items-center gap-3 bg-blue-950/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-900/30">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-blue-300">March 23, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-950/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-900/30">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-blue-300">CITTIC, CUSAT</span>
                  </div>
                </div>
              </div>

              {/* Prizes Section */}
              <div className="prizes-section space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Total Prize Pool: ₹12,000
                  </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { place: "1st Prize", prize: "₹5,000", gradient: "from-amber-500 to-yellow-600" },
                    { place: "2nd Prize", prize: "₹4,000", gradient: "from-blue-500 to-blue-600" },
                    { place: "3rd Prize", prize: "₹3,000", gradient: "from-purple-500 to-purple-600" }
                  ].map((prize, index) => (
                    <div key={index} className="prize-card group">
                      <div className="relative h-full bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl p-6 border border-blue-500/10
                                    transition-all duration-500 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-xl transition-opacity duration-500
                                      group-hover:opacity-20" />
                        
                        <div className="relative z-10 text-center">
                          <div className="text-2xl font-semibold mb-4 text-blue-300">
                            {prize.place}
                          </div>
                          <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                            {prize.prize}
                          </div>
                          <div className="h-0.5 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50
                                        transform origin-left transition-all duration-500 group-hover:w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={() => navigate('/hackathon')}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold
                           text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
                           transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25
                           hover:scale-[1.02]"
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-white/10 to-blue-600/0
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            </div>

            {/* Right Column - Profile Section */}
            <div className="profile-section relative flex flex-col items-center space-y-6 md:space-y-8">
              {/* Profile Picture Container */}
              <div className="profile-container relative w-64 md:w-80 h-64 md:h-80">
                {/* Animated Blob Background */}
                <div className="blob-animation absolute inset-2 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 
                              rounded-full filter blur-xl transform-gpu"></div>
                
                {/* Profile Picture Frame */}
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                  <img
                    src="/img/abhijith_menon.jpg"
                    alt="Abhijith Menon"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = '/img/placeholder.jpg';
                      e.target.onerror = null;
                    }}
                  />
                </div>

                {/* Decorative Ring */}
                <div className="absolute -inset-3 md:-inset-4 rounded-full border-2 border-blue-500/20 
                              animate-[spin_10s_linear_infinite]"></div>
              </div>

              {/* Bio Section */}
              <div className="text-center space-y-4 max-w-sm md:max-w-md px-4">
                <blockquote className="text-lg md:text-xl text-blue-300/90 italic">
                  "Innovation is not about technology, it's about solving problems that matter."
                </blockquote>
                <p className="text-base md:text-lg text-blue-400/80">
                  A visionary mentor, innovator, and guide who inspired countless students to push their boundaries 
                  and create meaningful solutions. His legacy lives on through the spirit of innovation he instilled 
                  in everyone he touched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default HackathonAnnouncement;
