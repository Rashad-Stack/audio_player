import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="flex flex-col items-center justify-between mt-20">
      <Link
        to="/settings"
        className="w-16 h-16 transition ease-out transform hover:opacity-50">
        <img src="/images/button-settings.png" alt="setting button" />
      </Link>
      <div>
        <button
          className={`w-16 h-16 transition ease-out transform ${
            isMuted ? "opacity-20" : "opacity-100"
          }`}
          onClick={() => setIsMuted(!isMuted)}>
          <img src="/images/button-mic.png" alt="setting button" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <button className="w-16 h-16 transition ease-out transform hover:opacity-50">
          <img src="/images/button-sc.png" alt="setting button" />
        </button>
        <button className="w-16 h-16 transition ease-out transform hover:opacity-50">
          <img src="/images/button-next.png" alt="setting button" />
        </button>
      </div>
    </div>
  );
}
