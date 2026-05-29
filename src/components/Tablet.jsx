import React, { useState, useEffect } from 'react';
import youtubeData from '../youtube_data.json';

// ==========================================
// 1. LAYOUT & COLOR CONFIGURATION
// ==========================================
const LAYOUT_CONFIG = {
  bgColorBlack: '#0a0a0a',
  bgColorYellow: '#FACC15', 

  // BACKGROUND TYPOGRAPHY
  bgFontFamily: '"Smooch Sans", sans-serif', 
  bgFontSize: '25px',        
  bgFontWeight: '600',        
  bgLetterSpacing: '-0.02em', 
  bgWordSpacing: '0.1em',
  bgTextOpacity: '0.1',      

  // TICKER CONTROLS
  tickerText: '• NEW EPISODE DROPPING FRIDAY • LIVE STUDIO SESSIONS • JOIN THE COMMUNITY • EXCLUSIVE INTERVIEWS ',
  tickerSpeed: '25s', 
};

const PODCAST_WORDS = [
  "PODCAST", "EPISODES", "CREATORS", "AUDIO", "STORIES", "INTERVIEWS",
  "NEWS", "CULTURE", "TECH", "SPORTS", "COMEDY", "CRIME", "BUSINESS",
  "DESIGN", "MEDIA", "SERIES", "FOOD", "LIFESTYLE", "TALK", "MUSIC",
  "RADIO", "BROADCAST", "VOICE", "STUDIO", "LIVE", "STREAM", "TRENDING"
];

// ==========================================
// 2. THE TYPOGRAPHY LAYER
// ==========================================
export const TypographyBackground = () => {
  const baseString = PODCAST_WORDS.join(" ");
  const infinitePattern = Array(200).fill(baseString).join(" ");

  return (
    <div className="absolute inset-0 z-10 overflow-hidden flex justify-center p-2 select-none pointer-events-none">
      <p 
        className="uppercase text-justify break-words text-white"
        style={{
          fontFamily: LAYOUT_CONFIG.bgFontFamily,
          fontSize: LAYOUT_CONFIG.bgFontSize,
          fontWeight: LAYOUT_CONFIG.bgFontWeight,
          opacity: LAYOUT_CONFIG.bgTextOpacity,
          letterSpacing: LAYOUT_CONFIG.bgLetterSpacing,
          wordSpacing: LAYOUT_CONFIG.bgWordSpacing,
          lineHeight: '1.2',
        }}
      >
        {infinitePattern}
      </p>
    </div>
  );
};

// ==========================================
// 3. THE U-SHAPED BACKGROUND
// ==========================================
export const UShapeBackground = () => {
  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden pointer-events-none z-20">
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        viewBox="0 0 1440 800" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,300 Q 720,950 1440,300 L 1440,1200 L 0,1200 Z" 
          fill={LAYOUT_CONFIG.bgColorYellow} 
        />
      </svg>
    </div>
  );
};

// ==========================================
// 4. ENDLESS NEWS CRAWL TICKER
// ==========================================
export const EndlessTicker = () => {
  const tickerContent = Array(4).fill(LAYOUT_CONFIG.tickerText).join(" ");

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-white/10 z-40 overflow-hidden py-1.5 flex items-center">
      <style>
        {`
          @keyframes ticker-scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-ticker {
            display: inline-block;
            white-space: nowrap;
            animation: ticker-scroll ${LAYOUT_CONFIG.tickerSpeed} linear infinite;
          }
        `}
      </style>
      <div className="animate-ticker text-[#FACC15] font-bold text-sm tracking-widest uppercase px-4">
        <span>{tickerContent}</span>
        <span>{tickerContent}</span>
      </div>
    </div>
  );
};

// ==========================================
// 6. DYNAMIC DATABASE FROM SCRAPED YOUTUBE CHANNEL
// ==========================================
const formatDuration = (seconds) => {
  if (!seconds) return "00:00";
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const getCategory = (title, uniqueIdentifier) => {
  const t = (title || "").toLowerCase();
  if (t.includes('food') || t.includes('culinary') || t.includes('sindhi') || t.includes('sardaar') || t.includes('taste') || t.includes('restaurant')) return 'Food';
  if (t.includes('skincare') || t.includes('hair') || t.includes('health') || t.includes('doctor') || t.includes('clinic') || t.includes('dermatologist') || t.includes('fitness')) return 'Fitness';
  if (t.includes('anchor') || t.includes('media') || t.includes('influencer') || t.includes('lalluram') || t.includes('show') || t.includes('spotlight') || t.includes('teacher') || t.includes('graphologist') || t.includes('personality') || t.includes('content') || t.includes('youtube')) return 'Influencers';
  return 'History';
};

const getMockDate = (idx) => {
  const dates = [
    "May 25, 2026", "May 18, 2026", "May 10, 2026", "May 03, 2026", 
    "Apr 26, 2026", "Apr 19, 2026", "Apr 12, 2026", "Apr 05, 2026",
    "Mar 29, 2026", "Mar 22, 2026", "Mar 15, 2026", "Mar 08, 2026"
  ];
  return dates[idx % dates.length];
};

export const MOCK_EPISODES = (youtubeData?.videos || []).map((video, idx) => ({
  id: video.episode_number ? parseInt(video.episode_number, 10) : (idx + 1),
  title: video.title,
  host: video.unique_identifier || "Raipur Podcast Crew",
  duration: formatDuration(video.duration_seconds),
  date: getMockDate(idx),
  category: getCategory(video.title, video.unique_identifier),
  description: video.description || "",
  videoUrl: `https://www.youtube.com/embed/${video.video_id}`,
  thumbnailUrl: video.thumbnail_url || "",
}));

// ==========================================
// 7. THE TABLET COMPONENT
// ==========================================
const Tablet = ({ isPlaying, setIsPlaying, currentTrack, setCurrentTrack, volume: propVolume, setVolume: propSetVolume, onNavigate }) => {
  const [localVolume, setLocalVolume] = useState(70);
  const volume = propVolume !== undefined ? propVolume : localVolume;
  const setVolume = propSetVolume || setLocalVolume;

  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const mobileMode = w < 768;
      setIsMobile(mobileMode);
      
      if (mobileMode) {
        // on mobile, if viewport is extremely small, scale the 340px width slightly
        if (w < 360) {
          setScale((w - 20) / 340);
        } else {
          setScale(1);
        }
      } else {
        if (w < 1180) {
          setScale((w - 32) / 1150);
        } else {
          setScale(1);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update volume of YT Player when state changes (using direct postMessage to bypass API bugs)
  useEffect(() => {
    const sendVolume = () => {
      const iframe = document.getElementById('yt-player');
      if (iframe && iframe.contentWindow) {
        try {
          iframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setVolume',
            args: [volume]
          }), '*');
        } catch (e) {
          console.error("Failed to send postMessage volume to YT player", e);
        }
      }
    };

    sendVolume();
    const t1 = setTimeout(sendVolume, 450);
    const t2 = setTimeout(sendVolume, 1000);
    const t3 = setTimeout(sendVolume, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [volume, isPlaying, currentTrack]);

  const handleLoadTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div 
      className="relative flex items-center justify-center select-none"
      style={{
        width: isMobile ? `${340 * scale}px` : `${1150 * scale}px`,
        height: isMobile ? `${580 * scale}px` : `${600 * scale}px`,
        transition: 'width 0.1s ease, height 0.1s ease',
      }}
    >
      <div 
        className="relative z-30 bg-black border-8 border-black shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        style={{
          width: isMobile ? '340px' : '1150px',
          height: isMobile ? '580px' : '600px',
          borderRadius: isMobile ? '2rem' : '3rem',
          padding: isMobile ? '12px' : '22px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'absolute',
        }}
      >
        <div className="w-full h-full bg-[#FDFBF5] rounded-[1.4rem] md:rounded-[2.25rem] relative flex flex-col overflow-hidden">
        
        {/* Inject CSS animations */}
        <style>
          {`
            @keyframes bounce-bars {
              0% { transform: scaleY(0.2); }
              100% { transform: scaleY(1); }
            }
          `}
        </style>

        {/* RETRO NAVBAR */}
        <div className={`${isMobile ? 'h-[50px] px-3' : 'h-[65px] px-6'} border-b-4 border-black flex items-center justify-between bg-[#FEFDF9] select-none z-20`}>
          <div className="flex items-center gap-2 md:gap-3">
            {/* Spinning Tape Icon */}
            <div className={`${isMobile ? 'w-7 h-7' : 'w-9 h-9'} border-2 border-black bg-[#FACC15] flex items-center justify-center rounded-md shadow-[1.5px_1.5px_0px_#000] overflow-hidden`}>
              <svg className={`w-5 h-5 text-black ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            </div>
            <div>
              <span className={`font-black uppercase tracking-tight text-black ${isMobile ? 'text-xs' : 'text-lg'}`}>
                RAIPUR PODCAST
              </span>
              {!isMobile && (
                <span className="ml-2 text-[10px] font-black bg-[#FACC15] text-black px-1.5 py-0.5 border-2 border-black rounded shadow-[1px_1px_0px_#000]">
                  UNFILTERED
                </span>
              )}
            </div>
          </div>
          
          {/* Nav Tabs */}
          <div className="flex gap-2 relative">
            {!isMobile ? (
              <>
                {[
                  { id: 'stories', target: 'episodes', label: 'EPISODES' },
                  { id: 'hosts', target: 'team', label: 'MEET THE TEAM' },
                  { id: 'fanzone', target: 'contact', label: 'CONTACT US' },
                  { id: 'blogs', target: 'blogs', label: 'BLOGS', isExternal: true }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.isExternal) {
                        window.open('/blogs.html', '_blank');
                      } else if (typeof onNavigate === 'function') {
                        onNavigate(tab.target);
                      }
                    }}
                    className="px-3 py-1.5 text-xs font-black border-2 border-black bg-white text-black/75 hover:text-black hover:bg-[#FACC15] hover:translate-y-[-1px] transition-all cursor-pointer rounded-md shadow-[2px_2px_0px_#000] active:translate-y-[0px] active:shadow-none"
                  >
                    {tab.label}
                  </button>
                ))}
              </>
            ) : (
              /* On mobile, duplicate hamburger is removed since we have the sticky global navbar */
              <span className="text-[10px] font-black bg-[#FACC15] text-black px-1.5 py-0.5 border-2 border-black rounded shadow-[1px_1px_0px_#000]">
                UNFILTERED
              </span>
            )}
          </div>
        </div>

        {/* MAIN PANEL GRID */}
        <div className={`flex-1 flex ${isMobile ? 'flex-col' : 'flex-row'} overflow-hidden z-10`}>
          
          {/* LEFT COLUMN: PLAYER CONSOLE */}
          <div className={`${isMobile ? 'w-full h-[260px] border-b-4 border-black p-3' : 'w-1/2 border-r-4 border-black p-5'} bg-[#FEFBF2] flex flex-col justify-between overflow-y-auto select-none`}>
            
            {/* VINTAGE CRT TV SCREEN */}
            <div className={`w-full border-4 border-black bg-[#2E2D2A] rounded-xl p-2 md:p-3 shadow-[4px_4px_0px_#000] flex relative shrink-0 ${isMobile ? 'h-[160px]' : 'h-[290px]'}`}>
              {/* CRT Screen */}
              <div className="flex-1 bg-black border-2 border-black rounded relative overflow-hidden h-full">
                {isPlaying ? (
                  <iframe
                    id="yt-player"
                    className="w-full h-full"
                    src={`${currentTrack.videoUrl}?autoplay=1&enablejsapi=1&mute=0&controls=1&modestbranding=1&rel=0`}
                    title={currentTrack.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={(e) => {
                      try {
                        e.target.contentWindow.postMessage(JSON.stringify({
                          event: 'command',
                          func: 'setVolume',
                          args: [volume]
                        }), '*');
                      } catch (err) {}
                    }}
                  ></iframe>
                ) : (
                  /* SMPTE TV Color Test Pattern / Retro Scanlines when paused */
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex flex-col overflow-hidden cursor-pointer"
                  >
                    {/* Color Bars */}
                    <div className="flex-1 flex w-full">
                      <div className="flex-1 bg-[#FFFFFF]"></div>
                      <div className="flex-1 bg-[#FACC15]"></div>
                      <div className="flex-1 bg-[#06B6D4]"></div>
                      <div className="flex-1 bg-[#22C55E]"></div>
                      <div className="flex-1 bg-[#EC4899]"></div>
                      <div className="flex-1 bg-[#EF4444]"></div>
                      <div className="flex-1 bg-[#3B82F6]"></div>
                    </div>
                    
                    {/* Concept 3: Centered Standby Logo (Aligned to the color bars region) */}
                    <div className="absolute inset-x-0 top-0 bottom-6 md:bottom-8 flex items-center justify-center pointer-events-none z-20">
                      <div className={`rounded-full border-4 border-black bg-white shadow-[0_0_20px_rgba(250,204,21,0.6)] flex items-center justify-center overflow-hidden transition-all duration-300 animate-pulse p-2 ${isMobile ? 'w-16 h-16' : 'w-24 h-24'}`}>
                        <img 
                          src="/logo.png" 
                          alt="Raipur Podcast Standby Logo" 
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    {/* Bottom black bar with flashing text */}
                    <div className={`bg-black flex items-center justify-between px-2 border-t-2 border-black select-none z-10 ${isMobile ? 'h-6' : 'h-8'}`}>
                      <span className="text-[7px] md:text-[8px] font-black text-[#FACC15] uppercase tracking-wider animate-pulse">
                        NO SIGNAL
                      </span>
                      <span className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-widest animate-pulse">
                        STANDBY - PLAY
                      </span>
                      <span className="text-[7px] md:text-[8px] font-black text-red-500 uppercase tracking-wider">
                        CH-12
                      </span>
                    </div>
                  </div>
                )}
                {/* CRT Scanline & Grain Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.06] bg-gradient-to-b from-white via-transparent to-black" 
                  style={{ backgroundSize: '100% 4px' }} 
                />
              </div>

              {/* TV Control Panel (Right) */}
              <div className="w-8 md:w-10 flex flex-col justify-between items-center pl-1.5 h-full select-none">
                {/* Knobs */}
                <div className="flex flex-col gap-1 items-center mt-0.5">
                  {/* Dial 1 */}
                  <div 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-4 h-4 rounded-full border-2 border-black bg-[#111] shadow-[1px_1px_0px_#000] relative flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-neutral-800"
                    style={{ transform: isPlaying ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <div className="absolute top-0 w-0.5 h-1 bg-yellow-400 rounded-full" />
                  </div>
                  {/* Dial 2 */}
                  <div 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-4 h-4 rounded-full border-2 border-black bg-[#111] shadow-[1px_1px_0px_#000] relative flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-neutral-800"
                    style={{ transform: isPlaying ? 'rotate(-60deg)' : 'rotate(0deg)' }}
                  >
                    <div className="absolute top-0 w-0.5 h-1 bg-yellow-400 rounded-full" />
                  </div>
                </div>
                
                {/* Speaker Grille slits */}
                <div className="w-4 h-4 flex flex-col gap-0.5 justify-center py-0.5">
                  <div className="h-[1.5px] bg-black/40 rounded" />
                  <div className="h-[1.5px] bg-black/40 rounded" />
                  <div className="h-[1.5px] bg-black/40 rounded" />
                </div>

                {/* LED Indicator Light */}
                <div className="flex items-center gap-1 mb-0.5">
                  <div 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`w-1.5 h-1.5 rounded-full border border-black shadow-[0_0_4px] transition-all duration-300 cursor-pointer ${
                      isPlaying 
                        ? 'bg-[#22C55E] shadow-[#22C55E]' 
                        : 'bg-red-500 shadow-red-500'
                    }`} 
                  />
                </div>
              </div>
            </div>

            {/* VOLUME CONTROL ONLY */}
            {isMobile ? (
              /* Compact controls for mobile to fit in vertical space */
              <div className="mt-2.5 flex items-center justify-between gap-2 shrink-0">
                <div className="flex-1 bg-white border border-black rounded p-1.5 shadow-[1.5px_1.5px_0px_#000] flex items-center justify-between gap-1.5">
                  <span className="text-[7.5px] font-black text-black/60">VOL</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 accent-black cursor-pointer h-1 bg-gray-200 rounded border border-black"
                  />
                  <span className="text-[7.5px] font-black text-black/60">{volume}%</span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-2 h-7 rounded border border-black font-black text-[9px] bg-white hover:bg-yellow-50 shadow-[1.5px_1.5px_0px_#000] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  {/* Visualizer inside the controls bar */}
                  <div className="flex items-end justify-between gap-0.5 bg-white border border-black rounded p-1 h-7 w-10 shadow-[1.5px_1.5px_0px_#000] overflow-hidden">
                    {[1, 2, 3, 4].map((bar, i) => (
                      <div
                        key={i}
                        className="w-1 bg-black rounded-t transition-all duration-300"
                        style={{
                          height: '100%',
                          transformOrigin: 'bottom',
                          transform: isPlaying ? 'none' : 'scaleY(0.2)',
                          animation: isPlaying ? `bounce-bars 0.8s ease-in-out infinite alternate` : 'none',
                          animationDelay: `${i * 0.15}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Original Desktop controls */
              <>
                <div className="my-3 bg-white border-2 border-black rounded-lg p-3 shadow-[3px_3px_0px_#000] shrink-0">
                  <div className="flex justify-between text-[10px] font-black text-black/60 mb-0.5">
                    <span>VOLUME CONTROL</span>
                    <span>{volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full accent-black cursor-pointer h-2 bg-gray-200 rounded border border-black"
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className={`px-4 h-9 rounded border-2 border-black font-black text-[10px] flex items-center justify-center transition-all cursor-pointer ${
                        isPlaying 
                          ? 'bg-yellow-300 translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0px_#000]'
                          : 'bg-white hover:bg-yellow-50 shadow-[2.5px_2.5px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000]'
                      }`}
                    >
                      PLAY
                    </button>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className={`px-4 h-9 rounded border-2 border-black font-black text-[10px] flex items-center justify-center transition-all cursor-pointer ${
                        !isPlaying 
                          ? 'bg-yellow-300 translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0px_#000]'
                          : 'bg-white hover:bg-yellow-50 shadow-[2.5px_2.5px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000]'
                      }`}
                    >
                      PAUSE
                    </button>
                  </div>

                  <div className="flex items-end justify-between gap-1 bg-white border-2 border-black rounded-lg p-2 h-9 w-20 shadow-[2px_2px_0px_#000] overflow-hidden">
                    {[1, 2, 3, 4, 5, 6, 7].map((bar, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-black rounded-t transition-all duration-300"
                        style={{
                          height: '100%',
                          transformOrigin: 'bottom',
                          transform: isPlaying ? 'none' : 'scaleY(0.2)',
                          animation: isPlaying ? `bounce-bars 0.8s ease-in-out infinite alternate` : 'none',
                          animationDelay: `${i * 0.12}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          {/* RIGHT COLUMN: EDITORIAL CONTENT */}
          <div className={`${isMobile ? 'w-full flex-1 p-3' : 'w-1/2 p-6'} bg-[#FEFDF9] overflow-y-auto select-none flex flex-col z-10`}>
            
            {/* Concept 4: Zine-style logo header banner */}
            <div className="flex items-center gap-2.5 md:gap-3.5 border-4 border-black rounded-2xl p-2.5 md:p-3 bg-[#FEF9E7] shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000] mb-4 shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-3 border-black overflow-hidden bg-white p-1 shrink-0 shadow-[1px_1px_0px_#000] md:shadow-[2px_2px_0px_#000] flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Raipur Podcast Logo" 
                  className="w-full h-full object-contain rounded-full" 
                />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[7px] md:text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none block">
                  OFFICIAL BROADCAST FEED
                </span>
                <h3 className="font-black text-xs md:text-lg uppercase text-black tracking-tight mt-0.5 md:mt-1 leading-none">
                  RAIPUR STUDIO 91.1
                </h3>
              </div>
            </div>

            {/* VIEW SWITCHER */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="border-b-2 border-black pb-1.5 mb-2 shrink-0">
                <h2 className="font-black text-[10px] md:text-sm uppercase text-black">
                  LATEST EPISODES / TAPE FEED
                </h2>
              </div>
              
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
                {MOCK_EPISODES.slice(0, 4).map((episode) => {
                  const isLoaded = currentTrack.id === episode.id;
                  return (
                    <div 
                      key={episode.id}
                      className={`border border-black rounded-lg p-2 md:p-3 transition-all flex flex-col justify-between shrink-0 ${
                        isLoaded 
                          ? 'bg-[#FEF9E7] shadow-[1px_1px_0px_#000] translate-x-[-0.5px] translate-y-[-0.5px]' 
                          : 'bg-white hover:bg-yellow-50/40 shadow-[2px_2px_0px_#000] md:shadow-[3px_3px_0px_#000]'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-1">
                        <span className="text-[7.5px] font-black uppercase bg-black text-[#FACC15] px-1 py-0.5 rounded border border-black">
                          #{episode.category}
                        </span>
                        <span className="text-[8.5px] font-bold text-black/50">{episode.duration} | {episode.date}</span>
                      </div>
                      <h4 className="font-black text-[9.5px] md:text-xs uppercase text-black mt-1 leading-tight line-clamp-1">
                        {episode.title}
                      </h4>
                      
                      <div className="flex justify-between items-center mt-2 pt-1 border-t border-dashed border-black/20">
                        <span className="text-[8.5px] font-bold text-black/65 truncate max-w-[125px]"> {episode.host}</span>
                        <button
                          onClick={() => handleLoadTrack(episode)}
                          className={`px-1.5 py-0.5 text-[8.5px] font-black border border-black rounded cursor-pointer transition-all ${
                            isLoaded
                              ? 'bg-black text-[#FACC15] font-black'
                              : 'bg-[#FACC15] text-black hover:bg-yellow-300 font-extrabold shadow-[1px_1px_0px_#000] active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none'
                          }`}
                        >
                          {isLoaded ? '• LOADED •' : 'LOAD TAPE'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
      </div>
    </div>
  );
};

export default Tablet;