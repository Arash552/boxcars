"use client";

import { useEffect, useRef } from "react";
import AddFavorite from "./addFavorite";

export default function ProductCard2() {
  const parent = useRef<HTMLElement | any>(null)
  useEffect(()=>{
    parent.current = document.getElementById("productSlider2") as HTMLElement;
  })
  return (
    <section className="grid gap-y-10">
      <div
        className="flex gap-x-5 items-center overflow-x-scroll disableScroll"
        id="productSlider2"
      >
        <div className="min-w-[660px] rounded-2xl bg-[#ffffff20] flex items-center">
          <div className="w-2/3 relative rounded-l-2xl">
            <img
              src="/car1-660x440.jpg.png"
              alt=""
              className="h-full rounded-l-2xl"
            />
            <div className="w-full flex items-center justify-between absolute top-3 px-2">
              <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
                Sale
              </div>
              <AddFavorite></AddFavorite>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-y-4">
            <div className="grid gap-y-2 text-white text-sm">
              <p>Audi A5 – 2023</p>
              <p className="text-xs opacity-90 h-4 overflow-hidden">
                2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
              </p>
            </div>
            <div className="grid gap-y-2">
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon white.png" alt="" className="w-5" />
                <p>500 Miles</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (1) white.png" alt="" className="w-5" />
                <p>Petrol</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (2) white.png" alt="" className="w-5" />
                <p>Automatic</p>
              </div>
            </div>
            <div className="flex justify-between text-white">
              <div className="grid gap-y-2">
                <p className="text-xs line-through opacity-90">$50,000</p>
                <p className="text-sm">$45,000</p>
              </div>
              <div className="flex items-end">
                <p className="text-xs text-white flex gap-x-2">
                  View all <i className="bi-arrow-up-right relative"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[660px] rounded-2xl bg-[#ffffff20] flex items-center">
          <div className="w-2/3 relative rounded-l-2xl">
            <img
              src="/car5-660x440.jpg.png"
              alt=""
              className="h-full rounded-l-2xl"
            />
            <div className="w-full flex items-center justify-between absolute top-3 px-2">
              <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
                Sale
              </div>
              <AddFavorite></AddFavorite>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-y-4">
            <div className="grid gap-y-2 text-white text-sm">
              <p>Audi A5 – 2023</p>
              <p className="text-xs opacity-90 h-4 overflow-hidden">
                2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
              </p>
            </div>
            <div className="grid gap-y-2">
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon white.png" alt="" className="w-5" />
                <p>500 Miles</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (1) white.png" alt="" className="w-5" />
                <p>Petrol</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (2) white.png" alt="" className="w-5" />
                <p>Automatic</p>
              </div>
            </div>
            <div className="flex justify-between text-white">
              <div className="grid gap-y-2">
                <p className="text-xs line-through opacity-90">$50,000</p>
                <p className="text-sm">$45,000</p>
              </div>
              <p className="text-xs text-white flex gap-x-2 items-end">
                View all <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-[660px] rounded-2xl bg-[#ffffff20] flex items-center">
          <div className="w-2/3 relative rounded-l-2xl">
            <img
              src="/car12-660x440.jpg.png"
              alt=""
              className="h-full rounded-l-2xl"
            />
            <div className="w-full flex items-center justify-between absolute top-3 px-2">
              <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
                Sale
              </div>
              <AddFavorite></AddFavorite>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-y-4">
            <div className="grid gap-y-2 text-white text-sm">
              <p>Audi A5 – 2023</p>
              <p className="text-xs opacity-90 h-4 overflow-hidden">
                2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
              </p>
            </div>
            <div className="grid gap-y-2">
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon white.png" alt="" className="w-5" />
                <p>500 Miles</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (1) white.png" alt="" className="w-5" />
                <p>Petrol</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (2) white.png" alt="" className="w-5" />
                <p>Automatic</p>
              </div>
            </div>
            <div className="flex justify-between text-white">
              <div className="grid gap-y-2">
                <p className="text-xs line-through opacity-90">$50,000</p>
                <p className="text-sm">$45,000</p>
              </div>
              <p className="text-xs text-white flex gap-x-2 items-end">
                View all <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-[660px] rounded-2xl bg-[#ffffff20] flex items-center">
          <div className="w-2/3 relative rounded-l-2xl">
            <img
              src="/car13-660x440.jpg.png"
              alt=""
              className="h-full rounded-l-2xl"
            />
            <div className="w-full flex items-center justify-between absolute top-3 px-2">
              <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
                Sale
              </div>
              <AddFavorite></AddFavorite>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-y-4">
            <div className="grid gap-y-2 text-white text-sm">
              <p>Audi A5 – 2023</p>
              <p className="text-xs opacity-90 h-4 overflow-hidden">
                2.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
              </p>
            </div>
            <div className="grid gap-y-2">
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon white.png" alt="" className="w-5" />
                <p>500 Miles</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (1) white.png" alt="" className="w-5" />
                <p>Petrol</p>
              </div>
              <div className="flex gap-x-2 text-white text-xs">
                <img src="/Icon (2) white.png" alt="" className="w-5" />
                <p>Automatic</p>
              </div>
            </div>
            <div className="flex justify-between text-white">
              <div className="grid gap-y-2">
                <p className="text-xs line-through opacity-90">$50,000</p>
                <p className="text-sm">$45,000</p>
              </div>
              <p className="text-xs text-white flex gap-x-2 items-end">
                View all <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center gap-x-4 hidden sm:flex">
        <button
          className="px-4 py-2 grid place-items-center text-white border-white border-2 rounded-full"
          onClick={() => {
            if (parent.current) {
              const wid = parent.current.children[0].clientWidth;
              parent.current.scrollBy(wid - wid * 2, 0);
            }
          }}
        >
          <i className="bi-chevron-left"></i>
        </button>
        <button
          className="px-4 py-2 grid place-items-center text-white border-white border-2 rounded-full"
          onClick={() => {
            if (parent.current) {
              parent.current.scrollBy(parent.current.children[0].clientWidth, 0);
            }
          }}
        >
          <i className="bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
