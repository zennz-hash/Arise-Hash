import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Paket Harga', path: '/packages' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl relative"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/50 relative z-20">
          <Link to="/" className="hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className="relative z-10">
                  <div className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-brand-accent rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black border border-white/10 transition-all duration-300 group"
            >
              Get Started
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-black transition-colors" />
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-2 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden md:hidden z-10"
            >
              <div className="flex flex-col gap-1 p-2">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-4 rounded-xl text-center font-medium text-lg transition-colors ${isActive
                        ? 'bg-brand-accent text-black'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <div className="mt-2 px-4 py-4 bg-white/10 text-white rounded-xl text-center font-bold border border-white/10 active:bg-white/20">
                    Order Now
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;