import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-line pt-8 text-center text-[0.8rem] text-muted sm:mt-20">
      <p>
        © {year} {profile.name} · {profile.nameZh}
      </p>
      <p className="mt-1">Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
