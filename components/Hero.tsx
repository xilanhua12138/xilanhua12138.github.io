import Image from "next/image";
import { profile } from "@/lib/data";

// Hero：纯头像极简（不复刻参考站定制 3D 渲染图）。居中布局。
export function Hero() {
  return (
    <header className="flex flex-col items-center pt-16 text-center sm:pt-20">
      <Image
        src="/profile.jpg"
        alt={profile.name}
        width={92}
        height={92}
        priority
        className="h-[92px] w-[92px] rounded-full object-cover ring-1 ring-line"
      />

      <h1 className="mt-5 text-[1.35rem] font-bold leading-tight tracking-[-0.03em] text-fg">
        {profile.name}
        <span className="ml-2 align-middle text-base font-normal text-muted">
          {profile.nameZh}
        </span>
      </h1>

      <p className="mt-1.5 text-base font-normal text-muted">{profile.title}</p>

      <p className="mx-auto mt-5 max-w-[34rem] text-[1.1rem] font-light leading-relaxed text-fg">
        {profile.tagline}
      </p>

      <p className="mt-3 text-sm text-muted">{profile.motto}</p>
    </header>
  );
}
