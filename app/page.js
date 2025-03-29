"use client";

import { DRAWER_ITEMS } from "@/components/drawerItems";
import { FiLogOut } from "react-icons/fi";
import Barchart from "@/components/Barchart";

import "./globals.css";


const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex items-center justify-between w-full h-16 bg-white shadow-md px-6 rounded-t-2xl">
        <h2 className="text-lg font-semibold text-gray-800">Welcome, John</h2>
        <div className="flex items-center gap-4">

          {/* ....Logout Button..... */}
          <button className="flex items-center gap-2  text-red-500 px-3 py-1.5 rounded-lg text-sm hover:bg-red-100 transition">
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-row w-full h-168.5">
        {/*  ....Sidebar.... */}
        <div className="flex flex-col w-[5%] bg-gray-500 items-center py-4">
          <div className="flex flex-col gap-4 w-full h-full justify-start">
            {DRAWER_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start w-full p-3 text-white hover:bg-gray-700 rounded-md transition"
              >
                <p className="text-2xl">{item.icon}</p>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/*  ....Main Content.... */}
        <div className="flex flex-row w-[95%]  overflow-hidden">
          <Barchart />
        </div>
      </div>

    </div>
  );
};

export default HomePage;






{/* <div className="h-screen flex justify-center items-center">
      <button onClick={() => setShowChat(true)} className="bg-blue-500 text-white p-4 rounded-lg">
        Open Chatbot
      </button>
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
    </div> */}