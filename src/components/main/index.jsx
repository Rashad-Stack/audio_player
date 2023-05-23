import React from "react";
import Menu from "./menu";
import Logo from "./Logo";
import { useMatch } from "react-router-dom";

export default function Top() {
  return (
    <div className="flex items-center justify-between h-12 bg-pitch-black">
      <Menu title="Al Top40" active={useMatch("/")} />
      <Logo />
    </div>
  );
}
