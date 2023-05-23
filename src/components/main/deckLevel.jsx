import React, { useState } from "react";

export default function DeckLevel() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const trackStyle = {
    background: `linear-gradient(to right, #93f000 ${value}%, #555 ${value}%)`,
  };

  return (
    <div className="absolute top-[350px] flex flex-col">
      <div className="w-[400px] -rotate-90 h-full bg-pitch-black flex items-center p-4 rounded-full">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
          style={trackStyle}
          id="deck_level"
          className="appearance-none h-0.5 w-full"
        />
      </div>
      <div className="absolute right-[40%] text-slate-500 -bottom-[230px] text-center">
        Deck Level
      </div>
    </div>
  );
}
