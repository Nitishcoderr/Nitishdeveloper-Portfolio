"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLink from './LogoLink';
import MobileDrawer from './MobileDrawer';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export function Navbar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <>
    <div className={`fixed w-full z-10 sm:flex flex-row items-center justify-between px-12 transition-all duration-300 text-black h-36 ${isScrolled ? 'bg-white text-black' : (isHomePage ? 'bg-transparent text-white' : 'bg-white text-black')}`}>
    <div className="mb-4 pt-20 sm:mb-0">
    <Link href="/">
      <Image  src="/me/logo.png"
                  height="50"
                  width="50"
                  className=" rounded-full"
                  alt="img" />
    </Link>
  </div>
  <div>
    <ul className="flex flex-row gap-x-10 pt-20">
      <li className="text-xl font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl font-semibold">
      <Link href="/project">Project</Link>
      </li>
      <li className="text-xl font-semibold">
      <Link href="/about">About</Link>
      </li>
      <li className="text-xl font-semibold">
      <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  </div>
  </div>
  <div className="sm:hidden relative flex items-center justify-between w-full  my-4 px-5">
    <LogoLink />
    <button className=" p-2" onClick={handleDrawerToggle}>
    <FontAwesomeIcon className="text-4xl" icon={faBars} />
  </button>
    <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
  </div>
  </>
  );
}
