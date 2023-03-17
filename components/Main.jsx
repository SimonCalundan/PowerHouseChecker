import React from "react";
import Image from "next/image";
import Hjem from "@/components/Hjem";
import Vejr from "@/components/Vejr";

import { useState } from "react";
import Afsted from "@/components/Afsted";

export default function Main() {
  const [home, setHome] = useState(false);
  const [afsted, setAfsted] = useState(false);
  return (
    <>
      <main className=" py-8 px-2 flex flex-col gap-4 bg-[#e8effc] w-screen h-screen">
        <Image
          src="/ph_logo.png"
          width={200}
          height={200}
          className=" mx-auto shadow-lg"
          alt="Vores logo"
        />
        <div className=" flex flex-col item-center text-center">
          <h1 className="text-4xl text-center font-bold mt-5 mb-2 text-[#624ce0]">
            Hvornår går bussen til PowerHouse?
          </h1>
          <h2 className="text-2xl text-slate-900">Skal du gym eller hjem?</h2>
          <div className=" flex justify-center my-5">
            <button
              onClick={() => setAfsted(true)}
              type="button"
              className="text-white bg-[#624ce0] hover:bg-blue-800  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 shadow-md"
            >
              I go Jim! 💪
            </button>
            <button
              onClick={() => setHome(true)}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 shadow-md "
            >
              Jeg skal hjem! 🏠
            </button>
          </div>
          <Vejr />
          {home && <Hjem func={() => setHome(false)} />}
          {afsted && <Afsted func={() => setAfsted(false)} />}
        </div>
      </main>
    </>
  );
}
