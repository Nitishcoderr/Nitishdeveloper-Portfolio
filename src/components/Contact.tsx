'use client';
import React from 'react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { cn } from '@/utils/cn';
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from '@tabler/icons-react';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import Link from 'next/link';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div className="flex flex-col md:flex-row py-12 px-12 md:px-32">
      {/* box-1 */}
    <div className="py-12 px-4 w-full md:w-[50%]">
      <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Connect Me!</h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Feel free to Contact me by submitting the form below and I will get back to you as soon as
          possible
        </p>

        <form
          className="my-8"
          onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Full Name"
              type="name"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="text">Message</Label>
            <Input
              id="message"
              placeholder="Message"
              type="text"
            />
          </LabelInputContainer>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
{/* box-2 */}
<div className="e-full md:w-[50%] md:px-6 py-12 rounded-md bg-white shadow-md md:ml-24 ">
  <div className="max-w-3xl w-full flex flex-col justify-center rounded-none md:rounded-2xl p-4 md:p-8">
  <div className="">
    <MdOutlineVerifiedUser fontSize={"2rem"}/>
    <p className='text-2xl font-bold mt-6'>Your data remains confidential
    and will not be passed to third parties</p>
  </div>
  <div className="mt-10">
    <p className=''>Email</p>
    <Link className='font-bold text-xl' href="mailto:niitshchaurasiac555@gmail.com">
    niitshchaurasiac555@gmail.com
</Link>

  </div>
  <div className="mt-10">
    <p className=''>Phone</p>
    <Link className='font-bold text-xl' href="tel:+917565069986">
    +91 7565069986
</Link>
  </div>
  <div className="mt-10">
    <p className=''>LinkedIn Link</p>
    <Link className='font-bold text-xl' target='_blank' href='https://www.linkedin.com/in/nitish-chaurasiya/'>
    linkedIn.com
    </Link>
  </div>
  </div>
</div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
