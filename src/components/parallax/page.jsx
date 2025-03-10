'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
// import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const facultyMembers = [
  {
    image: "hod.jpg",
    name: " Prof.Dr.Santhosh Kumar",
    position: "HOD",
  },
  {
    image: "shelbi.jpg",
    name: "Prof.Dr.Shelbi Joseph",
    position: " Coordinator",
  },
  {
    image: "daleesha.jpg",
    name: "Dr Daleesha M Viswanathan",
    position: "Co-coordinator",
  }
];

const teamMembers = [
  {
    image: "mrudul.jpg",
    name: "Mrudul John Mathews",
    position: "President",
    year: "4th Year",
  },
  {
    image: "hiba.jpg",
    name: "Koiloth Khadeeja Hiba",
    position: "Treasurer",
    year: "3rd Year",
  },
  {
    image: "aysha.jpg",
    name: "K H Aysha",
    position: "Womens Lead",
    year: "3rd Year",
  },
  {
    image: "ashbin.jpg",
    name: "Ashbin P A",
    position: "Event Lead",
    year: "3rd Year",
  },
  {
    image: "adwaith.jpg",
    name: "Advaith Pradosh",
    position: "Secretary",
    year: "3rd Year",
  },
  {
    image: "sreelekshmi.jpg",
    name: "Sreelakshmi K",
    position: "Alumni Lead",
    year: "4th Year",
  },
  {
    image: "aswin.jpg",
    name: "Ashwin Menon",
    position: "Outreach Lead",
    year: "3rd Year",
  },
  {
    image: "sv.jpg",
    name: "Adithyan S V",
    position: "Media Lead",
    year: "3rd Year",
  },
  {
    image: "trisha.jpg",
    name: "K V Trisha Gautham",
    position: "Vice President",
    year: "3rd Year",
  },
  {
    image: "abhinav.jpg",
    name: "Abhinav O",
    position: "Technical Lead",
    year: "3rd Year",
  },
  {
    image: "jayalekshmi.jpg",
    name: "Jayalekshmi P E",
    position: "Placement Lead",
    year: "4th Year",
  },
  {
    image: "akash.jpg",
    name: "Akash M P",
    position: "Joint Secretary",
    year: "2nd Year",
  },
  {
    image: "ranjana.jpg",
    name: "Ranjana K P",
    position: "Arts Lead",
    year: "2nd Year",
  },
  {
    image: "aslam.jpg",
    name: "Mohammad Aslam P S",
    position: "Sports Lead",
    year: "3rd Year",
  }
];

// Distribute members into two rows of columns for better visibility
const columns = [
  teamMembers.slice(0, 4),    // First column: 4 members
  teamMembers.slice(4, 8),    // Second column: 4 members
  teamMembers.slice(8, 11),   // Third column: 3 members
  teamMembers.slice(11)       // Fourth column: 3 members
];

export default function TeamGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});
  const [activeIndex, setActiveIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start start', 'end start']
  });

  const { height } = dimension;
  // Significantly reduce scroll movement to prevent cards going under footer
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.05]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.03]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.04]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.06]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight});
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      {/* Faculty Section */}
      <div className="py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto px-4 mb-8">
          Meet our dedicated faculty members who guide and support SAIT
        </p>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <TiltCard member={faculty} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto px-4 mb-8">
          Meet the passionate individuals who make SAIT's vision a reality
        </p>
      </div>
      <div ref={gallery} className={styles.gallery}>
        {columns.map((column, columnIndex) => (
          <Column 
            key={columnIndex}
            members={column}
            y={[y, y2, y3, y4][columnIndex]}
            setActiveIndex={(index) => setActiveIndex(columnIndex * 4 + index)}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </main>
  );
}

const Column = ({ members, y, setActiveIndex, activeIndex }) => {
  return (
    <motion.div 
      className={styles.column}
      style={{ y }}
    >
      {members.map((member, i) => (
        <motion.div 
          key={i}
          className={styles.memberCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              delay: i * 0.2
            }
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setActiveIndex(i)}
          onHoverEnd={() => setActiveIndex(null)}
        >
          <TiltCard member={member} />
        </motion.div>
      ))}
    </motion.div>
  );
};

const TiltCard = ({ member }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-full group">
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg 
        transition-transform duration-300 ease-out
        group-hover:shadow-2xl">
        {/* Image Container with Zoom Effect */}
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          <img
            src={`/img/${member.image}`}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out
              group-hover:scale-110"
          />
        </div>

        {/* Info Section with Enhanced Animation */}
        <div className={`absolute bottom-0 left-0 right-0 backdrop-blur-sm
          transform transition-all duration-300 ease-out
          ${isMobile 
            ? 'bg-black/70 translate-y-0' 
            : 'bg-black/80 translate-y-full group-hover:translate-y-0'
          }`}>
          {/* Content wrapper with fade-in effect */}
          <div className={`p-4 transform transition-all duration-300
            ${isMobile ? 'translate-y-0' : 'group-hover:translate-y-0 translate-y-4'}`}>
            {/* Name with underline effect */}
            <h3 className="text-white text-lg font-semibold relative inline-block
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-0.5 after:bg-blue-400 
              after:transition-all after:duration-300
              group-hover:after:w-full">
              {member.name}
            </h3>
            
            {/* Position with fade-in effect */}
            <p className="text-blue-300 text-base mt-2 transition-opacity duration-300
              opacity-90 group-hover:opacity-100">
              {member.position}
            </p>
            
            {/* Year with slide-in effect */}
            <p className="text-gray-400 text-sm mt-1 transform transition-all duration-300
              group-hover:text-blue-200">
              {member.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
