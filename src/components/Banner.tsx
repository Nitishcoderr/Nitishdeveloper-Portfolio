"use client";
import Image from 'next/image'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export const Banner = () => {

  const words = [
    {
      text: "Seamless",
       className: "text-xsm md:text-2xl text-white",
    },
    {
      text: "Digital",
       className: "text-xsm md:text-2xl text-white",
    },
    {
      text: "Experiences",
       className: "text-xsm md:text-2xl text-white",
    },
    {
      text: "with",
       className: "text-xsm md:text-2xl text-white",
    },
    {
      text: "Modern",
      className: "text-xsm md:text-2xl text-white",
    },
    {
      text: "Frontend",
      className: "text-xsm md:text-2xl text-[#3b82f6]",
    },
    {
      text: "Technologies",
      className: "text-xsm md:text-2xl text-white",
    },
  ];
  
  return (
    <section className='bg-[#060a11] relative lg:pb-6 xl:pb-8 pt-16 sm:pt-20 2xl:pt-52 pb-20 sm:h-[100vh]'>
    <div className='overflow-hidden bottom-0 absolute w-full h-full'>
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
    </div>
    <div className="mx-w-[1170px] relative flex items-center flex-col justify-center">
    <Image className="object-cover rounded-full sm:h-auto" width="200" height="200" src="/me/me1.jpg" alt="Article 01" />
    <div className='flex items-center text-center justify-center flex-col mt-8 leading-loose'>
        <h4 className="md:text-xl xl:text-4xl sm:text-6xl font-bold text-white">
            👋 Hey there,
        </h4>
        <h4 className="md:text-xl xl:text-4xl 2xl:text-5xl sm:text-6xl font-bold text-white mt-4">
        Nitish Chaurasiya
        </h4>
        <TypewriterEffectSmooth words={words} />
    </div>
    </div>
    </section>
  )
}
