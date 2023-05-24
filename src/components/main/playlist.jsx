import React, { useState } from "react";
import List from "./list";

export default function Playlist() {
  const [isEditing, setIsEditing] = useState(false);
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
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} active={true} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
      <List setIsEditing={setIsEditing} isEditing={isEditing} />
    </ul>
  );
}
