import React from "react";
import { artworks } from "../data/artData";
import "../styles/Artworks.css";

export default function Artworks() {
  return (
    <section>
      <h2>Artworks</h2>
      <div className="gallery">
        {artworks.map((art, idx) => (
          <div key={idx} className="gallery-item">
            <img src={art.src} alt={art.alt} className="gallery-img" />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
