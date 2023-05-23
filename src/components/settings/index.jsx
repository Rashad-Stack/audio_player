import React from "react";
import Top from "./top";
import ProfileImage from "./ProfileImage";
import SettingsPanel from "./settingsPanel";

export default function SettingsTop() {
  return (
    <>
      <Top />
      <div className="flex gap-5 mt-4">
        <ProfileImage />
        <SettingsPanel />
      </div>
    </>
  );
}
