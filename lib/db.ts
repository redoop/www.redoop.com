// 数据库连接单例 (平台托管 Postgres · 版本化迁移)。
// 连接串由平台注入 DATABASE_URL — 开发沙箱与发布环境都是真 Postgres, 没有
//   进程内替身。迁移由平台在发布切换前按 manifest 的 migrate 位执行完毕,
//   这里 **绝不** 跑任何 DDL。
// 业务代码只 `getDb()` — 禁止 new Pool / 手写 DDL。
import { drizzle as drizzleNodePg } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "@/db/schema";
import { pgConnectionString } from "./pg-dsn";

type Db = ReturnType<typeof drizzleNodePg<typeof schema>>;

let _db: Db | undefined;

export function getDb(): Db {
  if (_db === undefined) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        "DATABASE_URL 未注入: 请先套用脚手架或调用 database_request",
      );
    }
    _db = drizzleNodePg(
      new Pool({ connectionString: pgConnectionString(connectionString) }),
      { schema },
    );
  }
  return _db;
}
