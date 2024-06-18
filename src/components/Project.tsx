"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/moving-border';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='py-12 px-4 md:px-24 projectGrd text-text'>
      <h3 className='text-4xl font-extrabold text-center'>LATEST PROJECTS</h3>
      <p className='text-center py-6'>
        Here you will find some of the personal and client projects that I created, with each project containing its own case study.
      </p>
      <ProjectCard/>
    </div>
  );
};

export default Project;