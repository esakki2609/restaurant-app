"use client";

import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import "../../app/globals.css";
import { chartData } from "../data";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const BarchartUtils = ({ isBarchart }) => {
  return (
    <div className="flex flex-col w-full h-fullgap-5">
      {isBarchart ? (
        <div className="w-full ">
          <Bar data={chartData} />
        </div>
      ) : (
        <div className="w-full ">
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default BarchartUtils;
