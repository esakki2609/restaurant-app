import React from "react";
import "../app/globals.css";
import { UpperCardData } from "./data";

const UpperCard = () => {
  return (
    <div className=" flex items-center justify-between w-full  p-3 px-8 h-full text-gray-500 ">
      {/* ....Online Order.... */}
      <div className="flex flex-col text-center items-center justify-center">
        <p className="text-3xl font-bold text-gray-500">
          {UpperCardData.online_orders}
        </p>
        <p className="text-gray-500 text-sm">Online Orders</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Profit %.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.Profit}</p>
        <p className="text-gray-500 text-sm">Profit</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....New Items Added.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.new_items}</p>
        <p className="text-gray-500 text-sm">New Items</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Rating % ....*/}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.ratings}</p>
        <p className="text-gray-500 text-sm">Rating</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....App Downloaded.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.app_download}</p>
        <p className="text-gray-500 text-sm">Downloads</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Satisfied (Y/N).... */}
      <div className="text-center">
        <p className="text-3xl font-bold ">{UpperCardData.satisfied}</p>
        <p className="text-gray-500 text-sm">Satisfied(Y/N)</p>
      </div>
    </div>
  );
};

export default UpperCard;
