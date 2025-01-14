const WorkExperience = () => {
  return (
    <section className="max-xl:pt-7 pt-4 relative bg-[#4c32e0] pb-[180px] z-5 w-full">
      <div className="overflow-hidden absolute bottom-0 h-full w-full">
        <div className="exShape1"></div>
        <div className="exShape2"></div>
        <div className="exShape3"></div>
        <div className="exShape4"></div>
      </div>
      <div className="py-12 md:px-48 text-white relative">
        <h4 className="md:text-6xl font-extrabold text-4xl px-3 md:px-24">Experiences 💪</h4>
        <div className="flex items-center flex-col md:flex-row w-full mt-10">
          {/* box1 */}
          <div className="flex w-full px-2 md:px-24 justify-center flex-col pt-12">
            <div className="borderTile">
              <p className="text-3xl font-semibold">Work Experience</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Digitlay</p>
              <p className="mt-6 font-semibold text-xl">Frontend Developer</p>
              <p className="font-semibold text-xl">August 2023 - Present</p>
            </div>
          </div>
          {/*  box2 */}
          {/* <div className="flex w-full md:w-[50%] px-2 md:px-24 justify-center flex-col pt-12">
            <div className="borderTile">
              <p className="text-3xl font-semibold">Work Experience</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Static Mania</p>
              <p className="mt-6 font-semibold text-xl">Lead Designer</p>
              <p className="font-semibold text-xl">August 2018 - December 2019</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Static Mania</p>
              <p className="mt-6 font-semibold text-xl">Lead Designer</p>
              <p className="font-semibold text-xl">August 2018 - December 2019</p>
            </div>
          </div> */}
        </div>
      </div>
      {/* -----skills */}
      <div className="pb-12 md:px-48 text-white relative">
        <div className="flex items-center flex-col md:flex-row w-full mt-10">
          {/* box1 */}
          <div className="flex w-full md:w-[50%] px-2 md:px-16 justify-center flex-col pt-12">
            <div className="borderTile">
              <p className="text-3xl font-semibold">Skills</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Frontend Development</p>
              <p className="mt-6 font-semibold text-xl">React, Next.js, JavaScript, TypeScript, Sanity, Prisma, Drizzle ORM, Tanstack</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">UI Libraries</p>
              <p className="mt-6 font-semibold text-xl">Shadcn, MaterialUi, GSAP, Threejs</p>
            </div>
          </div>
          {/*  box2 */}
          <div className="flex w-full md:w-[50%] px-2 md:px-16 justify-center flex-col pt-12">
            <div className="borderTile">
              <p className="text-3xl font-semibold">Tools I use every day</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Version Control</p>
              <p className="mt-6 font-semibold text-xl">Git, GitHub</p>
            </div>
            <div className="mt-12 leading-loose ">
              <p className="font-bold text-2xl">Productivity</p>
              <p className="mt-6 font-semibold text-xl">VSCode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
