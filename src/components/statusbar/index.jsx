import React from "react";
import Timer from "./timer";
import Title from "./title";

export default function Statusbar() {
  return (
    <div className="mt-5 bg-dark flex items-center">
      <Timer />
      <Title />
    </div>
  );
}
