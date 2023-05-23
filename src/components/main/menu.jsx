import React from "react";

export default function Menu() {
  return (
    <div className="relative grid h-full text-green bg-dark-gray w-36 place-items-center">
      Al Top40
      <div className="absolute transform -translate-x-1/2 -bottom-3 left-1/2">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-dark-gray border-r-[15px] border-r-transparent"></div>
      </div>
    </div>
  );
}
