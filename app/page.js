"use client";

import Barchart from "@/components/Barchart";

import "./globals.css";


const HomePage = () => {
  return (

    <div className="flex flex-row w-full  overflow-hidden">
      <Barchart />
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