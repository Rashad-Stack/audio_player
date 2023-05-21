import React from "react";
import Menu from "./menu";
import Logo from "./Logo";

export default function Top() {
  return (
    <div className="flex justify-between items-center bg-pitch-black h-12">
      <Menu />
      <Logo />
    </div>
  );
}
