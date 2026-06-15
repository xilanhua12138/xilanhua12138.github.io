/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出为纯 HTML/CSS/JS，部署到 GitHub Pages
  output: "export",
  // 静态导出不能用 Next 的图片优化服务
  images: { unoptimized: true },
  // 每个路由导出为 <route>/index.html，对 GitHub Pages 更友好
  trailingSlash: true,
};

export default nextConfig;
