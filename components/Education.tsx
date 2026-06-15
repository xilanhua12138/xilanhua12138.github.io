import { education } from "@/lib/data";
import { Section, Em } from "./Section";

export function Education() {
  return (
    <Section
      title={
        <>
          Here is my <Em>education</Em>
        </>
      }
    >
      <div className="flex flex-col gap-3">
        {education.map((ed) => (
          <div
            key={ed.degree + ed.period}
            className="rounded-card border border-line p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-[0.95rem] font-medium text-fg">
                  {ed.degree}
                </h3>
                <p className="mt-0.5 text-[0.85rem] text-muted">{ed.school}</p>
                {ed.detail ? (
                  <p className="mt-1 text-[0.8rem] text-muted">{ed.detail}</p>
                ) : null}
              </div>
              <span className="shrink-0 text-[0.8rem] text-muted">
                {ed.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
