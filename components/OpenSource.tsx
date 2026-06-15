import { openSource } from "@/lib/data";
import { Section, Em } from "./Section";
import { ArrowUpRight } from "./Icons";

export function OpenSource() {
  return (
    <Section
      title={
        <>
          Here are my <Em>projects</Em>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {openSource.map((r) => (
          <a
            key={r.name}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-card border border-line p-5 hover:border-muted"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[0.95rem] font-semibold text-fg">{r.name}</h3>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-fg" />
            </div>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
              {r.desc}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
