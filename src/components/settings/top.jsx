import React from "react";
import Menu from "../main/menu";
import { Link, useMatch } from "react-router-dom";

export default function Top() {
  return (
    <div className="flex items-center justify-between h-12 bg-pitch-black">
      <div className="flex items-center h-full">
        <Menu title="Settings" active={useMatch("/settings")} />
        <Menu title="Login" active={useMatch("/login")} to="/login" />
      </div>
      <Link to="/" className="w-12">
        <img src="/images/settings.png" alt="" />
      </Link>
    </div>
  );
}
