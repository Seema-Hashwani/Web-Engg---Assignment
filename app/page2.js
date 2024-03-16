import React from "react";

export default function Home() {
  return (
    <div className="Parent">
      <div className="flex flex-col md:flex-col h-screen">
        <div className="flex flex-col md:flex-col w-screen h-1/6 md:h-1/3 bg-teal-300 justify-center items-center font-bold text-2xl text-black">A</div>
        <div className="flex flex-col md:flex-row h-5/6 w-screen">
          <div className="flex md:flex-col md:h-auto md:w-2/3 w-screen h-1/2 flex-col bg-slate-500">
            <div className="flex flex-col w-screen h-1/2 md:flex-row bg-red-400 md:w-auto md:h-1/2 justify-center items-center font-bold text-2xl text-black">B</div>
            <div className="flex flex-row bg-green-300 h-1/2 w-screen md:w-auto">
              <div className="flex w-1/3 md:h-auto bg-cyan-300 justify-center items-center font-bold text-2xl text-black">C</div>
              <div className="flex w-1/3 md:h-auto bg-lime-300 justify-center items-center font-bold text-2xl text-black">D</div>
              <div className="flex w-1/3 md:h-auto bg-emerald-200 justify-center items-center font-bold text-2xl text-black">E</div>
            </div>
          </div>
          <div className="flex h-1/2 md:h-auto w-screen md:w-1/3 bg-purple-300 justify-center items-center text-2xl font-bold text-black">F</div>

        </div>

        </div>
    </div>

  );
}
