import React, { useState, useRef } from "react";

export function Certificates({ images }) {
  const [setCurrentImageIndex] = useState(0);

 

  

  const scrollContainerRef = useRef(null);

  const scrollToNextImage = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const clientWidth = scrollContainerRef.current.clientWidth;

      if (scrollLeft + clientWidth < scrollWidth) {
        scrollContainerRef.current.scrollLeft += clientWidth;
      }
    }
  };

  const scrollToPrevImage = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const clientWidth = scrollContainerRef.current.clientWidth;

      if (scrollLeft > 0) {
        scrollContainerRef.current.scrollLeft -= clientWidth;
      }
    }
  };

  return (
    <section className="contact" id="certificates">

    <div className="image-scroller" style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
        ref={scrollContainerRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            style={{ width: "100%", scrollSnapAlign: "start" }}
            onClick={() => setCurrentImageIndex(index)}
            
          />
        ))}
      </div>
      <button
        onClick={scrollToPrevImage}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={scrollToNextImage}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        {">"}
      </button>
    </div>
    </section>
  );
}
