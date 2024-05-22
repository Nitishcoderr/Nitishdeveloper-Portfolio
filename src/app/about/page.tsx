import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function page() {
  return (
   <>
      <div className='pt-12 pb-10 bg-background'>
      <article className="max-w-[40rem] mx-auto px-3 md:px-0">
        <header className="mb-4">
          <h1 className="text-4xl font-extrabold text-text">How I Became Who I Am Today</h1>
        </header>
        <div className="text-text">
          <p className="my-6">
            Once upon a time, in a bustling city, Alex lived and breathed software development. The world of coding fascinated me, and I was <strong className="text-accent">determined to leave my mark on it</strong>. With a passion for <a className="text-primary hover:text-secondary" href="#0">innovation</a> and a desire to create, I embarked on a journey that would forever change my life.
          </p>
          <div className="space-y-6 sm:flex sm:items-center sm:space-x-8 sm:space-y-0 md:-ml-12">
            <figure className="shrink-0 sm:max-w-[270px]">
              <Image className="object-cover h-[180px] sm:h-auto" width="640" height="426" src="/me/me.jpg" alt="Article 01" />
            </figure>
            <blockquote className="italic before:block before:w-[18px] before:h-[17px] before:bg-no-repeat before:mb-2 md:-mx-12">
              <p>Looking back on my journey, I realized that becoming popular wasn&apos;t just about the numbers or the recognition—it was about the impact I had on others and the possibility of helping by sharing my personal and professional knowledge.</p>
            </blockquote>
          </div>
          <p>
            In the heart of a vibrant city, amidst the hustle and bustle, there I was, Alex, completely immersed in the world of software development. The realm of coding held an irresistible allure, captivating my every thought and action. Driven by a profound passion for innovation and an unwavering desire to make a lasting impact, I set forth on a transformative journey that would shape the course of my existence.
          </p>
          <div className="space-y-6 sm:flex sm:items-center sm:space-x-8 sm:space-y-0 md:-mr-12">
            <p>
              Today, as a successful software developer with two thriving startups under my belt, I continue to embrace new challenges and opportunities. But above all, I remain committed to <strong className="text-accent">sharing my knowledge</strong>, empowering others, and making a lasting impact on the world.
            </p>
            <figure className="shrink-0 sm:max-w-[270px]">
              <Image className="object-cover h-[180px] sm:h-auto" width="640" height="426" src="/me/me.jpg" alt="Article 02" />
            </figure>
          </div>
          <p>
            Driven by unwavering determination, I took a leap of faith and founded my first startup. Days turned into nights as I <a className="text-primary hover:text-secondary" href="#0">poured my heart</a> and soul into transforming my idea into reality. Failure was not an option. With relentless effort, sleepless nights, and an unwavering belief in my vision, I launched my product into the world.
          </p>
          <p>
            The sleepless nights spent debugging, the <strong className="text-accent">countless hours spent refining algorithms</strong> — all were stepping stones along my path of growth.
          </p>
          <figure className="md:-mx-12">
            <Image className="object-cover h-[180px] sm:h-auto" width="736" height="240" src="/me/me.jpg" alt="Article 03" />
            <figcaption className="text-center text-xs italic mt-3">Moments of tranquility amidst nature&apos;s beauty</figcaption>
          </figure>
          <p>
            As I delved deeper into the intricacies of programming, a whole new universe of possibilities unfurled before me. Lines of code danced across my screen like a symphony, each keystroke resonating with the potential to bring my visions to life. From the early days of tinkering with simple programs to the <a className="text-primary hover:text-secondary" href="#0">ambitious projects</a> that followed, my thirst for knowledge and creative expression grew insatiable.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/project" className="bg-accent hover:bg-secondary text-white py-3 px-6 font-semibold rounded-lg shadow-md">
              Go Back
           
          </Link>
        </div>
      </article>
    </div> </>
  )
}

export default page