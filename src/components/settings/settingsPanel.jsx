import React from "react";
import List from "./list";
import StreamedIp from "./streamedIp";

export default function SettingsPanel() {
  return (
    <ul className="w-3/4">
      <List settingKey="Station" settingValue="AI Top41" />
      <List settingKey="DJ Name" settingValue="Nexus James" />
      <List settingKey="Location" settingValue="New York" />
      <List settingKey="Followers" settingValue="1 366 168" />
      <List settingKey="Listened voice tracks" settingValue="1 366 168" />
      <List settingKey="Add Revenue" settingValue="$39 345" />
      <StreamedIp />
    </ul>
  );
}
