"use client";

import React from "react";
import "../TrafficLightLoader.css" // import your CSS here


const TrafficLightLoader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="traffic-light">
        <div className="light-row">
          <div className="light red-light"></div>
        </div>

        <div className="light-row">
          <div className="light yellow-light"></div>
        </div>

        <div className="light-row">
          <div className="light green-light"></div>
        </div>
      </div>

      <div className="loading-status"></div>
    </div>
  );
};

export default TrafficLightLoader;
