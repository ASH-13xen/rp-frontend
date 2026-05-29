# 📻 Raipur Podcast: Blogs Cabinet Design Proposals

This document outlines three creative, premium design directions for the Raipur Podcast **Blogs** page, maintaining the retro industrial/broadcast theme of the main site while solving standard blog list layout bugs and limitations.

---

## 🟢 Option 1: The Monospaced Broadcast Telex / Terminal Console
*A raw, high-contrast command-line interface resembling a vintage computer terminal, teletype press feed, or newsroom computer.*

```
+-------------------------------------------------------+
|  [RAIPUR LOGS]      SYS_STATUS: ACTIVE     CH: SHORTS |
+-------------------------------------------------------+
| TRANSMISSION REEL   |  ================ MONITOR ============== |
| > [ENTRY 323] OK    |  +------------------+-----------------+ |
| > [ENTRY 322] OK    |  | [CRT VIDEO FEED] | [TELEX FEED]    | |
| > [ENTRY 321] OK    |  |                  |                 | |
| > [ENTRY 320] OK    |  | (YouTube Short)  | Spoken text     | |
|                     |  |                  | transcribing in | |
|                     |  |                  | real-time...    | |
|                     |  |                  |                 | |
|                     |  +------------------+-----------------+ |
|                     |  [EJECT TAPE]          [PRINT DOCKET] |
+-------------------------------------------------------+
```

### Key Elements
- **Layout:** Split-screen layout. Left side lists incoming "Telex Transmissions" with retro timestamps and green-phosphor text. Right side displays a terminal dashboard showing the selected Short in a CRT monitor frame and the blog post below it in a teletype monospace layout.
- **Visuals:** Green/Amber text on pitch-black background, terminal cursor blinkers, retro grid dividing lines, pixel-grid overlays, scanlines, and buttons styled as terminal command prompts (e.g. `[EXECUTE_READ]`).
- **Interactive Details:** A mock "Print" button that opens a clean printer-styled window of the blog post, and a simulated dial to scan through blog entries.

---

## 📼 Option 2: The Cassette Drawer Cabinet
*A highly tactile, skeuomorphic, industrial cabinet drawer layout where each blog card is a physical cassette tape on a shelf.*

```
+-------------------------------------------------------+
|  [||||||||||| TAPE CABINET ]    [BACK TO TRANS]  ⏏️   |
+-------------------------------------------------------+
|  +-------+  +-------+  +-------+  +-------+  +-------+ |
|  |TAPE   |  |TAPE   |  |TAPE   |  |TAPE   |  |TAPE   | |
|  |#323   |  |#322   |  |#321   |  |#320   |  |#319   | |
|  +-------+  +-------+  +-------+  +-------+  +-------+ |
|                                                       |
|  +------------------ SELECTED DECK -----------------+ |
|  |  [TAPE INSERTED]  |  [J-CARD FOLD-OUT LINER]      | |
|  |  Reels Spinning   |  Title: ...                   | |
|  |  (Short Player)   |  Creative blog article text   | |
|  |  VU Meters bouncing|  displayed on folded yellowed | |
|  |  Green Status LED |  paper background.            | |
|  +------------------+--------------------------------+ |
+-------------------------------------------------------+
```

### Key Elements
- **Layout:** A grid showing rows of cassettes inside wooden or steel drawers. Clicking a tape plays a slide animation that "inserts" the cassette into a retro tape recorder deck on screen.
- **Visuals:** Cassettes with realistic plastic cases, hand-written tape labels, Dolby noise reduction logos, and transparent shells showing rotating reels.
- **Interactive Details:** 
  - The deck door "clicks" shut when loaded.
  - The tape reels spin in sync with the YouTube Short play state.
  - Dual VU meters (L/R) bounce physically based on simulated audio playback levels.
  - The blog post unfolds from the side as the tape's printed "J-Card liner paper insert," using a warm yellowed paper backdrop.

---

## 📰 Option 3: The 1970s Print Press / Investigative Zine
*A classic print-media look inspired by 1970s print journalism, retro newspaper print layouts, investigative files, and underground zines.*

```
+-------------------------------------------------------+
|  THE RAIPUR PODCAST DISPATCH      VOL. XII // ISSUE 3 |
+-------------------------------------------------------+
|  [EDITORIAL CORNER]       |  [HOT OFF THE PRESS]      |
|  ======================   |  ====================      |
|  THE MAKEUP DILEMMA       |  +----------------------+  |
|  By Staff Writer          |  |                      |  |
|                           |  | (Short Video Player) |  |
|  In a world saturated...  |  |                      |  |
|  proper skincare routine  |  +----------------------+  |
|  is key to complexions.   |  Halftone print image      |
|  Read ingredients, print  |  stamp: "VERIFIED FEED"     |
|  dockets for the day.     |                            |
+-------------------------------------------------------+
```

### Key Elements
- **Layout:** Multi-column layout with heavy horizontal line dividers, custom newspaper headers, and magazine-style columns that dynamically wrap around the embedded Short.
- **Visuals:** Yellowed paper texture backdrop (`#FDFBF5` or HSL warm tones), serif typography for headings, halftone image print textures, mock ink-bleeds, and ink stamp badges (e.g. "AI EXTRACTED", "Approved by Editor").
- **Interactive Details:** Hovering over headlines highlights them with a marker-style highlighter stroke. Clean paper-turning animations when swapping between articles.
