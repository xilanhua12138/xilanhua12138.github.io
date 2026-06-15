import { awards } from "@/lib/data";
import { Section, Em } from "./Section";

export function Awards() {
  return (
    <Section
      title={
        <>
          My <Em>awards</Em> & honors
        </>
      }
    >
      <ul className="flex flex-col gap-2.5">
        {awards.map((a) => (
          <li
            key={a}
            className="flex gap-3 text-[0.9rem] leading-relaxed text-muted"
          >
            <span
              aria-hidden
              className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-muted"
            />
            <span>{a}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
