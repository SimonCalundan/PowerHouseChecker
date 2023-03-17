import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function Hjem({ func }) {
  return (
    <>
      <div className=" absolute w-screen md:w-1/3 md:left-1/3 left-0 top-[10rem] h-3/4 bg-slate-800 px-2 py-4 text-white shadow-2xl shadow-[#624ce0]">
        <button onClick={func}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-14 bg-[#624ce0] rounded-full p-1"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className=" flex flex-col py-4 px-8">
          <div className=" flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className=" text-xl font-light whitespace-nowrap">
              Info om afgang fra Power House
            </h2>
          </div>
          <h2 className=" text-4xl font-semibold mt-12 mb-2">Inden 15:31</h2>
          <p className=" text-xl text-gray-200">
            Bus holder ude foran Power .31 og .01 hver time.
          </p>
          <h2 className=" text-4xl font-semibold mt-12 mb-2">Efter 15.31:</h2>
          <p className=" text-xl text-gray-200">Bus kører kun .31</p>
        </div>
      </div>
    </>
  );
}
