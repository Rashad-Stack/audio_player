import React from "react";

export default function TabButton({ title, onClick, active }) {
  return (
    <button
      className={`w-40 h-16 text-gray-300 shadow-lg ${
        active ? "bg-[#21272e]/80" : "bg-md-gray/80"
      }`}
      onClick={onClick}>
      {title}
    </button>
  );
}
