
"use client";

import { DRAWER_ITEMS } from "@/components/drawerItems";
import { FiLogOut } from "react-icons/fi";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }) => {
  const pathName = usePathname()

  return (
    <html lang="en">
      <body>  <div className="flex flex-col w-full min-h-screen bg-gray-100 overflow-hidden">
        <div className="flex items-center justify-between w-full h-16 bg-white shadow-md px-6 rounded-t-2xl">
          <h2 className="text-lg font-semibold text-cyan-800">Welcome, John</h2>
          <div className="flex items-center gap-4">

            {/* ....Logout Button..... */}
            <button className="flex items-center gap-2  text-red-500 px-3 py-1.5 rounded-lg text-sm hover:bg-red-100 transition cursor-pointer" >
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>

        <div className="flex flex-row w-full h-168.5">
          {/*  ....Sidebar.... */}
          <div className="flex flex-col w-[5%] bg-cyan-900 items-center py-4">
            <div className="flex flex-col gap-4 w-full h-full justify-start">
              {DRAWER_ITEMS.map((item) => {

                const IsActive = pathName === item.url
                return (
                  <Link href={item.url} key={item.id}>
                    <div
                      className={`flex flex-col items-center justify-start w-full p-3 text-white hover:bg-cyan-700  rounded-md transition ${IsActive ? "bg-cyan-700" : "null"} `}
                    >

                      <p className="text-2xl">{item.icon}</p>
                      <p className="text-xs">{item.label}</p>

                    </div>
                  </Link>
                )

              })}
            </div>
          </div>

          {/*  ....Main Content.... */}
          <div className="flex flex-row w-[95%]  overflow-hidden">
            {children}
          </div>
        </div>

      </div>
      </body>
    </html>

  );
}

export default RootLayout
