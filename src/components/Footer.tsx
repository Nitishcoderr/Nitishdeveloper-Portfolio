import React from 'react'
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-r from-zinc-900 to-slate-500 py-12 px-12 justify-items-center">
      <div className='px-24'>
        <p className='text-white text-3xl'>Nitish Chaurasiya</p>
        <p className='text-white mt-6'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>  
      <div className="">
        <p className='text-white text-3xl'>Social</p>
        <div className='flex items-center mt-6'>
        <Link className='mr-4' href='/'>
        <FaLinkedin fontSize="2rem" color='white' />
            </Link>
        <Link className='mr-4' href='/'>
        <FaInstagram fontSize="2rem" color='white' />
            </Link>
        <Link className='mr-4' href='/'>
        <FaGithub fontSize="2rem" color='white' />
            </Link>
        <Link className='mr-4' href='/'>
        <FaTwitter fontSize="2rem" color='white' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
