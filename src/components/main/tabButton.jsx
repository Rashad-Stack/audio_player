import React from "react";

export default function TabButton({ title, onClick }) {
  return (
    <button
      className="w-40 h-16 text-gray-300 shadow-lg bg-md-gray/80 hover:bg-[#21272e]/80"
      onClick={onClick}>
      {title}
    </button>
  );
}
