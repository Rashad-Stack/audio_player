import React from "react";
import Timer from "./timer";
import Title from "./title";

export default function Statusbar() {
  return (
    <div className="flex items-center mt-5 bg-dark">
      <Timer remainTime="03:35" />
      <Title title="SZA-Kill Bill" />
    </div>
  );
}
