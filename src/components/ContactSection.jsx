import React from 'react';

export default function ContactSection() {
  const lines = [
    {
      id: 0,
      lineCode: "LINE 01 // BROADCAST FEEDBACK",
      title: "HAVE A QUERY?",
      desc: "Got suggestions, comments, or general queries for our podcast hosts? Reach out to our general mail queue.",
      badge: "GENERAL",
      color: "border-neutral-800",
      socketColor: "border-yellow-500 bg-yellow-500/10",
    },
    {
      id: 1,
      lineCode: "LINE 02 // CREATIVE HOTLINE",
      title: "WANT TO BE A GUEST?",
      desc: "Have a unique story about Chhattisgarh's culture, food, or startups? Pitch to join the studio microphone.",
      badge: "GUEST PITCH",
      color: "border-neutral-800",
      socketColor: "border-blue-500 bg-blue-500/10",
    },
    {
      id: 2,
      lineCode: "LINE 03 // SPONSOR HOTLINE",
      title: "PROMOTE YOUR BUSINESS",
      desc: "⚡ PRIORITY SPOTLIGHT: Sponsor Chhattisgarhi Cabinet podcast to showcase your brand to local listeners.",
      badge: "SPONSOR DESK",
      color: "border-neutral-800",
      socketColor: "border-red-500 bg-red-500/10",
      isPriority: true,
    }
  ];

  return (
    <div className="w-full bg-[#FACC15] border-t-8 border-black py-16 px-4 md:px-8 relative select-none bg-[radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
      
      {/* Background Watermark/Ticker lines */}
      <div className="absolute top-2 inset-x-0 overflow-hidden whitespace-nowrap opacity-[0.06] select-none pointer-events-none text-[9px] font-mono font-black tracking-widest text-black uppercase">
        {"CHHATTISGARH BROADCAST SYSTEM // CENTRAL EXCHANGE TERMINAL // TRANSMITTER ACTIVE // ".repeat(10)}
      </div>
      <div className="absolute bottom-2 inset-x-0 overflow-hidden whitespace-nowrap opacity-[0.06] select-none pointer-events-none text-[9px] font-mono font-black tracking-widest text-black uppercase">
        {"RAIPUR STUDIO INCOMING // HOTLINE COORDS // SIGNAL LOCK 91.1 MHZ // ".repeat(10)}
      </div>

      {/* Retro Technical Watermarks / SVG Line-Art Decals */}
      <div className="absolute top-20 left-10 w-44 h-44 text-black opacity-[0.04] select-none pointer-events-none hidden xl:block animate-[spin_60s_linear_infinite]">
        {/* Telephone circular dial schematic */}
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
          <circle cx="17" cy="9" r="1" fill="currentColor" />
          <circle cx="17" cy="15" r="1" fill="currentColor" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <circle cx="7" cy="15" r="1" fill="currentColor" />
          <circle cx="7" cy="9" r="1" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 w-44 h-44 text-black opacity-[0.04] select-none pointer-events-none hidden xl:block">
        {/* Retro radio antenna tower */}
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="1">
          <path d="M12 2 L12 22 M6 20 L12 6 L18 20 M9 13 L15 13" />
          <circle cx="12" cy="4" r="2" fill="currentColor" />
          <path d="M4 6 C 1 9, 1 15, 4 18" />
          <path d="M20 6 C 23 9, 23 15, 20 18" />
        </svg>
      </div>

      <div className="w-full max-w-[1150px] mx-auto font-sans relative z-10">
        
        {/* Section Header */}
        <div className="border-b-4 border-black pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight flex flex-wrap items-center">
              CONTACT US
              <span className="text-white bg-black px-2.5 py-0.5 rounded text-xs font-mono ml-3 inline-block border border-[#FACC15] shadow-[2.5px_2.5px_0px_#000]">// DIRECT LINES</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-black text-black/70 mt-1.5 uppercase tracking-wider">
              CENTRAL PATCH BAY ROUTER • TELEPHONE BOARD MODULES // ALL HOTLINES READY
            </p>
          </div>
          <div className="bg-black text-[#FACC15] font-black text-[10px] sm:text-xs border-2 border-black px-3.5 py-1.5 rounded shadow-[2.5px_2.5px_0px_#fff] md:shadow-[3.5px_3.5px_0px_#fff] uppercase shrink-0 w-fit">
            🔌 Operator Terminal Online
          </div>
        </div>

        {/* The Mahogany Switchboard Console Frame */}
        <div className="relative bg-[#181615] border-8 border-black rounded-3xl lg:rounded-[2.5rem] p-4 md:p-8 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] overflow-hidden">
          {/* Wood bezel texture ring */}
          <div className="absolute inset-1.5 border-4 border-[#2d221a] pointer-events-none rounded-[2.1rem] z-20" />
          <div className="absolute inset-4 border border-black/40 pointer-events-none rounded-[1.95rem] z-20" />

          {/* TOP HALF: Static Line Cards (Non-clickable) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-8 relative z-10">
            {lines.map((line, idx) => {
              return (
                <div
                  key={line.id}
                  className={`bg-[#0f0e0d] border-2 md:border-4 rounded-xl md:rounded-2xl p-2 md:p-5 flex flex-col justify-between min-h-[105px] h-auto md:h-[180px] select-none text-white border-neutral-800 shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000] ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Header line placard */}
                      <div className="flex justify-between items-center border-b border-white/5 pb-1 md:pb-2.5 mb-1.5 md:mb-3">
                        <span className="text-[6.5px] md:text-[8px] font-mono text-zinc-500 font-bold uppercase tracking-widest leading-none">
                          {line.lineCode}
                        </span>
                        {line.isPriority && (
                          <span className="text-[6px] md:text-[7px] font-black font-mono text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/30 px-1 rounded animate-pulse">
                            PRIORITY
                          </span>
                        )}
                      </div>

                      <h4 className="text-[9.5px] md:text-sm font-black uppercase tracking-tight text-white leading-none">
                        {line.title}
                      </h4>
                      
                      <p className="text-[7.5px] md:text-[10px] text-zinc-400 font-semibold leading-relaxed mt-1 md:mt-2">
                        {line.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM HALF: Routing Patch-Bay (Left) & CRT Radar Monitor (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* BOTTOM LEFT: Routing Junction Box (5 columns) */}
            <div className="lg:col-span-5 bg-[#0f0e0d] border-4 border-black rounded-3xl p-3 md:p-5 flex flex-col justify-between shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)]">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2 md:pb-3.5 mb-2 md:mb-4">
                  <h3 className="text-[10px] md:text-xs font-black uppercase tracking-wider text-zinc-400">
                    JUNCTION ROUTING // PATCH-BAY
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[7px] md:text-[8px] text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse border border-black" />
                    <span>ALL LIVE</span>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] text-zinc-500 font-semibold leading-relaxed uppercase tracking-wider mb-2 md:mb-4">
                  Transmitter dispatch active. Click any channel link below to open direct hotlines.
                </p>
              </div>

              {/* Stacked Connection Cables */}
              <div className="space-y-1.5 md:space-y-4 flex-grow flex flex-col justify-center py-1">
                
                {/* Connection 1: Email */}
                <div className="flex items-center gap-1.5 md:gap-3 w-full">
                  {/* Socket Port */}
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-yellow-500 bg-neutral-900 flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-yellow-500 rounded-full border border-black/80 shadow-[0_0_8px_rgba(250,204,21,0.6)] animate-pulse" />
                  </div>
                  {/* The button link */}
                  <a 
                    href="mailto:cg@chhattisgarhicabinet.com?subject=Inquiry%20from%20Website"
                    className="flex-grow flex items-center justify-between border-2 md:border-4 border-black p-1.5 md:p-3 rounded-lg md:rounded-xl transition-all cursor-pointer font-black bg-[#FACC15] text-black shadow-[1.5px_1.5px_0px_#fff] md:shadow-[3px_3px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  >
                    <div className="flex flex-col items-start leading-none min-w-0">
                      <span className="text-[5px] md:text-[7px] font-mono text-zinc-800 uppercase font-black">ROUTE 01 // MAIL</span>
                      <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-tight truncate w-full mt-0.5">cg@cgcabinet.com</span>
                    </div>
                    <span className="text-[6.5px] md:text-[9px] font-black uppercase shrink-0 ml-2 bg-black text-[#FACC15] px-1 md:px-1.5 py-0.5 rounded">
                      OPEN
                    </span>
                  </a>
                </div>

                {/* Connection 2: Phone */}
                <div className="flex items-center gap-1.5 md:gap-3 w-full">
                  {/* Socket Port */}
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-blue-500 bg-neutral-900 flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-500 rounded-full border border-black/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
                  </div>
                  {/* The button link */}
                  <a 
                    href="tel:+919876543210"
                    className="flex-grow flex items-center justify-between border-2 md:border-4 border-black p-1.5 md:p-3 rounded-lg md:rounded-xl transition-all cursor-pointer font-black bg-[#3B82F6] text-white shadow-[1.5px_1.5px_0px_#fff] md:shadow-[3px_3px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  >
                    <div className="flex flex-col items-start leading-none min-w-0">
                      <span className="text-[5px] md:text-[7px] font-mono text-blue-200 uppercase font-black">ROUTE 02 // CALL</span>
                      <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-tight truncate w-full mt-0.5">+91 98765 43210</span>
                    </div>
                    <span className="text-[6.5px] md:text-[9px] font-black uppercase shrink-0 ml-2 bg-black text-white px-1 md:px-1.5 py-0.5 rounded">
                      CALL
                    </span>
                  </a>
                </div>

                {/* Connection 3: WhatsApp */}
                <div className="flex items-center gap-1.5 md:gap-3 w-full">
                  {/* Socket Port */}
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-red-500 bg-neutral-900 flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-red-500 rounded-full border border-black/80 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                  </div>
                  {/* The button link */}
                  <a 
                    href="https://wa.me/919876543210?text=Hello%20Chhattisgarhi%20Cabinet%20Team!%20I%20am%20interested%20in%20promoting%20my%20business%20on%20your%20podcast."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-between border-2 md:border-4 border-black p-1.5 md:p-3 rounded-lg md:rounded-xl transition-all cursor-pointer font-black bg-[#EF4444] text-white shadow-[1.5px_1.5px_0px_#FACC15] md:shadow-[3px_3px_0px_#FACC15] ring-1 md:ring-2 ring-[#FACC15] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#FACC15] active:translate-x-0 active:translate-y-0 active:shadow-none"
                  >
                    <div className="flex flex-col items-start leading-none min-w-0">
                      <span className="text-[5px] md:text-[7px] font-mono text-red-200 uppercase font-black">ROUTE 03 // CH-3 PRIORITY</span>
                      <span className="text-[8px] md:text-[11px] font-bold uppercase tracking-tight truncate w-full mt-0.5">WHATSAPP SPONSOR</span>
                    </div>
                    <span className="text-[6.5px] md:text-[9px] font-black uppercase shrink-0 ml-2 bg-black text-[#FACC15] px-1 md:px-1.5 py-0.5 rounded">
                      PRIORITY
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* BOTTOM RIGHT: CRT Radar Terminal Map (7 columns) */}
            <div className="lg:col-span-7 flex flex-col bg-[#0f0e0d] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000] text-white">
              {/* Monitor Header */}
              <div className="bg-[#181615] border-b-4 border-black px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FACC15] animate-ping" />
                  <span className="text-[10px] font-black font-mono tracking-widest text-[#FACC15]">
                    COORDINATES // BROADCAST HQ TERMINAL
                  </span>
                </div>
                <span className="text-[9px] font-mono text-zinc-500">LOC: RAIPUR, CG</span>
              </div>

              {/* CRT Screen Panel */}
              <div className="relative p-4 bg-neutral-950 flex-grow flex flex-col justify-between">
                
                {/* Map inside CRT scope grid */}
                <div className="relative w-full border-2 border-[#FACC15]/30 rounded-xl overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.85)] h-[140px] min-h-[140px] md:min-h-[220px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.349603099042!2d81.65997237589635!3d21.23781298075727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd1652430b35%3A0xe54d249f3e49755f!2sTelibandha%20Talab!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Telibandha Talab Raipur Coordinates"
                  />
                  
                  {/* Subtle CRT Scanline overlay line grids */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] opacity-40 z-10" />
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(250,204,21,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[length:35px_35px] z-10" />
                  
                  {/* Subtle sweep radar animation sweep overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_0deg,transparent_75%,rgba(250,204,21,0.03)_95%,rgba(250,204,21,0.06)_100%)] rounded-full w-[160%] h-[160%] -left-1/3 -top-1/3 animate-[spin_12s_linear_infinite] z-10" />
                </div>

                {/* Scope panel stats */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap justify-between items-center gap-3 select-none">
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-900 relative shadow-[1px_1px_0px_rgba(255,255,255,0.1)]">
                        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#FACC15]" />
                      </div>
                      <span className="text-[6px] font-mono text-zinc-500 uppercase mt-1">BRIGHT</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-900 relative shadow-[1px_1px_0px_rgba(255,255,255,0.1)]">
                        <div className="absolute top-1 left-0.5 w-1 h-0.5 bg-[#FACC15]" />
                      </div>
                      <span className="text-[6px] font-mono text-zinc-500 uppercase mt-1">CONTRAST</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[8px] font-mono block text-zinc-500 uppercase leading-none">SIGNAL FREQ:</span>
                    <span className="text-[10px] font-black font-mono text-[#FACC15] mt-0.5 block">FM 91.1 MHz // RAIPUR LOCK</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
