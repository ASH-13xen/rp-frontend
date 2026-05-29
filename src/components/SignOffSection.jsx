import React, { useState } from 'react';

export default function SignOffSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting || isSubscribed) return;

    setIsSubmitting(true);
    
    // Simulate API registration delay
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail('');
    }, 1200);
  };

  return (
    <div className="w-full bg-[#0a0a0a] border-t-8 border-[#FACC15] py-16 px-4 md:px-8 relative select-none bg-[radial-gradient(rgba(250,204,21,0.05)_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
      
      {/* Decorative background horizontal scanlines */}
      <div className="absolute top-2 inset-x-0 overflow-hidden whitespace-nowrap opacity-[0.05] select-none pointer-events-none text-[8.5px] font-mono font-black tracking-widest text-[#FACC15] uppercase">
        {"RAIPUR TRANSMISSION SIGN-OFF // BROADCAST DIVISION // STATION UNFILTERED // ".repeat(10)}
      </div>

      <div className="w-full max-w-[1150px] mx-auto font-sans relative z-10">
        
        {/* Section Header */}
        <div className="border-b-4 border-[#FACC15] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight flex flex-wrap items-center">
              STAY UPDATED
              <span className="text-black bg-[#FACC15] px-2.5 py-0.5 rounded text-xs font-mono ml-3 inline-block border border-black shadow-[2.5px_2.5px_0px_#fff]">// CONNECTED</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-black text-gray-400 mt-1.5 uppercase tracking-wider">
              Enter your email to receive regular updates from the crew. Don't miss weekly creator interviews, Raipur cultural highlights, and exclusive drops!
            </p>
          </div>
          <div className="bg-[#FACC15] text-black font-black text-[10px] sm:text-xs border-2 border-black px-3.5 py-1.5 rounded shadow-[2.5px_2.5px_0px_#fff] md:shadow-[3.5px_3.5px_0px_#fff] uppercase shrink-0 w-fit">
            📡 Off-Air Feed Online
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: CRT TV Cabinet (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            {/* Wooden/Bakelite TV Cabinet Frame */}
            <div className="w-full bg-[#1e1713] border-8 border-black rounded-3xl lg:rounded-[2.5rem] p-3 sm:p-6 shadow-[6px_6px_0px_#FACC15] md:shadow-[10px_10px_0px_#FACC15] relative overflow-hidden flex flex-col justify-between border-b-[12px]">
              
              {/* Bezel inner highlight */}
              <div className="absolute inset-1.5 border-4 border-[#2e231c] pointer-events-none rounded-[2.1rem] z-20" />
              
              {/* Wood Grain Lines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,#000,#000_2px,transparent_2px,transparent_10px)]" />

              {/* TV Screen Wrapper (occupies full cabinet width) */}
              <div className="w-full bg-black border-4 border-black rounded-2xl relative overflow-hidden flex flex-col p-2 shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] z-10">
                
                {/* Top CRT screen placard */}
                <div className="border-b border-white/10 pb-1.5 mb-1.5 flex justify-between items-center text-[7.5px] font-mono text-zinc-500 font-bold uppercase select-none">
                  <span>RAIPUR NETWORK MAIN</span>
                  <span className="text-red-500 animate-pulse">● SIGNAL OFF-AIR</span>
                  <span>BEZEL V-2</span>
                </div>

                {/* Giant Photo Frame Container */}
                <div className="w-full aspect-[4/3] border-4 border-black rounded-lg overflow-hidden relative bg-neutral-900 shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_85%)] pointer-events-none z-10" />
                  
                  {/* The Group Photo */}
                  <img 
                    src="/hero.png" 
                    alt="Raipur Podcast Crew Group Photo" 
                    className="absolute inset-0 w-full h-full object-cover object-[50%_42%] filter contrast-[1.05] brightness-[0.93] saturate-[0.88] select-none"
                    style={{
                      animation: 'tv-flicker 0.15s infinite, tv-glitch 8s infinite'
                    }}
                  />
                  
                  {/* Screen CRT Curvature / Vignette */}
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] mix-blend-multiply z-10" />
                  
                  {/* Scanlines overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.22)_50%)] bg-[length:100%_4px] opacity-50 z-20" />
                  
                  {/* Animated Rolling Scanbar */}
                  <div 
                    className="absolute inset-x-0 h-16 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-25" 
                    style={{ animation: 'tv-scanbar 5s linear infinite' }} 
                  />
                  
                  {/* Noise Static Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" 
                    style={{ animation: 'noise-play 0.2s steps(4) infinite' }} 
                  />
                  
                  {/* Glass Sheen / Glare */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 z-30" />
                </div>

                {/* Bottom screen controls mock */}
                <div className="mt-1.5 pt-1.5 border-t border-white/10 flex justify-between items-center text-[8px] font-mono text-zinc-500 select-none">
                  <span>FEED: C-REC / BROADCAST</span>
                  <span className="text-[#FACC15]">CH-12 SYSTEM ACTIVE</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Text & Form Panel (5 columns) */}
          <div className="lg:col-span-5 bg-[#121212] text-white border-4 border-black rounded-3xl p-4 sm:p-6 shadow-[6px_6px_0px_#FACC15] md:shadow-[8px_8px_0px_#FACC15] flex flex-col justify-between lg:min-h-[440px] h-auto">
            
            {/* Newsletter Info block */}
            <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl select-none">
              <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                📡 JOIN THE BROADCAST LIST
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-sans">
                Enter your email address to receive regular updates from the crew. Get alerts for weekly Raipur cultural sessions, creator interviews, and catalog drops direct to your console. 
              </p>
              <div className="mt-3 text-[10px] font-black uppercase tracking-wide text-[#FACC15] flex items-center gap-1.5 font-sans">
                ⚠️ DON'T MISS OUT ON FUTURE TRANSMISSIONS!
              </div>
            </div>

            {/* Divider line */}
            <div className="border-b border-white/10 my-6" />

            {/* Newsletter Input Console */}
            <div className="flex-1 flex flex-col justify-center">
              <form onSubmit={handleSubscribe} className="space-y-4">
                {isSubscribed ? (
                  <div className="text-yellow-400 font-bold border-2 border-dashed border-[#FACC15]/30 p-4 rounded-xl bg-yellow-500/5 text-center select-none animate-[slide-in-tape_0.3s_ease-out_forwards]">
                    ✓ SIGNAL SECURED // SUBSCRIBED!
                    <p className="text-[10px] text-zinc-400 mt-1 font-normal uppercase font-mono">
                      You are now enrolled on the Raipur Podcast wire list.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-wider select-none">
                        ENTER EMAIL TO LOCK UPDATES WIRE:
                      </label>
                      <div className="relative border-4 border-black bg-zinc-950 rounded-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-green-500 text-xs select-none">
                          $
                        </span>
                        <input 
                          type="email"
                          required
                          placeholder="listener@raipurpodcast.com"
                          value={email}
                          disabled={isSubmitting}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent pl-8 pr-4 py-3 font-mono text-xs text-green-500 placeholder-green-950 border-0 outline-none focus:ring-0 select-text disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {/* Submitting button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-xs font-black border-4 border-black rounded-xl uppercase tracking-wider cursor-pointer shadow-[3.5px_3.5px_0px_#000] transition-all active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none bg-[#FACC15] text-black hover:bg-yellow-400 disabled:opacity-50"
                    >
                      {isSubmitting ? 'TRANSMITTING UPLINK...' : 'RECEIVE REGULAR UPDATES ⚡'}
                    </button>
                  </>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t-4 border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500 select-none">
          <div className="text-center sm:text-left">
            <span className="font-bold text-[#FACC15]">© {new Date().getFullYear()} RAIPUR PODCAST NETWORK.</span>
            <span className="block sm:inline sm:ml-1 text-[10px]">ALL TRANSMISSIONS SECURED.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 uppercase text-[10px] font-black tracking-wider text-zinc-400">
            <a href="#episodes" className="hover:text-[#FACC15] transition-colors">EPISODES</a>
            <a href="#team" className="hover:text-[#FACC15] transition-colors">THE CREW</a>
            <a href="#contact" className="hover:text-[#FACC15] transition-colors">CONTACT DETECT</a>
          </div>
          <div className="text-[9px] tracking-wider text-zinc-600 uppercase text-center sm:text-right">
            SIGNAL: FM 91.1 MHZ // STATUS: OFF-AIR // RAIPUR HQ
          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes tv-flicker {
            0%, 100% { opacity: 0.985; filter: brightness(0.96) contrast(1.05) saturate(0.95); }
            50% { opacity: 1; filter: brightness(1.03) contrast(1.08) saturate(1); }
          }
          
          @keyframes tv-glitch {
            0%, 93%, 98%, 100% {
              transform: translate(0, 0) scale(1) skew(0deg);
              filter: hue-rotate(0deg) saturate(1) contrast(1);
            }
            94% {
              transform: translate(-3px, 1px) scale(1.02) skew(1deg);
              filter: hue-rotate(45deg) saturate(1.4) contrast(1.2);
            }
            95% {
              transform: translate(3px, -2px) scale(1.04) skew(-1.5deg);
              filter: hue-rotate(90deg) saturate(1.8) contrast(1.4);
            }
            96% {
              transform: translate(-2px, -3px) scale(1.01) skew(2deg);
              filter: hue-rotate(180deg) saturate(1.2) contrast(1.1);
            }
            97% {
              transform: translate(4px, 3px) scale(1.03) skew(-1deg);
              filter: hue-rotate(270deg) saturate(1.6) contrast(1.3);
            }
          }

          @keyframes tv-scanbar {
            0% { top: -20%; }
            100% { top: 120%; }
          }

          @keyframes noise-play {
            0% { transform: translate(0,0); }
            25% { transform: translate(-1.5%, 1%); }
            50% { transform: translate(1%, -1.5%); }
            75% { transform: translate(-0.5%, -0.5%); }
            100% { transform: translate(0,0); }
          }
        `}
      </style>
    </div>
  );
}
