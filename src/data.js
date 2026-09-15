// Draft portfolio content. All initial projects are clearly labelled presentation concepts.
export const profile = {
  name: "Sasha Makarov",
  studio: "Sasha Makarov",
  role: "Game artist & visual designer",
  email: "",
  intro:
    "I design expressive characters, enchanting game worlds, and thoughtful visual experiences. A little imagination in every detail.",
  about:
    "I’m Sasha, a designer drawn to the magic of animated worlds. My visual direction brings together expressive shapes, cinematic colour, and the small details that give a story its heart.",
};
export const categories = [
  "All work",
  "Game worlds",
  "Characters",
  "Game UI",
  "Graphic design",
];
export const projects = [
  {
    slug: "moonlit-kingdom",
    title: "The Moonlit Kingdom",
    subtitle: "Every adventure begins with a little curiosity.",
    category: "Game worlds",
    year: "Concept study",
    theme: "kingdom",
    cover: "/media/moonlit-kingdom.webp",
    coverAlt:
      "A lantern-carrying fox gazes at a glowing castle across an enchanted blue forest.",
    featured: true,
    services: [
      "Environment design",
      "Colour & lighting",
      "Visual storytelling",
    ],
    description:
      "A storybook world built around the feeling of taking your first step into the unknown. Deep blue woodland gives way to a distant kingdom, with a single lantern lighting the way.",
    challenge:
      "Balance a sense of cinematic scale with a welcoming, readable world. The scene needs a clear focal point and an inviting path through it.",
    approach:
      "Cool indigo silhouettes frame warm golden light. Layered foreground, middle ground, and distant architecture create depth, while the winding river leads the eye through the scene.",
    outcome:
      "An illustrative visual direction for an adventure game: a warm emotional focal point, a readable composition, and a cohesive night-time colour palette.",
    palette: ["#101a34", "#3b4b76", "#668789", "#e9bd76", "#b36d42"],
    gallery: [
      {
        src: "/media/moonlit-kingdom.webp",
        title: "01 / Environment & colour key",
        alt: "Enchanted kingdom environment concept",
      },
      { variant: "palette", title: "02 / Colour script & atmosphere" },
    ],
    video: null,
  },
  {
    slug: "woodland-companions",
    title: "Woodland Companions",
    subtitle: "Small heroes. Big personalities.",
    category: "Characters",
    year: "Concept study",
    theme: "characters",
    cover: "/media/woodland-friends.webp",
    coverAlt:
      "Character concept sheet featuring an expressive fox, a turquoise owl, and a rabbit in a violet cape.",
    services: ["Character direction", "Shape language", "Costume & colour"],
    description:
      "A trio of curious woodland travellers, each with a distinct silhouette and a personality expressed through shape, colour, and a carefully chosen accessory.",
    challenge:
      "Make the characters feel like they belong in the same world while giving each one an immediately recognisable identity.",
    approach:
      "A lively fox, a round owl, and a soft, long-eared rabbit create contrasting silhouettes. Shared warm neutrals connect teal and violet costume accents.",
    outcome:
      "An illustrative cast direction exploring appeal, group cohesion, and readable silhouettes for a family-friendly adventure.",
    palette: ["#bc5e29", "#ead1a1", "#276d76", "#78517d", "#584335"],
    gallery: [
      {
        src: "/media/woodland-friends.webp",
        title: "01 / The travelling companions",
        alt: "Illustrative woodland character lineup and development sketches",
      },
      { variant: "palette", title: "02 / Character colour language" },
    ],
    video: null,
  },
  {
    slug: "starlight-collection",
    title: "Starlight Collection",
    subtitle: "A little reward. A lot of delight.",
    category: "Game UI",
    year: "Interface concept",
    theme: "starlight",
    services: ["Game interface", "Collectible cards", "Icon direction"],
    description:
      "A playful interface concept for a collection of magical keepsakes. Soft panels, golden details, and clear hierarchy make every discovery feel special.",
    challenge:
      "Give a fantasy interface personality while making rarity, item names, and progress easy to understand at a glance.",
    approach:
      "A deep violet backdrop keeps the focus on warm, dimensional cards. Consistent symbols and a restrained gold accent distinguish each collectible without overwhelming the layout.",
    outcome:
      "A visual study of collectible cards and reward presentation. It demonstrates an interface direction, not a connected or playable game.",
    palette: ["#171b37", "#414273", "#bfb0e2", "#ecca8a", "#fcf4e3"],
    gallery: [
      { variant: "detail", title: "01 / Collectible card system" },
      { variant: "system", title: "02 / Reward panel & interface details" },
    ],
    video: null,
  },
  {
    slug: "adventure-island",
    title: "Adventure Island",
    subtitle: "A bright world map for a story-led island adventure.",
    category: "Game worlds",
    year: "World-building study",
    theme: "adventure-island",
    cover: "/media/adventure-island/Big Island background image.webp",
    coverAlt:
      "Colourful island adventure environment with a winding path through a tropical world.",
    featured: false,
    mediaDisclosure: "Portfolio artwork supplied by Sasha Makarov",
    services: ["World building", "Environment design", "Level flow"],
    description:
      "Adventure Island is a playful visual system for a journey across distinct regions, from sunlit beaches to dense forests and a glowing volcanic finale.",
    challenge:
      "Give a large, multi-region adventure a clear sense of progression while keeping every location inviting, readable, and full of discovery.",
    approach:
      "A hand-painted map language connects the island, lettered destinations, and level backgrounds. Warm greens and ocean blues establish the world, while each region receives its own colour mood and landmarks.",
    outcome:
      "A flexible world-building direction for an adventure game, with a clear map-to-level relationship and enough visual variety to make every stop feel like a new chapter.",
    palette: ["#173f59", "#2d836f", "#e7b85d", "#d77955", "#6a4e86"],
    gallery: [
      { src: "/media/adventure-island/Map-Letter Island.webp", title: "01 / Island map & route language", alt: "Lettered illustrated island map showing destinations and paths" },
      { src: "/media/adventure-island/Island background image with text.webp", title: "02 / World map presentation", alt: "Island world presentation artwork with location labels" },
      { src: "/media/adventure-island/Environment Background Redesign.webp", title: "03 / Environment redesign", alt: "Colourful environment redesign for the island adventure" },
      { src: "/media/adventure-island/2.V of the background-Continue_Forest.webp", title: "04 / Forest level background", alt: "Forest level background concept with a path through the trees" },
      { src: "/media/adventure-island/2.V of the background-Continue_Desert.webp", title: "05 / Desert level background", alt: "Desert level background concept for Adventure Island" },
      { src: "/media/adventure-island/2.V of the background-Continue_Volcano.webp", title: "06 / Volcano level background", alt: "Volcanic level background concept for Adventure Island" },
      { src: "/media/adventure-island/Path to the result of a desert background.webp", title: "07 / Desert journey keyframe", alt: "Tall desert journey environment concept" },
      { src: "/media/adventure-island/Road to the result of a forest background.webp", title: "08 / Forest journey keyframe", alt: "Tall forest journey environment concept" },
    ],
    video: null,
  },
  {
    slug: "paper-stories",
    title: "Stories, on Paper",
    subtitle: "The same imagination. A different canvas.",
    category: "Graphic design",
    year: "Editorial concept",
    theme: "paper",
    services: ["Presentation design", "Document layouts", "Printed cards"],
    description:
      "A collection of presentation, document, and card layouts. Thoughtful typography and an airy editorial rhythm bring the same sense of storytelling to everyday communication.",
    challenge:
      "Translate a rich visual world into clear documents that support reading, presenting, and sharing.",
    approach:
      "A cream and lavender palette, expressive serif headlines, and modular layouts connect a presentation cover, an editorial spread, and a small printed card.",
    outcome:
      "A coherent direction for a presentation and print collection, with clarity and narrative flow at its centre.",
    palette: ["#f8f3e9", "#dfd5f0", "#656092", "#d7ad6c", "#20263e"],
    gallery: [
      { variant: "detail", title: "01 / Presentation & document layouts" },
      { variant: "system", title: "02 / Cards & printed details" },
    ],
    video: null,
  },
];
