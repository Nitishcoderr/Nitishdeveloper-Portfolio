"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLink from './LogoLink';
import MobileDrawer from './MobileDrawer';
import Image from 'next/image';


export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
    <div className="hidden sticky z-10 shadow-xl top-0 py-6 sm:flex flex-row items-center justify-between px-12 w-full bg-background text-text">
    <div className="mb-4  sm:mb-0">
    <Link href="/">
      <Image  src="/me/logo.png"
                  height="50"
                  width="50"
                  className=" rounded-full"
                  alt="img" />
    </Link>
  </div>
  <div>
    <ul className="flex flex-row gap-x-10">
      <li className="text-xl hover:text-accent font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:text-accent font-semibold">
      <Link href="/project">Project</Link>
      </li>
      <li className="text-xl hover:text-accent font-semibold">
      <Link href="/about">About</Link>
      </li>
      <li className="text-xl hover:text-accent font-semibold">
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
