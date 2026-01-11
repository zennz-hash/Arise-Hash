import React from 'react';
import { motion } from 'framer-motion';

const SmokeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303]">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-20" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] z-10" />

      {/* Main Glow - Center */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent rounded-full blur-[180px] opacity-20"
      />

      {/* Moving Organic Shapes */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          rotate: [0, 45, -45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-gray-800/40 rounded-full blur-[100px] mix-blend-screen"
      />
    </div>
  );
};

export default SmokeBackground;