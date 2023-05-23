import React, { useState } from "react";
import Wave from "./wave";
import Upload from "./upload";
import Record from "./record";
import Play from "./play";
import UploadPanel from "./uploadPanel";

export default function VoiceTrack() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  return (
    <div className="relative h-96">
      {!isUpload ? (
        <>
          <Wave />
          <Wave />
          <Wave />
        </>
      ) : (
        <UploadPanel />
      )}
      <Upload isUpload={isUpload} onClick={() => setIsUpload(!isUpload)} />
      {isPlaying && <Record />}
      {!isUpload && (
        <Play isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} />
      )}
    </div>
  );
}
