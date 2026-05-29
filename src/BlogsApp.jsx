import React, { useState, useEffect } from 'react';
import { TypographyBackground, UShapeBackground, EndlessTicker } from './components/Tablet';

export default function BlogsApp() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-between font-sans text-white select-none">
      
      {/* Background themed layers */}
      <TypographyBackground />
      <UShapeBackground />

      {/* Retro Header Sticky Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#FEFDF9] border-b-4 border-black h-[60px] md:h-[70px] flex items-center justify-between px-4 md:px-8 select-none">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Spinning Tape Icon */}
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-black bg-[#FACC15] flex items-center justify-center rounded-md shadow-[1.5px_1.5px_0px_#000] overflow-hidden">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-black animate-[spin_6s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </div>
          <div>
            <h1 className="font-black uppercase tracking-tight text-black text-sm md:text-xl">
              RAIPUR PODCAST
            </h1>
            <span className="text-[8px] md:text-[10px] font-black text-black/50 tracking-widest uppercase">
              Blogs Cabinet & Transcripts
            </span>
          </div>
        </div>

        {/* Back home Link */}
        <a
          href="/index.html"
          className="px-3 py-1.5 md:px-4 md:py-2 text-xs font-black border-2 border-black bg-[#FACC15] text-black rounded-md shadow-[2.5px_2.5px_0px_#000] hover:translate-y-[-1px] transition-all hover:bg-yellow-300 active:translate-y-[0px] active:shadow-none cursor-pointer flex items-center gap-1.5"
        >
          <span>📻</span> BACK TO RADIO
        </a>
      </header>

      {/* Main Container - Center Cabinet */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-30 px-4 pt-[90px] pb-16">
        
        {/* Styling for animated VU meters and spinners */}
        <style>
          {`
            @keyframes bounce-bars {
              0% { transform: scaleY(0.15); }
              100% { transform: scaleY(1); }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 1; }
            }
          `}
        </style>

        {/* Retro Cabinet Console Card */}
        <div className="w-full max-w-[500px] border-8 border-black bg-[#121212] rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_#FACC15] flex flex-col items-center text-center relative overflow-hidden">
          
          {/* Top Indicator Bars */}
          <div className="w-full flex justify-between items-center text-[8px] font-black text-[#FACC15] border-b-2 border-black pb-3 mb-6">
            <span>SYS_STATUS: STANDBY</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-[pulse-dot_1.5s_infinite]" />
              <span>TUNING SIGNAL</span>
            </div>
          </div>

          {/* CRT Screen graphic */}
          <div className="w-48 h-28 border-4 border-black bg-black rounded-xl overflow-hidden relative flex flex-col justify-center items-center p-2 mb-6">
            
            {/* Flashing Off-Air test pattern bars */}
            <div className="w-full h-8 flex">
              <div className="flex-1 bg-[#FFFFFF]/70"></div>
              <div className="flex-1 bg-[#FACC15]/70"></div>
              <div className="flex-1 bg-[#06B6D4]/70"></div>
              <div className="flex-1 bg-[#22C55E]/70"></div>
              <div className="flex-1 bg-[#EC4899]/70"></div>
              <div className="flex-1 bg-[#EF4444]/70"></div>
            </div>
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 z-10">
              <span className="text-[10px] font-black text-[#FACC15] tracking-widest animate-pulse">
                OFF LINE
              </span>
              <span className="text-[6px] font-black text-white/50 tracking-wider mt-1">
                STANDBY MODE
              </span>
            </div>

            {/* CRT Screen Scanlines */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.08] bg-gradient-to-b from-white via-transparent to-black" 
              style={{ backgroundSize: '100% 4px' }} 
            />
          </div>

          {/* Large Header */}
          <h2 className="font-black text-3xl md:text-4xl text-white tracking-tight uppercase leading-none">
            BLOGS CABINET
          </h2>
          
          <h3 className="font-black text-lg md:text-xl text-[#FACC15] tracking-wide uppercase mt-2">
            COMING SOON
          </h3>
          
          <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-4 max-w-[340px]">
            We are currently indexing transcripts and calibrating the teletype. Check back soon for the official broadcast logs!
          </p>

          {/* VU Level Meter Visualizer */}
          <div className="mt-8 flex items-end justify-center gap-1.5 bg-black border-4 border-black rounded-xl p-3.5 h-16 w-48 shadow-[4px_4px_0px_#000] overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bar, i) => {
              // Color spectrum for VU meters: green, yellow, red at top
              const barColor = i < 5 ? 'bg-green-500' : i < 8 ? 'bg-yellow-400' : 'bg-red-500';
              return (
                <div
                  key={i}
                  className={`w-2.5 rounded-t transition-all duration-300 ${barColor}`}
                  style={{
                    height: '100%',
                    transformOrigin: 'bottom',
                    animation: `bounce-bars 0.8s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              );
            })}
          </div>

          {/* Bottom border labels */}
          <div className="w-full flex justify-between items-center text-[7px] font-black text-white/40 border-t-2 border-black pt-3 mt-6">
            <span>RAIPUR DISPATCH TERMINAL</span>
            <span>FREQ bias: FM 91.1 MHz</span>
          </div>

        </div>

      </main>

      {/* Floating Ticker */}
      <EndlessTicker />

    </div>
  );
}
