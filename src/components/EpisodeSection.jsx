import React, { useState } from 'react';
import { MOCK_EPISODES } from './Tablet';

export default function EpisodeSection({ onPlayEpisode, currentTrack }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Food', 'Fitness', 'Influencers', 'History'];
  
  const filteredEpisodes = activeCategory === 'All' 
    ? MOCK_EPISODES 
    : MOCK_EPISODES.filter(ep => ep.category === activeCategory);

  return (
    <div className="w-full max-w-[1150px] mx-auto select-none mt-4 mb-24 px-4 md:px-8 font-sans">
      {/* Title */}
      <div className="border-b-4 border-[#FACC15] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            EPISODES
          </h2>
          <p className="text-[10px] sm:text-xs font-black text-gray-400 mt-1.5 uppercase tracking-wider">
            Browse full Chhattisgarhi catalog • Click "TUNE IN" to slide the episode into the TV above
          </p>
        </div>
        <div className="bg-[#FACC15] text-black font-black text-[10px] sm:text-xs border-2 border-[#FACC15] px-3 py-1.5 rounded shadow-[2.5px_2.5px_0px_#fff] md:shadow-[3.5px_3.5px_0px_#fff] uppercase shrink-0 w-fit">
          📻 {MOCK_EPISODES.length} Tapes Indexed
        </div>
      </div>

      {/* Record Store divider tabs */}
      <div className="flex overflow-x-auto gap-2 -mb-[4px] relative z-10 no-scrollbar sm:flex-wrap pb-2 sm:pb-0 scroll-smooth">
        <style>
          {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const displayLabel = cat === 'All' ? 'ALL ARCHIVE' 
            : cat === 'Food' ? '🍔 FOOD & DRINKS'
            : cat === 'Fitness' ? '🏋️‍♀️ HEALTH & FITNESS'
            : cat === 'Influencers' ? '🎙️ INFLUENCERS'
            : '📜 LOCAL HISTORY';
            
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs font-black border-4 transition-all cursor-pointer rounded-t-xl border-b-0 shrink-0 whitespace-nowrap ${
                isActive
                  ? 'bg-[#FACC15] text-black border-[#FACC15] shadow-[4px_-4px_0px_#FACC15] translate-y-[-4px]'
                  : 'bg-[#121212] text-[#FACC15]/75 border-[#FACC15]/40 hover:text-[#FACC15] hover:bg-[#1a1a1a] translate-y-0'
              }`}
            >
              {displayLabel}
            </button>
          );
        })}
      </div>

      {/* Main Folder panel */}
      <div className="border-4 border-[#FACC15] bg-[#121212] rounded-b-2xl rounded-tr-2xl p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_#FACC15] md:shadow-[8px_8px_0px_#FACC15] min-h-[400px]">
        {filteredEpisodes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16 text-center">
            <span className="text-4xl">📭</span>
            <h4 className="text-lg font-black text-white/60 uppercase mt-2">No episodes in this drawer</h4>
          </div>
        ) : (
          <>
            <style>
              {`
                .custom-episode-scroll::-webkit-scrollbar {
                  width: 10px;
                }
                .custom-episode-scroll::-webkit-scrollbar-track {
                  background: #121212;
                  border-radius: 8px;
                  border: 2px solid #FACC15;
                }
                .custom-episode-scroll::-webkit-scrollbar-thumb {
                  background: #FACC15;
                  border-radius: 8px;
                  border: 2px solid #121212;
                }
                .custom-episode-scroll::-webkit-scrollbar-thumb:hover {
                  background: #eab308;
                }
                .custom-desc-scroll::-webkit-scrollbar {
                  width: 5px;
                }
                .custom-desc-scroll::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 2px;
                }
                .custom-desc-scroll::-webkit-scrollbar-thumb {
                  background: #FACC15;
                  border-radius: 2px;
                }
                .custom-desc-scroll::-webkit-scrollbar-thumb:hover {
                  background: #eab308;
                }
              `}
            </style>
            
            <div className="max-h-[320px] md:max-h-[820px] overflow-y-auto pr-2 md:pr-3 custom-episode-scroll">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-2 pl-2 pr-1">
                {filteredEpisodes.map((episode) => {
                  const isPlayingNow = currentTrack.id === episode.id;
                  
                  // Map categories to badges
                  const catColor = episode.category === 'Food' ? 'bg-[#EF4444]'
                    : episode.category === 'Fitness' ? 'bg-[#10B981]'
                    : episode.category === 'Influencers' ? 'bg-[#3B82F6]'
                    : 'bg-[#FACC15] text-black';

                  return (
                    <div
                      key={episode.id}
                      className={`border-4 border-black rounded-xl p-3 md:p-5 shadow-[2.5px_2.5px_0px_#FACC15] md:shadow-[4px_4px_0px_#FACC15] transition-all flex flex-col justify-between hover:shadow-[6px_6px_0px_#FACC15] hover:-translate-x-0.5 hover:-translate-y-0.5 relative overflow-hidden group ${
                        isPlayingNow ? 'ring-4 ring-[#FACC15] border-[#FACC15]' : ''
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.88) 0%, rgba(10, 10, 10, 0.96) 100%), url(${episode.thumbnailUrl || ''})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="relative z-10">
                        {/* Card Category Header */}
                        <div className="flex justify-between items-center pb-2 border-b border-dashed border-[#FACC15]/20">
                          <span className={`text-[7px] md:text-[8px] font-black text-white px-1.5 md:px-2 py-0.5 rounded border border-black uppercase ${catColor}`}>
                            #{episode.category}
                          </span>
                          <span className="text-[7.5px] md:text-[9px] font-bold text-gray-400">
                            🗓️ {episode.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-black text-[9px] md:text-xs uppercase text-white mt-2 md:mt-3 leading-tight tracking-tight group-hover:text-[#FACC15] transition-colors line-clamp-2">
                          {episode.title}
                        </h3>
                        
                        {/* Description - Scroll area in desktop view */}
                        <div className="hidden sm:block mt-2 h-[75px] overflow-y-auto pr-1.5 text-[11px] text-gray-300 font-semibold leading-relaxed custom-desc-scroll">
                          {episode.description}
                        </div>
                      </div>

                      {/* Footer play elements */}
                      <div className="mt-4 md:mt-6 pt-2 md:pt-3 border-t border-[#FACC15]/20 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-0 relative z-10">
                        <div className="flex flex-col">
                          <span className="text-[7px] md:text-[8px] font-bold text-white/50 uppercase leading-none">HOST</span>
                          <span className="text-[8.5px] md:text-[10px] font-black text-[#FACC15] mt-0.5 truncate max-w-[80px]">{episode.host}</span>
                        </div>
                        
                        <button
                          onClick={() => onPlayEpisode(episode)}
                          className={`px-2 md:px-3 py-1 md:py-1.5 text-[8px] md:text-[9px] font-black border-2 rounded-lg cursor-pointer transition-all ${
                            isPlayingNow
                              ? 'bg-[#FACC15] text-black border-[#FACC15] shadow-none translate-x-[1px] translate-y-[1px]'
                              : 'bg-black text-[#FACC15] border-[#FACC15] hover:bg-[#FACC15] hover:text-black shadow-[1.5px_1.5px_0px_#FACC15] md:shadow-[2.5px_2.5px_0px_#FACC15] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#FACC15]'
                          }`}
                        >
                          {isPlayingNow ? 'PLAYING' : 'TUNE IN 📺'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
