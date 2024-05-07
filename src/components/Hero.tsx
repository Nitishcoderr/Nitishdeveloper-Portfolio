"use client"
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "./ui/moving-border";

export function Hero() {
  return (
    <div className=" mx-auto rounded-md  h-[34rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        HEY, I&apos;M Nitish
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-3xl mt-6 text-center">
        A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button
        borderRadius="1.75rem"
        className="bg-white h-16 dark:bg-slate-900 text-black dark:text-white text-3xl uppercase border-neutral-200 dark:border-slate-800"
      >
        Project
      </Button>
          
        </div>
      </Vortex>
    </div>
  );
}
