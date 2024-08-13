import { AboutMe } from "@/src/components/about/AboutMe";
import { Experience } from "@/src/components/about/Experience";
import { Contact } from "@/src/components/contact/Contact";
import { Footer } from "@/src/components/header/Footer";
import Header from "@/src/components/header/Header";
import Landing from "@/src/components/landing/Landing";
import { Projects } from "@/src/components/projects/Projects";
import { Skills } from "@/src/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Landing />
        <Skills />
        <Experience />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
