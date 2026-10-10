#
# 单阶段镜像, 简单可靠; 依赖全为纯 JS (pg / drizzle), 无需
# native 编译工具链. 后续 LLM 可按需切多阶段优化体积.

FROM node:20-alpine

WORKDIR /app

# 启用 corepack + pnpm; 用 pnpm 而不是 npm, 跟 create-next-app 生成的 lockfile 对齐.
# pnpm 11+ 要求 Node.js >= 22.13 (用到 node:sqlite 内置模块), 而本镜像是 node:20-alpine;
# 故 pin pnpm@10 — pnpm 10.x 兼容 Node 18+, 行为稳定. 升 Node 基础镜像留待单独评估.
RUN corepack enable && corepack prepare pnpm@10 --activate

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
# 切淘宝 npm registry 加速 (中国网络环境下默认 registry 慢)
RUN pnpm config set registry https://registry.npmmirror.com && \
    pnpm install --no-frozen-lockfile

COPY . .

# NEXT_PUBLIC_INFERENCE_PROXY_URL 在 build 期被 Next.js 嵌入到客户端 bundle.
# compose-runner augment 阶段把这个值塞进 compose.yaml 的 build.args, 再透传
# 到这里. 不声明 ARG 则 docker build 默认丢弃 --build-arg, 导致 prerender
# 调 @inferencesh/sdk 抛 "Either apiKey, getToken, or proxyUrl is required".
ARG NEXT_PUBLIC_INFERENCE_PROXY_URL=""
ENV NEXT_PUBLIC_INFERENCE_PROXY_URL=${NEXT_PUBLIC_INFERENCE_PROXY_URL}

ARG NEXT_PUBLIC_FIRECRAWL_PROXY_URL=""
ENV NEXT_PUBLIC_FIRECRAWL_PROXY_URL=${NEXT_PUBLIC_FIRECRAWL_PROXY_URL}

RUN pnpm run build

# /data 是 SQLite 持久化挂载点 (compose.yaml 命名 volume 挂这里);
# 容器启动时如果 volume 已挂载, 实际目录被 volume 内容覆盖, 这里 mkdir
# 仅作镜像层保底.
RUN mkdir -p /data

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["pnpm", "run", "start"]
