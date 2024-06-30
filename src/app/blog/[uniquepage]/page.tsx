import projectData from '@/data/projectData.json';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return projectData.projects.map((p) => ({
    params: { projectId: p.id.toString() },
  }));
}

export default function projectPage({ params }: any) {
  console.log('params:', params); // Add this line for debugging

  // Log project data for debugging
  console.log('projectData:', projectData.projects);

  // Extract projectId from params
  const { uniquepage } = params;
  const projectId = uniquepage;

  console.log('projectId:', projectId); // Add this line for debugging

  // Find the project based on the projectId
  const project = projectData.projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
    <section className="relative w-full">
      <Image
        className="w-full"
        alt={project.name}
        src={project.websiteBanner}
        layout="responsive"
        width={1000}
        height={1000}
      />
      <div className="absolute top-0 z-[1] flex items-center justify-center flex-col w-full h-full bg-black/50 md:py-12 py-0">
        <div className="mt-2 text-center px-4 md:px-0">
          <p className="text-2xl md:text-5xl font-bold text-white">{project.name}</p>
          <p className="text-base md:text-xl text-white text-center mt-2 md:mt-10">{project.overview}</p>
          <div className="mt-6">
            <Link
              className="bg-accent py-3 text-lg md:text-xl font-semibold rounded-lg text-white px-4"
              href={project.websiteLink}>
              Project Link
            </Link>
          </div>
        </div>
      </div>
    </section>
    <main className="py-16">
      <section className="px-3 w-full md:px-12 py-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-lg">
          <Image
            className="w-full"
            alt={project.name}
            width={1000}
            height={1000}
            layout="responsive"
            src={project.websiteImg}
          />
          <div className="mt-8 px-4 md:px-0 md:text-start text-center">
            <p className="text-2xl md:text-3xl font-bold uppercase py-6 text-accent">Project Overview</p>
            <p className="text-base md:text-lg text-text">{project.description}</p>
          </div>
          <div className="py-4 md:text-start text-center px-4 md:px-0">
            <p className="text-2xl md:text-3xl font-bold uppercase py-6 text-accent">Tools Used</p>
            <div className="flex flex-wrap justify-center">
              {project.toolsUsed.map((item, index) => (
                <p
                  key={index}
                  className="mx-3 my-2 bg-primary font-semibold text-white rounded-md px-3 py-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="md:text-start text-center px-4 md:px-0">
            <p className="text-2xl md:text-3xl font-bold uppercase py-6 text-accent">See Live</p>
            <div className="flex flex-col md:flex-row justify-center items-center my-4">
              <Link
                className="bg-accent w-full md:w-auto py-3 text-lg md:text-xl font-semibold rounded-lg text-white px-4 mb-4 md:mb-0 md:mr-6"
                href={project.websiteLink}>
                Project Link
              </Link>
              <Link
                className="bg-primary hover:bg-secondary text-white w-full md:w-auto py-3 text-lg md:text-xl font-semibold rounded-lg shadow-md px-4"
                href="/project">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  
  );
}
