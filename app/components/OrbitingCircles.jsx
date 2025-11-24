import React, { useState, useEffect } from "react";
import "../Orbit.css";

const OrbitingCircles = ({ centerComponent, circleImages }) => {
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const calculateRadius = () => {
      const screenWidth = window.innerWidth;

      // Base radius
      let baseRadius = 100 + circleImages.length * 10;

      // Adjust for smaller screens
      if (screenWidth < 640) {
        baseRadius *= 0.5; // mobile
      } else if (screenWidth < 1024) {
        baseRadius *= 0.75; // tablet
      }

      setRadius(baseRadius);
    };

    calculateRadius();
    window.addEventListener("resize", calculateRadius);
    return () => window.removeEventListener("resize", calculateRadius);
  }, [circleImages.length]);

  return (
    <div className="orbit-container" style={{ "--orbit-radius": `${radius}px` }}>
      <div className="center-component">{centerComponent}</div>
      {circleImages.map((img, index) => (
        <div
          key={index}
          className="orbit-circle"
          style={{ "--i": index, "--total": circleImages.length }}
        >
          <img src={img} alt={`circle-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default OrbitingCircles;
