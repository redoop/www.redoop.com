// 平台托管数据库层的 drizzle-kit 配置: 版本化迁移。
// 纪律: schema 改动后执行 `pnpm exec drizzle-kit generate` 产出 drizzle/ 下的
// 版本化 SQL (只读 schema.ts, 不连库); 应用与发布只 **apply** 已生成的迁移
// (发布由平台按 compose 的 luffy.migrate 执行 `drizzle-kit migrate`)。
// 禁止 `drizzle-kit push` 打生产 —— push 是开发期 sync, --force 会静默删列毁数据。
import { defineConfig } from "drizzle-kit";

import { pgConnectionString } from "./lib/pg-dsn";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: pgConnectionString(process.env.DATABASE_URL)!,
  },
});
