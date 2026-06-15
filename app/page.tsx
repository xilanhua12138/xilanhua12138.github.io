import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { ResearchInterests } from "@/components/ResearchInterests";
import { Publications } from "@/components/Publications";
import { OpenSource } from "@/components/OpenSource";
import { GithubGraph } from "@/components/GithubGraph";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Awards } from "@/components/Awards";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="mx-auto max-w-content px-5 pb-16">
        <Hero />
        <Socials />
        <ResearchInterests />
        <Publications />
        <OpenSource />
        <GithubGraph />
        <Experience />
        <Education />
        <Awards />
        <Footer />
      </main>
    </>
  );
}
