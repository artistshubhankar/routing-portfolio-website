import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/artworks">Artworks</NavLink>
      <NavLink to="/exhibitions">Exhibitions</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
