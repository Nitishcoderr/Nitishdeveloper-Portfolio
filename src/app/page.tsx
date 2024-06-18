import About from "@/components/About";
import { Banner } from "@/components/Banner";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <Banner/>
   {/* <About/> */}
   <Project/>
   <WorkExperience/>
   <Testimonial/>
  </main>
  );
}
