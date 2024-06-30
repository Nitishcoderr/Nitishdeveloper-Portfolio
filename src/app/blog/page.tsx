import BlogCard from '@/components/BlogCard'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData.json";

const page = () => {
    const singleBlog = blogData.blog.slice(0, 1);
  return (
    <div className="relative py-20  md:pt-[12.5rem]">
    <div className="w-full h-full absolute overflow-hidden bottom-0">
      <div className="proShape1"></div>
      <div className="proShape2"></div>
      <div className="proShape3"></div>
      <div className="proShape4"></div>
    </div>
    <div className="relative px-6 md:px-24">
      <div className='md:ml-[24rem]'>
      <h4 className='text-3xl md:text-6xl font-bold leading-snug'>
      Blog and <br className='hidden md:block' />
      Some Project Case</h4>
      </div>
      {
        singleBlog.map((item)=>(
      <div key={item.id} className="flex justify-center flex-col md:flex-row mt-6">
        <div className="w-full md:w-[50%] flex items-center justify-end">
        <Image
                src={item.image}
                height="500"
                width="500"
                className=""
                alt="thumbnail"
              />
        </div>
        <div className="w-full md:w-[50%] flex items-start flex-col md:pl-6  md:pr-40 py-6 leading-snug">
            <p className='text-gray-400'>{item.category} / {item.date}</p>
            <h5 className="text-2xl md:text-5xl font-extrabold mt-6">{item.courseTitle}</h5>
            <p className='text-gray-600 mt-6'>{item.description}</p>
        </div>
      </div>
        ))
      }
      <div className="mt-12">
        <BlogCard/>
      </div>
    </div>
  </div>
  )
}

export default page
