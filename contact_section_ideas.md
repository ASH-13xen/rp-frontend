# Contact Us Section - Design Concepts

Here are 3 distinct design concepts for the new "Contact Us" section that will sit below the episode cabinet. All concepts maintain the **Chhattisgarhi Retro Zine / Neo-brutalist** theme (yellow `#FACC15`, off-black/charcoal, and thick borders) with high contrast, tactile textures, and retro radio/station aesthetics.

---

## 🎛️ Concept 1: "The Broadcast Rack-Mount Soundboard" (Console Mixer Grid)
*Inspired by a physical, rack-mounted mixing desk, soundboard, or amplifier console at a local broadcast studio. It translates user queries and contact details into faders, dials, and display screens.*

```
+--------------------------------------------------------------------------------+
|  CONTACT CONTROL DESK // RADIO HEADQUARTERS DIRECTORY                          |
|                                                                                |
|  [ CHANNEL 01: GENERAL ]    [ CHANNEL 02: GUESTS ]   [ CHANNEL 03: BUSINESS ]  |
|  +---------------------+    +--------------------+   +-----------------------+ |
|  | HAVE A QUERY?       |    | WANT TO BE A GUEST?|   | // SPONSOR & PROMOTE  | |
|  | Got suggestions?    |    | Pitch your story & |   | GET YOUR BRAND HEARD  | |
|  | General feedback?   |    | join the mic.      |   | (MAIN RADIO SPOTLIGHT)| |
|  |                     |    |                    |   |                       | |
|  |   [   ] Fader Up    |    |   [   ] Fader Up   |   |   [▓▓▓] Fader MAX     | |
|  +---------------------+    +--------------------+   +-----------------------+ |
|                                                                                |
|  [ INPUTS / OUTPUTS ]                                [ MONITOR / HQ COORDS ]   |
|  +---------------------------+---------------------+ +-----------------------+ |
|  | (o) EMAIL: cg@radio.com   | (o) TEL: +91 987... | |                       | |
|  | (o) WHATSAPP: Ping Line   |                     | |      [ GOOGLE MAPS    | |
|  +---------------------------+---------------------+ |        EMBED SCREEN ] | |
|  | Analog dials / XLR sockets graphics             | |                       | |
|  +-------------------------------------------------+ +-----------------------+ |
+--------------------------------------------------------------------------------+
```

* **Visual Elements**:
  * **Top Inquiry Columns**: Three vertical "channel strips" side-by-side representing the queries.
    * **General** & **Guest** strips are clean dark gray blocks.
    * **Business / Promotion** channel strip is extra-wide or highlighted in neon yellow and features a blinking red light graphic (`• ON AIR` or `• SPONSOR ACTIVE`) to give it maximum weight.
    * Decorative slider tracks (mock faders) on each card that highlight when hovered.
  * **Input/Output Patch-bay**: The contact buttons (Email, Phone, WhatsApp) are housed in a panel styled like audio jacks (XLR inputs or 1/4 inch jacks). Hovering on a contact option glows like it was plugged in.
  * **Monitor Screen (Map)**: The Google Map is encased inside a styled CRT console bezel with a curved grid lines overlay (like an oscilloscope display monitoring station coordinates).
* **Why it works**: Highly thematic, feels like a real radio control panel, and fits right in under the retro TV player.

---

## 📰 Concept 2: "The Classifieds Zine Bulletin Board" (Street Flyer Collage)
*Designed to look like a messy, high-contrast street wall or a zine community board pinned with flyers, newspaper cutouts, and stickers.*

```
+--------------------------------------------------------------------------------+
|  === THE BULLETIN BOARD ===                                  [PINNED MEMOS]    |
|                                                                                |
|   +-------------------+     +-------------------------+      +--------------+  |
|   | / QUERY BOX       |     |  * PROMOTE BUSINESS *   |      |  PINNED MAP  |  |
|   | Have a question?  |     |   ====================  |      |  [ Raipur,   |  |
|   | Drop us a line!   |     |   Sponsor the show &    |      |    CG, India |  |
|   |                   |     |   reach thousands.      |      |   -----------|  |
|   +-------------------+     |                         |      |    [MAP]     |  |
|                             |   [ ADVERTISE NOW! ]    |      |              |  |
|   +-------------------+     +-------------------------+      +--------------+  |
|   | / BE A GUEST      |                                                        |
|   | Tell us your story|     [TEAR-OFF CONTACT TAGS]                            |
|   | & join the hosts! |     +----------+ +-----------+ +------------+          |
|   +-------------------+     | EMAIL ✉️  | PHONE 📞   | WHATSAPP 💬  |          |
|                             +----------+ +-----------+ +------------+          |
+--------------------------------------------------------------------------------+
```

* **Visual Elements**:
  * **Collage Layout**: Items are slightly tilted (using Tailwind `rotate-1`, `-rotate-1`, `hover:rotate-0`) and arranged asymmetrically.
  * **Sticker Badges**: The **Promote Your Business** card is the biggest "Flyer" on the board—bright yellow background, bold red text accents, and styled as a vintage storefront ad with a jagged starburst badge ("ADVERTISE!").
  * **Tear-off Flyers**: Quick contact details (Email, Phone, WhatsApp) are styled like the tear-off strips at the bottom of a street lamp flyer. They hang vertically from the bottom of the section, shifting upward on hover (`hover:-translate-y-2`).
  * **Polaroid Map**: The Google Map is framed inside a white/cream Polaroid border with a handwritten location label in a marker font (e.g., `"HQ Coordinates Raipur 📍"`).
* **Why it works**: Organic, tactile, and matches the zine aesthetic. It breaks the grid structure of the site for a very lively feel.

---

## 🔌 Concept 3: "The Vintage Operator Switchboard" (Patch Cable Network)
*Inspired by early 20th-century telephone exchange switchboards. It uses visual lines and cables to direct users to specific contact methods.*

```
+--------------------------------------------------------------------------------+
|  VINTAGE SWITCHBOARD // INCOMING LINES DIRECTORY                               |
|                                                                                |
|   [ LINE 1: GENERAL ]        [ LINE 2: GUEST PITCH ]    [ LINE 3: BRAND SPONSOR]
|   +-----------------+        +---------------------+    +----------------------+
|   | [o] -- (plug)   |        | [o] -- (plug)       |    | [o] -- (plug)        |
|   | Got a query?    |        | Want to pitch?      |    | Grow your sales!     |
|   +-----------------+        +---------------------+    +----------------------+
|            \                            /                         /            |
|             \__________________________/_________________________/             |
|                                       |                                        |
|                             [ ROUTING JUNCTION BOX ]                           |
|                             +----------------------------------------------+   |
|                             |  ⚡ CONNECT VIA:                              |   |
|                             |  - [EMAIL]   -> cg@radio.com                 |   |
|                             |  - [PHONE]   -> +91 98765 43210              |   |
|                             |  - [WHATSAPP]-> Start Chat                   |   |
|                             +----------------------------------------------+   |
|                             |  ⚡ STATION SITE: [MAP EMBED SCREEN]          |   |
|                             +----------------------------------------------+   |
+--------------------------------------------------------------------------------+
```

* **Visual Elements**:
  * **Switchboard Grid**: The background features a subtle radial dot mesh pattern.
  * **Plug Ports**: Each query block features a circular socket graphic. When clicked/hovered, a golden "plug" icon inserts itself into the socket.
  * **The Business Hotline**: Highlighted as the "Priority Hot Line" with red warning caution stripes on its side and a flashing red icon.
  * **The Junction Box**: Houses the contact list with high contrast, glowing green text styling (retro monospace terminal look) and custom icons.
  * **Radar Terminal Map**: The Google Map has a retro monochrome green or dark amber tint styling overlay (if customizable) or a thick neon border with coordinates flashing.
* **Why it works**: Extremely interactive, mechanical vibe that rewards user curiosity and makes the contact form feel like a mini-game.
