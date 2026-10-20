import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const USER = process.env.SITE_BASIC_AUTH_USER ?? 'gabrielle';

function unauthorized() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Portfolio", charset="UTF-8"',
    },
  });
}

export function proxy(request: NextRequest) {
  const password = process.env.SITE_BASIC_AUTH_PASSWORD;

  if (!password) {
    return NextResponse.next();
  }

  const header = request.headers.get('authorization');

  if (header?.startsWith('Basic ')) {
    const decoded = Buffer.from(header.slice('Basic '.length), 'base64').toString('utf-8');
    const separator = decoded.indexOf(':');
    const user = decoded.slice(0, separator);
    const pass = decoded.slice(separator + 1);

    if (user === USER && pass === password) {
      return NextResponse.next();
    }
  }

  return unauthorized();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
