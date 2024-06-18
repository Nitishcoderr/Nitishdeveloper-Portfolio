import ProjectCard from '@/components/ProjectCard';

const ProjectMain = () => {
  return (
    <div className="relative  pt-[12.5rem]">
      <div className="w-full h-full absolute overflow-hidden bottom-0">
        <div className="proShape1"></div>
        <div className="proShape2"></div>
        <div className="proShape3"></div>
        <div className="proShape4"></div>
      </div>
      <div className="relative px-24">
        <div className='px-40'>
        <h4 className='text-6xl font-bold leading-snug'>
The work we do, <br />
and the people we help.</h4>
        </div>
        <div className="mt-12">
        <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
