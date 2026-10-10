import {NextResponse, type NextRequest} from 'next/server';
import {IFRAME_SAFE_COOKIE_OPTS} from '@/lib/iframe-safe-cookie';

type Lang = 'zh' | 'en';
const COOKIE = 'lang';
const YEAR = 60 * 60 * 24 * 365;

/** 浏览器语言: 简体中文走中文站, 其他语言走英文站。 */
function detect(header: string | null): Lang {
  if (!header) return 'zh';
  for (const part of header.split(',')) {
    const tag = (part.split(';')[0] ?? '').trim().toLowerCase();
    if (tag.startsWith('zh')) return 'zh';
    if (tag.startsWith('en')) return 'en';
  }
  return 'en';
}



/**
 * 语言路由: 中文站在根路径, 英文站在 /en 下。
 * 优先级: 显式切换 (?lang=) > 已保存偏好 (cookie) > 浏览器 Accept-Language。
 * 手动切换通过 ?lang= 传入, 中间件写入偏好后 302 到干净地址, 避免链接被参数污染。
 */
export function middleware(request: NextRequest) {
  const {pathname, searchParams} = request.nextUrl;
  const current: Lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
  const explicit = searchParams.get('lang');
  const saved = request.cookies.get(COOKIE)?.value;
  const wanted: Lang =
    explicit === 'zh' || explicit === 'en'
      ? explicit
      : saved === 'zh' || saved === 'en'
        ? (saved as Lang)
        : detect(request.headers.get('accept-language'));

  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const target = wanted === 'en' ? (bare === '/' ? '/en' : `/en${bare}`) : bare;
  const mustRedirect = wanted !== current || explicit !== null;

  if (mustRedirect) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    url.search = '';
    const redirect = NextResponse.redirect(url);
    redirect.cookies.set(COOKIE, wanted, {...IFRAME_SAFE_COOKIE_OPTS, maxAge: YEAR});
    return redirect;
  }

  const response = NextResponse.next();
  if (saved !== wanted) response.cookies.set(COOKIE, wanted, {...IFRAME_SAFE_COOKIE_OPTS, maxAge: YEAR});
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
