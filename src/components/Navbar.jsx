import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  // { name: "News", path: "/news" },
  { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" }
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const menuRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-20 border-none transition-all duration-700 sm:inset-x-6 bg-black bg-opacity-35 rounded-3xl"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <Link to="/">
                <img src="/img/logo.png" alt="logo" className="w-10" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={clsx("nav-hover-btn", {
                      "text-blue-500": location.pathname === item.path
                    })}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>

              {/* Hamburger Menu Button */}
              <button
                className="ml-6 md:hidden flex flex-col gap-1.5 p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={clsx(
                  "w-6 h-0.5 bg-white transition-transform duration-300",
                  isMenuOpen && "transform rotate-45 translate-y-2"
                )} />
                <span className={clsx(
                  "w-6 h-0.5 bg-white transition-opacity duration-300",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={clsx(
                  "w-6 h-0.5 bg-white transition-transform duration-300",
                  isMenuOpen && "transform -rotate-45 -translate-y-2"
                )} />
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed inset-0 z-40 bg-black bg-opacity-90 transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={clsx(
                "text-white text-xl py-4 px-6 transition-colors duration-200 hover:text-blue-500",
                {
                  "text-blue-500": location.pathname === item.path
                }
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
