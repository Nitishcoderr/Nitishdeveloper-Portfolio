import React from 'react'
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="grid grid-cols-2 bg-black ">
      <div className=''>
        <p className='text-white'>Nitish Chaurasiya</p>
        <p className='text-white'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>
      <div className="">
        <p  className='text-white'>Social</p>
        <div className='flex items-center'>
        <Link className='' href='/'>
        <FaLinkedin fontSize="2rem" color='white' />
            </Link>
        <Link className='' href='/'>
        <FaInstagram fontSize="2rem" color='white' />
            </Link>
        <Link className='' href='/'>
        <FaGithub fontSize="2rem" color='white' />
            </Link>
        <Link className='' href='/'>
        <FaTwitter fontSize="2rem" color='white' />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
