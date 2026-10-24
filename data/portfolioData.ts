export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'FILM & TV' | 'SHORTS' | 'MUSIC VIDEO' | 'COMMERCIAL';
  genre: string;
  year: string;
  runtime: string;
  aspectRatio: string;
  videoSrc?: string;
  posterBg: string; // Tailwind gradient or accent
  role: string[];
  description: string;
  creativeBrief: string;
  editingApproach: string;
  software: string[];
  colorGrading: {
    camera: string;
    colorSpace: string;
    lut: string;
    notes: string;
    rawImage?: string;
    gradeImage?: string;
  };
  keyTakeaways: string[];
  featured?: boolean;
  mosaicPosition?: number; // 0 to 7 for the 8 surrounding tiles in 3x3 grid
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  details: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
}

export const EDITOR_PROFILE = {
  name: "ANDY YOUNG",
  preferredName: "Andy Young",
  title: "FILM / TV & COMMERCIAL EDITOR",
  tagline: "I MAKE EVERY FRAME MEAN SOMETHING.",
  subTagline: "Video Editor & Visual Storyteller crafting films that make people feel something.",
  location: "Los Angeles / Mumbai / Remote Worldwide",
  availability: "AVAILABLE FOR SELECT PROJECTS — 2025/2026",
  bio: [
    "With over 8 years in the post-production suite, I craft narratives where pacing, sound design, and emotional rhythm collide. Every cut is an intentional beat in the story.",
    "From high-octane commercial campaigns and multi-million-view music videos to award-winning short films, I specialize in transforming raw footage into cohesive, unforgettable cinema."
  ],
  stats: [
    { value: "8+", label: "Years in Post-Production" },
    { value: "150+", label: "Projects Completed" },
    { value: "65M+", label: "Combined Online Views" },
    { value: "100%", label: "On-Time Delivery Rate" },
  ],
  tools: [
    { name: "DaVinci Resolve Studio", category: "Color & Finishing" },
    { name: "Adobe Premiere Pro", category: "Narrative & Commercial NLE" },
    { name: "After Effects", category: "Motion & Title Design" },
    { name: "Avid Media Composer", category: "Long-form / TV Broadcast" },
    { name: "iZotope RX 10", category: "Audio Restoration" },
    { name: "Frame.io", category: "Client Collaboration" },
  ],
  contacts: {
    email: "andy.young.edits@gmail.com",
    whatsapp: "+1 (555) 349-2810",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    vimeo: "https://vimeo.com",
    behance: "https://behance.net",
  }
};

export const PROJECTS: Project[] = [
  {
    id: "volvo-cmc",
    title: "VOLVO CMC — Pure Precision",
    client: "Volvo Cars / Commercial Media Corp",
    category: "COMMERCIAL",
    genre: "Automotive / High-End Commercial",
    year: "2024",
    runtime: "01:15",
    aspectRatio: "16:9",
    posterBg: "from-zinc-900 to-amber-950/40",
    role: ["Lead Editor", "Sound Designer", "Colorist"],
    description: "Sleek automotive commercial cut with rhythmic acceleration pacing, industrial sound design, and color grading.",
    creativeBrief: "Showcase the seamless fusion of Scandinavian design, silent electric acceleration, and cutting-edge craftsmanship in a high-tension, cinematic 75-second commercial.",
    editingApproach: "Built around sound-driven cutting. Engine audio, electronic synths, and road friction textures dictated the jump cuts and kinetic whip pans.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "After Effects"],
    colorGrading: {
      camera: "ARRI Alexa Mini LF",
      colorSpace: "ACEScc / Rec.709",
      lut: "Custom Scandinavian Slate & Warm Tungsten",
      notes: "De-saturated backgrounds with focused metallic separation on the vehicle bodywork."
    },
    keyTakeaways: [
      "Dynamic speed-ramp pacing locked to custom sound stems",
      "Seamless multi-angle exterior tracking match-cuts",
      "Refined typography tracking for key vehicle features"
    ],
    featured: true,
    mosaicPosition: 0 // Top Left
  },
  {
    id: "omah-music",
    title: "OMAH — Visual Lyricism",
    client: "Omah Records & Universal Music",
    category: "MUSIC VIDEO",
    genre: "Afrobeat / R&B Visualizer",
    year: "2024",
    runtime: "02:40",
    aspectRatio: "16:9",
    videoSrc: "/Content/omah.mp4",
    posterBg: "from-purple-950/60 to-zinc-950",
    role: ["Editor", "Colorist", "Visual Effects"],
    description: "Vibrant music visualizer synchronizing beat drops with fluid match-cuts, dreamy lighting, and hyper-saturated hues.",
    creativeBrief: "Create an intimate yet energetic performance narrative matching the sensual tempo of the track with rapid rhythmic micro-cuts.",
    editingApproach: "Utilized tempo-mapped beat markers in Premiere, creating visual syncopation where percussion triggers subtle zooms and flashes.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve", "Boris FX Mocha"],
    colorGrading: {
      camera: "RED V-Raptor 8K",
      colorSpace: "RedWideGamutRGB / Log3G10",
      lut: "Kodak 2383 Film Print Emulation",
      notes: "Rich skin tones preserved while pushing neon magentas and deep shadows."
    },
    keyTakeaways: [
      "Precise percussive frame-cuts matching vocal cadence",
      "Color separation emphasizing warm performers against cool backdrops",
      "Organic 35mm film grain overlay applied in ACES pipeline"
    ],
    featured: true,
    mosaicPosition: 1 // Top Center
  },
  {
    id: "style-union-final",
    title: "STYLE UNION — Autumn / Winter",
    client: "Style Union Apparel",
    category: "COMMERCIAL",
    genre: "Fashion & Lifestyle",
    year: "2024",
    runtime: "01:30",
    aspectRatio: "16:9",
    posterBg: "from-amber-950/40 to-neutral-900",
    role: ["Lead Video Editor", "Motion Designer"],
    description: "High-fashion lifestyle spot exploring urban silhouettes, kinetic camera transitions, and vibrant film grain.",
    creativeBrief: "Engage youth urban demographics with quick-witted pacing, spontaneous wardrobe transitions, and lively character chemistry.",
    editingApproach: "Seamless whip pans and wardrobe match-cuts that make garment changes appear instantaneous and fluid.",
    software: ["Adobe Premiere Pro", "After Effects"],
    colorGrading: {
      camera: "Sony FX6",
      colorSpace: "S-Log3 / S-Gamut3.Cine",
      lut: "Clean Editorial Commercial Warmth",
      notes: "Accurate textile colors with elevated contrast and crisp high-key highlights."
    },
    keyTakeaways: [
      "Invisible wardrobe snap-cuts matching actor body motion",
      "Snappy editorial sound design with vinyl pops and camera shutter FX",
      "Optimized for both broadcast 16:9 and social 9:16 cutdowns"
    ],
    featured: true,
    mosaicPosition: 2 // Top Right
  },
  {
    id: "own-skin",
    title: "OWN SKIN — Intimate Portrait",
    client: "Independent Cinema Guild",
    category: "FILM & TV",
    genre: "Documentary Short",
    year: "2024",
    runtime: "03:10",
    aspectRatio: "16:9",
    videoSrc: "/Content/own%20Skin22244.mp4",
    posterBg: "from-stone-900 to-amber-950/30",
    role: ["Editor", "Sound Designer"],
    description: "Sensory documentary short investigating identity and comfort in one's own skin, cut with delicate micro-pauses.",
    creativeBrief: "Allow the subject's words to breathe while weaving candid observational moments with poetic visual motifs.",
    editingApproach: "Resisted the urge for rapid cuts. Built sustained pauses that allow non-verbal expressions and micro-gestures to carry the emotional gravity.",
    software: ["DaVinci Resolve Studio", "iZotope RX 10"],
    colorGrading: {
      camera: "Canon C500 Mark II",
      colorSpace: "Canon Log 2 / Cinema Gamut",
      lut: "Ektachrome Vintage Soft Tone",
      notes: "Delicate highlight rolloff to maintain natural skin textures."
    },
    keyTakeaways: [
      "Emotional cadence prioritization over mechanical pacing",
      "Layered atmospheric foley and room tone audio engineering",
      "Award of Merit at Independent Documentary Festival"
    ],
    featured: true,
    mosaicPosition: 3 // Mid Left
  },
  {
    id: "vj-setup",
    title: "NEON HORIZON — VJ Festival Aftermovie",
    client: "VJ Stage Productions & Sunburn",
    category: "SHORTS",
    genre: "Live Event / Electronic Music",
    year: "2024",
    runtime: "02:15",
    aspectRatio: "16:9",
    videoSrc: "/Content/Bg%20video.mp4",
    posterBg: "from-cyan-950/60 to-purple-950/60",
    role: ["Editor", "Sound Mixer", "Colorist"],
    description: "Electrifying festival recap with syncopated strobe cuts, multi-cam live switching, and bass-reactive transitions.",
    creativeBrief: "Capture the immense scale of stage visual production, pyrotechnics, and crowd euphoria in an adrenaline-charged recap.",
    editingApproach: "Speed ramps, directional whip cuts, and flash frame inserts synchronized to synth arpeggios and bass drops.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    colorGrading: {
      camera: "Multi-Cam Sony FX3 & FX9 Rig",
      colorSpace: "S-Gamut3.Cine / S-Log3",
      lut: "High-Contrast Cyberpunk Neon",
      notes: "Protecting LED wall highlights while lifting crowd silhouettes."
    },
    keyTakeaways: [
      "Harmonized 6 independent camera angles with variable frame rates",
      "Custom bass-rumble sub-harmonic audio enhancement",
      "Fast turnaround delivered within 48 hours of festival finale"
    ],
    featured: true,
    mosaicPosition: 4 // Mid Right
  },
  {
    id: "sse-football",
    title: "SSE CHAMPIONSHIP 2024 — Speed & Glory",
    client: "SSE Sports Federation",
    category: "COMMERCIAL",
    genre: "Sports / High-Impact Promo",
    year: "2024",
    runtime: "01:45",
    aspectRatio: "16:9",
    posterBg: "from-emerald-950/50 to-zinc-950",
    role: ["Lead Editor", "Sound Designer"],
    description: "High-octane football montage featuring speed ramps, impact sound effects, and kinetic match pacing.",
    creativeBrief: "Deliver an adrenaline-fueled teaser showcasing the intensity, passion, and tactical grit of tournament football.",
    editingApproach: "Intercut tactical slow-motion ball strikes with sudden real-time tackles, punctuated with heavy sub-bass hits and whistle accents.",
    software: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    colorGrading: {
      camera: "Sony FX6 & High-Speed Phantom",
      colorSpace: "S-Log3 to Rec.709",
      lut: "Bleach Bypass Sports Contrast",
      notes: "Intense turf greens, punchy jersey colors, and gritty stadium grain."
    },
    keyTakeaways: [
      "Dynamic impact sync between cleats striking ball and orchestral hits",
      "Multi-speed velocity ramps from 120fps down to 24fps",
      "Over 1.2M views on sports network broadcast channels"
    ],
    featured: true,
    mosaicPosition: 5 // Bottom Left
  },
  {
    id: "style-union-draft",
    title: "STYLE UNION — Director's Cut",
    client: "Style Union Fashion",
    category: "SHORTS",
    genre: "Fashion / Mood Film",
    year: "2024",
    runtime: "01:10",
    aspectRatio: "16:9",
    posterBg: "from-neutral-900 to-amber-950/40",
    role: ["Director's Cut Editor", "Color Finisher"],
    description: "Alternative editorial rhythm focusing on texture, slow-motion pauses, and typographic overlays.",
    creativeBrief: "Provide an artistic, unconstrained director's cut with deeper focus on tactile fabrics, atmospheric lighting, and personality.",
    editingApproach: "Deconstructs traditional commercial structure into an avant-garde montage with lingering pauses and split-second jump cuts.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    colorGrading: {
      camera: "Sony FX6",
      colorSpace: "ACEScc",
      lut: "Warm Monochromatic Cast with Gold Highlights",
      notes: "Subtle vintage warmth referencing 90s Italian fashion editorials."
    },
    keyTakeaways: [
      "Artistic experimentation with non-linear narrative montage",
      "Bespoke sound design blending lo-fi house beats with ambient chatter",
      "Selected for Berlin Commercial Awards Fashion Shortlist"
    ],
    featured: true,
    mosaicPosition: 6 // Bottom Center
  },
  {
    id: "symbi-basketball",
    title: "COURT LEGENDS — Symbi Hoops",
    client: "Symbiosis Athletics",
    category: "SHORTS",
    genre: "Street Sports / Documented Action",
    year: "2023",
    runtime: "01:50",
    aspectRatio: "16:9",
    posterBg: "from-orange-950/50 to-zinc-950",
    role: ["Editor", "Sound Designer", "Colorist"],
    description: "Raw, gritty street basketball recap captured in explosive jump cuts and rhythmic dribble sync.",
    creativeBrief: "Capture the raw sweat, sneaker squeaks, and court culture in a documentary-style high-energy highlight reel.",
    editingApproach: "Matched court dribble cadences directly to the percussion tempo, using rhythmic cutting to build tension towards buzzer-beater climaxes.",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    colorGrading: {
      camera: "Blackmagic Pocket 6K",
      colorSpace: "Blackmagic Film Gen 5",
      lut: "Gritty Warm Asphalt & Tungsten Court",
      notes: "Heavy midtone contrast with lifted moody shadows."
    },
    keyTakeaways: [
      "Percussive dribble sound-locking creating musical rhythm",
      "Handheld camera stability balancing while preserving street grit",
      "Viral reception on student and regional athletics channels"
    ],
    featured: true,
    mosaicPosition: 7 // Bottom Right
  }
];

export const SERVICES: Service[] = [
  {
    id: "commercial",
    title: "Commercial & Brand Films",
    subtitle: "High-impact narrative cuts designed to convert, mesmerize, and build brand prestige.",
    description: "From 15-second social teasers to 90-second television commercials, I craft razor-sharp cuts that respect your brand identity while keeping audiences hooked through every second.",
    deliverables: ["TV Broadcast Master (ProRes 422HQ)", "Social Media Multi-Aspect Crops (9:16, 1:1, 4:5)", "Sound-Designed Rough Cut to Final Cut", "Subtitled Versions"],
    turnaround: "3–7 Business Days",
    iconName: "Film"
  },
  {
    id: "music-video",
    title: "Music Video Editing",
    subtitle: "Beat-synchronized visual journeys that elevate the track into an unforgettable experience.",
    description: "Music videos require a deep sense of musicality, lyricism, and visual rhythm. I synchronize performance cuts, narrative B-roll, and stylized transitions that amplify the artist's brand.",
    deliverables: ["Full 4K Music Video Master", "Teaser Snippets for TikTok & Reels", "Syncopated Match-Cuts & Performance Swaps", "Color Tone Matching"],
    turnaround: "4–8 Business Days",
    iconName: "Music"
  },
  {
    id: "sports-action",
    title: "Sports & High-Energy Montage",
    subtitle: "Adrenaline-fueled cuts with speed ramps, impact audio, and dynamic motion tracking.",
    description: "Sports and high-action content live and die by pacing. I blend ultra-slow-motion beauty shots with explosive real-time plays, supported by heavy sound design that makes viewers feel every collision.",
    deliverables: ["Broadcast Highlight Reel", "Speed Ramped 120fps Transitions", "Custom Impact Foley & Sub-Bass FX", "Event Sponsor Logo Integration"],
    turnaround: "2–5 Business Days",
    iconName: "Zap"
  },
  {
    id: "color-grading",
    title: "Color Grading & Finishing",
    subtitle: "ACES-managed color pipelines delivering rich cinematic depth and perfect skin tones.",
    description: "Color sets the subconscious emotional temperature of a film. Using DaVinci Resolve Studio with calibrated monitoring, I bring raw log footage to life with tailored film stock emulations and look development.",
    deliverables: ["ACES / Rec.709 Color Master", "Shot-to-Shot Balancing & Matching", "Film Grain & Halation Emulation", "HDR & SDR Deliverables"],
    turnaround: "2–4 Business Days",
    iconName: "Palette"
  },
  {
    id: "sound-design",
    title: "Sound Design & Audio Sweetening",
    subtitle: "Because 50% of the visual experience is what the audience hears.",
    description: "A great cut feels flat without immersive audio. I build complete soundscapes from scratch: impact whooshes, atmospheric room tone, crisp foley, dialogue de-noising, and master volume leveling.",
    deliverables: ["Multi-Track Audio Stems (DX, FX, MX)", "Dialogue Clarity Cleanup & De-reverb", "Bespoke Risers, Drops & Hits", "Broadcast EBU R128 Loudness Compliance"],
    turnaround: "1–3 Business Days",
    iconName: "Volume2"
  },
  {
    id: "short-form",
    title: "Short-Form & Viral Content",
    subtitle: "Retention-engineered 9:16 vertical cuts for TikTok, YouTube Shorts, and Instagram Reels.",
    description: "In the attention economy, the first 2 seconds decide everything. I engineer hooks, kinetic text overlays, sound accents, and fast-paced micro-storytelling that maximize average watch duration.",
    deliverables: ["9:16 High-Retention Vertical Master", "Animated Kinetic Captions", "Sound Effects & Graphic Hooks", "Batch Delivery Available"],
    turnaround: "24–48 Hours",
    iconName: "Smartphone"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    headline: "Ingest, Selects & Narrative Architecture",
    description: "Every great cut starts with understanding the raw material. I review all footage, organize clips by story beats, pull the golden takes, and align with your creative vision.",
    details: [
      "Raw footage ingest and checksum verification",
      "Script & storyboard timeline mapping",
      "Selecting the most compelling performances and B-roll",
      "Establishing tempo, musical score selection & moodboards"
    ],
    duration: "Day 1–2"
  },
  {
    step: "02",
    title: "CRAFT",
    headline: "The Assembly & Narrative Rhythm",
    description: "This is where the magic happens. I sculpt the timeline, testing pacing, tension, comedic timing, and emotional peaks until the story flows seamlessly.",
    details: [
      "Rough cut assembly without distractions",
      "Pacing refinement and transition choreography",
      "Director & stakeholder review via Frame.io",
      "Precision trimming to frame-accurate perfection"
    ],
    duration: "Day 3–5"
  },
  {
    step: "03",
    title: "POLISH",
    headline: "Color Science, Sound Design & VFX",
    description: "With the picture locked, we elevate every technical layer. Color grading in DaVinci Resolve, bespoke sound design, custom typography, and invisible fixes.",
    details: [
      "Shot-to-shot color balancing and look development",
      "Layered foley, atmospheric audio and dialogue sweetening",
      "Motion graphics, titles, lower thirds and logo animation",
      "Film grain, halation, and organic lens flare styling"
    ],
    duration: "Day 6–7"
  },
  {
    step: "04",
    title: "DELIVER",
    headline: "Mastering & Multi-Platform Packaging",
    description: "Final rendering in uncompressed master formats, platform-specific exports for broadcast and social, clean audio stems, and project archiving.",
    details: [
      "Apple ProRes 422HQ and H.264/H.265 master renders",
      "Multi-aspect ratio adaptations (16:9, 9:16, 1:1, 4:5)",
      "Separated audio stems (Dialogue, Music, SFX)",
      "Cloud delivery with permanent project archive backup"
    ],
    duration: "Final Day"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Andy is one of those rare editors who understands emotional subtext before you even explain it. He took 8 hours of chaotic multicam footage and turned it into a breathtaking 2-minute commercial that brought our client to tears.",
    author: "Marcus Vance",
    role: "Commercial Director",
    company: "Vance & Co. Studios",
    project: "Volvo CMC Campaign"
  },
  {
    id: "2",
    quote: "His rhythm and musicality are second to none. He doesn't just cut to the beat—he cuts to the emotion inside the track. The music video he delivered surpassed 2M views in its first week.",
    author: "Elena Rostova",
    role: "Record Producer & Creative Director",
    company: "Universal Soundworks",
    project: "OMAH Visualizer"
  },
  {
    id: "3",
    quote: "Working with Andy on Frame.io is effortless. Fast turnarounds, incredible attention to sound design, and he always offers creative solutions when a scene isn't working.",
    author: "Devon Chen",
    role: "Executive Producer",
    company: "Apex Media Group",
    project: "Style Union Campaign"
  }
];
