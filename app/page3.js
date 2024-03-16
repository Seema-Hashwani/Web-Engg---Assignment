import Image from "next/image";

export default function Home() {
  return (
    <div className="Parent">
      <div className="flex flex-col md:flex-col h-screen">
        <div className="flex md:h-2/5 w-screen h-1/6 bg-red-300 justify-center items-center text-2xl font-bold text-black">
          A
        </div>
        <div className="flex flex-col md:flex-row w-screen h-5/6">
          <div className="flex flex-col w-screen md:flex-col md:w-3/5 md:h-auto h-2/5">
            <div className="flex flex-row md:flex-row md:w-auto w-screen h-1/2">
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-slate-400 justify-center items-center text-2xl font-bold text-black">
                B
              </div>
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-blue-400 justify-center items-center text-2xl font-bold text-black">
                C
              </div>
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-purple-300 justify-center items-center text-2xl font-bold text-black">
                D
              </div>
            </div>
            <div className="flex flex-row md:flex-row md:w-auto w-screen h-1/2">
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-green-200 justify-center items-center text-2xl font-bold text-black">
                E
              </div>
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-lime-300 justify-center items-center text-2xl font-bold text-black">
                F
              </div>
              <div className="flex flex-row md:flex-col h-auto w-1/3 bg-gray-400 justify-center items-center text-2xl font-bold text-black">
                G
              </div>
            </div>
          </div>
          <div className="flex flex-row w-screen h-3/5 md:flex-row md:w-2/5 md:h-auto bg-teal-500 justify-center items-center text-2xl font-bold text-black">
            H
          </div>
        </div>
      </div>
    </div>
  );
}
