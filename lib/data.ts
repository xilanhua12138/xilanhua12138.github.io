// 站点全部内容数据（提炼自原 Jekyll 仓库 about.md / _publications / _config.yml）。
// 改内容只需改这里，组件保持不动。

export type IconKey =
  | "github"
  | "scholar"
  | "zhihu"
  | "xiaohongshu"
  | "mail"
  | "file";

export interface Social {
  readonly label: string;
  readonly href: string;
  readonly icon: IconKey;
}

export interface Publication {
  readonly title: string;
  readonly authors: string; // "Yunhao Shui" 会在组件里自动高亮
  readonly venue: string;
  readonly year: number;
  readonly note?: string; // e.g. "Equal contribution"
  readonly href?: string;
  readonly hrefLabel?: string;
}

export interface Repo {
  readonly name: string;
  readonly desc: string;
  readonly href: string;
}

export interface Experience {
  readonly org: string;
  readonly role: string;
  readonly period: string;
  readonly points: readonly string[];
}

export interface Education {
  readonly school: string;
  readonly degree: string;
  readonly period: string;
  readonly detail?: string;
}

export const profile = {
  name: "Yunhao Shui",
  nameZh: "税昀昊",
  title: "M.Eng. @ SJTU · Generative Models & Preference Alignment",
  tagline:
    "I build and study image & video generative models, human preference alignment, and 3D reconstruction — turning research ideas into things that run.",
  motto: "Trust the process.",
  location: "Shanghai, China",
  email: "xilanhua12138@sjtu.edu.cn",
} as const;

export const socials: readonly Social[] = [
  { label: "GitHub", href: "https://github.com/xilanhua12138", icon: "github" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=FmZo9p8AAAAJ",
    icon: "scholar",
  },
  { label: "知乎", href: "https://www.zhihu.com/people/xi-lan-hua-6-92", icon: "zhihu" },
  {
    label: "小红书",
    href: "https://www.xiaohongshu.com/user/profile/5fe19a50000000000101ce38",
    icon: "xiaohongshu",
  },
  { label: "Email", href: "mailto:xilanhua12138@sjtu.edu.cn", icon: "mail" },
  { label: "CV", href: "/cv.pdf", icon: "file" },
] as const;

// 研究方向 + 技能，复用参考站「标签云」的展示方式
export const researchInterests: readonly string[] = [
  "Image Diffusion Models",
  "Video Generation",
  "Human Preference Alignment",
  "3D Gaussian Splatting",
  "Neural Radiance Fields",
  "3D Reconstruction",
];

export const skills: readonly string[] = [
  "Python",
  "PyTorch",
  "CUDA",
  "Diffusion Models",
  "Computer Vision",
  "Distributed Training",
  "Linux",
  "Git",
];

export const publications: readonly Publication[] = [
  {
    title: "HPSv3: Towards Wide-Spectrum Human Preference",
    authors:
      "Yuhang Ma*, Yunhao Shui*, Xiaoshi Wu, Keqiang Sun, Hongsheng Li",
    venue: "ICCV",
    year: 2025,
    note: "* Equal contribution",
    href: "https://github.com/MizzenAI/HPSv3",
    hrefLabel: "Code",
  },
  {
    title:
      "Diffusion-NPO: Negative Preference Optimization for Better Preference Aligned Generation of Diffusion Models",
    authors: "Fu-Yun Wang, Yunhao Shui, Jingtan Piao, Keqiang Sun, Hongsheng Li",
    venue: "ICLR",
    year: 2025,
    href: "https://openreview.net/pdf?id=iJi7nz5Cxc",
    hrefLabel: "Paper",
  },
  {
    title: "FlameGS: Reconstructing Flame Light Fields via Gaussian Splatting",
    authors:
      "Yunhao Shui, Fuhao Zhang, Can Gao, Hao Xue, Zhiyin Ma, Gang Xun, Xuesong Li",
    venue: "SPNNA",
    year: 2024,
    href: "http://arxiv.org/abs/2412.19841",
    hrefLabel: "arXiv",
  },
  {
    title: "ECNet: Effective Controllable Text-to-Image Diffusion Models",
    authors:
      "Sicheng Li, Zhixin Lai, Keqiang Sun, Xiaoshi Wu, Yunhao Shui, Feng Qiu, Haoran Xie, Kazunori Miyata, Hongsheng Li",
    venue: "Under Review",
    year: 2024,
  },
] as const;

export const openSource: readonly Repo[] = [
  {
    name: "HPSv3",
    desc: "Wide-spectrum human preference score model for image generation.",
    href: "https://github.com/MizzenAI/HPSv3",
  },
  {
    name: "MoviiGen 1.1",
    desc: "Towards cinematic-quality video generative models.",
    href: "https://github.com/ZulutionAI/MoviiGen1.1",
  },
  {
    name: "RaCig",
    desc: "RAG-based character-consistent story image generation.",
    href: "https://github.com/ZulutionAI/RaCig",
  },
] as const;

export const experiences: readonly Experience[] = [
  {
    org: "Hedra",
    role: "Algorithm Engineer",
    period: "2025.06 – 2025.07",
    points: ["Building large-scale video generation model infrastructure."],
  },
  {
    org: "Zulution AI",
    role: "AIGC Algorithm Engineer",
    period: "2024.06 – 2025.05",
    points: [
      "Advanced algorithms for story-based image generation — narrative coherence and visual quality.",
      "Cinematic-quality video generation models.",
    ],
  },
  {
    org: "ArcSoft",
    role: "Computer Vision Algorithm Engineer",
    period: "2023.12 – 2024.03",
    points: [
      "Preprocessing techniques for generative algorithms — improving output quality and compute efficiency.",
    ],
  },
  {
    org: "Deptrum",
    role: "Computer Vision Algorithm Engineer",
    period: "2022.06 – 2022.09",
    points: [
      "3D facial reconstruction algorithms — accuracy and real-time performance.",
    ],
  },
] as const;

export const education: readonly Education[] = [
  {
    school: "Shanghai Jiao Tong University",
    degree: "M.Eng., Mechanical Engineering",
    period: "2023.09 – 2026.03",
    detail: "Image generative models & 3D flow-field reconstruction",
  },
  {
    school: "Shanghai Jiao Tong University",
    degree: "B.Eng., Mechanical Engineering",
    period: "2019.09 – 2023.09",
  },
] as const;

export const awards: readonly string[] = [
  "National Graduate Mathematical Modeling Competition — National First Prize (Top 1%), Huawei Second Prize (2023)",
  "National College Student Mathematical Modeling Competition — National First Prize (2021)",
  "CODALAB AutoCast Competition — 5th globally (2023)",
  "SJTU University-level Scholarship, Class B (2020) & Class C (2021)",
  "Junzheng Scholar (2021)",
] as const;

export const githubUsername = "xilanhua12138";
