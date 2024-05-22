"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/moving-border'; // Assuming you have a custom Button component defined

const Project = () => {
  return (
    <div className='py-12 px-4 bg-background text-text'>
      <h3 className='text-3xl text-center'>PROJECTS</h3>
      <p className='text-center py-6'>
        Here you will find some of the personal and client projects that I created, with each project containing its own case study.
      </p>
      <div className='flex md:flex-row flex-col py-12'>
        <div className='w-full md:w-[50%]'>
          <Image
            src='/project/jalebi.png'
            height='50'
            width='50'
            className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='img'
          />
        </div>
        <div className='flex flex-col justify-center w-full md:w-[50%] md:px-12'>
          <h3 className='text-3xl'>Jalebi</h3>
          <p className='text-sm py-6'>
            Wilsonport is a multiservice logistics and transport company, and I created their website from scratch using the frontend tools I know.
          </p>
          <div className='mt-6'>
            <Button
              borderRadius='1.75rem'
              className='bg-accent h-16 text-white border-accent-dark'
            >
              Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;