import React, { useState } from "react";

export default function Button() {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <button
      className="w-16 h-16 transition ease-out transform hover:opacity-50"
      onClick={() => setIsPlay(!isPlay)}>
      <img
        src={isPlay ? "/images/button-stop.png" : "/images/button-play.png"}
        alt="stop button image"
      />
    </button>
  );
}
