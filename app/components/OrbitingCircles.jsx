import React from "react";
import "../Orbit.css";

const OrbitingCircles = ({ centerComponent, circleImages }) => {
  // Dynamically calculate radius based on number of items
  const radius = 100 + circleImages.length * 10 // base 100px + 10px per item

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
