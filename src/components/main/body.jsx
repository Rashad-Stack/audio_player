import React, { useState } from "react";
import Button from "./button";
import DeckLevel from "./deckLevel";
import Album from "./album";
import Settings from "./settings";
import TabButton from "./tabButton";
import Playlist from "./playlist";
import VoiceTrack from "../voiceTrack";

export default function Body() {
  const [active, setActive] = useState(1);
  return (
    <div className="grid grid-cols-[200px_1fr_200px] place-content-start">
      <div className="relative flex flex-col items-center justify-between h-full mt-20">
        <Button />
        <DeckLevel />
      </div>
      <div>
        <Album />
        <div className="flex items-center py-4">
          <TabButton
            title="Playlist"
            active={active === 1}
            onClick={() => setActive(1)}
          />
          <TabButton
            title="Sound Wall"
            active={active === 2}
            onClick={() => setActive(2)}
          />
          <TabButton
            title="Video Track"
            active={active === 3}
            onClick={() => setActive(3)}
          />
        </div>
        <div className="overflow-y-auto h-96 scrollbar-none">
          {active === 1 && <Playlist />}
          {active === 2 && <div> Sound Mall</div>}
          {active === 3 && <VoiceTrack />}
        </div>
      </div>
      <Settings />
    </div>
  );
}
