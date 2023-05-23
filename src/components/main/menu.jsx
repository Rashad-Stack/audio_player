import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function Menu({ title, active, to }) {
  const home = useMatch("/");
  return (
    <Link
      to={to}
      className={`relative grid h-full w-36 place-items-center ${
        active
          ? home
            ? "bg-[#383838] text-green"
            : "bg-[#181d2a] text-green"
          : "bg-[#2f3541] text-gray-400"
      }`}>
      {title}
      {active && (
        <div className="absolute transform -translate-x-1/2 -bottom-3 left-1/2">
          <div
            className={`w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-r-[15px] border-r-transparent ${
              home ? "border-t-[#383838]" : "border-t-[#181d2a]"
            }`}></div>
        </div>
      )}
    </Link>
  );
}
