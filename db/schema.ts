// 应用的全部表结构定义在本文件 (drizzle-orm pg-core)。
// 纪律 (由编译 lint 与发布预检强制):
//   - 只在这里声明表, 业务代码经 lib/db.ts 的 await getDb() 读写;
//   - 改动后两步走, 缺一不可: `pnpm run db:generate` 产出 drizzle/ 版本化迁移
//     并一起提交, 紧接着 `pnpm run db:migrate` 把它应用到开发库。
//     generate 只写文件不碰库 —— 漏掉 migrate, 开发库就与迁移文件脱节,
//     发布时平台比对两库表结构会拦下这次发布 (发布对生产库跑的是同一套迁移;
//     禁止 push);
//   - 禁止手写 CREATE/ALTER SQL 与 IF NOT EXISTS 幂等技巧;
//   - 删表/删列和加表/加列不要放进同一次 generate: 一次里有删有加, 它会停下来问
//     「是不是改名」, 这里没有终端回答不了 (报 Interactive prompts require a TTY)。
//     先删, generate + migrate; 再加, generate + migrate。换掉示例表也照此办;
//   - 破坏性变更 (删列/改类型) 生成的迁移 SQL 自己读一遍再提交 ——
//     migrate 只忠实执行你生成的文件。
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// 示例表: 可直接改造/删除, 保留文件本身与上述纪律
export const appMeta = pgTable("app_meta", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
