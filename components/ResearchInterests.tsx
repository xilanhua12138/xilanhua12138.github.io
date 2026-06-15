import { researchInterests, skills } from "@/lib/data";
import { Section, Em } from "./Section";

export function ResearchInterests() {
  const tags = [...researchInterests, ...skills];
  return (
    <Section
      title={
        <>
          My <Em>research</Em> & skills
        </>
      }
    >
      <div className="flex flex-wrap gap-2.5">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-pill bg-card px-4 py-2 text-[0.85rem] font-medium text-fg"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}
