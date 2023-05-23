import React from "react";

export default function Timer({ remainTime }) {
  return (
    <div className="w-40 p-3">
      <h1 className="px-4 pb-1 text-4xl text-center text-gray-400 border-b font-extralight border-gray-500/30">
        {remainTime}
      </h1>
      <p className="text-center text-gray-300">Remaining Time</p>
    </div>
  );
}
