import { useState } from "react";
import { Link } from "react-router";
import { caseStudies } from "../caseStudies";

export function StorySection({ id, number, title, description, children }) {
  return <section className="story-section" id={id} aria-labelledby={`${id}-title`}>
    <header className="story-heading">
      <span className="eyebrow">{number}</span>
      <div><h2 id={`${id}-title`}>{title}</h2>{description && <p>{description}</p>}</div>
    </header>
    {children}
  </section>;
}

export function StoryImage({ item, onOpen }) {
  if (!item?.src) return null;
  return <figure className="story-image">
    <button type="button" onClick={() => onOpen(item)} aria-label={`Enlarge ${item.title}`}>
      <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
      <span className="story-image-hint">View full size ↗</span>
    </button>
    <figcaption>{item.title}</figcaption>
  </figure>;
}

function Film({ video, poster }) {
  return <video controls playsInline preload="metadata" poster={poster} aria-label={video.label || "Project film"}>
    <source src={video.src} type={video.type || "video/mp4"} />
    {video.captions && <track kind="captions" src={video.captions} srcLang="en" label="English" default />}
    Your browser does not support this video.
  </video>;
}

function ImageGroup({ items, onOpen }) {
  return <div className="story-image-grid">{items.map(item => <StoryImage key={item.src} item={item} onOpen={onOpen} />)}</div>;
}

function Biomes({ maps, onOpen }) {
  const biomes = [
    { name: "Forest", item: maps[4], text: "Cool mountains and tall trees frame a warmer, readable play area." },
    { name: "Desert", item: maps[5], text: "Sandstone, cactus shapes and a warm palette carry the region into the level." },
    { name: "Volcano", item: maps[6], text: "Purple peaks and red rock create a distinct setting for platforms and obstacles." },
    { name: "Snow", item: maps[10], text: "Snow-covered surfaces give familiar platform shapes a different seasonal mood." },
    { name: "Coast", item: maps[8], text: "The island silhouette becomes a layered coastal scene with shoreline props." },
  ];
  const [active, setActive] = useState(0);
  const biome = biomes[active];
  return <>
    <ol className="world-flow" aria-label="World design progression">{["World map", "Biome", "Environment", "Playable level"].map(step => <li key={step}>{step}</li>)}</ol>
    <div className="biome-tabs" aria-label="Choose an environment">{biomes.map((b, i) =>
      <button type="button" key={b.name} aria-pressed={i === active} onClick={() => setActive(i)}>{b.name}</button>)}</div>
    <div aria-live="polite"><p className="story-caption">{biome.text}</p><StoryImage item={biome.item} onOpen={onOpen} /></div>
  </>;
}

export function PersonalDevelopment({ project, onOpen }) {
  const content = caseStudies[project.slug]?.personal;
  if (!content) return null;
  return <StorySection id="personal-development" number="08 / INDEPENDENT EXPLORATION" title="Personal visual development" description={content.description}>
    <ImageGroup items={content.gallery} onOpen={onOpen} />
    {content.video && <Film video={content.video} poster={project.cover} />}
  </StorySection>;
}

export default function CaseNarrative({ project, onOpen }) {
  const content = caseStudies[project.slug];
  const adventure = project.slug === "adventure-island";
  const maps = project.assetShowcase.categories[0].gallery;
  const elements = adventure ? project.assetShowcase.categories[2].gallery : [];
  let englishSectionNumber = 3;
  const nextSection = label => `${String(englishSectionNumber++).padStart(2, "0")} / ${label}`;
  return <>
    <nav className="story-nav" aria-label="Case study sections">
      {(adventure ? [["overview", "Overview"], ["visual-film", "Film"], ["world-map", "World map"], ["environments", "Environments"], ["breakdown", "Breakdown"], ["characters", "Characters"]] :
        [["overview", "Overview"], ...(content.before && content.after ? [["ui-comparison", "Before / After"]] : []), ["visual-direction", "Visual direction"], ["components", "Components"], ["in-game", "In game"]]).map(([id, label]) =>
        <Link key={id} to={`/projects/${project.slug}#${id}`}>{label}</Link>)}
    </nav>
    <StorySection id="overview" number="02 / PROJECT OVERVIEW" title={adventure ? "One world, from map to play." : "Game UI & visual redesign"} description={content.overview}>
      <div className="story-overview"><div><h3>My role</h3><p>{content.role}</p></div><div><h3>Visual goal</h3><p>{content.goal}</p></div></div>
    </StorySection>
    {adventure ? <>
      <StorySection id="visual-film" number="03 / VISUAL FILM" title="Explore Adventure Island" description="A closer look at the maps, environments, characters and interface artwork.">
        <div className="story-film">{project.video ? <Film video={project.video} poster={project.cover} /> : <div className="video-placeholder"><h3>A world waiting to unfold</h3><p>Book → World map → Island → Environment → Adventure</p><span className="eyebrow">CONCEPT FILM / COMING SOON</span></div>}</div>
      </StorySection>
      <StorySection id="world-map" number="04 / WORLD MAP" title="The starting point for every region" description="Distinct silhouettes, landmarks and colour families establish the island. Each region then carries its visual identity into a playable environment.">
        <StoryImage item={maps[0]} onOpen={onOpen} />
      </StorySection>
      <StorySection id="environments" number="05 / ENVIRONMENT DESIGN" title="From a place on the map to a level" description="Explore how the same world language changes across forest, desert, volcano, snow and coast.">
        <Biomes maps={maps} onOpen={onOpen} />
      </StorySection>
      <StorySection id="breakdown" number="06 / ENVIRONMENT BREAKDOWN" title="Built in layers. Ready to assemble." description="The breakdown sheets connect individual regions to their backgrounds, separate elements and final compositions.">
        <ul className="layer-list">{["Background", "Mountains", "Clouds", "Vegetation", "Foreground", "Props", "Platforms", "Final composition"].map(layer => <li key={layer}>{layer}</li>)}</ul>
        <StoryImage item={maps[7]} onOpen={onOpen} />
        <ImageGroup items={[maps[8], maps[9]]} onOpen={onOpen} />
        <details className="story-details"><summary>Explore the modular props and platform layouts</summary><ImageGroup items={[elements[5], maps[4], maps[5], maps[6]]} onOpen={onOpen} /></details>
      </StorySection>
      {content.characters.group && <StorySection id="new-characters" number="07 / CHARACTER DESIGN" title="The Adventure Island cast" description={`Personal portfolio extension: ${content.characters.names.join(" · ")}`}>
        <StoryImage item={content.characters.group} onOpen={onOpen} />
        {content.characters.process.length > 0 && <><h3 className="story-subtitle">Lina / Design process</h3><ImageGroup items={content.characters.process.slice(0, 4)} onOpen={onOpen} /></>}
        {content.characters.turnaround.length > 0 && <><h3 className="story-subtitle">Lina / Turnaround</h3><ImageGroup items={content.characters.turnaround.slice(0, 6)} onOpen={onOpen} /></>}
      </StorySection>}
    </> : <>
      {content.before && content.after && <StorySection id="ui-comparison" number={nextSection("BEFORE & AFTER")} title="The interface, reworked">
        <div className="ui-comparison"><div><h3>Original UI</h3><StoryImage item={content.before} onOpen={onOpen} /></div><div><h3>Redesigned UI</h3><StoryImage item={content.after} onOpen={onOpen} /></div></div>
      </StorySection>}
      <StorySection id="visual-direction" number={nextSection("VISUAL DIRECTION")} title="An interface that belongs in the world" description="Wooden frames, illustrated equipment and clearly separated item slots connect the interface to the medieval setting.">
        <div className="direction-notes"><div><h3>Frames & panels</h3><p>Warm materials connect the interface to the environment.</p></div><div><h3>Equipment & rewards</h3><p>Distinct silhouettes make the asset families easy to recognise.</p></div><div><h3>In-game readability</h3><p>Clearly separated slots keep the character and its equipment in focus.</p></div></div>
      </StorySection>
      {content.redesign.length > 0 && <StorySection id="ui-redesign" number={nextSection("UI REDESIGN")} title="A consistent interface language"><ImageGroup items={content.redesign} onOpen={onOpen} /></StorySection>}
      <StorySection id="components" number={nextSection("COMPONENTS")} title="A library of equipment and rewards" description="Equipment is grouped by character slot. Distinct shapes and colours help clothing and collectible rewards read at a small scale.">
        <ImageGroup items={content.components.length ? content.components : [maps[0], maps[1], project.assetShowcase.categories[1].gallery[0]]} onOpen={onOpen} />
      </StorySection>
      {[["menu", "Menu"], ["settings", "Settings"], ["otherUI", "Other game UI"]].map(([key, title]) => content[key].length > 0 && <StorySection key={key} id={key} number={nextSection(title.toUpperCase())} title={title}><ImageGroup items={content[key]} onOpen={onOpen} /></StorySection>)}
      <StorySection id="in-game" number={nextSection("IN GAME")} title="The interface in context" description="The project overview brings together the character, equipment panel, HUD and game environment.">
        <ImageGroup items={content.inGame.length ? content.inGame : project.assetShowcase.categories[2].gallery} onOpen={onOpen} />
      </StorySection>
    </>}
  </>;
}
