import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simulamos la verificación de sesión usando una cookie (localStorage no funciona en middleware)
  const authCookie = request.cookies.get('userRole');
  const { pathname } = request.nextUrl;

  // 1. Si no está logueado y trata de entrar a una página interna, va al login
  if (!authCookie && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 2. Si ya está logueado y trata de ir al login, va al inicio
  if (authCookie && pathname === '/login') {
    return NextResponse.redirect(new URL('/brand-dna', request.url));
  }

  return NextResponse.next();
}

// Configuramos en qué rutas debe activarse el middleware
export const config = {
  matcher: ['/brand-dna/:path*', '/creative/:path*', '/governance/:path*', '/'],
};
