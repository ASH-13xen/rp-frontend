// TEAM MEMBER DETAILS CONFIGURATION
// You can edit, add, or remove team members from this list.
// The app will automatically generate cassette tapes and dossier specs based on this data.
// 
// Field definitions:
// - id: Unique number identifier
// - name: Display name of the member
// - role: Assigned role/title (displays on cassette label and specs sheet)
// - bio: Descriptive paragraphs of what they do
// - quote: A custom transmission quote (displays in the speech bubble)
// - photo: Path to their portrait image (saved in frontend/public/team/)
// - icon: Unicode emoji representing their tool or personality
// - color: Tailwind background color class for the cassette spine and label stripe

export const members = [
  {
    id: 1,
    name: "Prakhar Agrawal",
    role: "Lead Host",
    bio: "Sitting in the center of the frame, Aakash guides our discussions and makes sure every guest feels right at home in the cabinet drawer.",
    quote: "Chhattisgarh is full of untold stories. We're just here to give them a microphone.",
    photo: "/team/t1.jpg",
    icon: "🎙️",
    color: "bg-[#FACC15]" // Yellow
  },
  {
    id: 2,
    name: "Sneha",
    role: "Co-Host & Audio Director",
    bio: "Sneha co-hosts and monitors our audio systems. Her vintage rotary telephone keeps hotlines open to local stories and listener queries.",
    quote: "If the sound isn't authentic, the story doesn't land. The details are everything.",
    photo: "/team/t2.jpg",
    icon: "☎️",
    color: "bg-[#EF4444]" // Red
  },
  {
    id: 3,
    name: "Raman",
    role: "Sound Engineer",
    bio: "Raman monitors frequencies from the left, ensuring our catalog feeds remain balanced and free of noise floor static.",
    quote: "Keep the gain high, but keep the noise low. That's the Raipur studio rhythm.",
    photo: "/team/t3.jpg",
    icon: "🎛️",
    color: "bg-[#3B82F6]" // Blue
  },
  {
    id: 4,
    name: "Divya",
    role: "Guest Coordinator",
    bio: "Divya manages guest relations and brings the high energy, sourcing Raipur's top creators, cooks, and historians to our drawers.",
    quote: "Finding guests who bring their own light is what makes this show shine.",
    photo: "/team/t4.jpg",
    icon: "🪩",
    color: "bg-[#10B981]" // Green
  },
  {
    id: 5,
    name: "Kabir",
    role: "Creative Director",
    bio: "Kabir pulls strings from the back center, ensuring our visual identity remains premium and zine-like without getting too serious.",
    quote: "Serious stories are great, but the laughter between takes is where the magic lives.",
    photo: "/team/t5.jpg",
    icon: "🤪",
    color: "bg-[#F97316]" // Orange
  },
  {
    id: 6,
    name: "Tanvi",
    role: "Content Researcher",
    bio: "Tanvi holds our research archives. She cross-references our local history segments to ensure factual depth behind the anecdotes.",
    quote: "Every Raipur tapri has a history. You just have to know which catalog drawer to check.",
    photo: "/team/t6.JPG",
    icon: "📖",
    color: "bg-[#8B5CF6]" // Purple
  },
  {
    id: 7,
    name: "Nisha",
    role: "Social Media Manager",
    bio: "Nisha holds our global signals. She manages our broadcast feeds across Facebook, Instagram, Threads, and LinkedIn.",
    quote: "Broadcasting Chhattisgarh's local culture to the global stage is a daily celebration.",
    photo: "/team/t7.jpg",
    icon: "🌐",
    color: "bg-[#EC4899]" // Pink
  },
  {
    id: 8,
    name: "Aarushi",
    role: "Lead Editor & Cataloguer",
    bio: "Aarushi cuts, compiles, and indexes our cassettes, sliding the audio components neatly into our main episode catalog cabinet.",
    quote: "An episode is crafted in the editing room. We trim the noise, but preserve the soul.",
    photo: "/team/t8.jpg",
    icon: "🎬",
    color: "bg-[#06B6D4]" // Cyan
  },
  {
    id: 9,
    name: "Sameer",
    role: "Visuals & Photographer",
    bio: "Sameer captures our visual feed. He frames our team chemistry with camera lenses, producing our cover designs and branding assets.",
    quote: "If a picture is worth a thousand words, our crew is a whole library archive.",
    photo: "/team/t9.jpg",
    icon: "📷",
    color: "bg-[#EAB308]" // Dark Yellow
  }
];
