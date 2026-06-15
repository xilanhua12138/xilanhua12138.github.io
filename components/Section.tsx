import type { ReactNode } from "react";

// 统一 section 容器与标题样式。
// 标题复刻参考站："普通字号 16px/400，关键词用 <b> 加粗"。
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mt-12 sm:mt-16 ${className}`}>
      {title ? (
        <h2 className="mb-5 text-base font-normal text-fg">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}

// 标题里加粗的关键词
export function Em({ children }: { children: ReactNode }) {
  return <b className="font-semibold">{children}</b>;
}
