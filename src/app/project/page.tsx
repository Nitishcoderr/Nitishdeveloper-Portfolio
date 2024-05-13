"use client"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import projectData from '@/data/projectData.json'



const page = () => {

  return (
    <div className='pt-12 pb-10 bg-black/[0.96] text-white'>
      <div className="flex justify-center items-center flex-wrap gap-5">
      {
        projectData.projects.map((item)=>(
          <CardContainer key={item.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {item.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.websiteImg}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-blue-500"
              >
                Live Link →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                
              >
              <Link href={`/project/${item.id}`}>
                Case Study
              </Link>
              
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        ))
      }
      </div>
   
     
    </div>
  )
}

export default page
