# Portfolio structure and asset handoff

## Implemented structure

The existing dark space theme, fonts, animated background, aurora, borders,
hover treatment and image zoom viewer are retained.

- Home leads with Game Visual Designer, then Adventure Island and English Kingdom.
- Featured projects remain visible while filters change only secondary studies.
- Adventure Island: hero, overview, existing showreel, world map, selectable
  biomes, layer breakdowns, existing alphabet characters, personal development
  note, game UI and a collapsible complete asset library.
- English Kingdom: hero, overview, visual direction, equipment/reward assets,
  in-game overview and the complete asset library. New sections are conditional
  on real supplied artwork, in the requested before/after-to-in-game order.
- Spine appears as additional practice, followed by graphic design and About.
- The original project URLs and all existing assets remain available.

## Content locations

- `src/data.js`: profile, existing projects and complete asset collections.
- `src/caseStudies.js`: curated case copy and optional media slots.
- `src/components/CaseNarrative.jsx`: case sections, biome selection and image views.
- `src/case-studies.css`: scoped layout additions to the existing design.

Each still-image slot accepts `{ src, title, alt }`. Video slots accept
`{ src, type, label, captions }`, with only `src` required. Use paths under
`public/media/`; never point a website URL at a source-only or ignored folder.

## Material still required

The inventory covered `public/media/` and `source-assets/`. No matching files
were found for the following requested material:

1. New character group: Lina, Kai, Professor Bram, Nova, Captain Rex and Spark.
   Set `characters.group` in Adventure Island. It is labelled as a personal
   portfolio extension, separate from the professional production work.
2. Lina process: Idea / Sketch, Clean Line, Color Exploration, Final. Supply only
   four selected images in `characters.process`.
3. Lina turnaround: Front, Front 3/4, Side, Back, Back 3/4, Opposite Side.
   Supply six selected images in `characters.turnaround`.
4. Confirmed independent branding, additional character artwork and concept
   film: `personal.gallery` and `personal.video`. Existing production artwork
   is not automatically relabelled as independent work.
5. English Kingdom original UI and redesigned equivalent: `before` and `after`.
   Both are required to show the comparison. Provide matching screens so the
   comparison demonstrates an actual change, rather than unrelated images.
6. English Kingdom redesigned buttons/panels/controls, menu, settings and other
   game screens: `redesign`, `components`, `menu`, `settings`, `otherUI`, `inGame`.
7. Spine character, rig, animation and final result: `animationStudy`.
   No synthetic rig, animation or senior animator claim has been introduced.
8. Public resume PDF: `profile.resume`. Until supplied, the site offers an email
   request instead of a disabled download or an access-restricted Google Doc.

The existing Adventure Island showreel remains in use. A new book-to-map-to-island
concept film has not been produced as part of this website restructuring.

## Verification

- Vite production build.
- All 66 existing media references resolve to 60 local public files.
- Browser: featured projects retained during Game UI and 2D Animation filtering;
  biome selection; lightbox zoom and Escape dismissal; main case navigation.
- Narrow viewport: home and both case studies fit without horizontal overflow.
- Original secondary sample-art disclosures are preserved.

No deployment or Git commit is included in this implementation.
