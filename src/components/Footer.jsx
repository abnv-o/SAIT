import { FaDiscord, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord size={20} />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter size={20} />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube size={20} />, label: "YouTube" },
  { href: "https://instagram.com", icon: <FaInstagram size={20} />, label: "Instagram" },
  { href: "https://linkedin.com", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { href: "https://github.com", icon: <FaGithub size={20} />, label: "GitHub" }
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  // { name: "News", path: "/news" },
  { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" }
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-250 -right-100 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-250 -left-100 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/img/logo.png" alt="SAIT Logo" className="w-16 h-16" />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Student Association of Information Technology - Empowering future tech leaders through innovation and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Division of Information Technology, CUSAT</span>
              </p>
              {/* <p className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@sait.org" className="hover:text-blue-400 transition-colors duration-300">
                  contact@sait.org
                </a>
              </p> */}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-950/30 
                           text-gray-400 hover:text-blue-400 hover:bg-blue-900/30 
                           transition-all duration-300 group"
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-110">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-blue-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SAIT. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
