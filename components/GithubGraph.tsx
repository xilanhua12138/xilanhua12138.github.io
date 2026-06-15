import { githubUsername } from "@/lib/data";
import { Section, Em } from "./Section";

// GitHub 贡献热力图。用 ghchart 生成灰阶图（贴合极简中性灰，不用默认绿）。
export function GithubGraph() {
  return (
    <Section
      title={
        <>
          My <Em>GitHub</Em> activity
        </>
      }
    >
      <a
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-card border border-line p-5 hover:border-muted"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/666666/${githubUsername}`}
          alt={`@${githubUsername} GitHub contribution graph`}
          className="w-full dark:opacity-90 dark:invert"
          loading="lazy"
        />
      </a>
    </Section>
  );
}
