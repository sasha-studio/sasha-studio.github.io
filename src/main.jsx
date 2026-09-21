import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  HashRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { MotionConfig } from "motion/react";
import { profile, projects, categories } from "./data";
import Artwork from "./components/Artwork";
import { Spark, Icon } from "./components/Icons";
import BlurText from "./components/react-bits/BlurText";
import BorderGlow from "./components/react-bits/BorderGlow";
import FadeContent from "./components/react-bits/FadeContent";
import TiltedCard from "./components/react-bits/TiltedCard";
import GameBackground from "./components/GameBackground";
import HeroAurora from "./components/HeroAurora";
import "./style.css";

function Navigation() {
  const { pathname, hash } = useLocation();
  return (
    <header className="navigation">
      <Link to="/" className="logo" aria-label="Sasha Makarov home">
        <span>
          SASHA MAKAROV
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link
          aria-label="Work"
          className={
            pathname.includes("projects") || hash === "#work" ? "current" : ""
          }
          to="/#work"
        >
          Work
        </Link>
        <Link className={hash === "#about" ? "current" : ""} to="/#about">
          About
        </Link>
        <Link className={hash === "#resume" ? "current" : ""} to="/#resume">
          Resume
        </Link>
        <Link className="nav-contact" to="/#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const firstLocation = useRef(true);
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      const first = firstLocation.current;
      firstLocation.current = false;
      if (first && pathname === "/") {
        if (hash) navigate("/", { replace: true });
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.querySelector("main")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigate]);
  return null;
}
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit" aria-hidden="true" />
      <Spark />
      <p className="eyebrow">THE NEXT CHAPTER</p>
      <h2>
        Have a world
        <br />
        <em>in mind?</em>
      </h2>
      <p>Let’s give your next story a little character.</p>
      {profile.email ? (
        <a className="button cyan" href={`mailto:${profile.email}`}>
          Let’s create together <Icon name="diagonal" />
        </a>
      ) : (
        <span className="contact-note">Contact details coming soon</span>
      )}
      <div className="contact-actions" aria-label="Contact and resume links">
        <a
          className="contact-social-link"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" />
          LinkedIn
          <Icon name="diagonal" />
        </a>
        <a className="contact-social-link" href={`mailto:${profile.email}`}>
          <Icon name="mail" />
          Email
          <Icon name="diagonal" />
        </a>
        {profile.resume ? (
          <a className="button magenta" href={profile.resume} download>
            Download Resume <Icon name="down" />
          </a>
        ) : (
          <button
            className="button magenta resume-download-unavailable"
            type="button"
            disabled
            title="Add Sasha’s resume PDF to enable this download."
          >
            Download Resume <Icon name="down" />
          </button>
        )}
      </div>
      <footer>
        <Link to="/" className="footer-name">
          Sasha Makarov<span>Game art & visual design</span>
        </Link>
        <span>© {new Date().getFullYear()} Sasha Makarov</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          Back to the stars <Icon name="diagonal" />
        </a>
      </footer>
    </section>
  );
}
function ProjectCard({
  project,
  featured = "",
  displayTitle = project.title,
  cover = project.cover,
  coverAlt = project.coverAlt,
  captionEyebrow,
  captionText,
}) {
  return (
    <FadeContent
      className={`project-card-wrap${featured ? ` featured showcase-${featured}` : ""}`}
    >
      <BorderGlow
        className="project-border-glow"
        edgeSensitivity={24}
        glowColor="186 100 50"
        backgroundColor="#0a0a0f"
        borderRadius={12}
        glowRadius={20}
        glowIntensity={0.72}
        coneSpread={32}
        fillOpacity={0}
        colors={["#00f0ff", "#ff00a0", "#39ff14"]}
      >
        <TiltedCard amplitude={featured ? 1.3 : 3}>
          <Link to={`/projects/${project.slug}`} className="project-card">
            <div className="cover">
              <Artwork project={project} image={cover} alt={coverAlt} />
              <span className="cover-tag">{project.category}</span>
              <span className="project-open">
                <Icon name="diagonal" />
              </span>
              {featured && (
                <div className="featured-caption">
                  <span className="eyebrow">{captionEyebrow || project.category}</span>
                  <h3>{displayTitle}</h3>
                  <p>{captionText || project.subtitle}</p>
                </div>
              )}
            </div>
            {!featured && (
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <span className="project-number">
                  0{projects.indexOf(project) + 1}
                </span>
              </div>
            )}
          </Link>
        </TiltedCard>
      </BorderGlow>
    </FadeContent>
  );
}
function Home() {
  const [filter, setFilter] = useState("All work");
  useEffect(() => {
    document.title = "Sasha Makarov — Game Art & Visual Design";
  }, []);
  const letterIsland = projects.find((p) => p.slug === "adventure-island");
  const englishKingdom = projects.find(
    (p) => p.slug === "english-kingdom-wardrobe",
  );
  const featuredSlugs = new Set([letterIsland.slug, englishKingdom.slug]);
  const visible = projects.filter((p) => {
    if (filter === "All work") {
      return p.category !== "Graphic design" && !featuredSlugs.has(p.slug);
    }
    return p.category === filter;
  });
  const paper = projects.find((p) => p.category === "Graphic design");
  return (
    <>
      <section className="hero">
        <div className="hero-shade" />
        <HeroAurora />
        <div className="hero-content">
          <p className="eyebrow hero-kicker">
            HELLO, I’M
          </p>
          <h1>
            <BlurText text="SASHA MAKAROV" />
          </h1>
          <p className="hero-role">Game Visual Designer</p>
          <p className="hero-description">
            I turn early-stage ideas into complete visual game experiences —
            from worlds and environments to characters, UI and production-ready
            assets.
          </p>
          <p className="hero-disciplines">
            {["Game Visual Design", "2D Game Art", "Environment Design", "Character Design", "Game UI", "2D Animation"].map((skill) => (
              <span className="hero-skill-tag" key={skill}>{skill}</span>
            ))}
          </p>
          <div className="hero-actions">
            <Link className="button cyan" to="/#work">
              View Work <Icon name="diagonal" />
            </Link>
            <Link className="button magenta" to="/#resume">
              Resume <Icon name="down" />
            </Link>
            <Link className="button cyan" to="/#contact">
              Contact <Icon name="diagonal" />
            </Link>
          </div>
        </div>
      </section>
      <section id="work" className="work-section page-width">
        <FadeContent>
          <p className="eyebrow selected-work-title">SELECTED WORK</p>
        </FadeContent>
        {filter === "All work" && (
          <div className="featured-work" aria-label="Featured projects">
            <ProjectCard
              project={letterIsland}
              featured="primary"
              displayTitle="Letter Island"
              cover="/media/adventure-island/Map-Letter Island.webp"
              coverAlt="A complete colourful map of Letter Island with its biomes and routes."
              captionEyebrow="LETTER ISLAND / WORLD DESIGN"
              captionText="World building · Environments · Level flow"
            />
            <ProjectCard
              project={englishKingdom}
              featured="secondary"
              displayTitle="English Kingdom"
              captionEyebrow="GAMEPLAY & VISUAL DESIGN / ENGLISH KINGDOM"
              captionText="World design · Character systems · Game UI"
            />
          </div>
        )}
        <div className="work-collection-heading">
          <p className="eyebrow">SELECTED ART &amp; MOTION</p>
        </div>
        <div className="filters" aria-label="Filter projects">
          {categories.map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "All work" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <div
          className="project-grid"
          aria-live="polite"
          aria-label="Selected projects"
        >
          {visible.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
            />
          ))}
        </div>
        {filter === "All work" && (
          <FadeContent>
            <Link className="paper-feature" to={`/projects/${paper.slug}`}>
              <div className="paper-preview">
                <Artwork project={paper} />
              </div>
              <div className="paper-copy">
                <span className="eyebrow">BEYOND THE GAME WORLD</span>
                <h3>
                  Different canvas.
                  <br />
                  <em>Same imagination.</em>
                </h3>
                <p>
                  Presentations, documents, and cards —<br />
                  thoughtfully designed, down to the last detail.
                </p>
                <span className="text-link">
                  Explore graphic design <Icon name="diagonal" />
                </span>
              </div>
            </Link>
          </FadeContent>
        )}
        <p className="concept-note">
          <Spark /> Presentation concepts and supplied project artwork, gathered
          into a growing visual library.
        </p>
      </section>
      <section className="about-section" id="about">
        <div className="page-width about-grid">
          <span id="resume" className="resume-anchor" aria-hidden="true" />
          <FadeContent>
            <div className="about-art">
              <div className="sketch-card">
                <img
                  src="/media/woodland-friends.webp"
                  alt="Illustrative woodland characters on a warm sketchbook page"
                  loading="lazy"
                />
                <span>THE SKETCHBOOK / A LITTLE EXPLORATION</span>
              </div>
              <div className="about-seal">
                <Spark />
                <span>
                  MADE OF
                  <br />
                  CURIOSITY
                </span>
              </div>
              <span className="handwritten">
                It starts with a little “what if?”
              </span>
            </div>
          </FadeContent>
          <FadeContent>
            <div className="about-copy">
              <p className="eyebrow">THE ARTIST BEHIND THE WORLDS</p>
              <h2>
                A curious mind.
                <br />
                <em>A storyteller’s heart.</em>
              </h2>
              <p>{profile.about}</p>
              <p>
                From an adventurous little character to a beautifully paced
                presentation, I care about how a design feels as much as how it
                looks.
              </p>
              <div className="services">
                <div>
                  <Icon name="palette" />
                  <span>
                    Worlds & characters<small>Shape, colour, personality</small>
                  </span>
                </div>
                <div>
                  <Icon name="book" />
                  <span>
                    Interfaces & stories
                    <small>Games, presentations, print</small>
                  </span>
                </div>
              </div>
              <div className="toolkit">
                <p className="eyebrow">TOOLS &amp; PRACTICE</p>
                <ul className="toolkit-list">
                  {["Digital Illustration", "Illustrator", "Photoshop", "Figma", "Procreate", "Spine", "AI-Assisted Workflow"].map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <Link to="/#contact" className="text-link">
                Let’s imagine something together <Icon name="diagonal" />
              </Link>
            </div>
          </FadeContent>
        </div>
      </section>
      <Contact />
    </>
  );
}
function Lightbox({ item, project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`lightbox ${project.theme}`}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label={item.title}
    >
      <button
        className="close"
        onClick={onClose}
        aria-label="Close enlarged image"
      >
        <Icon name="close" />
      </button>
      <Artwork
        project={project}
        variant={item.variant}
        image={item.src}
        alt={item.alt}
      />
      <p>{item.title}</p>
    </dialog>
  );
}
function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [selected, setSelected] = useState(null);
  const [activeAssetCategory, setActiveAssetCategory] = useState("");
  useEffect(() => {
    document.title = project
      ? `${project.title} — Sasha Makarov`
      : "Project not found — Sasha Makarov";
    setSelected(null);
    setActiveAssetCategory("");
  }, [slug, project]);
  if (!project)
    return (
      <section className="not-found page-width">
        <Spark />
        <p className="eyebrow">A LITTLE OFF THE MAP / 404</p>
        <h1>
          This story is
          <br />
          <em>still unwritten.</em>
        </h1>
        <Link className="button cyan" to="/">
          Back to the portfolio <Icon />
        </Link>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const assetCategories = project.assetCategories || [];
  const currentAssetCategory =
    assetCategories.find((category) => category.title === activeAssetCategory) ||
    assetCategories[0];
  const galleryItems = currentAssetCategory?.gallery || project.gallery;
  return (
    <>
      <article className="case-study page-width">
        <Link to="/#work" className="back-link">
          ← Back to all work
        </Link>
        <div className="case-heading">
          <div>
            <p className="eyebrow">
              {project.category} / {project.year}
            </p>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
          <ul>
            {project.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="case-cover">
          <Artwork project={project} image={project.cover} eager />
        </div>
        <p className="media-disclosure">
          {project.mediaDisclosure ||
            (project.cover
              ? "Illustrative presentation concept · AI-generated sample artwork"
              : "Original interface and layout study")}
        </p>
        <section className="case-intro">
          <span className="eyebrow">01 / THE STORY</span>
          <div>
            <h2>{project.description}</h2>
            <div className="case-columns">
              <div>
                <h3>The challenge</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3>The approach</h3>
                <p>{project.approach}</p>
              </div>
            </div>
          </div>
        </section>
        <FadeContent>
          <section className="case-video">
            <div className="section-title">
              <h2>
                A little closer
                <br />
                <em>to the story.</em>
              </h2>
              <span className="eyebrow">02 / IN MOTION</span>
            </div>
            {project.video ? (
              <video
                key={project.slug}
                controls
                playsInline
                preload="metadata"
                poster={project.cover}
                aria-label={project.video.label || `${project.title} project film`}
              >
                <source
                  src={project.video.src}
                  type={project.video.type || "video/mp4"}
                />
                {project.video.captions && (
                  <track
                    kind="captions"
                    src={project.video.captions}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
                Your browser does not support this video.
              </video>
            ) : (
              <div className="video-placeholder">
                <Spark />
                <h3>The next chapter is in the making.</h3>
                <p>A project film will live here once it’s ready.</p>
                <span className="eyebrow">PROJECT FILM / COMING SOON</span>
              </div>
            )}
          </section>
        </FadeContent>
        <section className="case-gallery">
          <div className="section-title">
            <h2>
              There’s a story
              <br />
              <em>in every detail.</em>
            </h2>
            <span className="eyebrow">
              {assetCategories.length ? "03 / ASSET LIBRARY" : "03 / GALLERY & ASSETS"}
            </span>
          </div>
          {assetCategories.length > 1 && (
            <div className="asset-category-tabs" aria-label="English Kingdom asset categories">
              {assetCategories.map((category) => (
                <button
                  key={category.title}
                  type="button"
                  aria-pressed={currentAssetCategory?.title === category.title}
                  className={currentAssetCategory?.title === category.title ? "active" : ""}
                  onClick={() => setActiveAssetCategory(category.title)}
                >
                  {category.title}
                  <span>{String(category.gallery.length).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          )}
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <FadeContent key={item.title}>
                <figure>
                  <button
                    onClick={() => setSelected(item)}
                    aria-label={`Enlarge ${item.title}`}
                  >
                    <Artwork
                      project={project}
                      variant={item.variant}
                      image={item.src}
                      alt={item.alt}
                    />
                    <span className="enlarge">
                      <Icon name="diagonal" />
                    </span>
                  </button>
                  <figcaption>{item.title}</figcaption>
                </figure>
              </FadeContent>
            ))}
          </div>
        </section>
        <section className="case-intro">
          <span className="eyebrow">04 / THE DIRECTION</span>
          <h2>{project.outcome}</h2>
        </section>
        <Link className="next-project" to={`/projects/${next.slug}`}>
          <span className="eyebrow">TURN THE PAGE / NEXT PROJECT</span>
          <span>
            {next.title}
            <Icon />
          </span>
        </Link>
      </article>
      <Contact />
      {selected && (
        <Lightbox
          item={selected}
          project={project}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <ScrollManager />
        <a
          className="skip-link"
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("main").focus();
          }}
        >
          Skip to content
        </a>
        <GameBackground />
        <div id="top">
          <Navigation />
          <main id="main" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<Project />} />
              <Route path="*" element={<Project />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </MotionConfig>
  );
}
createRoot(document.getElementById("root")).render(<App />);
