import React, { useContext, useState } from "react";
import List from "./list";
import { PlayerContext } from "../../context/playerContext";
import { musicList } from "../../data/song";

export default function Playlist() {
  const [isEditing, setIsEditing] = useState(false);
  const { currentAlbum, currentSong, setCurrentSong } =
    useContext(PlayerContext);

  const songs = musicList[currentAlbum]?.songs || [];

  return (
    <ul className="flex flex-col gap-1">
      {isEditing && (
        <li className="sticky top-0 flex items-center px-4 bg-black">
          <img
            src="/images/list-search.png"
            alt="search icon"
            className="w-4 h4"
          />
          <input
            type="text"
            placeholder="Search song..."
            className="w-full h-full p-4 text-gray-400 bg-black border-none outline-none"
          />
        </li>
      )}

      {songs.map((song) => (
        <List
          key={song.id}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          song={song}
          active={song.id === currentSong}
          setPlayingId={setCurrentSong}
        />
      ))}
    </ul>
  );
}
