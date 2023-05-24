import React, { useState } from "react";

export default function IpSwitchBtn() {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <label htmlFor="toggle" className="flex items-center ml-10 cursor-pointer">
      Off
      <div className="relative mx-5">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggleSwitch}
        />
        <div
          className={`${
            isOn ? "bg-green" : "bg-gray-200"
          } w-14 h-3 rounded-full shadow-inner transition duration-300 ease-in-out`}></div>
        <div
          className={`${
            isOn ? "translate-x-8" : "translate-x-0"
          } absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ease-in-out`}></div>
      </div>
      On
    </label>
  );
}
