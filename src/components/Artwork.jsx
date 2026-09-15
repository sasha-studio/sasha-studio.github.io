import React from "react";
import { Spark, Icon } from "./Icons";

export default function Artwork({
  project,
  variant = "",
  image,
  alt,
  eager = false,
}) {
  if (image)
    return (
      <img
        className={`project-image ${project.theme}`}
        src={image}
        alt={alt || project.coverAlt || `${project.title} concept`}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    );
  if (variant === "palette")
    return (
      <div
        className="palette-art"
        role="img"
        aria-label={`${project.title} colour palette: ${project.palette.join(", ")}`}
      >
        <Spark />
        <span className="eyebrow">A WORLD IN FIVE COLOURS</span>
        <h3>{project.title}</h3>
        <div className="swatches">
          {project.palette.map((c) => (
            <div key={c}>
              <i style={{ background: c }} />
              <span>{c}</span>
            </div>
          ))}
        </div>
        <p>Light, mood, and a little imagination.</p>
      </div>
    );
  if (project.theme === "starlight")
    return (
      <div
        className={`artwork starlight ${variant}`}
        role="img"
        aria-label="Illustrative magical collectible cards with a sunstone, moon charm, and golden key"
      >
        <div className="ui-art-stars" aria-hidden="true">
          ✦ · · ✧ · ✦
        </div>
        <div className="ui-art-heading">
          <span>THE KEEPSAKE CABINET</span>
          <h3>
            A little magic,
            <br />
            just for you.
          </h3>
        </div>
        <div className="collectible-cards">
          {[
            { type: "sun", name: "Sunstone", rarity: "RARE", label: "01" },
            {
              type: "moon",
              name: "Moon Charm",
              rarity: "ENCHANTED",
              label: "02",
            },
            {
              type: "key",
              name: "Golden Key",
              rarity: "LEGENDARY",
              label: "03",
            },
          ].map((item) => (
            <div className={`collectible ${item.type}`} key={item.type}>
              <span className="card-rarity">{item.rarity}</span>
              <div className="collectible-icon">
                <Icon name={item.type} />
              </div>
              <strong>{item.name}</strong>
              <span className="card-rule" />
              <small>FOUND IN THE MOONLIT WOODS</small>
              <span className="card-star">✦</span>
            </div>
          ))}
        </div>
        <div className="collection-progress">
          <span>YOUR COLLECTION</span>
          <i />
          <span>3 / 12</span>
        </div>
      </div>
    );
  if (project.theme === "paper")
    return (
      <div
        className={`artwork paper ${variant}`}
        role="img"
        aria-label="Editorial concept with a lavender presentation, an ivory document, and printed cards"
      >
        <div className="paper-shadow" />
        <div className="paper-document">
          <span>THE FIELD NOTES / VOL. 01</span>
          <h3>
            Good stories
            <br />
            start here.
          </h3>
          <div className="document-columns">
            <i />
            <i />
          </div>
          <div className="document-circle" />
          <small>01 — A NEW PERSPECTIVE</small>
        </div>
        <div className="paper-deck">
          <span>AN IDEA WORTH SHARING</span>
          <Spark />
          <h3>
            A little
            <br />
            <em>perspective.</em>
          </h3>
          <small>VISUAL STORIES / A PRESENTATION</small>
        </div>
        <div className="paper-card">
          <Spark />
          <strong>
            Make room
            <br />
            for wonder.
          </strong>
          <small>A NOTE TO YOUR FUTURE SELF</small>
        </div>
      </div>
    );
  return (
    <img
      className={`project-image ${project.theme}`}
      src={project.cover}
      alt={project.coverAlt}
      loading="lazy"
    />
  );
}
