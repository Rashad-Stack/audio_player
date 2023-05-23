import React from "react";

export default function List({ title }) {
  return (
    <li className="py-4 text-xl text-gray-400 border-t border-gray-700">
      {title}
    </li>
  );
}
