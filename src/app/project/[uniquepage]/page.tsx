import projectData from '@/data/projectData.json';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return projectData.projects.map((p) => ({
    params: { projectId: p.id.toString() },
  }));
}

export default function projectPage({ params} : any ) {
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
    return (
      <div>
        Project not found
      </div>
    );
  }

  return (
    <main className='bg-black'>
      <section className='h-[90vh] gradient flex items-center flex-col justify-center'>
        <p className='text-5xl text-white font-bold'>{project.name}</p>
        <p className='text-lg text-white mt-6'>{project.overview}</p>

        <div className='mt-8'>
            <Link className='bg-white w-24 py-3 text-xl font-semibold rounded-lg  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-4 ' href={project.websiteLink}>
            Project Link
            </Link>
        </div>

      </section>
      <section className='px-12 py-8 flex flex-col items-center justify-center'>
      <div>
        <Image className='w-full' alt={project.name} width="100" height="100" src={project.websiteImg} />
        <div>
          <p className='text-3xl font-bold uppercase py-6 text-white'>Project Overview</p>
          <p className='text-white'>{project.description}</p>
        </div>
        <div className='py-4'>
          <p className='text-3xl font-bold uppercase py-6 text-white'>Tool Used</p>
          <div className='flex items-center'>
          {
            project.toolsUsed.map((item,index)=>(
              <p key={index} className='mx-3 my-2 bg-white font-semibold text-black rounded-md px-3 py-2'>{item}</p>
            ))
          }
          </div>
        </div>
        <div>
          <p className='text-3xl font-bold uppercase py-6 text-white'>See Live</p>
          <div className='my-4'>
          <Link className='bg-white w-24 py-3 text-xl font-semibold rounded-lg  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 px-4 ' href={project.websiteLink}>
            Project Link
            </Link>
          <Link className='outline-white outline w-24 py-3 text-xl font-semibold rounded-lg  dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 px-4 ml-6' href='/project'>
            Go Back
            </Link>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
