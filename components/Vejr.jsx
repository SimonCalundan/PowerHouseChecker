import React from "react";
import { BsCloudDrizzleFill } from "react-icons/bs";

export default function Vejr() {
  return (
    <>
      <div className=" flex flex-col items-center gap-4 mt-10">
        <h1 className=" text-3xl font-semibold">Vejr i Århus C lige nu</h1>
        <BsCloudDrizzleFill className=" text-[13rem] text-gray-500 drop-shadow-2xl" />
        <h2 className=" text-xl font-semibold">
          Det er 10 grader og det regner
        </h2>
      </div>
    </>
  );
}
