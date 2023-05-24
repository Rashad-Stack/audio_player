import React, { useEffect, useState } from "react";
import AlbumCover from "./albumCover";
import { musicList } from "../../data/song";

export default function Album() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth < 768 ? true : false;
  const isTab = screenWidth < 1000 ? true : false;

  return (
    <div className="flex flex-wrap items-start justify-center gap-1 mt-10">
      {(isMobile
        ? musicList.slice(0, 2)
        : isTab
        ? musicList.slice(0, 2)
        : musicList
      ).map((music, i) => (
        <AlbumCover
          key={i}
          music={music}
          percentage={100}
          time="3:12"
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}
