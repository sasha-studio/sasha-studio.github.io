// Draft portfolio content. All initial projects are clearly labelled presentation concepts.
export const profile = {
  name: "Sasha Makarov",
  studio: "Sasha Makarov",
  role: "Game artist & visual designer",
  email: "sasha.mak3d@gmail.com",
  linkedin: "https://www.linkedin.com/in/sasha-makarov-8bb655140/",
  resume: "",
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
const babyGameAssetPaths = {
  1: "elements/24-speech-bubble.webp",
  2: "elements/30-wide-wooden-panel.webp",
  3: "elements/25-leaf-framed-dialogue.webp",
  4: "elements/18-game-over-panel.webp",
  5: "elements/19-victory-panel-purple.webp",
  6: "elements/20-victory-panel-blue.webp",
  7: "elements/21-game-over-panel-light.webp",
  8: "elements/31-progress-bar.webp",
  9: "elements/02-adventure-island-logo.webp",
  10: "maps/02-map-direction-study.webp",
  11: "elements/26-character-dialogue-bubble.webp",
  12: "maps/04-map-variations.webp",
  13: "maps/03-island-map-presentation.webp",
  14: "elements/04-book-interface-overview.webp",
  15: "elements/27-dog-dialogue-screen.webp",
  16: "elements/05-character-quest-book.webp",
  17: "maps/17-level-scenes-overview.webp",
  18: "elements/32-square-panel-frame.webp",
  19: "elements/33-wide-panel-frame.webp",
  20: "elements/34-slim-panel.webp",
  21: "elements/35-compact-panel.webp",
  22: "elements/10-inventory-grid.webp",
  23: "elements/36-small-inventory-slots.webp",
  24: "elements/28-dialogue-cloud.webp",
  25: "elements/37-item-slot-set.webp",
  26: "elements/11-character-inventory-panel.webp",
  27: "elements/06-item-card-states.webp",
  28: "elements/29-leafy-dialogue-panel.webp",
  29: "elements/12-reward-book.webp",
  30: "elements/07-locked-item-card.webp",
  31: "elements/08-open-item-card.webp",
  32: "elements/09-lock-icon.webp",
  33: "elements/38-collection-grid-panel.webp",
  34: "elements/13-open-book-screen.webp",
  35: "elements/39-group-6695-panel-atlas.webp",
};
const babyGameAsset = (index, title, alt) => ({
  src: `/media/adventure-island/${babyGameAssetPaths[index]}`,
  title,
  alt,
});
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
    slug: "english-kingdom-wardrobe",
    title: "English Kingdom",
    subtitle: "A growing visual library for a story-led game world.",
    category: "Game UI",
    year: "Production asset study",
    theme: "wardrobe",
    cover: "/media/english-kingdom/03-project-overview/01-english-kingdom-project-overview.webp",
    coverAlt:
      "English Kingdom gameplay in a bright medieval town, featuring its character, equipment interface, and minimap.",
    featured: false,
    mediaDisclosure: "Production UI artwork from the English Kingdom project",
    services: ["Character design", "Costume systems", "Monster drops", "Game UI assets"],
    description:
      "A collection of production artwork for English Kingdom, spanning character customisation and collectible monster drops.",
    challenge:
      "Build clear, cohesive asset families that feel at home in one playful world, while keeping clothing and collectible rewards easy to recognise.",
    approach:
      "Clothing is organised by equipment slot, while monster drops use distinct silhouettes, materials, and colour accents. Both libraries keep a consistent storybook finish and remain readable at game UI scale.",
    outcome:
      "A flexible visual library for character customisation and monster rewards, ready to grow with in-game character views and loot-flow examples.",
    palette: ["#172449", "#4b6ca8", "#c98a52", "#8d5c72", "#e7d4a3"],
    assetShowcase: {
      intro: "Browse English Kingdom’s visual library one focused preview at a time, from the wardrobe collection to monster drops and the project overview.",
      categories: [
        {
          title: "Wardrobe",
          description: "Equipment icons, organised by character slot",
          gallery: [
            { src: "/media/english-kingdom/01-wardrobe/01-tops-coats.webp", title: "Tops & coats", alt: "English Kingdom tops and coat clothing icons" },
            { src: "/media/english-kingdom/01-wardrobe/02-hats-headwear.webp", title: "Hats & headwear", alt: "English Kingdom hat and headwear icons" },
            { src: "/media/english-kingdom/01-wardrobe/03-bottoms.webp", title: "Bottoms", alt: "English Kingdom trousers and bottom clothing icons" },
            { src: "/media/english-kingdom/01-wardrobe/04-footwear.webp", title: "Footwear", alt: "English Kingdom footwear icons" },
            { src: "/media/english-kingdom/01-wardrobe/05-gloves.webp", title: "Gloves", alt: "English Kingdom glove icons" },
            { src: "/media/english-kingdom/01-wardrobe/06-neckwear.webp", title: "Neckwear", alt: "English Kingdom scarf and neckwear icons" },
          ],
        },
        {
          title: "Drops",
          description: "Collectible rewards and monster drops",
          gallery: [
            { src: "/media/english-kingdom/02-monster-drops/01-monster-drops-treasure.webp", title: "Monster drops & treasure", alt: "English Kingdom monster drop and treasure item icons" },
          ],
        },
        {
          title: "Project overview",
          description: "Gameplay, character equipment, and visual direction",
          gallery: [
            { src: "/media/english-kingdom/03-project-overview/01-english-kingdom-project-overview.webp", title: "English Kingdom project overview", alt: "English Kingdom project overview showing gameplay, character equipment, and visual direction" },
          ],
        },
      ],
    },
    video: null,
  },
  {
    slug: "adventure-island",
    title: "Adventure Island",
    subtitle: "A colourful world map for a story-led learning adventure.",
    category: "Game worlds",
    year: "World-building study",
    theme: "adventure-island",
    cover: "/media/adventure-island/adventure-island-cover.webp",
    coverAlt:
      "Adventure Island cover art featuring a colourful multi-region map, wooden signposts, and a guide owl.",
    featured: false,
    mediaDisclosure: "Portfolio artwork supplied by Sasha Makarov",
    services: ["World building", "Environment design", "Level flow"],
    description:
      "Adventure Island is a playful visual system for a learning journey across distinct regions, from sunlit beaches to dense forests and a glowing volcanic finale.",
    challenge:
      "Give a large, multi-region adventure a clear sense of progression while keeping every location inviting, readable, and full of discovery.",
    approach:
      "A hand-painted map language connects the island, lettered destinations, and level backgrounds. Warm greens and ocean blues establish the world, while each region receives its own colour mood and landmarks.",
    letterShowcase: {
      wordmark: "/media/adventure-island/letters/00-letter-island-wordmark.webp",
      intro:
        "Meet the alphabet as a cast of colourful characters. Choose a letter to bring its design forward, then browse the complete A–Z set.",
      characters: [
        { letter: "A", src: "/media/adventure-island/letters/01-letter-a.webp", alt: "Colourful illustrated letter A character" },
        { letter: "B", src: "/media/adventure-island/letters/02-letter-b.webp", alt: "Colourful illustrated letter B character" },
        { letter: "C", src: "/media/adventure-island/letters/03-letter-c.webp", alt: "Colourful illustrated letter C character" },
        { letter: "D", src: "/media/adventure-island/letters/04-letter-d.webp", alt: "Colourful illustrated letter D character" },
        { letter: "E", src: "/media/adventure-island/letters/05-letter-e.webp", alt: "Colourful illustrated letter E character" },
        { letter: "F", src: "/media/adventure-island/letters/06-letter-f.webp", alt: "Colourful illustrated letter F character" },
        { letter: "G", src: "/media/adventure-island/letters/07-letter-g.webp", alt: "Colourful illustrated letter G character" },
        { letter: "H", src: "/media/adventure-island/letters/08-letter-h.webp", alt: "Colourful illustrated letter H character" },
        { letter: "I", src: "/media/adventure-island/letters/09-letter-i.webp", alt: "Colourful illustrated letter I character" },
        { letter: "J", src: "/media/adventure-island/letters/10-letter-j.webp", alt: "Colourful illustrated letter J character" },
        { letter: "K", src: "/media/adventure-island/letters/11-letter-k.webp", alt: "Colourful illustrated letter K character" },
        { letter: "L", src: "/media/adventure-island/letters/12-letter-l.webp", alt: "Colourful illustrated letter L character" },
        { letter: "M", src: "/media/adventure-island/letters/13-letter-m.webp", alt: "Colourful illustrated letter M character" },
        { letter: "N", src: "/media/adventure-island/letters/14-letter-n.webp", alt: "Colourful illustrated letter N character" },
        { letter: "O", src: "/media/adventure-island/letters/15-letter-o.webp", alt: "Colourful illustrated letter O character" },
        { letter: "P", src: "/media/adventure-island/letters/16-letter-p.webp", alt: "Colourful illustrated letter P character" },
        { letter: "Q", src: "/media/adventure-island/letters/17-letter-q.webp", alt: "Colourful illustrated letter Q character" },
        { letter: "R", src: "/media/adventure-island/letters/18-letter-r.webp", alt: "Colourful illustrated letter R character" },
        { letter: "S", src: "/media/adventure-island/letters/19-letter-s.webp", alt: "Colourful illustrated letter S character" },
        { letter: "T", src: "/media/adventure-island/letters/20-letter-t.webp", alt: "Colourful illustrated letter T character" },
        { letter: "U", src: "/media/adventure-island/letters/21-letter-u.webp", alt: "Colourful illustrated letter U character" },
        { letter: "V", src: "/media/adventure-island/letters/22-letter-v.webp", alt: "Colourful illustrated letter V character" },
        { letter: "W", src: "/media/adventure-island/letters/23-letter-w.webp", alt: "Colourful illustrated letter W character" },
        { letter: "X", src: "/media/adventure-island/letters/24-letter-x.webp", alt: "Colourful illustrated letter X character" },
        { letter: "Y", src: "/media/adventure-island/letters/25-letter-y.webp", alt: "Colourful illustrated letter Y character" },
        { letter: "Z", src: "/media/adventure-island/letters/26-letter-z.webp", alt: "Colourful illustrated letter Z character" },
      ],
    },
    outcome:
      "A flexible world-building direction for an adventure game, with a clear map-to-level relationship and enough visual variety to make every stop feel like a new chapter.",
    palette: ["#173f59", "#2d836f", "#e7b85d", "#d77955", "#6a4e86"],
    gallery: [
      { src: "/media/adventure-island/maps/01-parchment-map.webp", title: "01 / Parchment map", alt: "Adventure Island map presented on a parchment scroll" },
      { src: "/media/adventure-island/maps/02-island-map-variation.webp", title: "02 / Island map variation", alt: "Alternate illustrated Adventure Island map" },
      { src: "/media/adventure-island/maps/03-map-assets-overview.webp", title: "03 / Map assets", alt: "Adventure Island map assets and environment pieces" },
    ],
    assetShowcase: {
      intro: "Browse only the new artwork added to the project, grouped into maps and visual elements.",
      categories: [
        {
          title: "Maps",
          description: "New island map artwork",
          gallery: [
            { src: "/media/adventure-island/maps/01-parchment-map.webp", title: "Parchment map presentation", alt: "Adventure Island map presented on a parchment scroll" },
            { src: "/media/adventure-island/maps/02-island-map-variation.webp", title: "Island map variation", alt: "Alternate illustrated Adventure Island map" },
            { src: "/media/adventure-island/maps/03-map-assets-overview.webp", title: "Map assets overview", alt: "Adventure Island map assets and environment pieces" },
            { src: "/media/adventure-island/maps/04-environment-background-redesign.webp", title: "Environment background redesign", alt: "Ten Adventure Island environment background variations" },
            { src: "/media/adventure-island/maps/05-forest-background-result.webp", title: "Forest background results", alt: "Forest environment and gameplay background variations" },
            { src: "/media/adventure-island/maps/06-desert-background-result.webp", title: "Desert background results", alt: "Desert environment and gameplay background variations" },
            { src: "/media/adventure-island/maps/07-volcano-background-continuation.webp", title: "Volcano background continuation", alt: "Volcano environment and gameplay background variations" },
          ],
        },
        {
          title: "Elements",
          description: "New interface and game element artwork",
          gallery: [
            { src: "/media/adventure-island/elements/01-adventure-island-title-logo.webp", title: "Adventure Island title logo", alt: "Adventure Island title logo artwork" },
            { src: "/media/adventure-island/elements/02-quest-book-overview.webp", title: "Quest book overview", alt: "Quest book interface showing characters and active quests" },
            { src: "/media/adventure-island/elements/03-dog-dialogue-panel.webp", title: "Dog dialogue panel", alt: "Dialogue panel with the dog guide character" },
            { src: "/media/adventure-island/elements/04-character-collection-screens.webp", title: "Character collection screens", alt: "Character profile and collectible item book screens" },
            { src: "/media/adventure-island/elements/05-magic-book-item.webp", title: "Magic book item", alt: "Decorative game book collectible with a blue jewel" },
            { src: "/media/adventure-island/elements/06-victory-and-defeat-states.webp", title: "Victory and defeat states", alt: "Game victory and defeat result screen variations" },
            { src: "/media/adventure-island/elements/07-challenge-panels.webp", title: "Challenge panels", alt: "Challenge and collectible reward interface panels" },
            { src: "/media/adventure-island/elements/08-character-equipment-panels.webp", title: "Character equipment panels", alt: "Character equipment and wardrobe interface panel variations" },
            { src: "/media/adventure-island/elements/09-game-interface-panels.webp", title: "Game interface panels", alt: "Game interface panels, inventory frames, and controls" },
          ],
        },
      ],
    },
    video: {
      src: "/media/adventure-island/adventure-island-walkthrough.mp4",
      type: "video/mp4",
      label: "Adventure Island visual walkthrough",
    },
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
