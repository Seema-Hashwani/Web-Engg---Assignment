import React from "react";

export default function Home() {
  return (
    <div className="Parent">
      <div className="flex flex-col bg-blue-200 h-screen">
        <div className="flex flex-row bg-cyan-700 w-screen md:h-20 h-1/4 justify-center items-center font-bold text-2xl">A</div>
        <div className="flex md:flex-row flex-col w-screen h-screen">
          <div className="flex flex-row md:flex-col bg-emerald-300 md:h-auto w-screen h-2/3 md:w-3/5 justify-center items-center font-bold text-2xl">B</div>
          <div className="flex flex-row md:flex-col bg-teal-400 md:h-auto w-screen h-1/3 md:w-2/5 justify-center items-center font-bold text-2xl">C</div>
        </div>
      </div>
    </div>
  );
}
