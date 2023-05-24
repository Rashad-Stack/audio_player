import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export default function PlayerContextProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(0);
  const [currentAlbum, setCurrentAlbum] = useState(0);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        currentAlbum,
        setCurrentAlbum,
      }}>
      {children}
    </PlayerContext.Provider>
  );
}
