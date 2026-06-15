import { socials } from "@/lib/data";
import { socialIcon } from "./Icons";
import { Section, Em } from "./Section";

export function Socials() {
  return (
    <Section
      title={
        <>
          Here are my <Em>links</Em>
        </>
      }
    >
      <div className="flex flex-wrap gap-2.5">
        {socials.map((s) => {
          const Icon = socialIcon[s.icon];
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-2 rounded-pill bg-card px-4 py-2 text-[0.85rem] font-medium text-fg hover:opacity-75"
            >
              <Icon className="h-4 w-4" />
              {s.label}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
