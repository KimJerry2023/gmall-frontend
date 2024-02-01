import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n/config";
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales: string[] = i18n.locales as unknown as string[];
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  const locale = getLocale(request);
  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(`${request.nextUrl.origin}/${locale}/sign-in`)
    }
    

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '' ? '/' : pathname}`, request.url)
    );
  } else {
    if (pathname === '/en' || pathname === '/zh-CN') {
      return NextResponse.redirect(`${request.nextUrl.origin}${pathname}/sign-in`)
    }
  }
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};