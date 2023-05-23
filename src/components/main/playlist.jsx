import React from "react";
import List from "./list";

export default function Playlist() {
  return (
    <ul className="flex flex-col gap-1">
      <List />
      <List />
      <List />
      <List active={true} />
      <List />
      <List />
      <List />
    </ul>
  );
}
