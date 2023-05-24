import React from "react";
import List from "./list";

export default function UploadPanel() {
  return (
    <div className="w-full h-full p-4 bg-gray-600/25">
      <h4 className="pb-3 text-lg font-thin tracking-tight text-gray-400">
        Generate content
      </h4>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="h-full">
          <h2 className="p-4 text-gray-400 bg-black">Nexus James US Voice</h2>
          <div className="grid mt-4 place-content-center">
            <button className="text-gray-400 border-4 rounded-full w-36 h-36 border-lt-gray">
              Generate
            </button>
          </div>
          <div className="flex items-center justify-end w-full gap-24 mt-8">
            <button className="grid w-16 h-16 border-[3px] rounded-full place-items-center">
              <img
                src="/images/upload-face.png"
                alt="upload image icon"
                className="object-contain w-8 h-8"
              />
            </button>
            <button className="grid w-16 h-16 border-[3px] rounded-full place-items-center">
              <img
                src="/images/upload-f.png"
                alt="upload image icon"
                className="object-contain w-8 h-8"
              />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <ul>
            <List title="Random Fact" />
            <List title="Music break" />
            <List title="Generic break" />
            <List title="Competitions" />
            <List title="Today in history" />
          </ul>
        </div>
      </div>
    </div>
  );
}
