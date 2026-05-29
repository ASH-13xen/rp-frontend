import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tablet, { TypographyBackground, UShapeBackground, EndlessTicker, MOCK_EPISODES } from './components/Tablet';
import EpisodeSection from './components/EpisodeSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import AvailableAt from './components/AvailableAt';
import SignOffSection from './components/SignOffSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(MOCK_EPISODES[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Parallax scroll animation for the tablet dashboard (Desktop only)
    if (window.innerWidth >= 768) {
      const anim = gsap.to('.parallax-tablet', {
        scrollTrigger: {
          trigger: '.hero-player-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 120, // moves down slower, creating parallax depth
        ease: 'none',
      });
      return () => {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      };
    }
  }, []);

  const handlePlayEpisode = (episode) => {
    setCurrentTrack(episode);
    setIsPlaying(true);
    // Smooth scroll to the top of the page where the player resides
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (targetId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Give a brief tick to let the overlay render before running GSAP
    setTimeout(() => {
      // Set off-screen initial positions using GSAP on raw transform properties
      gsap.set('.transition-marquee-1', { x: '-135%', rotate: -5 });
      gsap.set('.transition-marquee-2', { x: '135%', rotate: 3 });
      gsap.set('.transition-marquee-3', { x: '-135%', rotate: -2 });
      gsap.set('.transition-marquee-4', { x: '135%', rotate: 4 });
      gsap.set('.transition-marquee-5', { x: '-135%', rotate: -3 });

      const tl = gsap.timeline({
        onComplete: () => {
          // Scroll instantly to the target section in the background
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'auto' });
          }

          // Slide-out animations
          gsap.timeline({
            onComplete: () => {
              setIsTransitioning(false);
            }
          })
          .to('.transition-marquee-1', { x: '-135%', rotate: -5, duration: 0.5, ease: 'power2.in' }, 0)
          .to('.transition-marquee-2', { x: '135%', rotate: 3, duration: 0.5, ease: 'power2.in' }, 0.05)
          .to('.transition-marquee-3', { x: '-135%', rotate: -2, duration: 0.5, ease: 'power2.in' }, 0.1)
          .to('.transition-marquee-4', { x: '135%', rotate: 4, duration: 0.5, ease: 'power2.in' }, 0.15)
          .to('.transition-marquee-5', { x: '-135%', rotate: -3, duration: 0.5, ease: 'power2.in' }, 0.2);
        }
      });

      // Slide-in animations
      tl.to('.transition-marquee-1', { x: '-10%', rotate: -5, duration: 0.5, ease: 'power2.out' }, 0)
        .to('.transition-marquee-2', { x: '-10%', rotate: 3, duration: 0.5, ease: 'power2.out' }, 0.05)
        .to('.transition-marquee-3', { x: '-10%', rotate: -2, duration: 0.5, ease: 'power2.out' }, 0.1)
        .to('.transition-marquee-4', { x: '-10%', rotate: 4, duration: 0.5, ease: 'power2.out' }, 0.15)
        .to('.transition-marquee-5', { x: '-10%', rotate: -3, duration: 0.5, ease: 'power2.out' }, 0.2);
    }, 50);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden pb-12 font-sans">
      {/* Persistent Sticky Header for desktop on scroll (Concept 1) */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 bg-[#FEFDF9]/95 backdrop-blur-sm border-b-4 border-black h-[65px] hidden md:flex items-center justify-between px-8 select-none transition-all duration-500 ease-in-out transform ${
          showStickyHeader 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Logo badge */}
          <div className="w-10 h-10 border-3 border-black bg-white flex items-center justify-center rounded-full shadow-[2px_2px_0px_#000] overflow-hidden p-1 shrink-0">
            <img 
              src="/logo.png" 
              alt="Raipur Podcast Logo" 
              className={`w-full h-full object-contain rounded-full ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''}`} 
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black uppercase tracking-tight text-black text-sm">
              RAIPUR PODCAST
            </span>
            <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase mt-0.5 tracking-wider">
              STUDIO FEED // FM 91.1 MHz // LIVE STATION
            </span>
          </div>
        </div>

        {/* Navigation tabs in sticky header */}
        <div className="flex gap-2 items-center">
          {[
            { id: 'stories', target: 'episodes', label: 'EPISODES' },
            { id: 'hosts', target: 'team', label: 'THE CREW' },
            { id: 'fanzone', target: 'contact', label: 'CONTACT US' },
            { id: 'blogs', target: 'blogs', label: 'BLOGS', isExternal: true }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.isExternal) {
                  window.open('/blogs.html', '_blank');
                } else {
                  handleNavigate(tab.target);
                }
              }}
              className="px-3.5 py-1.5 text-[11px] font-black border-2 border-black bg-white text-black hover:bg-[#FACC15] hover:translate-y-[-1px] transition-all cursor-pointer rounded-md shadow-[2px_2px_0px_#000] active:translate-y-[0px] active:shadow-none"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 md:hidden bg-[#FEFDF9] border-b-4 border-black h-[55px] flex items-center justify-between px-4 select-none">
        <div className="flex items-center gap-2">
          {/* Raipur Podcast Logo badge */}
          <div className="w-7 h-7 border-2 border-black bg-white flex items-center justify-center rounded-full shadow-[1.5px_1.5px_0px_#000] overflow-hidden p-0.5 shrink-0">
            <img 
              src="/logo.png" 
              alt="Raipur Podcast Logo" 
              className={`w-full h-full object-contain rounded-full ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''}`} 
            />
          </div>
          <span className="font-black uppercase tracking-tight text-black text-xs">
            RAIPUR PODCAST
          </span>
        </div>

        <div className="relative">
          {/* 3-line Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-1.5 border-2 border-black bg-[#FACC15] rounded-md shadow-[1.5px_1.5px_0px_#000] flex flex-col gap-1 justify-center items-center w-8 h-8 cursor-pointer active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none"
          >
            <span className="w-4.5 h-0.5 bg-black" />
            <span className="w-4.5 h-0.5 bg-black" />
            <span className="w-4.5 h-0.5 bg-black" />
          </button>

          {/* Hamburger dropdown overlay */}
          {isMobileMenuOpen && (
            <div className="absolute top-[40px] right-0 bg-[#FEFDF9] border-2 border-black rounded-lg p-2 shadow-[3px_3px_0px_#000] z-50 flex flex-col gap-1.5 w-[140px] font-sans">
              {[
                { id: 'stories', target: 'episodes', label: 'EPISODES' },
                { id: 'hosts', target: 'team', label: 'MEET THE TEAM' },
                { id: 'fanzone', target: 'contact', label: 'CONTACT US' },
                { id: 'blogs', target: 'blogs', label: 'BLOGS', isExternal: true }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (tab.isExternal) {
                      window.open('/blogs.html', '_blank');
                    } else {
                      handleNavigate(tab.target);
                    }
                  }}
                  className="w-full text-left px-2 py-1 text-[9px] font-black border border-black bg-white hover:bg-[#FACC15] rounded transition-all cursor-pointer"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fold 1: Hero Player Section */}
      <div className="hero-player-section relative w-full h-screen flex items-center justify-center overflow-hidden shrink-0 z-10 pt-[55px] md:pt-0">
        <TypographyBackground />
        <UShapeBackground />
        
        {/* TV Player Tablet Layer Wrapper with Parallax Class */}
        <div className="parallax-tablet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <Tablet 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            onNavigate={handleNavigate}
          />
        </div>
      </div>

      {/* Hazard Stripe Divider */}
      <div className="w-full bg-[repeating-linear-gradient(45deg,#FACC15,#FACC15_10px,#000_10px,#000_20px)] h-8 border-y-4 border-black z-20 relative shadow-[0_-4px_10px_rgba(0,0,0,0.3)]"></div>

      {/* Fold 2: Episodes Catalog Cabinet Section */}
      <div id="episodes" className="relative w-full bg-[#0a0a0a] z-20 flex flex-col justify-start pt-16 pb-0">
        <EpisodeSection 
          onPlayEpisode={handlePlayEpisode}
          currentTrack={currentTrack}
        />
      </div>

      {/* Fold 2.5: Meet the Crew Viewfinder Section */}
      <div id="team" className="relative w-full z-20">
        <TeamSection />
      </div>



      {/* Fold 3: Contact Control Desk Section */}
      <div id="contact" className="relative w-full z-20">
        <ContactSection />
      </div>

      {/* Fold 4: Available At Platform/Social Tuner Section */}
      <div className="relative w-full z-20">
        <AvailableAt />
      </div>

      {/* Fold 5: Off-Air Broadcast Sign-Off Section */}
      <div className="relative w-full z-20">
        <SignOffSection />
      </div>

      {/* Floating Ticker - fixed at viewport bottom */}
      <EndlessTicker />

      {/* GSAP Flying Marquee Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto w-screen h-screen overflow-hidden flex flex-col justify-center items-stretch bg-black/60 select-none">
          <style>
            {`
              @keyframes marquee-scroll-fast {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-33.33%, 0, 0); }
              }
              .animate-marquee-fast {
                display: inline-block;
                white-space: nowrap;
                animation: marquee-scroll-fast 8s linear infinite;
              }
              .transition-marquee-1 { transform: translate3d(-135%, 0, 0) rotate(-5deg); }
              .transition-marquee-2 { transform: translate3d(135%, 0, 0) rotate(3deg); }
              .transition-marquee-3 { transform: translate3d(-135%, 0, 0) rotate(-2deg); }
              .transition-marquee-4 { transform: translate3d(135%, 0, 0) rotate(4deg); }
              .transition-marquee-5 { transform: translate3d(-135%, 0, 0) rotate(-3deg); }
            `}
          </style>

          {/* Marquee 1 */}
          <div className="transition-marquee transition-marquee-1 w-[130vw] h-[22vh] -ml-[15vw] bg-[#FACC15] text-black border-y-8 border-black flex items-center font-black text-xl md:text-3xl tracking-widest uppercase overflow-hidden shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.55)] z-10">
            <div className="animate-marquee-fast">
              {"// INCOMING BROADCAST // SWITCHING SIGNAL // INCOMING BROADCAST // SWITCHING SIGNAL // INCOMING BROADCAST // SWITCHING SIGNAL ".repeat(4)}
            </div>
          </div>

          {/* Marquee 2 */}
          <div className="transition-marquee transition-marquee-2 w-[130vw] h-[22vh] -ml-[15vw] bg-black text-[#FACC15] border-y-8 border-[#FACC15] flex items-center font-black text-xl md:text-3xl tracking-widest uppercase overflow-hidden shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.55)] z-20">
            <div className="animate-marquee-fast">
              {"// SYSTEM CALIBRATION // DYNAMIC PATCH BAY // SYSTEM CALIBRATION // DYNAMIC PATCH BAY // SYSTEM CALIBRATION // DYNAMIC PATCH BAY ".repeat(4)}
            </div>
          </div>

          {/* Marquee 3 */}
          <div className="transition-marquee transition-marquee-3 w-[130vw] h-[22vh] -ml-[15vw] bg-[#FACC15] text-black border-y-8 border-black flex items-center font-black text-xl md:text-3xl tracking-widest uppercase overflow-hidden shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.55)] z-10">
            <div className="animate-marquee-fast">
              {"// RETRO CASSETTE REEL // REWINDING TAPE // RETRO CASSETTE REEL // REWINDING TAPE // RETRO CASSETTE REEL // REWINDING TAPE ".repeat(4)}
            </div>
          </div>

          {/* Marquee 4 */}
          <div className="transition-marquee transition-marquee-4 w-[130vw] h-[22vh] -ml-[15vw] bg-black text-[#FACC15] border-y-8 border-[#FACC15] flex items-center font-black text-xl md:text-3xl tracking-widest uppercase overflow-hidden shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.55)] z-20">
            <div className="animate-marquee-fast">
              {"// CHHATTISGARH TRANSMITTER // ACTIVE FEED // CHHATTISGARH TRANSMITTER // ACTIVE FEED // CHHATTISGARH TRANSMITTER // ACTIVE FEED ".repeat(4)}
            </div>
          </div>

          {/* Marquee 5 */}
          <div className="transition-marquee transition-marquee-5 w-[130vw] h-[22vh] -ml-[15vw] bg-[#FACC15] text-black border-y-8 border-black flex items-center font-black text-xl md:text-3xl tracking-widest uppercase overflow-hidden shrink-0 shadow-[0_10px_20px_rgba(0,0,0,0.55)] z-10">
            <div className="animate-marquee-fast">
              {"// RAIPUR TERMINAL HQ // HOTLINE ROUTER // RAIPUR TERMINAL HQ // HOTLINE ROUTER // RAIPUR TERMINAL HQ // HOTLINE ROUTER ".repeat(4)}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;