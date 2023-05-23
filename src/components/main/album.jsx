import React from "react";
import AlbumCover from "./albumCover";

export default function Album() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-1 mt-10">
      <AlbumCover percentage={100} time="3:12" />
      <AlbumCover percentage={34} time="3:12" />
      <AlbumCover percentage={56} time="3:12" />
      <AlbumCover percentage={76} time="3:12" />
    </div>
  );
}
