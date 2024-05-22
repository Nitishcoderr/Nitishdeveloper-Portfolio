import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-white bg-black py-4 md:py-12 px-3 md:px-12 justify-items-center">
      <div className='md:px-24 px-3'>
        <p className=' text-3xl'>Nitish Chaurasiya</p>
        <p className=' mt-6'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>  
      <div className="py-6  px-3">
        <p className=' text-3xl'>Social</p>
        <div className='flex items-center justify-center mt-6'>
          <Link href='/'>
            <FaLinkedin className='mr-6' fontSize="2rem" color='white' />
          </Link>
          <Link href='/'>
            <FaInstagram className='mr-6' fontSize="2rem" color='white' />
          </Link>
          <Link href='/'>
            <FaGithub className='mr-6' fontSize="2rem" color='white' />
          </Link>
          <Link href='/'>
            <FaTwitter className='mr-6' fontSize="2rem" color='white' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
