import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";
import { profile } from "@/lib/data";

// 参考站主字体即 Inter Tight
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xilanhua12138.github.io"),
  title: `${profile.name} · ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    images: ["/profile.jpg"],
    type: "website",
  },
  icons: { icon: "/profile.jpg" },
};

// 在首屏绘制前应用主题，避免深色模式闪烁
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
