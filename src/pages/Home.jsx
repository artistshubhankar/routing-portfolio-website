import React from "react";
import Slideshow from "../components/Slideshow";
import { artworks } from "../data/artData";
import "../styles/Home.css";   // for Home.js
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <h2>Welcome</h2>
      <Slideshow
        images={artworks.slice(0, 5)}
        onImageClick={() => navigate("/artworks")}
      />
    </section>
  );
}
