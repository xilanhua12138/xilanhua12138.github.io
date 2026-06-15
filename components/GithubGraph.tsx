import { githubUsername } from "@/lib/data";
import { Section, Em } from "./Section";

// GitHub 贡献热力图。用自托管 SVG（GitHub 同款五档绿 + 月份/星期标签），
// 数据由 scripts/generate-github-activity.mjs 从本人 viewer 贡献日历生成（含私有）。
// 不再外链 ghchart：避免第三方缓存返回陈旧/稀疏数据。亮暗各一张按主题切换。
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
          src="/github-activity-light.svg"
          alt={`@${githubUsername} GitHub contribution graph`}
          className="w-full dark:hidden"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/github-activity-dark.svg"
          alt={`@${githubUsername} GitHub contribution graph`}
          className="hidden w-full dark:block"
          loading="lazy"
        />
      </a>
    </Section>
  );
}
