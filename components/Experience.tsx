"use client";

import { useState } from "react";
import { experiences, type Experience as Exp } from "@/lib/data";
import { Section, Em } from "./Section";
import { ChevronDown } from "./Icons";

function Row({ e }: { e: Exp }) {
  const [open, setOpen] = useState(false);
  const expandable = e.points.length > 0;
  return (
    <div>
      <button
        type="button"
        onClick={() => expandable && setOpen((o) => !o)}
        aria-expanded={expandable ? open : undefined}
        className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left ${
          expandable ? "" : "cursor-default"
        }`}
      >
        <span className="flex min-w-0 items-center gap-3">
          {e.logo ? (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-line">
              <img
                src={e.logo}
                alt={`${e.org} logo`}
                className="h-7 w-7 object-contain"
              />
            </span>
          ) : null}
          <span className="min-w-0">
            <span className="block text-[0.95rem] font-medium text-fg">
              {e.org}
            </span>
            <span className="block text-[0.85rem] text-muted">{e.role}</span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <span
            className={`text-[0.8rem] text-muted ${
              expandable ? "hidden sm:inline" : ""
            }`}
          >
            {e.period}
          </span>
          {expandable ? (
            <ChevronDown
              className={`h-4 w-4 text-muted transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          ) : null}
        </span>
      </button>
      {open && expandable ? (
        <ul className="space-y-1.5 px-5 pb-4 text-[0.85rem] leading-relaxed text-muted">
          <li className="text-[0.8rem] sm:hidden">{e.period}</li>
          {e.points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden>–</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Experience() {
  return (
    <Section
      title={
        <>
          Here is my <Em>experience</Em>
        </>
      }
    >
      <div className="divide-y divide-line overflow-hidden rounded-card border border-line">
        {experiences.map((e) => (
          <Row key={e.org} e={e} />
        ))}
      </div>
    </Section>
  );
}
