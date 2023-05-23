import React from "react";

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-between mt-20">
      <button className="w-16 h-16">
        <img src="/images/button-settings.png" alt="setting button" />
      </button>
      <div>
        <button className="w-16 h-16">
          <img src="/images/button-mic.png" alt="setting button" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <button className="w-16 h-16">
          <img src="/images/button-sc.png" alt="setting button" />
        </button>
        <button className="w-16 h-16">
          <img src="/images/button-next.png" alt="setting button" />
        </button>
      </div>
    </div>
  );
}
