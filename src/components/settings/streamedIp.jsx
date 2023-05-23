import React from "react";
import IpSwitchBtn from "./ipSwitchBtn";

export default function StreamedIp() {
  return (
    <li className="flex items-center h-16 text-gray-400 border-b border-gray-700">
      <span className="block w-2/5 py-4">Streamed to IP</span>
      <span className="flex items-center w-56 h-full px-4 bg-black">
        192.168.0.1
      </span>
      <IpSwitchBtn />
    </li>
  );
}
