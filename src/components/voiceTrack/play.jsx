import React from "react";

export default function Play({ isPlaying, onClick }) {
  return (
    <button
      className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      onClick={onClick}>
      <img
        src={isPlaying ? "/images/button-play.png" : "/images/button-pause.png"}
        alt="play button image"
      />
    </button>
  );
}
