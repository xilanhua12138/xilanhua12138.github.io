"use client";

import Image from "next/image";
import { useState } from "react";
import { experiences, type Experience as Exp } from "@/lib/data";
import { Section, Em } from "./Section";
import { ChevronDown } from "./Icons";

function Showcase({ items }: { items: NonNullable<Exp["showcase"]> }) {
  return (
    <div className="mt-4 space-y-3" aria-label="Selected Zulution AI work">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-card border border-line bg-card transition-[transform,border-color,box-shadow] duration-200 ease-smooth hover:-translate-y-0.5 hover:border-fg/20 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg motion-reduce:transform-none motion-reduce:transition-none"
          aria-label={`Open the ${item.title} project`}
        >
          <span
            className={`block overflow-hidden ${
              item.media.length > 1 ? "grid grid-cols-2 gap-px bg-line" : ""
            }`}
          >
            {item.media.map((media) => (
              <span key={media.src} className="block overflow-hidden bg-bg">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  unoptimized
                  className={`block h-auto w-full transition-transform duration-300 ease-smooth group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none ${
                    media.reducedMotionSrc ? "motion-reduce:hidden" : ""
                  }`}
                />
                {media.reducedMotionSrc ? (
                  <Image
                    src={media.reducedMotionSrc}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    unoptimized
                    className="hidden h-auto w-full motion-reduce:block"
                  />
                ) : null}
              </span>
            ))}
          </span>
          <span className="block px-3 py-2.5">
            <span className="block text-[0.82rem] font-medium text-fg">
              {item.title}
            </span>
            <span className="mt-0.5 block text-[0.75rem] leading-snug text-muted">
              {item.description}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

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
        <div className="px-5 pb-5">
          <ul className="space-y-1.5 text-[0.85rem] leading-relaxed text-muted">
            <li className="text-[0.8rem] sm:hidden">{e.period}</li>
            {e.points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden>-</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {e.showcase ? <Showcase items={e.showcase} /> : null}
        </div>
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
