import Image from 'next/image'


export const Banner = () => {
  
  return (
    <section className='bg-[#060a11] relative lg:pb-6 xl:pb-8 pt-16 sm:pt-32 pb-20 sm:h-[100vh]'>
    <div className='overflow-hidden bottom-0 absolute w-full h-full'>
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
    </div>
    <div className="mx-w-[1170px] flex items-center flex-col justify-center">
    <Image className="object-cover rounded-full sm:h-auto" width="200" height="200" src="/me/me.jpg" alt="Article 01" />
    <div className='flex items-center text-center justify-center flex-col mt-12 leading-loose'>
        <h4 className="text-4xl  sm:text-6xl font-bold text-white">
            👋 Hey there,
        </h4>
        <h4 className="text-4xl  sm:text-6xl font-bold text-white mt-4">
        Nitish Chaurasiya
        </h4>
        <p className="text-white mt-4 text-xl leading-loose">Full Stack Developer. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
    </section>
  )
}
