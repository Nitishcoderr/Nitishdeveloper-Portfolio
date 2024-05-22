"use client"
import React from 'react';
import { Button } from './ui/moving-border';

const technologies = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'React' },
  { id: 5, name: 'Next.js' },
  { id: 6, name: 'Tailwind' },
  { id: 7, name: 'SASS' },
  { id: 8, name: 'GIT' },
  { id: 9, name: 'Github' },
  { id: 10, name: 'SEO' },
  { id: 11, name: 'Terminal' },
];

const About = () => {
  return (
    <div className='py-12 px-4 bg-background text-text'>
      <h3 className='text-3xl text-center'>ABOUT ME</h3>
      <p className="text-center py-6">
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
      </p>
      <div className='flex flex-col md:flex-row md:px-12 px-3 py-6'>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h3 className='text-2xl'>Get to know me!</h3>
          <p className='text-sm pt-6'>
            I&apos;m a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
          </p>
          <p className='text-sm pt-6'>
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my LinkedIn and Instagram where I post useful content related to Web Development and Programming.
          </p>
          <p className='text-sm pt-6'>
            I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
          </p>
          <div className='mt-6'>
            <Button
              onClick={() => console.log('Contact button clicked')}
              className="bg-primary text-white hover:bg-primary-dark"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-10">
          <p className='text-2xl pl-6'>My Skills</p>
          <div className='flex flex-wrap'>
            {technologies.map((item) => (
              <div key={item.id} className="mx-3 my-3">
                <button
                  className="bg-secondary w-24 py-1 rounded-lg text-white hover:bg-secondary-dark"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
