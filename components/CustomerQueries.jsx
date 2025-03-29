"use client";

import { performance } from "./data";

const CustomerQueries = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white rounded-lg p-5 gap-3">
      {/* ....TOP SELLING.... */}
      <div className="flex flex-col gap-3">
        <p className="text-md font-bold text-cyan-900">TOP SELLING ITEMS</p>
        <ul className="space-y-2">
          {performance.topSelling.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-gray-100 rounded-md"
            >
              <span>{item.name}</span>
              <span className="font-bold">{item.sales} Orders</span>
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
