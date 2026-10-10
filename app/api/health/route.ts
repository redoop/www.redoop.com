import { NextResponse } from "next/server";

// 平台健康检查端点; 反代不强制要求, 但保留有助于沙箱预览自检与上线后探活.
export async function GET() {
  return NextResponse.json({ ok: true });
}
