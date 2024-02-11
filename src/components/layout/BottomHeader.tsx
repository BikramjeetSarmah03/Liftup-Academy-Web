"use client";

import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

import { navItems } from "@/lib/navItems";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

export default function BottomHeader() {
  const isDesktop = useMediaQuery("(min-width :768px)");

  return isDesktop ? (
    <nav className="bg-[rgba(255,255,255,0.2)] mt-4 max-w-5xl lg:max-w-[110rem] mx-auto flex  items-center justify-between">
      <ul className="flex items-center gap-4 p-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-xl text-white hover:text-green-500 transition-all duration-300">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 py-9 px-14 text-xl text-white clip-left">
        Get Certificate
      </button>
    </nav>
  ) : (
    <div className="mt-4 bg-white p-4 flex items-center">
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>

        <DrawerContent>
          <div className="flex items-center justify-between border-b p-4">
            <div>
              <h1 className="text-xl lg:text-4xl font-black">Liftup Academy</h1>
              <span className="text-xs">ONLINE EDUCATION & LEARNING</span>
            </div>
            <DrawerClose className="hover:bg-gray-50 p-2 rounded-full border border-gray-50 transition-all duration-300">
              <XIcon />
            </DrawerClose>
          </div>

          <ul className="flex flex-col gap-2 mt-4 flex-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-100 transition-all duration-300 p-4 hover:shadow-inner">
                <Link href={item.link} className="h-full w-full p-4">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="bg-green-500 p-4 text-xl text-white rounded-md m-2 hover:bg-green-600 transition-all duration-300">
            Get Certificate
          </button>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
