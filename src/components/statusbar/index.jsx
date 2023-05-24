import React, { useContext } from "react";
import Timer from "./timer";
import Title from "./title";
import { PlayerContext } from "../../context/playerContext";
import { musicList } from "../../data/song";

export default function Statusbar() {
  const { currentAlbum, currentSong } = useContext(PlayerContext);
  const currentSongName = musicList[currentAlbum]?.songs[currentSong - 1]?.song;

  return (
    <div className="flex items-center mt-5 bg-dark">
      <Timer remainTime="03:35" />
      <Title title={currentSongName} />
    </div>
  );
}
