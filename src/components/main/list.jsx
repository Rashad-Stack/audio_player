import React, { useState } from "react";

export default function List({ active, isEditing, setIsEditing }) {
  const [showActionBtn, setShowActionBtn] = useState(false);

  const [isPressed, setIsPressed] = useState(false);

  let pressTimer;

  const handleMouseDown = () => {
    pressTimer = setTimeout(() => {
      setIsPressed(true);
      setIsEditing(true);
      setShowActionBtn(!showActionBtn);
    }, 500); // Adjust the delay time to your preference
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer);
    setIsPressed(false);
  };

  return (
    <li
      className="flex items-center justify-between gap-2 p-4 text-gray-400 border-b border-gray-700/50 hover:bg-slate-500/40"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <span>
        {active && <span className="w-2 h-2 bg-red-600 rounded-full" />}
        <span> Miley Cyrus - Flowers</span>
      </span>
      {showActionBtn && (
        <span className="flex items-center gap-5">
          <img
            src="/images/list-upload.png"
            alt="upload icon"
            className="object-contain w-8 h-8 cursor-pointer"
          />
          <img
            src="/images/list-delete.png"
            alt="delete icon"
            className="object-contain w-8 h-8 cursor-pointer"
          />
        </span>
      )}
    </li>
  );
}










