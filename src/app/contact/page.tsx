import { Contact } from '@/components/Contact'
import React from 'react'

const page = () => {
  return (
    <div className="relative pt-20 md:pt-[12.5rem]">
    <div className="w-full h-full absolute overflow-hidden bottom-0">
      <div className="proShape1"></div>
      <div className="proShape2"></div>
      <div className="proShape3"></div>
      <div className="proShape4"></div>
    </div>
    <div className="relative">
      <div className='px-12 md:px-72'>
      <h4 className='text-4xl md:text-6xl font-bold leading-snug'>
      Let’s create <br />
      progress together</h4>
      </div>
      <div className="pt4 md:mt-12">
      <Contact />
      </div>
    </div>
  </div>
  )
}

export default page
