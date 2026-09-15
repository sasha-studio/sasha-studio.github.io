import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  HashRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";
import { MotionConfig } from "motion/react";
import { profile, projects, categories } from "./data";
import Artwork from "./components/Artwork";
import { Spark, Icon } from "./components/Icons";
import BlurText from "./components/react-bits/BlurText";
import FadeContent from "./components/react-bits/FadeContent";
import TiltedCard from "./components/react-bits/TiltedCard";
import GameBackground from "./components/GameBackground";
import "./style.css";

function Navigation() {
  const { pathname, hash } = useLocation();
  return (
    <header className="navigation">
      <Link to="/" className="logo" aria-label="Sasha Makarov home">
        <Spark />
        <span>
          Sasha Makarov<small>ART & IMAGINATION</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link
          aria-label="Selected work"
          className={
            pathname.includes("projects") || hash === "#work" ? "current" : ""
          }
          to="/#work"
        >
          Selected work
        </Link>
        <Link className={hash === "#about" ? "current" : ""} to="/#about">
          About me
        </Link>
        <Link className="nav-contact" to="/#contact">
          Let’s create <Icon name="diagonal" />
        </Link>
      </nav>
    </header>
  );
}
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.querySelector("main")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
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
        <a className="button gold" href={`mailto:${profile.email}`}>
          Let’s create together <Icon name="diagonal" />
        </a>
      ) : (
        <span className="contact-note">Contact details coming soon</span>
      )}
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
function ProjectCard({ project, featured = false }) {
  return (
    <FadeContent className={`project-card-wrap ${featured ? "featured" : ""}`}>
      <TiltedCard amplitude={featured ? 1.3 : 3}>
        <Link to={`/projects/${project.slug}`} className="project-card">
          <div className="cover">
            <Artwork project={project} image={project.cover} />
            <span className="cover-tag">{project.category}</span>
            <span className="project-open">
              <Icon name="diagonal" />
            </span>
            {featured && (
              <div className="featured-caption">
                <span className="eyebrow">
                  A WORLD WAITING TO BE DISCOVERED
                </span>
                <h3>{project.title}</h3>
                <p>Environment design · Colour & lighting · Storytelling</p>
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
    </FadeContent>
  );
}
function Home() {
  const [filter, setFilter] = useState("All work");
  useEffect(() => {
    document.title = "Sasha Makarov — Game Art & Visual Design";
  }, []);
  const visible = projects.filter((p) =>
    filter === "All work"
      ? p.category !== "Graphic design"
      : p.category === filter,
  );
  const paper = projects.find((p) => p.category === "Graphic design");
  return (
    <>
      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker">
            <span />
            GAME ARTIST & VISUAL DESIGNER
          </p>
          <h1>
            <BlurText text="Small details." />
            <br />
            <BlurText text="Extraordinary" delay={100} />
            <br />
            <em>
              <BlurText text="worlds." />
            </em>
            <Spark />
          </h1>
          <p className="hero-description">
            Hi, I’m <strong>Sasha.</strong> {profile.intro}
          </p>
          <div className="hero-actions">
            <Link className="button gold" to="/#work">
              Discover my work <Icon name="diagonal" />
            </Link>
            <Link className="text-link" to="/#about">
              Meet the artist <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            <Spark /> A LITTLE CURIOSITY GOES A LONG WAY.
          </span>
          <span>
            SCROLL TO EXPLORE <Icon name="down" />
          </span>
        </div>
      </section>
      <div className="discipline-strip">
        <span>Imagined with heart.</span>
        <div>
          Game worlds <Spark /> Character design <Spark /> Game UI <Spark />{" "}
          Visual storytelling
        </div>
      </div>
      <section id="work" className="work-section page-width">
        <FadeContent>
          <div className="section-title">
            <div>
              <p className="eyebrow">THE PORTFOLIO / SELECTED CONCEPTS</p>
              <h2>
                A few worlds
                <br />
                <em>worth getting lost in.</em>
              </h2>
            </div>
            <p>
              Characters with a story.
              <br />
              Places with a feeling.
              <br />
              Design with a little magic.
            </p>
          </div>
        </FadeContent>
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
              featured={p.featured && filter === "All work"}
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
          <Spark /> Presentation concepts with AI-generated sample art and
          illustrative layouts. Original project work will be added here.
        </p>
      </section>
      <section className="about-section" id="about">
        <div className="page-width about-grid">
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
              <Link to="/#contact" className="text-link">
                Let’s imagine something together <Icon name="diagonal" />
              </Link>
            </div>
          </FadeContent>
        </div>
      </section>
      <section className="process-section page-width">
        <FadeContent>
          <div className="process-heading">
            <p className="eyebrow">FROM A SPARK TO A STORY</p>
            <h2>
              A little method
              <br />
              <em>behind the magic.</em>
            </h2>
          </div>
        </FadeContent>
        <div className="process-grid">
          {[
            {
              title: "Find the heart",
              body: "Start with a feeling, a story, and the people it’s for.",
            },
            {
              title: "Explore the possibilities",
              body: "Sketch, play with shapes, and find the right visual language.",
            },
            {
              title: "Bring it to life",
              body: "Refine the colour, the details, and the moments that matter.",
            },
          ].map((s, i) => (
            <FadeContent key={s.title} delay={i * 0.08}>
              <span className="process-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </FadeContent>
          ))}
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
      className="lightbox"
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
  useEffect(() => {
    document.title = project
      ? `${project.title} — Sasha Makarov`
      : "Project not found — Sasha Makarov";
    setSelected(null);
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
        <Link className="button gold" to="/">
          Back to the portfolio <Icon />
        </Link>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
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
          Illustrative presentation concept ·{" "}
          {project.cover
            ? "AI-generated sample artwork"
            : "Original interface and layout study"}
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
            <span className="eyebrow">03 / GALLERY & ASSETS</span>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item) => (
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
