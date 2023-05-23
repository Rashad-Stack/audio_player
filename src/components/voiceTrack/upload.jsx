import React from "react";

export default function Upload({ isUpload, onClick }) {
  return (
    <button className="absolute w-16 h-16 bottom-4 left-4" onClick={onClick}>
      <img src={isUpload ? "/images/upload.png" : "/images/voice-track.png"} />
    </button>
  );
}
