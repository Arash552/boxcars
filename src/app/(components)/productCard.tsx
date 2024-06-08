"use client";

import { useEffect, useRef } from "react";
import AddFavorite from "./addFavorite";

export default function ProductCard() {
  const parent = useRef<HTMLElement | any>(null)
  useEffect(()=>{
    parent.current = document.getElementById("productSlider") as HTMLElement;
  })
  return (
    <section className="grid gap-y-5">
      <div className="flex gap-x-5 items-center overflow-x-scroll disableScroll" id="productSlider">
        <div className="min-w-72 rounded-2xl grid gap-y-2 border-borderC relative border-2">
          <img src="/car1-660x440.jpg.png" alt="" className="rounded-t-2xl" />
          <div className="w-full flex items-center justify-between absolute top-3 px-2">
            <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
              Great Price
            </div>
            <AddFavorite></AddFavorite>
          </div>
          <div className="px-4 overflow-hidden grid gap-y-2">
            <p className="text-black">Ford Transit – 2021</p>
            <p className="text-sm h-5 opacity-90 overflow-hidden border-b-2 border-borderC">
              4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
            </p>
            <div className="flex items-center justify-between text-black text-sm pb-2 border-b-2 border-borderC">
              <div className="grid place-items-center gap-y-2">
                <img src="/Vector.png" alt="" className="w-5" />
                <p>250 Miles</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon.png" alt="" className="w-5" />
                <p>Diesel</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon (1).png" alt="" className="w-5" />
                <p>Manual</p>
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-black">$22,000</p>
              <p className="text-sm text-purple flex gap-x-2">
                Show All Brands <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-72 rounded-2xl grid gap-y-2 border-borderC relative border-2">
          <img src="/car5-660x440.jpg.png" alt="" className="rounded-t-2xl" />
          <div className="w-full flex items-center justify-between absolute top-3 px-2">
            <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
              Great Price
            </div>
            <AddFavorite></AddFavorite>
          </div>
          <div className="px-4 overflow-hidden grid gap-y-2">
            <p className="text-black">Ford Transit – 2021</p>
            <p className="text-sm h-5 opacity-90 overflow-hidden border-b-2 border-borderC">
              4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
            </p>
            <div className="flex items-center justify-between text-black text-sm pb-2 border-b-2 border-borderC">
              <div className="grid place-items-center gap-y-2">
                <img src="/Vector.png" alt="" className="w-5" />
                <p>250 Miles</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon.png" alt="" className="w-5" />
                <p>Diesel</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon (1).png" alt="" className="w-5" />
                <p>Manual</p>
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-black">$22,000</p>
              <p className="text-sm text-purple flex gap-x-2">
                Show All Brands <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-72 rounded-2xl grid gap-y-2 border-borderC relative border-2">
          <img src="/car12-660x440.jpg.png" alt="" className="rounded-t-2xl" />
          <div className="w-full flex items-center justify-between absolute top-3 px-2">
            <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
              Great Price
            </div>
            <AddFavorite></AddFavorite>
          </div>
          <div className="px-4 overflow-hidden grid gap-y-2">
            <p className="text-black">Ford Transit – 2021</p>
            <p className="text-sm h-5 opacity-90 overflow-hidden border-b-2 border-borderC">
              4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
            </p>
            <div className="flex items-center justify-between text-black text-sm pb-2 border-b-2 border-borderC">
              <div className="grid place-items-center gap-y-2">
                <img src="/Vector.png" alt="" className="w-5" />
                <p>250 Miles</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon.png" alt="" className="w-5" />
                <p>Diesel</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon (1).png" alt="" className="w-5" />
                <p>Manual</p>
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-black">$22,000</p>
              <p className="text-sm text-purple flex gap-x-2">
                Show All Brands <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-72 rounded-2xl grid gap-y-2 border-borderC relative border-2">
          <img src="/car13-660x440.jpg.png" alt="" className="rounded-t-2xl" />
          <div className="w-full flex items-center justify-between absolute top-3 px-2">
            <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
              Great Price
            </div>
            <AddFavorite></AddFavorite>
          </div>
          <div className="px-4 overflow-hidden grid gap-y-2">
            <p className="text-black">Ford Transit – 2021</p>
            <p className="text-sm h-5 opacity-90 overflow-hidden border-b-2 border-borderC">
              4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
            </p>
            <div className="flex items-center justify-between text-black text-sm pb-2 border-b-2 border-borderC">
              <div className="grid place-items-center gap-y-2">
                <img src="/Vector.png" alt="" className="w-5" />
                <p>250 Miles</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon.png" alt="" className="w-5" />
                <p>Diesel</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon (1).png" alt="" className="w-5" />
                <p>Manual</p>
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-black">$22,000</p>
              <p className="text-sm text-purple flex gap-x-2">
                Show All Brands <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-72 rounded-2xl grid gap-y-2 border-borderC relative border-2">
          <img src="/car19-660x440.jpg.png" alt="" className="rounded-t-2xl" />
          <div className="w-full flex items-center justify-between absolute top-3 px-2">
            <div className="px-5 py-2 text-white bg-purple text-xs rounded-full">
              Great Price
            </div>
            <AddFavorite></AddFavorite>
          </div>
          <div className="px-4 overflow-hidden grid gap-y-2">
            <p className="text-black">Ford Transit – 2021</p>
            <p className="text-sm h-5 opacity-90 overflow-hidden border-b-2 border-borderC">
              4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate
            </p>
            <div className="flex items-center justify-between text-black text-sm pb-2 border-b-2 border-borderC">
              <div className="grid place-items-center gap-y-2">
                <img src="/Vector.png" alt="" className="w-5" />
                <p>250 Miles</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon.png" alt="" className="w-5" />
                <p>Diesel</p>
              </div>
              <div className="grid place-items-center gap-y-2">
                <img src="/Icon (1).png" alt="" className="w-5" />
                <p>Manual</p>
              </div>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-black">$22,000</p>
              <p className="text-sm text-purple flex gap-x-2">
                Show All Brands <i className="bi-arrow-up-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center gap-x-4 hidden sm:flex">
        <button className="px-4 py-2 grid place-items-center text-black border-borderC border-2 rounded-full" onClick={()=>{
            if(parent.current){
                const wid = parent.current.children[0].clientWidth
                parent.current.scrollBy(wid - (wid * 2), 0)
            }
        }}>
          <i className="bi-chevron-left"></i>
        </button>
        <button className="px-4 py-2 grid place-items-center text-black border-borderC border-2 rounded-full" onClick={()=>{
            if(parent.current){
                parent.current.scrollBy(parent.current.children[0].clientWidth , 0)
            }
        }}>
          <i className="bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
