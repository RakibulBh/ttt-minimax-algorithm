import React from "react";
import O from "./o";

const Box = () => {
  return (
    <div className="rounded-xl bg-[#1F3540] shadow-lg flex items-center justify-center hover:scale-110 transition-transform ease-in-out duration-500 p-6">
      <O />
    </div>
  );
};

export default Box;
