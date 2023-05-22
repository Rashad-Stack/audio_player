import React from "react";
import CircleProgressbar from "./cicleProgressbar";

export default function AlbumCover({ percentage, time }) {
  return (
    <CircleProgressbar percentage={percentage} circleWidth="150">
      <div className="relative w-32 h-32 overflow-hidden rounded-full cursor-pointer group">
        <img
          src="https://d1ozqqh7vh3ykm.cloudfront.net/2023/21/112731180/temp20230522-7424-bts3wj.png"
          alt="album image"
          className="object-cover"
        />
        <input type="range" className="rounded-range"></input>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between w-full py-2 text-center text-gray-400 transition-all h-1/3 bg-black/60 group-hover:h-full">
          <div className="hidden w-full h-full group-hover:grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          {time}
        </div>
      </div>
    </CircleProgressbar>
  );
}