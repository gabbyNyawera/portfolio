import { interests } from "@/content/interests";
import { Reveal } from "@/components/reveal";

const skills = interests.find((interest) => interest.id === "skills");
const hobbies = interests.find((interest) => interest.id === "hobbies");

export function InterestsSection() {
  return (
    <div className="container-page">
      <div className="split-editorial">
        <div>
          <h2 className="display-2">What I&apos;m into</h2>
          <p className="lede mt-6 max-w-xs">
            Design is a big part of who I am, but so are other things that
            inspire me, challenge me, and keep life interesting.
          </p>
          <p className="mt-8 font-display text-lg leading-snug text-muted-foreground">
            &ldquo;Curiosity is a design tool.&rdquo;
          </p>
        </div>

        <div>
          {skills?.items && (
            <Reveal>
              <div className="border-t border-border/70 pt-7">
                <h3 className="title">Skills</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {hobbies?.items && (
            <Reveal delay={80}>
              <div className="mt-10 border-t border-border/70 pt-7">
                <h3 className="title">Hobbies</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {hobbies.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
