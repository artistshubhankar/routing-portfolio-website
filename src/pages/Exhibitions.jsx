import React from "react";
import Slideshow from "../components/Slideshow";
import { exhibition1, exhibition2, exhibition3 } from "../data/artData";
import "../styles/Exhibitions.css";

export default function Exhibitions() {
  return (
    <section>
      <h2>Exhibitions</h2>

      <div className="exhibition-block">
        <Slideshow images={exhibition1} />
        <h3>Nandan Gallery</h3>
        <p>
          Group Exhibition – Nandan Gallery – Santiniketan – 2025
        </p>
      </div>

      <div className="exhibition-block">
        <Slideshow images={exhibition2} />
        <h3>Hues of Bengal</h3>
        <p>
          Exploring the boundaries of glass art and mixed media installations in contemporary practice.
        </p>
      </div>

      <div className="exhibition-block">
        <Slideshow images={exhibition3} />
        <h3>Birla Academy of Art and Culture, Kolkata</h3>
        <p>
          Showcasing and Exploring new Art Forms from different parts of India - 2025.
        </p>
      </div>
    </section>
  );
}
