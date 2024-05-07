import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <Hero/>
   <About/>
   <Project/>
   <Contact/>
  </main>
  );
}
