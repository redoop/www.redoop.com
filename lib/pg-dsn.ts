// 平台托管 Postgres 的连接串口径 (运行时与迁移共用这一份)。
//
// 托管库走公网端口 + 自签证书, 平台注入的连接串固定 `sslmode=require` —— 按 libpq
// 的定义 require 是「必须加密, 但不校验证书链」, psycopg 照此实现, 自签证书直接
// 就能连。node-postgres 到 8.x 为止把 require 当成 verify-full, 于是同一个连接串
// 在 node 侧必然撞 `self signed certificate`。
//
// node-postgres 自己给了开关: 连接串里带 `uselibpqcompat=true`, require 就恢复
// libpq 语义。这里补的就是这个参数。
//
// 改连接串而不是给 Pool 传 `ssl` 选项: 连接串里的 sslmode 优先级更高, 会把显式
// 传进去的 ssl 覆盖掉 (实测两者同时给仍然报自签证书); 而且 drizzle-kit 这类只吃
// url 的工具也一并受用, 不必每处各配一遍。
//
// 不这么做, 每个应用都会自己去摸索, 而最容易摸到的解法是
// NODE_TLS_REJECT_UNAUTHORIZED=0 —— 那是进程级开关, 连带把应用对外调用的所有
// HTTPS 校验一起关掉, 比这里的按连接豁免糟得多。
//
// 非 require 的模式 (verify-ca / verify-full / disable) 原样返回: 将来若给沙箱
// 投递 CA 证书改用 verify-full, 这里不需要跟着改。
export function pgConnectionString(
  connectionString: string | undefined,
): string | undefined {
  if (!connectionString) return undefined;
  let url: URL;
  try {
    url = new URL(connectionString);
  } catch {
    // 连接串不合法轮不到这里报错: 交给 pg 自己抛, 错误信息比这里编的准。
    return connectionString;
  }
  if (url.searchParams.get("sslmode") !== "require") return connectionString;
  url.searchParams.set("uselibpqcompat", "true");
  return url.toString();
}
