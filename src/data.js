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
  1: "03-dialogue-feedback/01-speech-bubble.webp",
  2: "04-panels-controls/01-wide-wooden-panel.webp",
  3: "03-dialogue-feedback/02-leaf-framed-dialogue.webp",
  4: "03-dialogue-feedback/03-game-over-panel.webp",
  5: "03-dialogue-feedback/04-victory-panel-purple.webp",
  6: "03-dialogue-feedback/05-victory-panel-blue.webp",
  7: "03-dialogue-feedback/06-game-over-panel-light.webp",
  8: "04-panels-controls/02-progress-bar.webp",
  9: "01-world-levels/09-adventure-island-logo.webp",
  10: "01-world-levels/10-map-direction-study.webp",
  11: "03-dialogue-feedback/07-character-dialogue-bubble.webp",
  12: "01-world-levels/11-map-variations.webp",
  13: "01-world-levels/12-island-map-presentation.webp",
  14: "02-book-game-screens/01-book-interface-overview.webp",
  15: "03-dialogue-feedback/08-dog-dialogue-screen.webp",
  16: "02-book-game-screens/02-character-quest-book.webp",
  17: "01-world-levels/13-level-scenes-overview.webp",
  18: "04-panels-controls/03-square-panel-frame.webp",
  19: "04-panels-controls/04-wide-panel-frame.webp",
  20: "04-panels-controls/05-slim-panel.webp",
  21: "04-panels-controls/06-compact-panel.webp",
  22: "02-book-game-screens/03-inventory-grid.webp",
  23: "04-panels-controls/07-small-inventory-slots.webp",
  24: "03-dialogue-feedback/09-dialogue-cloud.webp",
  25: "04-panels-controls/08-item-slot-set.webp",
  26: "02-book-game-screens/04-character-inventory-panel.webp",
  27: "05-items-states/01-item-card-states.webp",
  28: "03-dialogue-feedback/10-leafy-dialogue-panel.webp",
  29: "02-book-game-screens/05-reward-book.webp",
  30: "05-items-states/02-locked-item-card.webp",
  31: "05-items-states/03-open-item-card.webp",
  32: "05-items-states/04-lock-icon.webp",
  33: "04-panels-controls/09-collection-grid-panel.webp",
  34: "02-book-game-screens/06-open-book-screen.webp",
  35: "06-panel-atlas/01-group-6695-complete-panel-atlas.webp",
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
    gallery: [
      { src: "/media/english-kingdom/01-wardrobe/01-tops-coats.webp", title: "01 / Tops & coats", alt: "English Kingdom tops and coat clothing icons" },
      { src: "/media/english-kingdom/01-wardrobe/02-hats-headwear.webp", title: "02 / Hats & headwear", alt: "English Kingdom hat and headwear icons" },
      { src: "/media/english-kingdom/01-wardrobe/03-bottoms.webp", title: "03 / Bottoms", alt: "English Kingdom trousers and bottom clothing icons" },
      { src: "/media/english-kingdom/01-wardrobe/04-footwear.webp", title: "04 / Footwear", alt: "English Kingdom footwear icons" },
      { src: "/media/english-kingdom/01-wardrobe/05-gloves.webp", title: "05 / Gloves", alt: "English Kingdom glove icons" },
      { src: "/media/english-kingdom/01-wardrobe/06-neckwear.webp", title: "06 / Neckwear", alt: "English Kingdom scarf and neckwear icons" },
    ],
    assetCategories: [
      {
        title: "Wardrobe",
        gallery: [
          { src: "/media/english-kingdom/01-wardrobe/01-tops-coats.webp", title: "01 / Tops & coats", alt: "English Kingdom tops and coat clothing icons" },
          { src: "/media/english-kingdom/01-wardrobe/02-hats-headwear.webp", title: "02 / Hats & headwear", alt: "English Kingdom hat and headwear icons" },
          { src: "/media/english-kingdom/01-wardrobe/03-bottoms.webp", title: "03 / Bottoms", alt: "English Kingdom trousers and bottom icons" },
          { src: "/media/english-kingdom/01-wardrobe/04-footwear.webp", title: "04 / Footwear", alt: "English Kingdom footwear icons" },
          { src: "/media/english-kingdom/01-wardrobe/05-gloves.webp", title: "05 / Gloves", alt: "English Kingdom glove icons" },
          { src: "/media/english-kingdom/01-wardrobe/06-neckwear.webp", title: "06 / Neckwear", alt: "English Kingdom scarf and neckwear icons" },
        ],
      },
      {
        title: "Drops",
        gallery: [
          { src: "/media/english-kingdom/02-monster-drops/01-monster-drops-treasure.webp", title: "01 / Monster drops & treasure", alt: "English Kingdom monster drop and treasure item icons" },
        ],
      },
      {
        title: "Project overview",
        gallery: [
          { src: "/media/english-kingdom/03-project-overview/01-english-kingdom-project-overview.webp", title: "01 / English Kingdom project overview", alt: "English Kingdom project overview showing gameplay, character equipment, and visual direction" },
        ],
      },
    ],
    video: null,
  },
  {
    slug: "adventure-island",
    title: "Adventure Island",
    subtitle: "A colourful world map for a story-led learning adventure.",
    category: "Game worlds",
    year: "World-building study",
    theme: "adventure-island",
    cover: "/media/adventure-island/00-cover/01-adventure-island-cover.webp",
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
      wordmark: "/media/adventure-island/07-letter-characters/00-letter-island-wordmark.webp",
      intro:
        "Meet the alphabet as a cast of colourful characters. Choose a letter to bring its design forward, then browse the complete A–Z set.",
      characters: [
        { letter: "A", src: "/media/adventure-island/07-letter-characters/01-letter-a.webp", alt: "Yellow letter A character with blue hair" },
        { letter: "B", src: "/media/adventure-island/07-letter-characters/02-letter-b.webp", alt: "Green letter B character in a red cap" },
        { letter: "C", src: "/media/adventure-island/07-letter-characters/03-letter-c.webp", alt: "Orange letter C character in a cowboy hat" },
        { letter: "D", src: "/media/adventure-island/07-letter-characters/04-letter-d.webp", alt: "Pink letter D character wearing headphones" },
        { letter: "E", src: "/media/adventure-island/07-letter-characters/05-letter-e.webp", alt: "Green letter E character with a playful expression" },
        { letter: "F", src: "/media/adventure-island/07-letter-characters/06-letter-f.webp", alt: "Yellow letter F character with a red cap" },
        { letter: "G", src: "/media/adventure-island/07-letter-characters/07-letter-g.webp", alt: "Purple letter G character with a game controller" },
        { letter: "H", src: "/media/adventure-island/07-letter-characters/08-letter-h.webp", alt: "Orange letter H character with a flower crown" },
        { letter: "I", src: "/media/adventure-island/07-letter-characters/09-letter-i.webp", alt: "Blue letter I character" },
        { letter: "J", src: "/media/adventure-island/07-letter-characters/10-letter-j.webp", alt: "Green letter J character" },
        { letter: "K", src: "/media/adventure-island/07-letter-characters/11-letter-k.webp", alt: "Blue letter K character in a crown and cape" },
        { letter: "L", src: "/media/adventure-island/07-letter-characters/12-letter-l.webp", alt: "Pink letter L character" },
        { letter: "M", src: "/media/adventure-island/07-letter-characters/13-letter-m.webp", alt: "Blue letter M character with a top hat" },
        { letter: "N", src: "/media/adventure-island/07-letter-characters/14-letter-n.webp", alt: "Green letter N character with flowers" },
        { letter: "O", src: "/media/adventure-island/07-letter-characters/15-letter-o.webp", alt: "Orange letter O character with citrus details" },
        { letter: "P", src: "/media/adventure-island/07-letter-characters/16-letter-p.webp", alt: "Blue letter P character dressed as a police officer" },
        { letter: "Q", src: "/media/adventure-island/07-letter-characters/17-letter-q.webp", alt: "Pink letter Q character wearing a crown" },
        { letter: "R", src: "/media/adventure-island/07-letter-characters/18-letter-r.webp", alt: "Turquoise letter R character with purple hair" },
        { letter: "S", src: "/media/adventure-island/07-letter-characters/19-letter-s.webp", alt: "Teal letter S character with golden hair" },
        { letter: "T", src: "/media/adventure-island/07-letter-characters/20-letter-t.webp", alt: "Orange letter T character in a tie" },
        { letter: "U", src: "/media/adventure-island/07-letter-characters/21-letter-u.webp", alt: "Pink letter U character with a starry mane" },
        { letter: "V", src: "/media/adventure-island/07-letter-characters/22-letter-v.webp", alt: "Brown letter V character with horns and a shield" },
        { letter: "W", src: "/media/adventure-island/07-letter-characters/23-letter-w.webp", alt: "Yellow letter W character with glasses" },
        { letter: "X", src: "/media/adventure-island/07-letter-characters/24-letter-x.webp", alt: "Red letter X character" },
        { letter: "Y", src: "/media/adventure-island/07-letter-characters/25-letter-y.webp", alt: "Purple letter Y character with orange hair" },
        { letter: "Z", src: "/media/adventure-island/07-letter-characters/26-letter-z.webp", alt: "Green letter Z character" },
      ],
    },
    outcome:
      "A flexible world-building direction for an adventure game, with a clear map-to-level relationship and enough visual variety to make every stop feel like a new chapter.",
    palette: ["#173f59", "#2d836f", "#e7b85d", "#d77955", "#6a4e86"],
    gallery: [
      { src: "/media/adventure-island/01-world-levels/01-island-map-and-routes.webp", title: "01 / Island map & route language", alt: "Illustrated Adventure Island map showing destinations and paths" },
      { src: "/media/adventure-island/01-world-levels/02-world-map-presentation.webp", title: "02 / World map presentation", alt: "Island world presentation artwork with location labels" },
      { src: "/media/adventure-island/01-world-levels/03-environment-redesign.webp", title: "03 / Environment redesign", alt: "Colourful environment redesign for the island adventure" },
      { src: "/media/adventure-island/01-world-levels/04-forest-level-background.webp", title: "04 / Forest level background", alt: "Forest level background concept with a path through the trees" },
      { src: "/media/adventure-island/01-world-levels/05-desert-level-background.webp", title: "05 / Desert level background", alt: "Desert level background concept for Adventure Island" },
      { src: "/media/adventure-island/01-world-levels/06-volcano-level-background.webp", title: "06 / Volcano level background", alt: "Volcanic level background concept for Adventure Island" },
      { src: "/media/adventure-island/01-world-levels/07-desert-journey-keyframe.webp", title: "07 / Desert journey keyframe", alt: "Tall desert journey environment concept" },
      { src: "/media/adventure-island/01-world-levels/08-forest-journey-keyframe.webp", title: "08 / Forest journey keyframe", alt: "Tall forest journey environment concept" },
    ],
    assetShowcase: {
      intro:
        "A growing visual system for the game: explore the world and level art, then move through the book, feedback, and interface pieces one at a time.",
      categories: [
        {
          title: "World & levels",
          description: "Maps, destinations, and playable environments",
          gallery: [
            { src: "/media/adventure-island/01-world-levels/01-island-map-and-routes.webp", title: "Island map & route language", alt: "Illustrated Adventure Island map showing destinations and paths" },
            { src: "/media/adventure-island/01-world-levels/02-world-map-presentation.webp", title: "World map presentation", alt: "Island world presentation artwork with location labels" },
            { src: "/media/adventure-island/01-world-levels/03-environment-redesign.webp", title: "Environment redesign", alt: "Colourful environment redesign for the island adventure" },
            { src: "/media/adventure-island/01-world-levels/04-forest-level-background.webp", title: "Forest level background", alt: "Forest level background concept with a path through the trees" },
            { src: "/media/adventure-island/01-world-levels/05-desert-level-background.webp", title: "Desert level background", alt: "Desert level background concept for Adventure Island" },
            { src: "/media/adventure-island/01-world-levels/06-volcano-level-background.webp", title: "Volcano level background", alt: "Volcanic level background concept for Adventure Island" },
            { src: "/media/adventure-island/01-world-levels/07-desert-journey-keyframe.webp", title: "Desert journey keyframe", alt: "Tall desert journey environment concept" },
            { src: "/media/adventure-island/01-world-levels/08-forest-journey-keyframe.webp", title: "Forest journey keyframe", alt: "Tall forest journey environment concept" },
            babyGameAsset(9, "Adventure Island logo", "Adventure Island title logo with a compass emblem"),
            babyGameAsset(10, "Map direction study", "Early hand-drawn island map and route planning board"),
            babyGameAsset(12, "Map variations", "A visual sheet of colorful island map variations and destination paths"),
            babyGameAsset(13, "Island map presentation", "Island map and world presentation variations"),
            babyGameAsset(17, "Level scenes overview", "A collection of Adventure Island gameplay level scenes"),
            { src: "/media/adventure-island/01-world-levels/14-big-island-background.webp", title: "Big island background", alt: "Wide illustrated background of the Adventure Island world" },
            { src: "/media/adventure-island/01-world-levels/15-forest-environment.webp", title: "Forest environment", alt: "Forest environment artwork for Adventure Island" },
            { src: "/media/adventure-island/01-world-levels/16-group-6272-reference.webp", title: "Group 6272 reference", alt: "Adventure Island visual asset reference sheet" },
            { src: "/media/adventure-island/01-world-levels/17-desert-map-section.webp", title: "Desert map section", alt: "Desert region detail from the Adventure Island map" },
            { src: "/media/adventure-island/01-world-levels/18-forest-map-section.webp", title: "Forest map section", alt: "Forest region detail from the Adventure Island map" },
            { src: "/media/adventure-island/01-world-levels/19-summer-map-section.webp", title: "Summer map section", alt: "Summer region detail from the Adventure Island map" },
            { src: "/media/adventure-island/01-world-levels/20-summer-journey-keyframe.webp", title: "Summer journey keyframe", alt: "Summer journey environment concept" },
          ],
        },
        {
          title: "Book & game screens",
          description: "The in-game book and its screen families",
          gallery: [
            babyGameAsset(14, "Book interface overview", "A visual overview of the game book and interface screens"),
            babyGameAsset(16, "Character & quest book", "Open game book showing character collection and active quests"),
            babyGameAsset(22, "Inventory grid", "Item slots arranged in a framed inventory panel"),
            babyGameAsset(26, "Character inventory panel", "Tall character equipment and inventory panel"),
            babyGameAsset(29, "Reward book", "Decorative book interface with collectible rewards"),
            babyGameAsset(34, "Open book screen", "Open book screen design for the game interface"),
          ],
        },
        {
          title: "Dialogue & feedback",
          description: "Character conversations, wins, losses, and responses",
          gallery: [
            babyGameAsset(1, "Speech bubble", "Small pale speech bubble with a trailing bubble"),
            babyGameAsset(3, "Leaf-framed dialogue", "Pale dialogue panel framed with green leaves"),
            babyGameAsset(4, "Game over panel", "Decorative game over result panel with score and actions"),
            babyGameAsset(5, "Victory panel · purple", "Purple victory result panel with stars and score"),
            babyGameAsset(6, "Victory panel · blue", "Blue victory result panel with stars and score"),
            babyGameAsset(7, "Game over panel · light", "Light game over result panel with score and actions"),
            babyGameAsset(11, "Character dialogue bubble", "Rounded character speech bubble with a small tail"),
            babyGameAsset(15, "Dog dialogue screen", "A guide character speaking from a decorative dialogue panel"),
            babyGameAsset(24, "Dialogue cloud", "Small cloudy dialogue frame"),
            babyGameAsset(28, "Leafy dialogue panel", "Wide pale dialogue panel decorated with leaves"),
          ],
        },
        {
          title: "Panels & controls",
          description: "Reusable frames, buttons, and interface building blocks",
          gallery: [
            babyGameAsset(2, "Wide wooden panel", "Wide empty wooden interface panel"),
            babyGameAsset(8, "Progress bar", "Green progress bar in a wooden frame"),
            babyGameAsset(18, "Square panel frame", "Large square wooden panel frame"),
            babyGameAsset(19, "Wide panel frame", "Wide wooden panel frame"),
            babyGameAsset(20, "Slim panel", "Slim wooden interface bar"),
            babyGameAsset(21, "Compact panel", "Compact horizontal wooden interface bar"),
            babyGameAsset(23, "Small inventory slots", "A compact group of item slots with corner markers"),
            babyGameAsset(25, "Item slot set", "A set of empty item slots and small interface pieces"),
            babyGameAsset(33, "Collection grid panel", "Collection panel with a grid of item buttons"),
          ],
        },
        {
          title: "Items & states",
          description: "Collectibles and locked or unlocked item cards",
          gallery: [
            babyGameAsset(27, "Item card states", "A set of collectible cards shown in locked and unlocked states"),
            babyGameAsset(30, "Locked item card", "Dark locked collectible card"),
            babyGameAsset(31, "Open item card", "Light collectible card with a highlighted corner"),
            babyGameAsset(32, "Lock icon", "Padlock symbol for a locked collection item"),
          ],
        },
        {
          title: "Complete panel atlas",
          description: "The full panel reference sheet, preserved as one large overview",
          gallery: [
            babyGameAsset(35, "Group 6695 · complete panel atlas", "Complete interface panel atlas reference sheet"),
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
