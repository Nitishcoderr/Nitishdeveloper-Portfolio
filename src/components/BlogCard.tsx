import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData.json";



const BlogCard = () => {
  return (
    <div className="pt-12 pb-10  text-text">
    <div className="flex justify-center items-center flex-wrap gap-5">
      {blogData.blog.map((item) => (
        <CardContainer key={item.id} className="inter-var">
          <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-accent/[0.1] dark:bg-black dark:border-text/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-text">
              {item.courseTitle}
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
                src={item.image}
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
                href={item.date}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-primary"
              >
                Live Link →
              </CardItem>
              <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-bold">
                <Link href={`/blog/${item.id}`}>Case Study</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
  )
}

export default BlogCard
