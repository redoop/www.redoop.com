import type { NextConfig } from "next";

// allowedDevOrigins 放行沙箱预览反代域名. Next 15.2.2+ 在 dev 模式对
// _next/* 端点 (含 webpack-hmr WebSocket) 启用 cross-origin 校验, 默认仅
// 允许 localhost; 预览通过子域名反代 3000 端口, origin 非 localhost 会被
// 拒, 表现为页面不 hydrate/卡在初始加载. 详见 vercel/next.js#77253.
// 域名跟沙箱账号走 (e2b / 自建集群各不同), 由平台在创建沙箱时注入
// LUFFY_PREVIEW_ORIGINS (逗号分隔 *.域 通配), 此处只读 env 不硬编码.
const nextConfig: NextConfig = {
  allowedDevOrigins:
    process.env.LUFFY_PREVIEW_ORIGINS?.split(",").filter(Boolean) ?? [],
};

export default nextConfig;
