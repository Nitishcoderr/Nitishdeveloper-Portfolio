"use client"
import Image from "next/image"
import { Button } from "./ui/moving-border"

const Project = () => {
  return (
    <div className='py-12 px-4 text-white'>
       <h3 className='text-3xl text-center'>PROJECTS</h3>
       <p className="text-center py-6">Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
       <div className='flex md:flex-row flex-col py-12'>
        <div className="w-full md:w-[50%]">
        <Image
                  src="/project/jalebi.png"
                  height="1000"
                  width="1000"
                  className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="img"
                />
        </div>
        <div className="flex flex-col justify-center w-full md:w-[50%] md:px-12">
            <h3 className="text-3xl">Jalebi</h3>
            <p className="text-sm py-6">Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.</p>
            <div className='mt-6'>
            <Button
        borderRadius="1.75rem"
        className="bg-white h-16 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Case Study
      </Button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Project
