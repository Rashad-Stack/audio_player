import React from "react";
import Menu from "../main/menu";
import { useMatch } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-between h-12 bg-pitch-black">
      <div className="flex items-center h-full">
        <Menu title="Settings" active={useMatch("/settings")} to="/settings" />
        <Menu title="Login" active={useMatch("/login")} to="/login" />
      </div>
    </div>
  );
}
