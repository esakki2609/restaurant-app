"use client";

import { useEffect, useState } from "react";
import { dataset, performance } from "./data";

const CustomerQueries = () => {
  const [topSellingItems, setItems] = useState([]);

  useEffect(() => {
    let itemsOrder = [];

    for (const data of dataset) {
      for (let items of data.Items) {
        let findItem = itemsOrder.find((prev) => {
          return prev.itemName === items.Item_Name;
        });

        console.log("findItem", findItem);

        if (findItem) {
          findItem.quantity = findItem.quantity + items?.Quantity;
        } else {
          itemsOrder.push({
            itemName: items.Item_Name,
            quantity: items.Quantity,
          });
        }
      }
    }

    console.log("itemsOrder", itemsOrder);

    const descOrder = itemsOrder.sort((a, b) => b.quantity - a.quantity);

    console.log("descOrder", descOrder);

    const top5Items = descOrder.slice(0, 5);

    console.log("top5", top5Items);

    setItems(top5Items);
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg p-5 gap-3">
      {/* ....TOP SELLING.... */}
      <div className="flex flex-col gap-3">
        <p className="text-md font-bold text-cyan-900">TOP SELLING ITEMS</p>
        <ul className="space-y-2">
          {topSellingItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-gray-100 rounded-md"
            >
              <span>{item.itemName}</span>
              <span className="font-bold">{item.quantity} Orders</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ....PEAK TIMES.... */}
      <div className="flex flex-col gap-3">
        <p className="text-md font-bold text-cyan-900">PEAK TIMES</p>
        <ul className="space-y-2">
          {performance.peakTimes.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-gray-100 rounded-md"
            >
              <span>{item.time}</span>
              <span className="font-bold">{item.orders} Orders</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ....CUSTOMER QUERIES.... */}
      <div className="flex flex-col gap-3">
        <p className="text-md font-bold text-cyan-900">CUSTOMER QUERIES</p>
        {performance.queries.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-2 bg-gray-100 rounded-md flex-col gap-2"
          >
            <span className="font-bold">{item.category}</span>
            <ol className="space-y-2">
              {item.items.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerQueries;
