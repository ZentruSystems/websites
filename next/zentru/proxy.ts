import { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

const I18nMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  // localePrefix: "always",
  // urlMappingStrategy: 'rewrite'
  // localeDetection: false,
})

export function proxy(request: NextRequest) {
  return I18nMiddleware(request)
}


const withADotSomewhere = ".*\\..*";

export const config = {
  matcher: [
   // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',

    // Match all pathnames within `{/:locale}/products` (not as part of the api)
    '/((?!api)[\\w-]+)?/products',
  ]
}