import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Redirect www to non-www
  if (hostname === 'www.stealthtranslations.com') {
    const url = request.nextUrl.clone()
    url.host = 'stealthtranslations.com'
    return NextResponse.redirect(url, 301)
  }
  
  // Redirect Vercel preview URL to production domain
  if (hostname?.includes('vercel.app')) {
    const url = request.nextUrl.clone()
    url.host = 'stealthtranslations.com'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
