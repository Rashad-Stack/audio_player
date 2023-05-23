import React from "react";

export default function List({ settingKey, settingValue }) {
  return (
    <li className="flex items-center py-4 text-gray-400 border-b border-gray-700">
      <span className="block w-2/5">{settingKey}</span>
      <span className="flex-1 block px-4">{settingValue}</span>
    </li>
  );
}
