import React, { useEffect, useRef, useState } from "react";

export default function Slideshow({ images = [], onImageClick }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  if (!images.length) return null;

  return (
    <div className="slideshow-container" onClick={onImageClick}>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="slideshow-img"
        style={{ cursor: onImageClick ? "pointer" : "default" }}
      />
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === current ? " active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
