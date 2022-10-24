import React from "react";

function Preloader() {
  return (
    <div className="preloader">
      <div className="loading-overlay">
        <div className="loading-inner">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
