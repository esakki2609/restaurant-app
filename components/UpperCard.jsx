import React, { useEffect, useState } from "react";
import "../app/globals.css";
import { dataset, UpperCardData } from "./data";

const UpperCard = () => {
  const [percentage, setPercentage] = useState({
    online_orders: 0,
    total_price: 0,
  });

  useEffect(() => {
    const getDataOnlineCOunt = dataset.filter(
      (item) => item.Order_Type === "Online"
    );

    const online_percentage =
      (getDataOnlineCOunt.length / dataset.length) * 100;

    setPercentage((prev) => ({ ...prev, online_orders: online_percentage }));

    const getSum = dataset.map((item) => {
      const getTotalPrice = item.Items.map((data) => data.Total_Price);

      const sum = getTotalPrice.reduce((a, b) => a + b);

      return sum;
    });

    setPercentage((prev) => ({
      ...prev,
      total_price: parseInt(prev.total_price) + parseInt(getSum),
    }));
  }, []);

  console.log("getItems", percentage);
  return (
    <div className=" flex items-center justify-between w-full  p-3 px-8 h-full text-cyan-900 ">
      {/* ....Online Order.... */}
      <div className="flex flex-col text-center items-center justify-center">
        <p className="text-3xl font-bold text-cyan-900">
          {percentage?.online_orders} %
        </p>
        <p className="text-cyan-900 text-sm">Online Orders</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Profit %.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.Profit}</p>
        <p className="text-cyan-900 text-sm">Profit</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....New Items Added.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.new_items}</p>
        <p className="text-cyan-900 text-sm">New Items</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Rating % ....*/}
      <div className="text-center">
        <p className="text-3xl font-bold">{UpperCardData.ratings}</p>
        <p className="text-cyan-900 text-sm">Rating</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....App Downloaded.... */}
      <div className="text-center">
        <p className="text-3xl font-bold">
          {parseInt(percentage?.total_price)}
        </p>
        <p className="text-cyan-900 text-sm">Total Price</p>
      </div>

      <div className="border-l h-17"></div>

      {/* ....Satisfied (Y/N).... */}
      <div className="text-center">
        <p className="text-3xl font-bold ">{UpperCardData.satisfied}</p>
        <p className="text-cyan-900 text-sm">Satisfied(Y/N)</p>
      </div>
    </div>
  );
};

export default UpperCard;
