import React, { useState, useEffect } from 'react';
import { members } from '../team';

// Web Audio API Synthesizer to generate mechanical slide clicking sounds
const playShutterSound = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    // First high-frequency click (shutter blade release)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(180, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.04);
    
    gain1.gain.setValueAtTime(0.2, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.04);

    // Second low-frequency thud (slide tray rotation & drop, 90ms later)
    setTimeout(() => {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(80, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(5, ctx.currentTime + 0.08);
      
      gain2.gain.setValueAtTime(0.3, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.08);
    }, 90);
  } catch (e) {
    console.warn("AudioContext init blocked or failed:", e);
  }
};

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);
  const [shutterClosed, setShutterClosed] = useState(false);
  const [slideTimer, setSlideTimer] = useState(0);

  // Transition to a new slide with shutter blink animation
  const changeSlide = (index) => {
    if (index === activeIndex) return;
    playShutterSound();
    setShutterClosed(true);
    
    setTimeout(() => {
      setActiveIndex(index);
      setSlideTimer(0);
      setShutterClosed(false);
    }, 180);
  };

  // Run the 5-second auto-cycle feed timer
  useEffect(() => {
    let cycleTimer = null;
    let indexTimer = null;
    
    if (autoCycle) {
      // Auto-advance every 5 seconds
      cycleTimer = setInterval(() => {
        const nextIdx = (activeIndex + 1) % members.length;
        changeSlide(nextIdx);
      }, 5000);

      // Increment progress indicator seconds
      indexTimer = setInterval(() => {
        setSlideTimer(prev => (prev + 1) % 5);
      }, 1000);
    }
    
    return () => {
      if (cycleTimer) clearInterval(cycleTimer);
      if (indexTimer) clearInterval(indexTimer);
    };
  }, [autoCycle, activeIndex]);

  const handleNextSlide = () => {
    const nextIdx = (activeIndex + 1) % members.length;
    changeSlide(nextIdx);
  };

  const handlePrevSlide = () => {
    const prevIdx = (activeIndex - 1 + members.length) % members.length;
    changeSlide(prevIdx);
  };

  const activeMember = members[activeIndex];

  return (
    <div className="w-full bg-[#0a0a0a] border-t-8 border-[#FACC15] py-16 px-4 md:px-8 relative select-none bg-[radial-gradient(rgba(250,204,21,0.05)_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="w-full max-w-[1150px] mx-auto font-sans">
        
        {/* Section Header */}
        <div className="border-b-4 border-[#FACC15] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight flex flex-wrap items-center">
              MEET THE TEAM
              <span className="text-black bg-[#FACC15] px-2.5 py-0.5 rounded text-xs font-mono ml-3 inline-block border border-black shadow-[2.5px_2.5px_0px_#fff]">// TRANS-SLIDE.99</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-black text-gray-400 mt-1.5 uppercase tracking-wider">
              Carousel auto-rotates photo slides. Click slots or control switches to manually align feed signals.
            </p>
          </div>
          <div className="bg-[#FACC15] text-black font-black text-[10px] sm:text-xs border-2 border-black px-3.5 py-1.5 rounded shadow-[2.5px_2.5px_0px_#fff] md:shadow-[3.5px_3.5px_0px_#fff] uppercase shrink-0 w-fit">
            🎞️ Slide Projector System Online
          </div>
        </div>
        {/* Desktop View (lg:grid, hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: The Projector Screen (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-[500px] aspect-[4/5] bg-zinc-950 border-4 border-black rounded-2xl p-3 sm:p-5 shadow-[6px_6px_0px_#000] md:shadow-[8px_8px_0px_#000] relative overflow-hidden flex items-center justify-center">
              
              {/* Backlit Projector Lamp Halo Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.07)_0%,transparent_75%)] pointer-events-none" />
              
              {/* Giant Cardboard 35mm Slide Frame */}
              <div className="w-full h-full bg-[#f4ebd0] border-4 border-black rounded shadow-[inset_0_2px_10px_rgba(0,0,0,0.15)] flex flex-col justify-between p-4 relative select-none">
                
                {/* Top slide cardboard stamp */}
                <div className="border-b border-black/15 pb-1 flex justify-between items-center text-[7px] font-mono font-black uppercase text-zinc-600">
                  <span>RAIPUR PODCAST DEPT.</span>
                  <span>CAROUSEL SLIDE 35mm</span>
                  <span>CH-0{activeIndex + 1}</span>
                </div>

                {/* Shutter blackout flash overlay */}
                <div className={`absolute inset-0 bg-black z-50 pointer-events-none transition-opacity duration-150 ${
                  shutterClosed ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Big Portrait Photo Window */}
                <div className="flex-1 w-full border-4 border-black bg-neutral-900 overflow-hidden relative shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)] my-3.5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_80%)] pointer-events-none z-10" />
                  
                  {/* Projected Slide Image */}
                  <img 
                    src={activeMember.photo} 
                    alt={activeMember.name} 
                    className="w-full h-full object-cover animate-projector-glow filter contrast-[1.08] brightness-[1.02]"
                  />
                  
                  {/* Vignette film grain effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.45)_100%)] pointer-events-none mix-blend-multiply z-10" />
                </div>

                {/* Bottom slide cardboard details */}
                <div className="border-t-2 border-black pt-2 flex justify-between items-end font-mono uppercase">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-600">MEMBER IDENT:</span>
                    <span className="text-lg md:text-xl font-black text-black tracking-wide mt-0.5">{activeMember.name}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-black text-zinc-600">ASSIGNED ROLE:</span>
                    <span className="text-xs md:text-sm font-black text-red-600 tracking-wide mt-0.5">{activeMember.role}</span>
                  </div>
                </div>

                {/* Red approved signal stamp */}
                <div className="absolute bottom-16 right-8 border-2 border-red-600/30 text-red-600/30 text-[6.5px] font-mono uppercase font-black tracking-widest px-1.5 py-0.5 rounded rotate-[12deg] pointer-events-none select-none">
                  SIGNAL LOCK OK
                </div>
              </div>
              
            </div>
            
            {/* Projector Screen Border Feet Shadows */}
            <div className="w-11/12 h-1 bg-black/60 blur-[2px] rounded-full mt-3" />
          </div>

          {/* Right Column: Projector Control Box (5 columns on desktop) */}
          <div className="lg:col-span-5 bg-[#121212] text-white border-4 border-black rounded-2xl p-4 sm:p-6 shadow-[6px_6px_0px_#FACC15] md:shadow-[8px_8px_0px_#FACC15] flex flex-col justify-between lg:min-h-[500px] h-auto">
            
            <div>
              {/* HUD Header Readout */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 select-none">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
                  PROJECTOR DESK // CONTROL PANEL
                </h3>
                <div className="flex items-center gap-1.5 font-mono text-[8px] text-zinc-500">
                  <span className={`w-1.5 h-1.5 rounded-full border border-black ${
                    autoCycle ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
                  }`} />
                  <span>{autoCycle ? 'AUTO-RUNNING' : 'FROZEN'}</span>
                </div>
              </div>

              {/* Technical Monospace Specs Readout */}
              <div className="border-2 border-black bg-black/40 rounded-xl p-4 font-mono text-[10px] space-y-2 select-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] mb-5">
                <div className="flex justify-between border-b border-zinc-800/40 pb-1.5">
                  <span className="text-zinc-500 font-bold">MEMBER IDENT:</span>
                  <span className="text-white font-black">{activeMember.name}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1.5">
                  <span className="text-zinc-500 font-bold">ASSIGNED ROLE:</span>
                  <span className="text-[#FACC15] font-black">{activeMember.role}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1.5">
                  <span className="text-zinc-500 font-bold">SHUTTER STATE:</span>
                  <span className={`font-black ${shutterClosed ? 'text-red-500' : 'text-green-500'}`}>
                    {shutterClosed ? '• SHUTTING' : '• OPENED'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-bold">FIELD INTERVAL:</span>
                  <span className="text-white font-black">5.00s CYCLE</span>
                </div>
              </div>

              {/* Slide Selector Tray Slots */}
              <div className="space-y-1.5 select-none max-h-[190px] overflow-y-auto border border-zinc-800/80 p-2 rounded-xl bg-neutral-900/40">
                {members.map((member, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={member.id}
                      onClick={() => changeSlide(idx)}
                      className={`w-full flex items-center justify-between font-mono text-[9px] px-3 py-2 border-2 rounded transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#FACC15] text-black border-black font-black shadow-[2px_2px_0px_#fff]'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="opacity-50">SLOT-0{idx + 1}</span>
                        <span className="uppercase tracking-tight">{member.name}</span>
                      </span>
                      <span className="text-[7.5px] uppercase font-black opacity-60">
                        {isActive ? '>> SELECTED <<' : member.role}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tactile Control Switches Block */}
            <div className="mt-5 border-t border-white/10 pt-4">
              
              {/* Progress counter light strip */}
              <div className="flex gap-1 items-center justify-between mb-3 text-[8.5px] font-mono text-zinc-500 select-none">
                <span>FEED CLOCK STATUS:</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-1.5 rounded-sm border border-black transition-all ${
                        autoCycle 
                          ? (i <= slideTimer ? 'bg-yellow-400 shadow-[0_0_4px_rgba(250,204,21,0.5)]' : 'bg-zinc-800')
                          : (i === slideTimer ? 'bg-zinc-600' : 'bg-zinc-800')
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Mechanical Buttons Grid */}
              <div className="grid grid-cols-4 gap-1 select-none shrink-0">
                {[
                  { id: 'run', label: 'AUTO RUN', active: autoCycle, action: () => setAutoCycle(true) },
                  { id: 'freeze', label: 'FREEZE', active: !autoCycle, action: () => setAutoCycle(false) },
                  { id: 'next', label: 'FWD >>', active: false, action: handleNextSlide },
                  { id: 'prev', label: '<< REV', active: false, action: handlePrevSlide }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={btn.action}
                    className={`py-2 px-0.5 text-[7px] sm:text-[8.5px] font-black border-2 border-black rounded shadow-[1.5px_1.5px_0px_#000] cursor-pointer transition-all active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none ${
                      btn.active
                        ? 'bg-[#FACC15] text-black shadow-none translate-x-[0.5px] translate-y-[0.5px]'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Mobile View (hidden on lg, visible on mobile) */}
        <div className="block lg:hidden select-none font-sans mt-4">
          <div className="bg-[#121212] border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_#FACC15] flex flex-row items-center justify-between gap-4">
            
            {/* Left: Projector Desk in scroll area */}
            <div className="w-1/2 overflow-y-auto max-h-[220px] pr-1.5 flex flex-col gap-3 font-mono">
              {/* Slots */}
              <div>
                <span className="text-[7.5px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">SLOTS:</span>
                <div className="flex flex-col gap-1">
                  {members.map((member, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={member.id}
                        onClick={() => changeSlide(idx)}
                        className={`w-full text-left px-2 py-1 text-[8.5px] font-mono border rounded transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#FACC15] text-black border-black font-black shadow-[1.5px_1.5px_0px_#fff]'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                        }`}
                      >
                        SLOT-0{idx + 1} {member.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Readout */}
              <div className="border border-zinc-800 bg-black/45 rounded-lg p-2 text-[8px] space-y-1">
                <div className="flex justify-between border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-500 font-bold">NAME:</span>
                  <span className="text-white font-black">{activeMember.name}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1">
                  <span className="text-zinc-500 font-bold">ROLE:</span>
                  <span className="text-[#FACC15] font-black">{activeMember.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-bold">SHUTTER:</span>
                  <span className={`font-black ${shutterClosed ? 'text-red-500' : 'text-green-500'}`}>
                    {shutterClosed ? 'CLOSE' : 'OPEN'}
                  </span>
                </div>
              </div>

              {/* Progress counter light strip */}
              <div className="flex gap-1 items-center justify-between text-[7px] text-zinc-500">
                <span>FEED CLOCK:</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2.5 h-1 rounded-sm border border-black transition-all ${
                        autoCycle 
                          ? (i <= slideTimer ? 'bg-yellow-400 shadow-[0_0_2px_rgba(250,204,21,0.5)]' : 'bg-zinc-800')
                          : (i === slideTimer ? 'bg-zinc-600' : 'bg-zinc-800')
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Mechanical Buttons Grid */}
              <div className="grid grid-cols-2 gap-1 shrink-0">
                {[
                  { id: 'run', label: 'AUTO', active: autoCycle, action: () => setAutoCycle(true) },
                  { id: 'freeze', label: 'FREEZE', active: !autoCycle, action: () => setAutoCycle(false) },
                  { id: 'next', label: 'FWD >>', active: false, action: handleNextSlide },
                  { id: 'prev', label: '<< REV', active: false, action: handlePrevSlide }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={btn.action}
                    className={`py-1 px-0.5 text-[7.5px] font-black border border-black rounded shadow-[1px_1px_0px_#000] cursor-pointer transition-all active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none ${
                      btn.active
                        ? 'bg-[#FACC15] text-black shadow-none translate-x-[0.5px] translate-y-[0.5px]'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active Member Image */}
            <div className="w-1/2 flex flex-col items-center justify-center relative">
              {/* Cardboard look bezel */}
              <div className="w-full aspect-[4/5] max-w-[140px] bg-[#f4ebd0] border-4 border-black rounded-xl p-2 flex flex-col justify-between relative shadow-[inset_0_1px_4px_rgba(0,0,0,0.15)] select-none">
                
                {/* Shutter blackout flash overlay */}
                <div className={`absolute inset-0 bg-black z-50 pointer-events-none transition-opacity duration-150 rounded-lg ${
                  shutterClosed ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Big Portrait Photo Window */}
                <div className="flex-1 w-full border-2 border-black bg-neutral-900 overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center">
                  <img 
                    src={activeMember.photo} 
                    alt={activeMember.name} 
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.02]"
                  />
                  {/* Vignette film grain effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.45)_100%)] pointer-events-none mix-blend-multiply" />
                </div>
                
                {/* Cardboard Name caption */}
                <div className="text-center mt-1 border-t border-black/10 pt-1 font-mono uppercase text-[8.5px] font-black text-black">
                  {activeMember.name}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes projector-shimmer {
            0%, 100% { filter: brightness(1) contrast(1.08); }
            33% { filter: brightness(1.02) contrast(1.06); }
            66% { filter: brightness(0.99) contrast(1.1); }
          }
          .animate-projector-glow {
            animation: projector-shimmer 0.4s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
