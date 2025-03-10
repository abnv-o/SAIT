import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  
  const fonts = [
    "font-['Pricedown']",
    "font-['Hindi']",
    "font-['KnightWarrior']",
    "font-['Ming']",
    "font-['Japan']"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-28">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Left Box - Image with circular animation */}
          <BentoTilt className="w-full md:w-1/2 h-[500px] overflow-visible group">
            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              {/* Circular animation container */}
              <div className="absolute w-[300px] h-[300px] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <div className="circular-line line-1"></div>
                <div className="circular-line line-2"></div>
                <div className="circular-line line-3"></div>
              </div>
              
              {/* Image container */}
              <div className="relative z-10 w-[250px] h-[250px] rounded-full overflow-hidden flex items-center justify-center bg-black/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-95">
                <img
                  src="/img/logo.png"
                  alt="SAIT Feature"
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </BentoTilt>

          {/* Right Box - Text */}
          <BentoTilt className="w-full md:w-1/2 h-[500px] overflow-hidden rounded-2xl border border-blue-500/30 bg-black/50 backdrop-blur-sm flex items-center justify-center p-8 group transition-all duration-500 hover:bg-black/60 hover:border-blue-400/40 relative">
            {/* Code animation background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="code-rain">
                <div className="code-element code-1">const sait = new Association();</div>
                <div className="code-element code-2">{'function init() { /*...*/ }'}</div>
                <div className="code-element code-3">{'while(true) { innovate(); }'}</div>
                <div className="code-element code-4">{'<div class="future" />'}</div>
                <div className="code-element code-5">git commit -m "excellence"</div>
                <div className="code-element code-6">npm run build:dreams</div>
                <div className="code-element code-7">{'{ "success": true }'}</div>
                <div className="code-element code-8">sudo apt-get inspire</div>
                
                {/* Additional elements for more density */}
                <div className="code-element code-9">{'for(dreams of future) {'}</div>
                <div className="code-element code-10">{'  achieve(dreams);'}</div>
                <div className="code-element code-11">{'}'}</div>
                <div className="code-element code-12">{'import { success } from "future";'}</div>
              </div>
            </div>

            {/* Matrix-like vertical lines */}
            <div className="absolute inset-0">
              <div className="matrix-line"></div>
              <div className="matrix-line"></div>
              <div className="matrix-line"></div>
            </div>

            <div className="text-center transition-all duration-500 group-hover:scale-105 relative z-10 bg-black/40 p-6 rounded-xl backdrop-blur-sm">
              <h1 
                className={`${fonts[currentFontIndex]} text-[6vw] md:text-[4vw] font-bold 
                transition-all duration-500 text-white animate-morph whitespace-nowrap text-outline mb-8 tracking-wider group-hover:text-blue-100`}
              >
                SAIT
              </h1>
              <p className="font-circular-web text-xl md:text-2xl text-blue-50 max-w-md mx-auto font-semibold mb-6 transition-colors duration-500 group-hover:text-blue-200">
                Student Association of Information Technology
              </p>
              <p className="font-circular-web text-base md:text-lg text-blue-50/70 max-w-md mx-auto mt-4 leading-relaxed transition-colors duration-500 group-hover:text-blue-100/80">
                Official Student Association of the Divison of Information Technology at Cochin University of Science and Technology
              </p>
            </div>
          </BentoTilt>
        </div>
      </div>

      {/* Update animation styles */}
      <style jsx>{`
        .circular-line {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          animation: circularGlow 6s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .line-1 {
          width: 280px;
          height: 280px;
          animation-delay: 0s;
          border-color: rgba(59, 130, 246, 0.2);
        }

        .line-2 {
          width: 320px;
          height: 320px;
          animation-delay: -2s;
          border-color: rgba(147, 197, 253, 0.2);
        }

        .line-3 {
          width: 360px;
          height: 360px;
          animation-delay: -4s;
          border-color: rgba(191, 219, 254, 0.2);
        }

        .code-rain {
          position: absolute;
          inset: -20% -50%;
          width: 200%;
          height: 140%;
          background: linear-gradient(to bottom,
            transparent,
            rgba(0, 0, 0, 0.8)
          );
        }

        .code-element {
          position: absolute;
          font-family: 'Consolas', monospace;
          font-size: 14px;
          color: rgba(147, 197, 253, 0.15);
          white-space: nowrap;
          animation: floatCode 8s linear infinite;
          opacity: 0;
          text-shadow: 0 0 8px rgba(147, 197, 253, 0.2);
        }

        .code-1 { top: 5%; left: 10%; animation-delay: 0s; }
        .code-2 { top: 15%; left: 60%; animation-delay: -1s; }
        .code-3 { top: 25%; left: 20%; animation-delay: -2s; }
        .code-4 { top: 35%; left: 70%; animation-delay: -3s; }
        .code-5 { top: 45%; left: 30%; animation-delay: -4s; }
        .code-6 { top: 55%; left: 80%; animation-delay: -5s; }
        .code-7 { top: 65%; left: 40%; animation-delay: -6s; }
        .code-8 { top: 75%; left: 90%; animation-delay: -7s; }
        .code-9 { top: 85%; left: 15%; animation-delay: -3.5s; }
        .code-10 { top: 92%; left: 25%; animation-delay: -4.5s; }
        .code-11 { top: 95%; left: 35%; animation-delay: -5.5s; }
        .code-12 { top: 82%; left: 75%; animation-delay: -6.5s; }

        .matrix-line {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(147, 197, 253, 0.1),
            rgba(147, 197, 253, 0.15),
            rgba(147, 197, 253, 0.1),
            transparent
          );
          animation: matrixLine 3s linear infinite;
        }

        .matrix-line:nth-child(1) { left: 30%; animation-delay: -1s; }
        .matrix-line:nth-child(2) { left: 50%; animation-delay: -2s; }
        .matrix-line:nth-child(3) { left: 70%; animation-delay: -3s; }

        @keyframes floatCode {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }

        @keyframes matrixLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes circularGlow {
          0% {
            transform: scale(0.9);
            opacity: 0.3;
            filter: blur(0px);
          }
          50% {
            opacity: 1;
            filter: blur(1px);
          }
          100% {
            transform: scale(1.1);
            opacity: 0.3;
            filter: blur(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
