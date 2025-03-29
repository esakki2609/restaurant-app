import React, { useState } from "react";
import BarchartUtils from "./utils/BarchartUtils";
import "../app/globals.css";
import Chatbot from "./Chatbot";
import { TbMessageChatbotFilled } from "react-icons/tb";
import UpperCard from "./UpperCard";
import CustomerQueries from "./CustomerQueries";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiLineChartLine } from "react-icons/ri";

const Barchart = () => {
  const [showChat, setShowChat] = useState(false);
  const [isBarchart, setBarchat] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-full h-full m-5">
      {/* ....Upper Card....*/}
      <div className="bg-white rounded-lg shadow   w-[100%] h-[15%]">
        <UpperCard />
      </div>

      <div className="flex flex-row h-[76%] w-full gap-5">
        {/* ....Sales and Profit Card....*/}
        <div className="flex flex-col h-full w-[55%] bg-white rounded-lg gap-2">
          <div className="flex w-full p-3 bg-cyan-900">
            <p className="text-white text-xl">Sales and Profit %</p>
          </div>
          <div className="flex justify-center items-center px-4 h-[75%] pt-4">
            <BarchartUtils isBarchart={isBarchart} />
          </div>
          <div className="flex flex-row justify-start items-center text-cyan-900  ">
            <AiOutlineBarChart
              onClick={() => setBarchat(true)}
              className={` font-bold ${
                isBarchart ? "text-green-500" : null
              }  p-2 rounded-md cursor-pointer`}
              size={40}
            />
            <div className="border-l h-5"></div>
            <RiLineChartLine
              onClick={() => setBarchat(false)}
              size={40}
              className={` font-bold ${
                !isBarchart ? "text-green-500" : null
              }  p-2 rounded-md cursor-pointer`}
            />
          </div>
        </div>

        {/* ....Performance Card....*/}
        <div className="flex flex-col h-full w-[45%] bg-white rounded-lg  ">
          <div className="flex w-full p-3 bg-cyan-900">
            <p className="text-white text-xl">
              Reataurant Performance Insights
            </p>
          </div>
          <div className="flex flex-col overflow-auto">
            <CustomerQueries />
          </div>
          <div className="flex justify-end items-end">
            <div className="fixed bottom-10 right-15 ">
              {!showChat && (
                <div className="bg-white p-2 hover:bg-cyan-700 text-cyan-900 hover:text-white rounded-lg">
                  <TbMessageChatbotFilled
                    size={45}
                    onClick={() => setShowChat(true)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}

              {showChat && <Chatbot onClose={() => setShowChat(false)} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
