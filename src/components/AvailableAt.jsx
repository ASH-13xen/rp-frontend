import React from 'react';

export default function AvailableAt() {
  return (
    <div className="w-full bg-[#0d0d0c] border-t-8 border-[#FACC15] py-16 px-4 md:px-8 relative select-none bg-[radial-gradient(rgba(250,204,21,0.03)_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">
      
      {/* Background Grunge Photocopy Watermarks */}
      <div className="absolute top-8 left-10 text-[90px] font-black text-white/[0.015] leading-none select-none pointer-events-none uppercase font-mono tracking-widest hidden lg:block">
        TUNE IN //
      </div>
      <div className="absolute bottom-8 right-10 text-[90px] font-black text-[#FACC15]/[0.015] leading-none select-none pointer-events-none uppercase font-mono tracking-widest hidden lg:block">
        LIVE NOW //
      </div>

      <div className="w-full max-w-[1150px] mx-auto font-sans relative z-10">
        
        {/* Section Header */}
        <div className="border-b-4 border-[#FACC15] pb-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight flex flex-wrap items-center">
              AVAILABLE PLATFORMS
              <span className="text-black bg-[#FACC15] px-2.5 py-0.5 rounded text-xs font-mono ml-3 inline-block border border-black shadow-[2.5px_2.5px_0px_#fff]">// CHANNEL FEEDS</span>
            </h2>
            <p className="text-[10px] sm:text-xs font-black text-gray-400 mt-1.5 uppercase tracking-wider">
              Collect our catalog feeds or follow broadcasts across platforms
            </p>
          </div>
          <div className="bg-[#FACC15] text-black font-black text-[10px] sm:text-xs border-2 border-black px-3.5 py-1.5 rounded shadow-[2.5px_2.5px_0px_#fff] md:shadow-[3.5px_3.5px_0px_#fff] uppercase shrink-0 w-fit">
            📼 Live Transmitters
          </div>
        </div>

        {/* TOP SECTION: Duct-Tape Gig Posters (Spotify & YouTube) */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 mb-12 md:mb-16">
          
          {/* Spotify Gig Poster Card */}
          <a 
            href="https://open.spotify.com/show/4svPqwTQVTgRxClxsPe6LP?si=LuyNizMWRKSMxH-2a6QEEQ&nd=1&dlsi=4abfe9ff62514f0a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#141414] border-2 md:border-4 border-black rounded-xl md:rounded-2xl p-2 md:p-6 shadow-[2px_2px_0px_#000] md:shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#1DB954] transition-all duration-300 relative group flex flex-col justify-between min-h-[140px] md:min-h-[350px] -rotate-1.5 hover:rotate-0 hover:scale-[1.015] cursor-pointer"
          >
            {/* Duct-Tape corner overlays */}
            <div className="absolute -top-3.5 -left-3 w-16 h-6.5 bg-zinc-700/30 border-x border-black/10 rotate-[-30deg] pointer-events-none shadow-[1px_1px_2px_rgba(0,0,0,0.15)] z-20 hidden md:block" />
            <div className="absolute -top-3.5 -right-3 w-16 h-6.5 bg-zinc-700/30 border-x border-black/10 rotate-[30deg] pointer-events-none shadow-[1px_1px_2px_rgba(0,0,0,0.15)] z-20 hidden md:block" />
            
            {/* Header info */}
            <div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1 md:pb-3.5 mb-1.5 md:mb-4 font-mono text-[6px] md:text-[9px] text-zinc-500 font-bold uppercase select-none">
                <span>PRESET // CG-104.2</span>
                <span className="text-[#1DB954]">● STEREO</span>
              </div>

              <div className="flex gap-1.5 md:gap-4">
                {/* Halftone green print graphic */}
                <div className="w-7 h-7 md:w-16 md:h-16 bg-[#1DB954]/10 border-2 border-black rounded-lg shrink-0 flex items-center justify-center relative shadow-[1px_1px_0px_#000] md:shadow-[2px_2px_0px_#000] overflow-hidden select-none">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(29,185,84,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(29,185,84,0.1)_1px,transparent_1px)] bg-[length:6px_6px]" />
                  <span className="text-sm md:text-3xl filter drop-shadow-[1px_1px_1px_#000]">🎧</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-[9px] md:text-xl font-black text-white uppercase tracking-tight leading-none group-hover:text-[#1DB954] transition-colors">
                    SPOTIFY
                  </h3>
                  <span className="text-[4.5px] md:text-[7.5px] font-mono text-zinc-400 font-bold uppercase tracking-wider block mt-0.5 md:mt-1.5 truncate">
                    HI-FI AUDIO
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-300 font-semibold leading-relaxed mt-5 hidden md:block">
                Listen to full stereo recordings of all Raipur Podcast episodes. Catch weekly discussions on food, startups, and Chhattisgarhi culture on-the-go.
              </p>
            </div>

            {/* Launch button */}
            <div className="mt-2 md:mt-6 bg-[#1DB954] text-black border-2 border-black font-black py-1 md:py-3 rounded-md md:rounded-xl shadow-[1px_1px_0px_#fff] md:shadow-[3px_3px_0px_#fff] uppercase text-center text-[7.5px] md:text-xs tracking-wider group-hover:bg-[#1db954]/90 active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none transition-all">
              TUNE IN ⚡
            </div>
          </a>

          {/* YouTube Gig Poster Card */}
          <a 
            href="https://www.youtube.com/@RaipurPodcast" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#141414] border-2 md:border-4 border-black rounded-xl md:rounded-2xl p-2 md:p-6 shadow-[2px_2px_0px_#000] md:shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#EF4444] transition-all duration-300 relative group flex flex-col justify-between min-h-[140px] md:min-h-[350px] rotate-1.5 hover:rotate-0 hover:scale-[1.015] cursor-pointer"
          >
            {/* Duct-Tape corner overlays */}
            <div className="absolute -top-3.5 -left-3 w-16 h-6.5 bg-zinc-700/30 border-x border-black/10 rotate-[-30deg] pointer-events-none shadow-[1px_1px_2px_rgba(0,0,0,0.15)] z-20 hidden md:block" />
            <div className="absolute -top-3.5 -right-3 w-16 h-6.5 bg-zinc-700/30 border-x border-black/10 rotate-[30deg] pointer-events-none shadow-[1px_1px_2px_rgba(0,0,0,0.15)] z-20 hidden md:block" />

            {/* Header info */}
            <div>
              <div className="flex justify-between items-center border-b border-white/5 pb-1 md:pb-3.5 mb-1.5 md:mb-4 font-mono text-[6px] md:text-[9px] text-zinc-500 font-bold uppercase select-none">
                <span>PRESET // CG-107.8</span>
                <span className="text-[#EF4444]">● VIDEO</span>
              </div>

              <div className="flex gap-1.5 md:gap-4">
                {/* Halftone red print graphic */}
                <div className="w-7 h-7 md:w-16 md:h-16 bg-[#EF4444]/10 border-2 border-black rounded-lg shrink-0 flex items-center justify-center relative shadow-[1px_1px_0px_#000] md:shadow-[2px_2px_0px_#000] overflow-hidden select-none">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[length:6px_6px]" />
                  <span className="text-sm md:text-3xl filter drop-shadow-[1px_1px_1px_#000]">📺</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-[9px] md:text-xl font-black text-white uppercase tracking-tight leading-none group-hover:text-[#EF4444] transition-colors">
                    YOUTUBE
                  </h3>
                  <span className="text-[4.5px] md:text-[7.5px] font-mono text-zinc-400 font-bold uppercase tracking-wider block mt-0.5 md:mt-1.5 truncate">
                    MULTICAM VIDEO
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-300 font-semibold leading-relaxed mt-5 hidden md:block">
                Watch full uncut multi-camera video recordings of the podcast, along with exclusive behind-the-scenes segments and local cultural vlogs.
              </p>
            </div>

            {/* Launch button */}
            <div className="mt-2 md:mt-6 bg-[#EF4444] text-white border-2 border-black font-black py-1 md:py-3 rounded-md md:rounded-xl shadow-[1px_1px_0px_#fff] md:shadow-[3px_3px_0px_#fff] uppercase text-center text-[7.5px] md:text-xs tracking-wider group-hover:bg-[#EF4444]/90 active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none transition-all">
              WATCH NOW 📺
            </div>
          </a>

        </div>

        {/* BOTTOM SECTION: Social Library Sticker Collage */}
        <div>
          <div className="flex items-center gap-3 mb-8 select-none">
            <span className="text-xs font-black text-[#FACC15] font-mono">//</span>
            <h3 className="text-xs font-black text-zinc-400 uppercase tracking-wider">
              STREET INDEX // FOLLOW SIGNALS
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            
            {/* Instagram Index Card - Polaroid Sticker slap */}
            <a 
              href="https://www.instagram.com/raipur_podcast/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FCF9F2] text-black border-2 md:border-4 border-black p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-[2px_2px_0px_#000] md:shadow-[5px_5px_0px_#000] ring-2 md:ring-4 ring-white relative flex flex-col justify-between min-h-[110px] md:min-h-[175px] -rotate-3 hover:rotate-0 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] cursor-pointer transition-all duration-300 sticker-hover"
            >
              <div className="flex justify-between items-start select-none border-b border-black/10 pb-1.5 md:pb-2">
                <span className="text-[6.5px] md:text-[7.5px] font-mono font-bold text-zinc-500">INDEX.01 // INSTA</span>
                <span className="text-xs md:text-sm">📸</span>
              </div>
              {/* Polaroid bottom caption */}
              <div className="mt-2 md:mt-4 leading-none select-none">
                <span className="text-[6px] md:text-[7px] text-zinc-400 font-mono block">PLATFORM:</span>
                <span className="text-[8.5px] md:text-xs font-black text-[#EC4899] block mt-0.5 tracking-tight">INSTAGRAM</span>
                <span className="text-[6px] md:text-[7px] text-zinc-400 font-mono block mt-1.5 md:mt-2">HANDLE:</span>
                <span className="text-[9px] md:text-[11px] font-mono font-black text-black tracking-tight block mt-0.5">@RaipurPodcast</span>
              </div>
            </a>

            {/* Facebook Index Card - Ticket Stub sticker slap */}
            <a 
              href="https://www.facebook.com/61558775805966/photos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1D4ED8] text-white border-2 md:border-4 border-black p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-[2px_2px_0px_#000] md:shadow-[5px_5px_0px_#000] ring-2 md:ring-4 ring-white relative flex flex-col justify-between min-h-[110px] md:min-h-[175px] rotate-3 hover:rotate-0 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] cursor-pointer transition-all duration-300 sticker-hover"
            >
              <div className="flex justify-between items-start select-none border-b border-white/10 pb-1.5 md:pb-2">
                <span className="text-[6.5px] md:text-[7.5px] font-mono font-bold text-blue-200">INDEX.02 // FB</span>
                <span className="text-xs md:text-sm">👥</span>
              </div>
              {/* Barcode line mock at bottom */}
              <div className="mt-2 md:mt-4 leading-none select-none">
                <span className="text-[6px] md:text-[7px] text-blue-200 font-mono block">PLATFORM:</span>
                <span className="text-[8.5px] md:text-xs font-black text-white block mt-0.5 tracking-tight">FACEBOOK</span>
                <span className="text-[6px] md:text-[7px] text-blue-200 font-mono block mt-1.5 md:mt-2">ADDRESS:</span>
                <span className="text-[9px] md:text-[11px] font-mono font-black text-white tracking-tight block mt-0.5">/61558775805966</span>
              </div>
            </a>

            {/* Threads Index Card - Gaffer tape sticker slap */}
            <a 
              href="https://www.threads.com/@raipur_podcast?xmt=AQG01ALC8OlwB1b0qitTOy_lzxBKxJgzsDVWruNLYsI4n7M" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white border-2 md:border-4 border-white p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-[2px_2px_0px_#000] md:shadow-[5px_5px_0px_#000] ring-2 md:ring-4 ring-black relative flex flex-col justify-between min-h-[110px] md:min-h-[175px] -rotate-2 hover:rotate-0 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] cursor-pointer transition-all duration-300 sticker-hover"
            >
              <div className="flex justify-between items-start select-none border-b border-white/5 pb-1.5 md:pb-2">
                <span className="text-[6.5px] md:text-[7.5px] font-mono font-bold text-zinc-500">INDEX.03 // THR</span>
                <span className="text-xs md:text-sm">💬</span>
              </div>
              <div className="mt-2 md:mt-4 leading-none select-none">
                <span className="text-[6px] md:text-[7px] text-zinc-500 font-mono block">PLATFORM:</span>
                <span className="text-[8.5px] md:text-xs font-black text-white block mt-0.5 tracking-tight">THREADS</span>
                <span className="text-[6px] md:text-[7px] text-zinc-500 font-mono block mt-1.5 md:mt-2">HANDLE:</span>
                <span className="text-[9px] md:text-[11px] font-mono font-black text-[#FACC15] tracking-tight block mt-0.5">@RaipurPodcast</span>
              </div>
            </a>

            {/* LinkedIn Index Card - Professional badge sticker slap */}
            <a 
              href="https://in.linkedin.com/company/raipur-podcast" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0077B5] text-white border-2 md:border-4 border-black p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-[2px_2px_0px_#000] md:shadow-[5px_5px_0px_#000] ring-2 md:ring-4 ring-white relative flex flex-col justify-between min-h-[110px] md:min-h-[175px] rotate-2.5 hover:rotate-0 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] cursor-pointer transition-all duration-300 sticker-hover"
            >
              <div className="flex justify-between items-start select-none border-b border-white/10 pb-1.5 md:pb-2">
                <span className="text-[6.5px] md:text-[7.5px] font-mono font-bold text-blue-200">INDEX.04 // LNK</span>
                <span className="text-xs md:text-sm">💼</span>
              </div>
              <div className="mt-2 md:mt-4 leading-none select-none">
                <span className="text-[6px] md:text-[7px] text-blue-200 font-mono block">PLATFORM:</span>
                <span className="text-[8.5px] md:text-xs font-black text-white block mt-0.5 tracking-tight">LINKEDIN</span>
                <span className="text-[6px] md:text-[7px] text-blue-200 font-mono block mt-1.5 md:mt-2">COMPANY:</span>
                <span className="text-[9px] md:text-[11px] font-mono font-black text-white tracking-tight block mt-0.5">raipur-podcast</span>
              </div>
            </a>

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes sticker-wiggle {
            0%, 100% { transform: rotate(-2deg) scale(1.02); }
            50% { transform: rotate(2deg) scale(1.02); }
          }
          .sticker-hover:hover {
            animation: sticker-wiggle 0.35s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
