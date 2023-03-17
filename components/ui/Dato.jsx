import React from "react";
import { BsBusFrontFill } from "react-icons/bs";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function Dato({ afgang, busgade, id }) {
  return (
    <>
      <ScrollReveal.div className=" flex items-start gap-4" key={id}>
        <BsBusFrontFill className=" mt-2 text-2xl" />
        <div>
          <div className=" flex gap-4 justify-between">
            <h2 className=" text-xl font-medium">Afgang fra HJP: </h2>
            <p className=" text-red-500 font-semibold text-xl">{afgang}</p>
          </div>
          <div className=" flex gap-4 justify-between">
            <h2 className=" text-xl font-thin">Afgang fra Busgaden: </h2>
            <p className="font-thin text-xl">{busgade}</p>
          </div>
        </div>
      </ScrollReveal.div>
    </>
  );
}

Date.defaultProps = {
  afgang: "00:00",
  busgade: "00:14",
};
