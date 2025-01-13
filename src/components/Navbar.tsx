'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            John Doe
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#properties" isScrolled={isScrolled}>Properties</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Testimonials</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          <button className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link 
      href={href} 
      className={`font-dmsans font-medium transition-colors duration-300 ${
        isScrolled 
          ? 'text-primary hover:text-primary/80' 
          : 'text-white hover:text-white/80'
      }`}
    >
      {children}
    </Link>
  );
} 