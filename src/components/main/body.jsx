import React from "react";
import Button from "./button";
import DeckLevel from "./deckLevel";
import Album from "./album";
import Settings from "./settings";

export default function Body() {
  return (
    <div className="grid grid-cols-[200px_1fr_200px] place-content-center">
      <div className="relative flex flex-col items-center justify-between h-full mt-20">
        <Button />
        <DeckLevel />
      </div>
      <Album />
      <Settings />
    </div>
  );
}
