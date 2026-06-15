/* eslint-disable @next/next/no-img-element */
import { Section, Em } from "./Section";

// MapMyVisitors 访客地图（沿用原站 widget id）。用静态图片版：
// 亮/暗各一张（背景色匹配卡片），按主题 CSS 切换，无需 JS。
const MAP_ID = "NBvY5gqZqNmsdP32NVvFzrUFfuOJiPrtw0L3nAgbv9A";
const mapSrc = (cl: string) =>
  `https://mapmyvisitors.com/map.png?d=${MAP_ID}&cl=${cl}&w=600`;

export function VisitorMap() {
  return (
    <Section
      title={
        <>
          Where my <Em>visitors</Em> come from
        </>
      }
    >
      <div className="overflow-hidden rounded-card border border-line p-4">
        <img
          src={mapSrc("ffffff")}
          alt="Map of site visitors"
          width={600}
          height={319}
          loading="lazy"
          className="mx-auto block w-full max-w-[560px] rounded-md grayscale transition duration-500 hover:grayscale-0 dark:hidden"
        />
        <img
          src={mapSrc("1e1e1e")}
          alt="Map of site visitors"
          width={600}
          height={319}
          loading="lazy"
          className="mx-auto hidden w-full max-w-[560px] rounded-md grayscale transition duration-500 hover:grayscale-0 dark:block"
        />
      </div>
    </Section>
  );
}
