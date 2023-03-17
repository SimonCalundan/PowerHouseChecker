import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Dato from "./ui/Dato";

export default function Afsted({ func }) {
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const currentTime = getCurrentTime();

  console.log(currentTime);
  const [afgang, setAfgang] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/Data.json");
      setAfgang(data);
    }
    getData();
  }, []);

  const afgange = afgang.afgange;

  return (
    <>
      <div className=" absolute w-screen md:w-1/3 left-0 md:left-1/3 top-[10rem] h-3/4 bg-slate-800 px-2 py-4 text-white shadow-2xl shadow-[#624ce0]">
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
              Info om afgang fra Harald
            </h2>
          </div>
          <div className=" flex flex-col gap-20 items-center mt-10">
            {afgange
              ?.filter((afgang) => afgang.afgang > currentTime)
              .map((afgang) => (
                <Dato
                  key={afgang.id}
                  afgang={afgang.afgang}
                  busgade={afgang.afgangBusGaden}
                />
              ))
              .slice(0, 3)}
          </div>
        </div>
      </div>
    </>
  );
}
