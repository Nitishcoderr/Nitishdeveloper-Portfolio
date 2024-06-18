import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative  py-[90px] bg-white">
      <div className="w-full h-full absolute overflow-hidden bottom-0">
        <div className="fooShape1"></div>
        <div className="fooShape2"></div>
        <div className="fooShape3"></div>
      </div>
      <div className="fooBorderTile flex items-center justify-center flex-col py-12 relative">
        <h4 className='text-6xl font-bold leading-snug'>
        Have a project in mind? <br />
        Let’s get to work.👋📫
        </h4>
        <div className='mt-12'>
          <button className='bg-black text-white px-4 py-2'>Say Hello</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row relative px-3 md:px-12 justify-items-center">
      <div className='md:px-24 px-3'>
        <p className=' text-3xl font-bold'>Nitish Chaurasiya</p>
        <p className=' mt-6 font-semibold'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>  
      <div className="px-3">
        <p className=' text-3xl font-bold'>Social</p>
        <div className='flex items-center justify-center mt-6'>
          <Link href='/' className='mr-2  '>
            <FaLinkedin className='hover:-translate-y-3 transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-full border-2 p-2' fontSize="2rem" color='black' />
          </Link>
          <Link href='/' className='mr-2  '>
            <FaInstagram className='hover:-translate-y-3 transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-full border-2 p-2' fontSize="2rem" color='black' />
          </Link>
          <Link href='/' className='mr-2 '>
            <FaGithub className='hover:-translate-y-3 transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-full border-2 p-2' fontSize="2rem" color='black' />
          </Link>
          <Link href='/' className='mr-2 '>
            <FaTwitter className='hover:-translate-y-3 transition-all duration-500 flex items-center justify-center w-12 h-12 rounded-full border-2 p-2' fontSize="2rem" color='black' />
          </Link>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
