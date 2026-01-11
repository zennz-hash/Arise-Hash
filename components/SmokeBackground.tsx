import React from 'react';

const SmokeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303]">
      {/* Remove Noise Texture completely to save performance */}
      {/* Main Glow - Center (Static) */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Moving Organic Shapes (Static) */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[40px]"
      />

      <div
        className="absolute top-[40%] -right-[10%] w-[350px] h-[350px] bg-gray-800/20 rounded-full blur-[30px]"
      />
    </div>
  );
};

export default SmokeBackground;