import ProjectCard from '@/components/ProjectCard';

const ProjectMain = () => {
  return (
    <div className="relative pt-20 md:pt-[12.5rem]">
      <div className="w-full h-full absolute overflow-hidden bottom-0">
        <div className="proShape1"></div>
        <div className="proShape2"></div>
        <div className="proShape3"></div>
        <div className="proShape4"></div>
      </div>
      <div className="relative px-3 md:px-24">
        <div className='px-3 md:px-40'>
        <h4 className='text-3xl md:text-6xl text-center md:text-start font-bold leading-snug'>
The work I done, <br />
and the people I help.</h4>
        </div>
        <div className="mt-12">
        <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
