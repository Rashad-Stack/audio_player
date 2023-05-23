import React from "react";
import Button from "./button";
import DeckLevel from "./deckLevel";
import Album from "./album";
import Settings from "./settings";
import TabButton from "./tabButton";
import Playlist from "./playlist";

export default function Body() {
  return (
    <div className="grid grid-cols-[200px_1fr_200px] place-content-start">
      <div className="relative flex flex-col items-center justify-between h-full mt-20">
        <Button />
        <DeckLevel />
      </div>
      <div>
        <Album />
        <div className="flex items-center py-4">
          <TabButton title="Playlist" />
          <TabButton title="Sound Wall" />
          <TabButton title="Video Track" />
        </div>
        <div className="overflow-y-auto h-96 scrollbar-none">
          <Playlist />
        </div>
      </div>
      <Settings />
    </div>
  );
}
