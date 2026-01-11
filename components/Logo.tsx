import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-accent/20 blur-md rounded-full" />
      <img
        src="/logo.png"
        alt="AriseHash Mark"
        className="relative z-10 w-full h-full object-contain"
      />
    </div>
    <span className="text-xl font-display font-bold tracking-tight text-white">
      Arise<span className="text-brand-accent">Hash</span>
    </span>
  </div>
);