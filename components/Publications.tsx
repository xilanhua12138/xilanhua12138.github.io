import { publications } from "@/lib/data";
import { Section, Em } from "./Section";
import { ArrowUpRight } from "./Icons";

// 自动高亮作者列表里的本人姓名
function Authors({ text }: { text: string }) {
  const parts = text.split(/(Yunhao Shui)/g);
  return (
    <>
      {parts.map((p, i) =>
        p === "Yunhao Shui" ? (
          <span
            key={i}
            className="font-medium text-fg underline decoration-line underline-offset-2"
          >
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function Publications() {
  return (
    <Section
      title={
        <>
          Here are my <Em>publications</Em>
        </>
      }
    >
      <div className="flex flex-col gap-3">
        {publications.map((p) => (
          <article key={p.title} className="rounded-card border border-line p-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[0.95rem] font-semibold leading-snug text-fg">
                {p.title}
              </h3>
              <span className="shrink-0 rounded-pill bg-card px-2.5 py-1 text-xs font-medium text-muted">
                {p.venue} {p.year}
              </span>
            </div>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
              <Authors text={p.authors} />
            </p>
            {p.note ? (
              <p className="mt-1 text-xs italic text-muted">{p.note}</p>
            ) : null}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-medium text-fg hover:opacity-70"
              >
                {p.hrefLabel ?? "Link"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
