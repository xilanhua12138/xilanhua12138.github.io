// 生成 GitHub 同款贡献热力图 SVG（亮/暗各一张）。
//
// 数据来自 GitHub GraphQL 的 `viewer.contributionsCollection.contributionCalendar`，
// 含私有贡献。关键：必须用「账号本人」的 token —— 只有 `viewer`（自己看自己）
// 才返回含私有的完整计数；`user(login)`、匿名 HTML、Actions 的 GITHUB_TOKEN
// 都只会给公开贡献（会少很多）。所以自动刷新需要本人的 PAT。
//
// 用法: GITHUB_TOKEN=<本人 token> node scripts/generate-github-activity.mjs
// 输出: public/github-activity-light.svg, public/github-activity-dark.svg

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!TOKEN) {
  console.error("缺少 GITHUB_TOKEN / GH_TOKEN 环境变量");
  process.exit(1);
}

const LEVEL_INDEX = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

// GitHub 官方调色板
const PALETTE = {
  light: {
    empty: "#ebedf0",
    levels: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    label: "#57606a",
  },
  dark: {
    empty: "#161b22",
    levels: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    label: "#8b949e",
  },
};

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT = 30; // 星期标签
const TOP = 18; // 月份标签
const RADIUS = 2;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

async function fetchCalendar() {
  const query = `query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays { date weekday contributionCount contributionLevel }
          }
        }
      }
    }
  }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "github-activity-generator",
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL: ${JSON.stringify(json.errors)}`);
  return json.data.viewer.contributionsCollection.contributionCalendar;
}

function buildSvg(calendar, theme) {
  const pal = PALETTE[theme];
  const weeks = calendar.weeks;
  const width = LEFT + weeks.length * STEP + 2;
  const height = TOP + 7 * STEP;

  const cells = [];
  const monthLabels = [];
  let prevMonth = -1;

  weeks.forEach((week, wi) => {
    // 月份标签：本周第一天所在月份与上一周不同且有空间时绘制
    const firstMonth = new Date(week.firstDay + "T00:00:00Z").getUTCMonth();
    if (firstMonth !== prevMonth && wi < weeks.length - 1) {
      monthLabels.push(
        `<text x="${LEFT + wi * STEP}" y="${TOP - 6}" fill="${pal.label}" font-size="10">${MONTHS[firstMonth]}</text>`
      );
      prevMonth = firstMonth;
    }
    for (const day of week.contributionDays) {
      const level = LEVEL_INDEX[day.contributionLevel] ?? 0;
      const x = LEFT + wi * STEP;
      const y = TOP + day.weekday * STEP;
      cells.push(
        `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="${RADIUS}" ry="${RADIUS}" fill="${pal.levels[level]}"><title>${day.date}: ${day.contributionCount}</title></rect>`
      );
    }
  });

  const weekdayLabels = [
    [1, "Mon"],
    [3, "Wed"],
    [5, "Fri"],
  ]
    .map(
      ([di, t]) =>
        `<text x="${LEFT - 6}" y="${TOP + di * STEP + CELL - 2}" fill="${pal.label}" font-size="10" text-anchor="end">${t}</text>`
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" role="img" aria-label="${calendar.totalContributions} GitHub contributions in the last year">
${monthLabels.join("\n")}
${weekdayLabels}
${cells.join("\n")}
</svg>
`;
}

async function main() {
  const calendar = await fetchCalendar();
  const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "github-activity-light.svg"), buildSvg(calendar, "light"));
  writeFileSync(join(outDir, "github-activity-dark.svg"), buildSvg(calendar, "dark"));
  console.log(
    `生成完成: ${calendar.totalContributions} contributions, ${calendar.weeks.length} weeks -> public/github-activity-{light,dark}.svg`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
