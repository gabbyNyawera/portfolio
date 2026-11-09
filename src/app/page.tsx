import { getFeaturedProjects } from "@/content/projects";
import { EducationSection } from "@/components/education-section";
import { Hero } from "@/components/hero";
import { InterestsSection } from "@/components/interests-section";
import { PhilosophyReveal } from "@/components/philosophy-reveal";
import { ReadingSection } from "@/components/reading-section";
import { Section } from "@/components/section";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />

      <main>
        <Hero />

        <Section id="work" className="border-t border-border/70">
          <SelectedWork projects={featuredProjects} />
        </Section>

        <Section id="philosophy" className="border-t border-border/70">
          <PhilosophyReveal />
        </Section>

        <Section id="learning" className="border-t border-border/70">
          <EducationSection />
        </Section>

        <Section id="interests" className="border-t border-border/70">
          <InterestsSection />
        </Section>

        <Section id="reading" className="border-t border-border/70">
          <ReadingSection />
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
