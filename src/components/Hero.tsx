"use client"
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  const words = "A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product."
  return (
    <div className="mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        HEY, I&apos;M Nitish
        </h2>
       
        <TextGenerateEffect words={words} />

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button
        className="bg-white px-10 text-2xl py-2 uppercase rounded-lg  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Project
      </button>
          
        </div>
      </Vortex>
    </div>
  );
}
